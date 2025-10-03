"use client";

import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useAppContext } from "@/context";

export default function Checkout({ amount, orderId }: { amount: number, orderId: string }) {

  const { cart, totalPrice  } = useAppContext()
  const [errors, setErrors] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    const getPaymentIntent = async () => {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount, cart, orderId, totalPrice  })
      })
      const json = await response.json()
      console.log("Fetched clientSecret:", json.client_secret)
      setClientSecret(json.client_secret)
    }
    getPaymentIntent()
  }, [amount])

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      setErrors("Stripe not loaded yet.")
      return
    }

    if (!clientSecret) {
      setErrors("Payment not initialized yet. Please wait a moment...")
      return
    }

    setIsLoading(true)

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrors(submitError.message || "Submission error.")
      setIsLoading(false)
      return
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-completed`
      }
    })

    if (error) {
      setErrors(error.message || "Payment failed.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {clientSecret ? (
        <>
          <PaymentElement />
          <button
            type="submit"
            disabled={!stripe || !clientSecret || isLoading}
            className="mt-2 lg:mt-5 bg-blue-500 rounded-2xl px-6 py-2 text-white font-semibold disabled:opacity-50"
          >
            {isLoading ? "Processing..." : `Pay $${amount}`}
          </button>
        </>
      ) : (
        <p className="text-gray-500">Loading payment details...</p>
      )}
      {errors && <p className="text-red-500 mt-2">{errors}</p>}
    </form>
  )
}
