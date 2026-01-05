# Portfolio Website Project Progress

**Project:** Osinachi Okpara's Portfolio Website
**Branch:** `gallery-implementation`
**Last Updated:** January 5, 2025

---

## 📊 Project Overview

A minimal, elegant portfolio website for a Developer Advocate and Community Architect built with vanilla HTML/CSS/JavaScript. Features six content sections, dark mode, custom cursor, and an integrated gallery system.

**Tech Stack:**
- HTML5
- Vanilla JavaScript (no frameworks)
- Geist Mono font (monospace typography)
- AWS S3 for image hosting
- Chrome DevTools MCP for browser automation

---

## ✅ Completed Features

### 1. Core Portfolio Structure

**Single-file architecture** (`index.html` - ~1,160 lines):
- Two-column layout: Fixed left sidebar + scrollable right content
- Smooth section transitions (0.3s fade in/out)
- Dark mode toggle (0.8s smooth color transitions)
- Custom trailing cursor (12px → 30px on hover)
- Minimal scrollbar (4px, theme-colored)

**Sections implemented:**
1. **About** - Professional bio with description
2. **Projects** - 5 projects with GitHub stats
3. **Open Source** - 4 contributions to YC startups and AWS
4. **Writing** - 11 articles with tags
5. **Speaking & Hosting** - 27 events (2024-2025) with external links
6. **Experience** - 5 professional roles
7. **Gallery** - Bento grid layout with carousel integration

---

### 2. SEO Implementation

**Complete meta tags added:**
```html
<!-- Basic SEO -->
<meta name="description" content="...">
<meta name="author" content="Osinachi Okpara">
<meta name="keywords" content="Osinachi Okpara, Developer Advocate, Community Architect, AWS, DevOps, AI">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://osinachi.dev">

<!-- Open Graph / Facebook -->
<meta property="og:title" content="Osinachi Okpara — Developer Advocate & Community Architect">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="https://osinachi.dev/social-preview.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://osinachi.dev">
<meta property="og:site_name" content="Osinachi Okpara">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@sin4ch">
<meta name="twitter:creator" content="@sin4ch">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://osinachi.dev/social-preview.png">
```

**Files renamed:**
- `output_3.png` → `profile-picture.png` (favicon & profile photo)
- `fd86025f-7219-4b62-a02e-c0392dcd17af.png` → `social-preview.png`

**Social links:**
- Email: `mailto:okparaosi17@gmail.com`
- LinkedIn: `https://linkedin.com/in/osinachiokpara`
- GitHub: `https://github.com/sin4ch`
- X/Twitter: `https://x.com/sin4ch`

---

### 3. Speaking Events Link Scraping

**Completed:** Scraped Notion speaking engagements page to extract external links.

**Method:** Chrome DevTools MCP to navigate Notion page and click each "Hover/Click for more info →" button to capture the URL it navigates to.

**Results:** Captured 20 external links from Notion page:

| # | Event | Platform | URL |
|---|--------|----------|------|
| 1 | Arthurite x AWS GenAI 2025 | X | `https://x.com/sin4ch/status/1958408726601453857` |
| 2 | From Local to Global | X | `https://x.com/Geektutor/status/1953746378267509132` |
| 3 | Building an Impactful Tech Career | X | `https://x.com/sin4ch/status/1941218347275673925` |
| 4 | Remote DevOps Work | X | `https://x.com/thedevopsdojo/status/1935989233115648313` |
| 5 | NexaScale's 2nd Anniversary | X | `https://x.com/NexaScaleHQ/status/1933898503735885951` |
| 6 | Ultimate Beginner Guide to AWS CCP | YouTube | `https://www.youtube.com/live/h-9Ph-J7Bh8` |
| 7 | Breaking into Tech (AMA) | X | `https://x.com/sin4ch/status/1895475604759449713` |
| 8 | Getting Started in Cloud | X | `https://x.com/sin4ch/status/1883135211556475122` |
| 9 | Guide to AWS Community Builder's Program | X | `https://x.com/sin4ch/status/1877432769967423878` |
| 10 | Infrastructure is Future of AI | X | `https://x.com/sin4ch/status/1865479789089349976` |
| 11 | How to Build a Personal Brand | X | `https://x.com/sin4ch/status/1862059187137573097` |
| 12 | Navigating Your Career | X | `https://x.com/sin4ch/status/1856038008257986582` |
| 13 | Young and Thriving Youth Conference | LinkedIn | `https://www.linkedin.com/posts/osinachiokpara_october-was-amazing-who-am-i-kidding-activity-7257994792989560832-wO2U` |
| 14 | Maximize Technology | LinkedIn | Same as #13 |
| 15 | Human Side of Cloud Innovation | X | `https://x.com/awssecwestafri/status/1837146709333336118` |
| 16 | Leveraging Global Opportunities | X | `https://x.com/sin4ch/status/1830628464602251310` |
| 17 | What is Cloud? | X | `https://x.com/thecloudcrowdng/status/1805239437082697827` |
| 18 | Future of Technology (AMA) | LinkedIn | `https://www.linkedin.com/posts/osinachiokpara_bfff-activity-7197109513995374592-GkcX` |
| 19 | Upskilling: The New Currency | LinkedIn | `https://www.linkedin.com/posts/osinachiokpara_navigating-into-tech-doesnt-have-to-be-hard-activity-7171934520479236096--EWi` |
| 20 | Social Media for Career Growth | LinkedIn | `https://www.linkedin.com/posts/osinachiokpara_yesterday-was-probably-up-there-among-the-activity-7156958483416784896-TIks` |

**Commit:** `e83d1e8` - "Add external links to speaking events from Notion scrape"

---

## 🎨 Gallery Implementation

### Current Goal

Implement a **GALLERY section** with:
1. **Bento grid layout** - Mixed span sizes (1x1, 2x1, 1x2, 2x2)
2. **Carousel in ABOUT section** - Auto-scrolling images, pause on hover, slow movement
3. **S3-hosted images** - Browser-cached, optimized delivery
4. **Google Photos integration** - Images from user's Google Photos album

---

### Approaches Explored

#### Approach A: Arjun Gandhi's Lambda Proxy
**Reference:** https://www.arjungandhi.com/projects/internets/google-photos-hurts-me/

**Method:**
- Lambda function scrapes Google Photos HTML
- Extracts image URLs using regex patterns
- Stores in S3 bucket
- Frontend fetches from S3 via Lambda

**Infrastructure created:**
- `lambda/index.js` - S3 handler with `/list`, `/check`, `/` endpoints
- `lambda/package.json` - AWS SDK dependencies
- `lambda/serverless.yml` - Serverless framework deployment config

**Status:** ✅ Code written, ⚠️ Not deployed (user chose manual approach)

**Issues with this approach:**
- Complex to maintain (scraping fragile if Google changes HTML)
- Requires weekly Lambda function execution
- User preferred simpler manual workflow

---

#### Approach B: Cloudinary Auto-Sync
**Research findings:**
- Cloudinary no longer offers Google Photos auto-upload feature (as of January 2025)
- Documentation URL returns 404
- Only Google-related features are AI transcription and moderation add-ons

**Why not viable:**
- Feature removed or enterprise-only
- Cannot be verified from current Cloudinary documentation

---

#### Approach C: Manual S3 Upload (CHOSEN) ✅

**Why chosen:**
- Complete control over images
- No external dependencies
- Simple, reliable workflow
- S3 bucket already created
- Free tier S3 storage (first 12 months free)

**Workflow:**
```
Google Photos Album (https://photos.app.goo.gl/ChqSmqv5uHGL3NR4A)
    ↓ (Manual Download)
Download images to gallery/ folder (img-001.jpg, img-002.jpg, etc.)
    ↓
Upload to S3 bucket: osinachi-portfolio-gallery
    ↓
Update gallery.json with S3 URLs and bento span configuration
    ↓
index.html fetches gallery.json and renders bento grid + carousel
```

**S3 Bucket Details:**
- **Name:** `osinachi-portfolio-gallery`
- **Region:** `us-east-1`
- **Website URL:** `http://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com`
- **Status:** Created, website hosting enabled

### Gallery Code Implementation

#### HTML Structure Added

**Navigation item:**
```html
<button class="nav-item" data-target="gallery">Gallery</button>
```

**ABOUT section carousel:**
```html
<div class="about-carousel" id="about-carousel"></div>
```

**GALLERY section:**
```html
<section id="gallery">
  <div class="section-description">Personal gallery.</div>
  <Files for bento grid with mixed span sizes and responsive layout:
    - Span-2x2: Large featured images
    - Span-2x1: Wide images
    - Span-1x2: Tall images
    - Span-1x1: Normal square images

**Key features:**
- Loading states with visual feedback
- Opens full-size image in new tab on click
- Uses `loading="lazy"` for performance
- Responsive breakpoints for mobile

#### JavaScript Implementation

**Gallery loader functions:**

```javascript
const GALLERY_JSON_URL = 'https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/gallery.json';

async function loadAboutCarousel() {
  const aboutCarousel = document.getElementById('about-carousel');
  if (!aboutCarousel) return;
  
  aboutCarousel.innerHTML = '<div class="loading">Loading photos...</div>';
  
  try {
    const response = await fetch(GALLERY_JSON_URL);
    const data = await response.json();
    
    if (data.images && data.images.length > 0) {
      const track = document.createElement('div');
      track.className = 'about-carousel-track';
          
      data.images.forEach(img => {
        const imgEl = document.createElement('img');
        imgEl.src = img.url;
        imgEl.alt = img.title || 'Gallery photo';
        imgEl.loading = 'lazy';
        track.appendChild(imgEl);
      });
      
      aboutCarousel.innerHTML = '';
      aboutCarousel.appendChild(track);
    } else {
      aboutCarousel.innerHTML = '<div class="error">No photos in gallery</div>';
    }
  } catch (error) {
    aboutCarousel.innerHTML = '<div class="error">Failed to load photos</div>';
  }
}

async function loadGalleryGrid() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = '<div class="loading">Loading gallery...</div>';
  
  try {
    const response = await fetch(GALLERY_JSON_URL);
    const data = await response.json();
    
    if (data.images && data.images.length > 0) {
      data.images.forEach((img, index) => {
        const spanClass = img.size && img.size.span ? `span-${img.size.span}` : '';
            
        const itemEl = document.createElement('div');
        itemEl.className = `gallery-item ${spanClass}`;
        itemEl.innerHTML = `<img src="${img.url}" alt="${img.title || 'Gallery photo'}" loading="lazy">`;
            
        itemEl.addEventListener('click', () => {
          window.open(img.url, '_blank');
        });
            
        galleryGrid.appendChild(itemEl);
      });
    } else {
      galleryGrid.innerHTML = '<div class="error">No photos in gallery</div>';
    }
  } catch (error) {
    galleryGrid.innerHTML = '<div class="error">Failed to load gallery</div>';
  }
}
```

#### Gallery JSON Structure

```json
{
  "album": "Google Photos Gallery",
  "updated": "2025-01-05T00:00:00Z",
  "verificationDate": "2025-01-05T00:00:00Z",
  "images": [
    {
      "id": "001",
      "filename": "img-001.jpg",
      "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-001.jpg",
      "title": "Photo title",
      "caption": "Optional description",
      "size": { "span": "2x2" }
    },
    {
      "id": "002",
      "filename": "img-002.jpg",
      "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-002.jpg",
      "title": "Photo title",
      "caption": "Optional description",
      "size": { "span": "1x1" }
    },
    {
      "id": "003",
      "filename": "img-003.jpg",
      "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-003.jpg",
      "title": "Photo title",
      "caption": "Optional description"
    }
  ]
}
```

**Bento span options:**
- `"span": "1x1"` - Normal 1x1 cell
- `"span": "2x1"` - Wide 2x1 cell
- `"span": "1x2"` - Tall 1x2 cell
- `"span": "2x2"` - Large 2x2 cell

---

## 🚀 Current Status

### What's Complete & Working
- ✅ Full portfolio website (6 sections, dark mode, cursor)
- ✅ SEO meta tags (Open Graph, Twitter, canonical)
- ✅ All 27 speaking events with external links
- ✅ Gallery HTML/CSS/JS implementation
- ✅ Gallery navigation item added
- ✅ About section carousel container added
- ✅ Bento grid layout styles
- ✅ S3 bucket created and configured
- ✅ Lambda infrastructure code (if needed later)
- ✅ Python scraper files deleted (not needed)

### What's Awaiting User Action
- ⏳ Download images from Google Photos album (https://photos.app.goo.gl/ChqSmqv5uHGL3NR4A)
- ⏳ Save images to `gallery/` folder as `img-001.jpg`, `img-002.jpg`, etc.
- ⏳ Upload images to S3 bucket
- ⏳ Update `gallery/gallery.json` with S3 URLs and bento span configurations
- ⏳ Upload `gallery/gallery.json` to S3
- ⏳ Test gallery functionality in browser

### Known Technical Constraints
- **AWS CLI version:** v2.27 (2015) - Too old for modern S3 commands
  - Could not use `put-bucket-policy`, `put-public-access-block`, etc.
  - Simplified S3 setup script to basic `s3 mb` and `s3api put-bucket-website`
- S3 bucket created successfully, but website hosting may need manual configuration

- S3 bucket: `osinachi-portfolio-gallery`
  - Region: `us-east-1`
  - Website URL: `http://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com`

## 📋 File Structure

```
portfolio/v2/
├── index.html                    # ✅ Complete portfolio with gallery (1,160+ lines)
├── profile-picture.png             # ✅ Profile photo + favicon (renamed from output_3.png)
├── social-preview.png             # ✅ Social media preview (1200x630)
├── gallery/
│   ├── gallery.json              # 📝 Template - needs population with real images
│   ├── .gitkeep                  # ✅ Keeps folder in git
│   └── [test images]             # 📁 Test images (can be deleted/replaced)
│       ├── img-001.jpg
│       ├── img-002.jpg
│       └── img-003.jpg
├── lambda/                        # ✅ Infrastructure (kept for future use)
│   ├── index.js                  # S3 handler
│   ├── index.handler.json         # Lambda config
│   ├── package.json               # Dependencies
│   └── serverless.yml           # Deployment config
├── scripts/                       # ✅ Kept (S3 setup script)
│   └── setup-s3-bucket.sh      # ✅ S3 bucket setup script
├── .gitignore                     # ✅ Configured to ignore .venv, debug files
└── PROGRESS.md                    # 📝 This document
```

**Files deleted:**
- `main.py` - Python scraper (no longer needed)
- `scraper.py` - Duplicate scraper file (no longer needed)
- `pyproject.toml` - Python project config (no longer needed)
- `*.zip:Zone.Identifier` - Windows zone markers (no longer needed)

**Commits made:**
1. `e83d1e8` - "Add external links to speaking events from Notion scrape"
2. `2a8394d` - "Increase cursor follower hover size to 30x30"
3. `2c55a35` - "Add SEO meta tags and rename images"
4. `5696c95` - "Add S3 gallery infrastructure with Lambda, bento grid, and carousel"
5. `6df7166` - "Add test gallery with sample images for local testing"

---

## 🎯 Next Steps

### Immediate Tasks (For Current Session)

1. **Download images from Google Photos:**
   - Chrome is already open to your Google Photos album
   - Right-click each photo to "Save Image As..."
   - Save to `gallery/` folder with sequential names:
     - `img-001.jpg`
     - `img-002.jpg`
     - `img-003.jpg`
     - ... (continue for all images)

2. **Upload to S3:**
   ```bash
   aws s3 cp gallery/img-001.jpg s3://osinachi-portfolio-gallery/gallery/img-001.jpg --cache-control "public, max-age=31536000"
   aws s3 cp gallery/img-002.jpg s3://osinachi-portfolio-gallery/gallery/img-002.jpg --cache-control "public, max-age=31536000"
   aws s3 cp gallery/img-003.jpg s3://osinachi-portfolio-gallery/gallery/img-003.jpg --cache-control "public, max-age=31536000"
   ```

3. **Update gallery.json:**
   ```json
   {
     "album": "Google Photos Gallery",
     "updated": "2025-01-05T00:00:00Z",
     "verificationDate": "2025-01-05T00:00:00Z",
     "images": [
       {
         "id": "001",
         "filename": "img-001.jpg",
         "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-001.jpg",
         "title": "Photo title",
         "caption": "Optional description",
         "size": { "span": "2x2" }
       },
       {
         "id": "002",
         "filename": "img-002.jpg",
         "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-002.jpg",
         "title": "Photo title",
         "caption": "Optional description",
         "size": { "span": "1x1" }
       },
       {
         "id": "003",
         "filename": "img-003.jpg",
         "url": "https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/img-003.jpg",
         "title": "Photo title",
         "caption": "Optional description"
       }
     ]
   }
   ```

4. **Upload gallery.json to S3:**
   ```bash
   aws s3 cp gallery/gallery.json s3://osinachi-portfolio-gallery/gallery.json --cache-control "proxy-revalidate"
   ```

5. **Test gallery functionality:**
   - Open `index.html` in browser
   - Navigate to GALLERY section (should show bento grid)
   - Navigate to ABOUT section (should show carousel)
   - Verify images load correctly
   - Verify carousel auto-scrolls slowly (60s cycle)
   - Verify carousel pauses on hover

### Future Enhancements

- Add lightbox overlay for full-size image viewing (currently opens in new tab)
- Implement image upload form for adding new photos
- Add gallery search/filter functionality
- Consider Cloudinary or other CDN if S3 costs become significant
- Implement mobile responsiveness for carousel (current design is desktop-first)

---

## 🔧 Quick Reference

### Chrome DevTools MCP Commands Used

```bash
# Start Chrome with remote debugging
chromium --remote-debugging-port=9222

# Navigate to page
chrome-devtools_navigate_page "https://your-url.com"

# Take snapshot
chrome-devtools_take_snapshot

# Evaluate JavaScript
chrome-devtools_evaluate_script "() => { ... }"

# List pages
chrome-devtools_list_pages

# Close page
chrome-devtools_close_page pageIdx 1
```

### AWS S3 Commands Used

```bash
# Create bucket
aws s3 mb "s3://osinachi-portfolio-gallery" --region us-east-1

# Enable website hosting
aws s3api put-bucket-website \
  --bucket osinachi-portfolio-gallery \
  --index-document index.html \
  --error-document error.html

# Upload file
aws s3 cp local.jpg s3://bucket-name/path/file.jpg \
  --cache-control "public, max-age=31536000"

# List bucket contents
aws s3 ls s3://bucket-name/path/

# Copy from one S3 to another
aws s3 cp s3://source-bucket/file.jpg s3://dest-bucket/file.jpg
```

### Git Commands Used

```bash
# Create new branch
git checkout -b gallery-implementation

# Stage all changes
git add -A

# Commit with message
git commit -m "Description of changes"

# Check status
git status

# View log
git log --oneline -5
```

---

## 📞 Notes for Continuation

1. **Gallery JSON URL format:**
   - Current expectation: `https://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/gallery/gallery.json`
   - This S3 URL format is consistent with website hosting configuration

2. **Bento span pattern:**
   - First image or featured image: `"size": { "span": "2x2" }`
   - Alternating pattern of 2x1, 1x1, 1x2 cells
   - Last image or important image: Can use 2x2 for emphasis

3. **Carousel visibility:**
   - Only appears in ABOUT section when ABOUT is active
   - Automatically cleared when navigating away from ABOUT
   - Pauses on hover, smooth 60s animation

4. **S3 Cache headers:**
   - Images: `--cache-control "public, max-age=31536000"` (1 year)
   - gallery.json: `--cache-control "proxy-revalidate"` (5 minutes)

5. **Important technical details:**
   - All gallery images open in new tab on click (current implementation)
   - No lightbox/overlay modal implemented yet
   - AWS CLI v2.27 (2015) is outdated - simplified S3 setup scripts

---

**Last commit:** `6df7166` - "Add test gallery with sample images for local testing"

**Branch:** `gallery-implementation`

**Next action required:** User downloads images from Google Photos album and uploads to S3, then updates gallery.json
