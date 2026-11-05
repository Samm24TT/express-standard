import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: "y7rskbca",
  api_key: "873864121399678",
  api_secret: process.env.CLOUDNIARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("File upload complete", response.url);
    fs.unlinkSync(filePath);
    return response.url;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(filePath);
    return null;
  }
};
