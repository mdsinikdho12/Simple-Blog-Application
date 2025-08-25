import ConnectDB from "@/lib/config/db";
import Contact from "@/lib/models/contactus";

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await ConnectDB();
    const newContact = await Contact.create({ name, email, message });
    return new Response(JSON.stringify(newContact), { status: 201 });
  } catch (error) {
    return new Response("Failed to create contact", { status: 500 });
  }
}

export async function GET() {
  try {
    await ConnectDB();
    const contacts = await Contact.find();
    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch contacts", { status: 500 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Contact ID is required", { status: 400 });
  }

  try {
    await ConnectDB();
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return new Response("Contact not found", { status: 404 });
    }

    return new Response("✅ Contact deleted successfully");
  } catch (error) {
    return new Response("Failed to delete contact", { status: 500 });
  }
}
