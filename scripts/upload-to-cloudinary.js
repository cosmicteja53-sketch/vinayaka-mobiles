const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dzuua38cd',
    api_key: '547389926285277',
    api_secret: 'S8zrvo_MfcBl5vjx_hQJeXI4AQU'
});

const imagesDir = path.join(__dirname, '../public/images');
const mobileHeroItems = [
    { file: 'oppobrands-mobile.png', name: 'oppobrands-mobile' },
    { file: 'samsungbrand-mobile.png', name: 'samsungbrand-mobile' },
    { file: 'vivobrand-mobile.png', name: 'vivobrand-mobile' },
    { file: 'h1.jpeg', name: 'h1-mobile' } // h1.jpeg used as fallback for h1-mobile.png
];

const mobileFolderName = 'vinayaka-mobiles/hero/mobile';

async function migrateMobileHero() {
    console.log('🚀 Starting Mobile Hero images migration...');
    try {
        for (const item of mobileHeroItems) {
            const filePath = path.join(imagesDir, item.file);
            console.log(`Uploading ${item.file}...`);
            const result = await cloudinary.uploader.upload(filePath, {
                folder: mobileFolderName,
                public_id: item.name,
                overwrite: true,
                resource_type: 'auto'
            });
            console.log(`✅ Uploaded ${item.file} -> ${result.secure_url}`);
        }
        console.log('✨ Mobile Hero images migration complete!');
    } catch (error) {
        console.error('❌ Error uploading mobile hero images:', error);
    }
}

migrateMobileHero();
// uploadServicesImages(); // Commented out to avoid re-uploading services
