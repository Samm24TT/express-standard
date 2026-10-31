import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "y7rskbca",
  api_key: "987165164266455",
  api_secret: process.env.CLOUDNIARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("File upload complete", response.url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
