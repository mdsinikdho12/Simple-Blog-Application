import { NextResponse } from "next/server";
import ConnectDB from "@/lib/config/db";
import User from "@/lib/models/user";
import bcrypt from "bcrypt";

export async function POST(request) {
  await ConnectDB();

  const body = await request.json();
  const { name, email, password } = body;

  try {
    await new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    }).save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Error registering user" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await ConnectDB();

  try {
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}
