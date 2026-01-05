#!/bin/bash

# S3 Bucket Setup Script for osinachi-portfolio-gallery

set -e

BUCKET_NAME="osinachi-portfolio-gallery"
REGION="us-east-1"

echo "🪣 Setting up S3 bucket: $BUCKET_NAME"

# Check if bucket exists
echo "📋 Checking if bucket exists..."
BUCKET_EXISTS=$(aws s3api list-buckets --query "Buckets[?Name=='$BUCKET_NAME']" --output text)

if [ -z "$BUCKET_EXISTS" ]; then
    echo "✅ Bucket exists: $BUCKET_NAME"
else
    echo "📦 Creating new bucket..."
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
fi

# Enable public read access and website hosting
echo "🌐 Enabling S3 website hosting..."
aws s3api put-bucket-website \
  --bucket "$BUCKET_NAME" \
  --index-document index.html \
  --error-document error.html

aws s3api put-bucket-policy \
  --bucket "$BUCKET_NAME" \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
      }
    ]
  }'

# Create CORS configuration
echo "🔓 Setting CORS configuration..."
aws s3api put-bucket-cors \
  --bucket "$BUCKET_NAME" \
  --cors-configuration '{
    "CORSRules": [
      {
        "AllowedMethods": ["GET", "HEAD"],
        "AllowedOrigins": ["*"],
        "AllowedHeaders": ["*"],
        "MaxAgeSeconds": 3600
      }
    ]
  }'

# Create gallery directory structure in bucket
echo "📁 Creating gallery folder structure..."
aws s3api put-object \
  --bucket "$BUCKET_NAME" \
  --key "gallery/.gitkeep" \
  --body ""

# Upload initial gallery.json
echo "📝 Creating initial gallery.json..."
cat > /tmp/gallery.json <<'EOF'
{
  "album": "Google Photos Gallery",
  "updated": "2025-01-05T00:00:00Z",
  "images": []
}
EOF'

aws s3 cp /tmp/gallery.json "s3://$BUCKET_NAME/gallery.json" \
  --content-type "application/json" \
  --cache-control "public, max-age=300"

# Create last-checked marker
echo "⏰ Creating last-checked marker..."
aws s3api put-object \
  --bucket "$BUCKET_NAME" \
  --key "last-checked.txt" \
  --body "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" \
  --content-type "text/plain" \
  --cache-control "public, max-age=3600"

# Get bucket website URL
BUCKET_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo ""
echo "✅ S3 bucket setup complete!"
echo ""
echo "📊 Summary:"
echo "  Bucket: $BUCKET_NAME"
echo "  Region: $REGION"
echo "  Website URL: $BUCKET_URL"
echo ""
echo "📂 Next steps:"
echo "  1. Download images from Google Photos"
echo "  2. Upload images to gallery/ folder:"
echo "     aws s3 cp img-001.jpg s3://$BUCKET_NAME/gallery/img-001.jpg --cache-control \"public, max-age=31536000\""
echo "  3. Update gallery.json with image metadata"
echo "  4. Deploy Lambda function: cd lambda && serverless deploy"
echo ""
