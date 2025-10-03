import { NextRequest, NextResponse } from "next/server";
import { client as sanityClient } from "../../../sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const shipmentData = await req.json();

    if (
      !shipmentData.name ||
      !shipmentData.street1 ||
      !shipmentData.city ||
      !shipmentData.country ||
      !shipmentData.length ||
      !shipmentData.weight
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Shippo shipment create
    const shippoResponse = await fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address_from: {
          name: "My Warehouse",
          street1: "123 Warehouse St",
          city: "Karachi",
          country: "PK",
        },
        address_to: {
          name: shipmentData.name,
          street1: shipmentData.street1,
          city: shipmentData.city,
          state: shipmentData.state,
          zip: shipmentData.zip,
          country: shipmentData.country,
          phone: shipmentData.phone,
          email: shipmentData.email,
        },
        parcels: [
          {
            length: Number(shipmentData.length),
            width: Number(shipmentData.width),
            height: Number(shipmentData.height),
            distance_unit: "in",
            weight: Number(shipmentData.weight),
            mass_unit: "lb",
          },
        ],
        async: false,
        test: true,
      }),
    });

    const text = await shippoResponse.text();
    let shippoData;
    try {
      shippoData = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { message: "Invalid response from Shippo", raw: text },
        { status: 500 }
      );
    }

    if (!shippoResponse.ok) {
      return NextResponse.json(
        { message: shippoData.detail || "Shippo shipment failed" },
        { status: shippoResponse.status }
      );
    }

    // Create initial order in Sanity (without product details)
    const order = await sanityClient.create({
      _type: "order",
      userId: shipmentData.userId,
      name: shipmentData.name,
      email: shipmentData.email,
      phone: shipmentData.phone,
      shippingAddress: {
        street: shipmentData.street1,
        city: shipmentData.city,
        state: shipmentData.state,
        zip: shipmentData.zip,
        country: shipmentData.country,
      },
      parcel: {
        length: shipmentData.length,
        width: shipmentData.width,
        height: shipmentData.height,
        weight: shipmentData.weight,
      },
      shipment: {
        trackingNumber: shippoData.tracking_number || "",
        labelUrl: shippoData.label_url || "",
        status: shippoData.status || "",
      },
    });

    console.log("Order created with ID from Shimpent API:", order._id);
    return NextResponse.json({ ...shippoData, orderId: order._id });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "Shipment creation failed" },
      { status: 500 }
    );
  }
}
