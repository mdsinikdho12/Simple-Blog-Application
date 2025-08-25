import { NextResponse } from "next/server";
import ConnectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";

// Get All Blogs
export async function GET(request) {
  await ConnectDB();
  const blogs = await BlogModel.find();
  return NextResponse.json(blogs);
}

// Create New Blog
export async function POST(request) {
  await ConnectDB();
  const body = await request.json();
  try {
    const NewBlog = await BlogModel.create(body);
    return NextResponse.json(NewBlog);
  } catch (error) {
    return NextResponse.json({
      error: `Failed to create blog: ${error.message}`,
    });
  }
}

// Delete Blog by ID
export async function DELETE(request) {
  await ConnectDB();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "✅ Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete blog: ${error.message}` },
      { status: 500 }
    );
  }
}
