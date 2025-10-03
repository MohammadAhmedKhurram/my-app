// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import { client } from "@/sanity/lib/client";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   const body = await req.text();
//   const sig = req.headers.get("stripe-signature");

//   let event: Stripe.Event;

//   try {
//     if (!sig) {
//       return NextResponse.json(
//         { error: "Stripe signature missing" },
//         { status: 400 }
//       );
//     }

//     event = stripe.webhooks.constructEvent(
//       body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err: any) {
//     console.error("❌ Webhook signature verification failed:", err.message);
//     return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//   }

//   // ✅ Handle payment success
//   if (event.type === "payment_intent.succeeded") {
//     const paymentIntent = event.data.object as Stripe.PaymentIntent;

//     const cart = JSON.parse(paymentIntent.metadata.cart || "[]");
//     const orderId = paymentIntent.metadata.orderId;
//     const totalPrice = paymentIntent.metadata.totalPrice;

//     console.log("🛒 Cart in webhook:", cart);
//     console.log("📦 OrderId in webhook:", orderId);

//     if (!orderId) {
//       console.error("❌ No orderId found in metadata");
//       return NextResponse.json({ status: "failed" }, { status: 400 });
//     }

//     try {
//       await client
//         .patch(orderId)
//         .set({
//           productdetails: cart.map((item: any, index: number) => ({
//             _key: `${Date.now()}-${index}`,
//             name: item.name,
//             price: parseFloat(totalPrice || "0"),
//             quantity: item.quantity,
//           })),
//         })
//         .commit();

//       console.log("✅ Order updated successfully in Sanity!");
//     } catch (err) {
//       console.error("❌ Failed to update order:", err);
//     }
//   } else {
//     console.log(`⚠️ Unhandled event type: ${event.type}`);
//   }

//   return NextResponse.json({ status: "ok" });
// }


import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  console.log("📩 Webhook route triggered!");

  const body = await req.text();
  const sig = req.headers.get("Stripe-Signature"); // ✅ FIXED

  let event: Stripe.Event;

  try {
    if (!sig) {
      console.error("❌ Stripe signature missing!");
      return NextResponse.json({ error: "Stripe signature missing" }, { status: 400 });
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET! // ✅ FIXED
    );
    console.log("✅ Webhook verified:", event.type);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    console.log("📦 Metadata received:", paymentIntent.metadata);

    const cart = JSON.parse(paymentIntent.metadata.cart || "[]");
    const orderId = paymentIntent.metadata.orderId;
    const totalPrice = paymentIntent.metadata.totalPrice;

    console.log("🛒 Cart in webhook:", cart);
    console.log("📦 OrderId in webhook:", orderId);

    if (!orderId) {
      console.error("❌ No orderId found in metadata");
      return NextResponse.json({ status: "failed" }, { status: 400 });
    }

    try {
      await client
        .patch(orderId)
        .set({
          productdetails: cart.map((item: any, index: number) => ({
            _key: `${Date.now()}-${index}`,
            name: item.name,
            price: parseFloat(totalPrice || "0"),
            quantity: item.quantity,
          })),
          paid: true,
          createdAt: new Date().toISOString(),
        })
        .commit();

      console.log("✅ Order updated successfully in Sanity!");
    } catch (err) {
      console.error("❌ Failed to update order:", err);
    }
  } else {
    console.log(`⚠️ Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ status: "ok" });
}
