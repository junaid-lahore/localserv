import React from "react";
import { BlogLayout } from "components/BlogLayout";
import { blogData } from "utils/blogData";
import { Helmet } from "react-helmet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CalendarDays,
  UserCircle,
  Clock,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatIsLocalServ: React.FC = () => {
  const post = blogData.find((p) => p.slug === "what-is-localserv");

  if (!post) {
    return <div>Blog post not found.</div>;
  }
  
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.localserv.ai${post.path}`} />
      </Helmet>
      <BlogLayout post={post}>
        <div className="flex flex-wrap items-center justify-between mb-8 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src={post.author.imageUrl} alt={post.author.name} className="w-6 h-6 rounded-full" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="w-5 h-5 text-blue-500" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <Share2 className="w-4 h-4 mr-2"/>
              Share
            </Button>
          </div>
        </div>
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <article className="prose prose-lg max-w-none dark:prose-invert">
          {post.content}
        </article>
      </BlogLayout>
    </>
  );
};

export default WhatIsLocalServ;
