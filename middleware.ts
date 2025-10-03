


// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware(async (auth, req) => {
//   const authObject = await auth(); // 👈 Await the auth object
//   const userId = authObject.userId; // 👈 Access userId safely
//   const { pathname } = req.nextUrl;

//   // Allow access to home and countries listing page
//   if (
//     pathname === "/" ||
//     pathname === "/about-us" ||
//     pathname === "/blogs" ||
//     pathname === "/contact-us" ||
//     pathname === "/products" ||
//     pathname === "/wishlist" ||
//     pathname === "/order-completed" ||
//     pathname === "/products/" ||
//     pathname === "/blogs/"
//   ) {
//     return NextResponse.next();
//   }

//   if ((pathname.startsWith("/shopping-cart") || pathname.startsWith("/login")) && !userId) {
//     return authObject.redirectToSignIn({ returnBackUrl: req.url }); // 👈 Corrected here
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };



import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth();
  const userId = authObject.userId;
  const { pathname } = req.nextUrl;

  // ✅ Stripe webhook ko seedha allow karo
  if (pathname.startsWith("/api/webhook")) {
    return NextResponse.next();
  }

  // ✅ Public pages allow
  if (
    pathname === "/" ||
    pathname === "/about-us" ||
    pathname === "/blogs" ||
    pathname === "/contact-us" ||
    pathname === "/products" ||
    pathname === "/wishlist" ||
    pathname === "/order-completed" ||
    pathname === "/products/" ||
    pathname === "/blogs/"
  ) {
    return NextResponse.next();
  }

  // ✅ Login required pages
  if ((pathname.startsWith("/shopping-cart") || pathname.startsWith("/login")) && !userId) {
    return authObject.redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/api/:path*",
  ],
};
