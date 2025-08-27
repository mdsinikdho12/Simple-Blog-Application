import ConnectDB from "@/lib/config/db";
import visitor from "@/lib/models/visitor";

export async function GET(req) {
  await ConnectDB();

  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "0.0.0.0";

  const today = new Date().toISOString().split("T")[0];

  const alreadyExists = await visitor.findOne({ ip, date: today });

  if (!alreadyExists) {
    await visitor.create({ ip, date: today });
  }

  const totalVisitors = await visitor.countDocuments();

  return Response.json({ uniqueVisitors: totalVisitors });
}
