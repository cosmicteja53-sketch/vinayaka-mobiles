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
const folderName = 'vinayaka-mobiles';

async function uploadImages() {
    try {
        const files = fs.readdirSync(imagesDir);
        console.log(`Found ${files.length} files in ${imagesDir}`);

        for (const file of files) {
            const filePath = path.join(imagesDir, file);
            const stat = fs.statSync(filePath);

            if (stat.isFile()) {
                console.log(`Uploading ${file}...`);
                const result = await cloudinary.uploader.upload(filePath, {
                    folder: folderName,
                    public_id: path.parse(file).name, // use filename without extension
                    overwrite: true,
                    resource_type: 'auto'
                });
                console.log(`✅ Uploaded ${file} -> ${result.secure_url}`);
            }
        }
        console.log('✨ All images uploaded successfully!');
    } catch (error) {
        console.error('❌ Error uploading images:', error);
    }
}

uploadImages();
