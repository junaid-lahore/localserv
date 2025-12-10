import subprocess
import os
import shutil

# The routes to prerender
ROUTES = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-conditions',
]

# The path to the ui directory
UI_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', 'ui'))
# The path to the prerenderer script
PRERENDERER_SCRIPT = os.path.join(UI_DIR, 'src', 'utils', 'prerenderer.tsx')
# The path to the vite project
VITE_PROJECT_PATH = UI_DIR
# The path to the dist directory
DIST_DIR = os.path.join(VITE_PROJECT_PATH, 'dist')
# The path to the template index.html
TEMPLATE_PATH = os.path.join(DIST_DIR, 'index.html')


def run():
    """
    This function prerenders the specified routes and saves them as static HTML files.
    """
    # First, build the vite project to generate the dist directory and the template index.html
    subprocess.run(['npm', 'run', 'build'], cwd=VITE_PROJECT_PATH, check=True)

    # For each route, render the component and inject it into the template
    for route in ROUTES:
        # Determine the output path
        if route == '/':
            output_path = os.path.join(DIST_DIR, 'index.html')
        else:
            output_dir = os.path.join(DIST_DIR, route.lstrip('/'))
            os.makedirs(output_dir, exist_ok=True)
            output_path = os.path.join(output_dir, 'index.html')

        # Prerender the component to HTML using tsx and the prerenderer script
        subprocess.run(
            ['npx', 'tsx', PRERENDERER_SCRIPT, route, output_path, TEMPLATE_PATH],
            cwd=VITE_PROJECT_PATH,
            check=True
        )

    print("Prerendering complete.")

if __name__ == '__main__':
    run()
