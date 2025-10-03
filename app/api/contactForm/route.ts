import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  if (!name || !subject || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const doc = await client.create({
      _type: "contact",
      name,
      email: email || null,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Message saved successfully", doc });
  } catch (error) {
    console.error("Error saving to Sanity:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
