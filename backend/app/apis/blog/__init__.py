import databutton as db
import uuid
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from datetime import datetime
import re
import json

router = APIRouter()

BLOG_POSTS_KEY = "blog_posts_index"

def slugify(text: str) -> str:
    """Convert text to a URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\\s-]', '', text)
    text = re.sub(r'[\\s-]+', '-', text).strip('-')
    return text

class BlogPostBase(BaseModel):
    title: str
    content: str
    author: str

class BlogPostCreate(BlogPostBase):
    pass

class BlogPost(BlogPostBase):
    id: str
    created_at: datetime

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

# In-memory cache for blog posts index
blog_posts_index: list[dict] = []

def get_blog_posts_index() -> list[dict]:
    """Retrieves the blog posts index from storage, caching it in memory."""
    global blog_posts_index
    if not blog_posts_index:
        try:
            blog_posts_index = db.storage.json.get(BLOG_POSTS_KEY)
        except FileNotFoundError:
            blog_posts_index = []
    return blog_posts_index

def save_blog_posts_index(index: list[dict]):
    """Saves the blog posts index to storage and updates the cache."""
    global blog_posts_index
    db.storage.json.put(BLOG_POSTS_KEY, index)
    blog_posts_index = index

@router.post("/blog", response_model=BlogPost, status_code=201)
def create_blog_post(post: BlogPostCreate) -> BlogPost:
    """
    Create a new blog post.
    A unique ID is generated from the title.
    The post is saved to db.storage.json.
    """
    post_id = f"{slugify(post.title)}-{uuid.uuid4().hex[:6]}"
    
    new_post = BlogPost(
        id=post_id,
        created_at=datetime.utcnow(),
        **post.dict()
    )
    
    # Save the full blog post
    db.storage.json.put(key=f"blog_post_{post_id}", value=new_post.model_dump_json())
    
    # Update the index
    index = get_blog_posts_index()
    index.append({"id": new_post.id, "title": new_post.title, "created_at": new_post.created_at.isoformat()})
    save_blog_posts_index(index)
    
    return new_post

@router.get("/blog", response_model=list[BlogPost])
def list_blog_posts() -> list[BlogPost]:
    """
    List all blog posts.
    Retrieves the index and then loads each post.
    """
    index = get_blog_posts_index()
    posts = []
    for item in index:
        try:
            post_data_str = db.storage.json.get(f"blog_post_{item['id']}")
            post_data = json.loads(post_data_str)
            posts.append(BlogPost(**post_data))
        except FileNotFoundError:
            # Handle cases where index is out of sync with actual storage
            print(f"Warning: Blog post with id {item['id']} found in index but not in storage.")
            continue
    
    # Sort by creation date, newest first
    posts.sort(key=lambda p: p.created_at, reverse=True)
    return posts

@router.get("/blog/{post_id}", response_model=BlogPost)
def get_blog_post(post_id: str) -> BlogPost:
    """
    Retrieve a single blog post by its ID.
    """
    try:
        post_data_str = db.storage.json.get(f"blog_post_{post_id}")
        post_data = json.loads(post_data_str)
        return BlogPost(**post_data)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Blog post not found") from None
