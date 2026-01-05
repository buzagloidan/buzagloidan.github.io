# Gallery Implementation Setup

## 🎯 Architecture

```
Google Photos (manual download)
        ↓
S3 Bucket (osinachi-portfolio-gallery)
        ↓
gallery.json (metadata + image URLs)
        ↓
Frontend (index.html)
    - Carousel in ABOUT section (slow auto-scroll, pause on hover)
    - GALLERY section (bento grid with mixed layout)
```

---

## ✅ What's Been Done

- [x] Created `lambda/` folder with S3 handler (`index.js`, `package.json`, `serverless.yml`)
- [x] Created `scripts/` folder with `setup-s3-bucket.sh`
- [x] Created `gallery/` folder with `gallery.json` template
- [x] Added Gallery navigation item to sidebar
- [x] Added carousel container to ABOUT section
- [x] Added GALLERY section to main content
- [x] Implemented CSS for carousel (60s slow scroll, pause on hover)
- [x] Implemented CSS for bento grid (mixed span sizes)
- [x] Added JavaScript to fetch from S3 and render gallery
- [x] Committed all changes

---

## ❓ What Still Needs To Be Done

### 1. S3 Bucket Setup
- [ ] Run `./scripts/setup-s3-bucket.sh` to create S3 bucket
- [ ] Verify bucket was created successfully
- [ ] Note the bucket URL (will be shown by script)

### 2. Download & Upload Images
- [ ] Download all images from your Google Photos album
- [ ] Save to `gallery/` folder with sequential names:
  - `img-001.jpg`
  - `img-002.jpg`
  - `img-003.jpg`
  - ... (continue as needed)
- [ ] Upload images to S3:
  ```bash
  aws s3 cp img-001.jpg s3://osinachi-portfolio-gallery/gallery/img-001.jpg
  aws s3 cp img-002.jpg s3://osinachi-portfolio-gallery/gallery/img-002.jpg
  # ... continue for all images
  ```

### 3. Update gallery.json
- [ ] Edit `gallery/gallery.json` to include all images
- [ ] Add metadata for each image:
  ```json
  {
    "id": "001",
    "filename": "img-001.jpg",
    "title": "Optional title",
    "caption": "Optional description",
    "size": { "span": "2x2" }
  }
  ```
- [ ] Update `gallery.json` on S3:
  ```bash
  aws s3 cp gallery/gallery.json s3://osinachi-portfolio-gallery/gallery.json
  ```

### 4. Bento Layout Configuration
- [ ] Decide which images should be span-2x2 (large)
- [ ] Decide which should be span-1x2 (wide)
- [ ] The rest will be span-1x1 (normal)
- [ ] Update `size.span` values in gallery.json accordingly

### 5. Deploy Lambda Function
- [ ] Run `cd lambda && npm install`
- [ ] Run `serverless deploy` to deploy Lambda function
- [ ] Note the Lambda API URL shown in output
- [ ] Update `index.html` with your Lambda URL:
  ```javascript
  const GALLERY_JSON_URL = 'YOUR_LAMBDA_API_URL/gallery';
  ```

### 6. Test Gallery
- [ ] Open portfolio in browser
- [ ] Navigate to GALLERY section
- [ ] Verify images load correctly
- [ ] Verify carousel works in ABOUT section (slow scroll, pause on hover)
- [ ] Verify responsive behavior on mobile

---

## 📂 File Structure After Setup

```
portfolio/v2/
├── index.html                    # Main portfolio (updated with gallery)
├── profile-picture.png             # Profile photo (favicon)
├── social-preview.png             # Social preview image
├── gallery/
│   ├── .gitkeep               # Keeps folder in git
│   └── gallery.json            # Gallery metadata
├── lambda/
│   ├── index.js                 # Lambda handler
│   ├── package.json              # Dependencies
│   └── serverless.yml           # Deployment config
└── scripts/
    └── setup-s3-bucket.sh      # S3 setup script
```

---

## 🔧 Lambda Function Endpoints

Once deployed, your Lambda will provide these endpoints:

- `GET /list` - List all images in gallery
- `GET /check` - Check if gallery needs updates (weekly)
- `GET /` - Get gallery configuration with S3 URLs

---

## 💡 Notes

### Why It Won't Show Yet
1. S3 bucket doesn't exist (need to run setup script)
2. `gallery.json` is empty (no images added yet)
3. Images not in `gallery/` folder (need to download from Google Photos)
4. Lambda function not deployed (need to run `serverless deploy`)

### Performance Characteristics
- **Carousel load:** ~50-150ms (fetch from S3 CDN)
- **Gallery load:** ~50-150ms (fetch from S3 CDN)
- **Browser caching:** After first visit, ~0ms (instant)
- **Carousel speed:** 60s full cycle, pauses on hover
- **Image display:** Thumbnails (CSS-sized) initially, browser caches full-size

### S3 Bucket URL (After Setup)
```
http://osinachi-portfolio-gallery.s3-website-us-east-1.amazonaws.com/
```

---

## 📋 Workflow Checklist

**Before Gallery Shows Images:**
- [ ] Run S3 setup script
- [ ] Download images from Google Photos
- [ ] Upload images to gallery/ folder or S3
- [ ] Update gallery.json with image metadata
- [ ] Deploy Lambda function
- [ ] Update index.html with Lambda URL
- [ ] Test in browser

**After Gallery is Working:**
- [ ] Configure weekly Lambda check for updates
- [ ] Set up manual trigger for gallery updates when adding photos
- [ ] Verify S3 costs are acceptable
- [ ] Consider adding image optimization (WebP) if needed

---

**Ready to proceed!** Follow the steps above and your gallery will be fully functional.
