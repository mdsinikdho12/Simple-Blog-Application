import { NextResponse } from "next/server";
import cloudinary from "@/lib/config/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get("file");

    if (!imageFile) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert to buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "uploads" }, (error, uploadResult) => {
          if (error) return reject(error);
          resolve(uploadResult);
        })
        .end(buffer);
    });

    return NextResponse.json(
      { message: "Upload successful", url: result.secure_url },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
