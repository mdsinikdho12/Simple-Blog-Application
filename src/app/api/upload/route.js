import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import "@/lib/config/cloudinary"; // Import  Cloudinary configuration

export async function POST(req) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get("image");

    if (!imageFile) {
      return NextResponse.json(
        { error: "No image file provided." },
        { status: 400 }
      );
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "nextjs_blog_images" },
          (error, uploadResult) => {
            if (error) {
              console.error("Cloudinary Upload Error:", error);
              return reject(error);
            }
            resolve(uploadResult);
          }
        )
        .end(buffer);
    });

    return NextResponse.json(
      {
        message: "Image uploaded successfully",
        imageUrl: result.secure_url,
        publicId: result.public_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Upload Error:", error);
    return NextResponse.json(
      { error: "Image upload failed", details: error.message },
      { status: 500 }
    );
  }
}
