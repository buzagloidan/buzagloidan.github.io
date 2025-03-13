from flask_frozen import Freezer
from app import app
import os
import sys

# Configure the output path for frozen app
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_RELATIVE_URLS'] = True

# Monkey patch for newer Flask versions
import werkzeug
if not hasattr(werkzeug.routing.Map, 'charset'):
    werkzeug.routing.Map.charset = 'utf-8'

freezer = Freezer(app)

if __name__ == '__main__':
    # Create build directory if it doesn't exist
    if not os.path.exists('build'):
        os.makedirs('build')
    
    # Freeze the app
    freezer.freeze() 