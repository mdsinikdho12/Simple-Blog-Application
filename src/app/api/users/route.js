import ConnectDB from "@/lib/config/db";
import user from "@/lib/models/user";

export async function GET() {
  await ConnectDB();
  const users = await user.find({});
  return Response.json(users);
}
