import { NextResponse } from "next/server";
import ConnectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from "fs/promises";
import { connect } from "http2";

export async function GET(request) {
  await ConnectDB();
  const blogs = await BlogModel.find();
  return NextResponse.json(blogs);
}

export async function POST(request) {
  const body = await request.json();
  try {
    const NewBlog = await BlogModel.create(body);
    return NextResponse.json(NewBlog);
  } catch (error) {
    return NextResponse.json({ error: `Failed to create blog: ` });
  }
}
