import Subscription from "@/lib/models/subscriptions";
import ConnectDB from "@/lib/config/db";

export async function GET(req) {
  await ConnectDB();
  try {
    const subscriptions = await Subscription.find({});
    return new Response(JSON.stringify(subscriptions), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch subscriptions", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { email } = await req.json();
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    return new Response("Subscribed successfully", { status: 201 });
  } catch (error) {
    return new Response("Failed to subscribe", { status: 500 });
  }
}
