from fastapi import APIRouter, Response
import os

spa_router = APIRouter()

# The path to the dist directory
DIST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..', 'ui', 'dist'))


@spa_router.get("/{path:path}")
def serve_static_html(path: str):
    """
    Serves the pre-rendered static HTML files.
    """
    # Determine the file path
    filepath = os.path.join(DIST_DIR, 'index.html') # Default to root index.html

    if path == "":
        filepath = os.path.join(DIST_DIR, 'index.html')
    else:
        # Check for a direct file match first (e.g. /assets/image.png)
        potential_file_path = os.path.join(DIST_DIR, path)
        if os.path.isfile(potential_file_path):
            filepath = potential_file_path
        else:
            # Check for a prerendered directory with an index.html
            potential_dir_path = os.path.join(DIST_DIR, path, 'index.html')
            if os.path.exists(potential_dir_path):
                filepath = potential_dir_path

    if not os.path.exists(filepath):
        # Fallback for client-side routing
        filepath = os.path.join(DIST_DIR, 'index.html')

    media_type = "text/html"
    if filepath.endswith(".js"):
        media_type = "application/javascript"
    elif filepath.endswith(".css"):
        media_type = "text/css"
    elif filepath.endswith(".png"):
        media_type = "image/png"
    elif filepath.endswith(".jpg") or filepath.endswith(".jpeg"):
        media_type = "image/jpeg"
    elif filepath.endswith(".svg"):
        media_type = "image/svg+xml"


    # Read the file and return it as a response
    try:
        with open(filepath, 'rb') as f:
            content = f.read()
        return Response(content=content, media_type=media_type)
    except FileNotFoundError:
        # Final fallback if even the root index.html is missing
        return Response(content="Not Found", status_code=404)
