import os
import shutil
import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

# Configuration
BASE_URL = 'http://localhost:5000'
OUTPUT_DIR = 'build'
ROUTES = ['/']  # Only the home route now

def ensure_dir(directory):
    """Ensure directory exists, create if it doesn't"""
    if not os.path.exists(directory):
        os.makedirs(directory)

def copy_static_files():
    """Copy static files to build directory"""
    if os.path.exists('static'):
        if os.path.exists(os.path.join(OUTPUT_DIR, 'static')):
            shutil.rmtree(os.path.join(OUTPUT_DIR, 'static'))
        shutil.copytree('static', os.path.join(OUTPUT_DIR, 'static'))

def fix_urls(html_content):
    """Fix URLs in HTML content to work in static site"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Fix internal URLs
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        if href.startswith('/') and not href.startswith('//'):
            # Internal link
            if href == '/':
                a_tag['href'] = 'index.html'
            else:
                parts = href.lstrip('/').split('/')
                path = '/'.join(parts)
                a_tag['href'] = f"{path}/index.html"
    
    # Fix static URLs
    for tag in soup.find_all(['img', 'script', 'link'], src=True):
        if tag['src'].startswith('/static/'):
            tag['src'] = tag['src'].replace('/static/', 'static/')
    
    for link_tag in soup.find_all('link', href=True):
        if link_tag['href'].startswith('/static/'):
            link_tag['href'] = link_tag['href'].replace('/static/', 'static/')
    
    return str(soup)

def save_page(url, output_path):
    """Fetch a page and save it to the output directory"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        # Create directory if needed
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        # Fix URLs in HTML content
        fixed_html = fix_urls(response.text)
        
        # Save the HTML content
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(fixed_html)
        
        print(f"Saved {url} to {output_path}")
        return fixed_html
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

def build_site():
    """Build the static site"""
    # Ensure output directory exists
    ensure_dir(OUTPUT_DIR)
    
    # Copy static files
    copy_static_files()
    
    # Process each route
    for route in ROUTES:
        url = urljoin(BASE_URL, route)
        
        # Determine output path
        if route == '/':
            output_path = os.path.join(OUTPUT_DIR, 'index.html')
        else:
            # Remove leading slash and create directory structure
            path_parts = route.lstrip('/').split('/')
            
            # For simple routes like /about, create about/index.html
            if len(path_parts) == 1:
                dir_path = os.path.join(OUTPUT_DIR, path_parts[0])
                ensure_dir(dir_path)
                output_path = os.path.join(dir_path, 'index.html')
            else:
                # For nested routes, maintain directory structure
                dir_path = os.path.join(OUTPUT_DIR, *path_parts[:-1])
                ensure_dir(dir_path)
                if '.' in path_parts[-1]:  # Has file extension
                    output_path = os.path.join(OUTPUT_DIR, *path_parts)
                else:  # No file extension, treat as directory
                    dir_path = os.path.join(OUTPUT_DIR, *path_parts)
                    ensure_dir(dir_path)
                    output_path = os.path.join(dir_path, 'index.html')
        
        # Save the page
        save_page(url, output_path)

if __name__ == '__main__':
    print("Building static site...")
    build_site()
    print("Static site built successfully in the 'build' directory.") 