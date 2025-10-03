'use client'
// import Checkout from "@/app/components/CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useAppContext } from "@/context";
// import { useSearchParams } from "next/navigation";
// import Banner from "@/app/components/Banner";

// export default function Home() {
//   const { totalPrice } = useAppContext()
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId");

//   console.log("OrderId in Payment Page:", orderId);
//   console.log("OrderId in Payment Page:", orderId);
//   console.log("OrderId in Payment Page:", orderId);


//   console.log("Total Price:", totalPrice);
//   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
//   return (
//     <div>
//       <Banner title="Home" title2="Pages" heading="Payment"
//         subheading="Payment" />
//       <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
//         <div className="ml-7 mr-7 md:ml-[50px] md:mr-[50px] xl:ml-[200px] xl:mr-[200px] 2xl:ml-[371px] 2xl:mr-[371px]">
//           <p className="text-2xl lg:text-3xl flex font-bold text-left  text-[#151875] mt-2 lg:mt-5 mb-2 lg:mb-5">Please proceed to Payment!</p>
//           <Elements stripe={stripePromise} options={{ amount: totalPrice, currency: "usd", mode: "payment" }}>
//             <Checkout amount={totalPrice} orderId={orderId ?? ""} />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

import Checkout from "@/app/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useAppContext } from "@/context";
import { useSearchParams } from "next/navigation";
import Banner from "@/app/components/Banner";
import { Suspense } from "react";

// ✅ Create a separate component to use useSearchParams()
function PaymentContent() {
  const { totalPrice } = useAppContext();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  console.log("OrderId in Payment Page:", orderId);
  console.log("Total Price:", totalPrice);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  return (
    <div>
      <Banner title="Home" title2="Pages" heading="Payment" subheading="Payment" />
      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <div className="ml-7 mr-7 md:ml-[50px] md:mr-[50px] xl:ml-[200px] xl:mr-[200px] 2xl:ml-[371px] 2xl:mr-[371px]">
          <p className="text-2xl lg:text-3xl flex font-bold text-left text-[#151875] mt-2 lg:mt-5 mb-2 lg:mb-5">
            Please proceed to Payment!
          </p>
          <Elements
            stripe={stripePromise}
            options={{
              amount: totalPrice,
              currency: "usd",
              mode: "payment",
            }}
          >
            <Checkout amount={totalPrice} orderId={orderId ?? ""} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

// ✅ Wrap the content in a Suspense boundary
export default function Payment() {
  return (
    <Suspense fallback={<div>Loading payment details...</div>}>
      <PaymentContent />
    </Suspense>
  );
}

