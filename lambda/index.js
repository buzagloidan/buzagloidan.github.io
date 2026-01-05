const https = require('https');
const { S3Client, ListObjectsV2Command, HeadObjectCommand } = require('@aws-sdk/client-s3');
const client = new S3Client({ region: 'us-east-1' });

const BUCKET_NAME = process.env.BUCKET_NAME || 'osinachi-portfolio-gallery';
const GALLERY_JSON_KEY = process.env.GALLERY_JSON_KEY || 'gallery.json';

exports.handler = async (event) => {
  const path = event.rawPath || '/';
  
  try {
    // GET /check - Check for updates
    if (path === '/check') {
      return await checkForUpdates();
    }
    
    // GET /list - List all images
    if (path === '/list') {
      return await listImages();
    }
    
    // GET / - Get current gallery config
    if (path === '/') {
      return await getGalleryConfig();
    }
    
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not found' })
    };
    
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

async function checkForUpdates() {
  const lastChecked = await getLastCheckedDate();
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  
  const shouldUpdate = !lastChecked || new Date(lastChecked) < oneWeekAgo;
  
  if (shouldUpdate) {
    console.log('Gallery outdated, triggering update check...');
    await updateLastCheckedDate();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      body: JSON.stringify({
        status: 'update_needed',
        message: 'Gallery needs manual update check'
      })
    };
  }
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
    body: JSON.stringify({
      status: 'current',
      message: 'Gallery is up to date'
    })
  };
}

async function getGalleryConfig() {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key: GALLERY_JSON_KEY
    });
    
    await client.send(command);
    
    // If object exists, return the S3 URL
    const s3Url = `https://${BUCKET_NAME}.s3.amazonaws.com/${GALLERY_JSON_KEY}`;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // 1 hour cache
      },
      body: JSON.stringify({
        galleryUrl: s3Url,
        imagesBaseUrl: `https://${BUCKET_NAME}.s3.amazonaws.com/`
      })
    };
    
  } catch (error) {
    if (error.name === 'NotFound') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          galleryUrl: null,
          message: 'Gallery config not found. Please upload gallery.json'
        })
      };
    }
    throw error;
  }
}

async function listImages() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: 'gallery/'
    });
    
    const response = await client.send(command);
    
    const images = response.Contents
      .filter(obj => obj.Key !== 'gallery.json' && !obj.Key.endsWith('/'))
      .map(obj => ({
        key: obj.Key,
        url: `https://${BUCKET_NAME}.s3.amazonaws.com/${obj.Key}`,
        lastModified: obj.LastModified,
        size: obj.Size
      }));
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=600' // 10 min cache
      },
      body: JSON.stringify({ images })
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

async function getLastCheckedDate() {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key: 'last-checked.txt'
    });
    
    const response = await client.send(command);
    const content = await fetch(response.ContentLength).then(r => r.text());
    return content;
  } catch (error) {
    if (error.name === 'NotFound') return null;
    throw error;
  }
}

async function updateLastCheckedDate() {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: 'last-checked.txt',
    Body: new Date().toISOString(),
    ContentType: 'text/plain'
  });
  
  await client.send(command);
}
