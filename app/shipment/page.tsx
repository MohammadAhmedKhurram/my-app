"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Banner from "../components/Banner";

export default function ShippingForm() {


  const { user } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street1: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: `${user.firstName} ${user.lastName}`,
        email: user.primaryEmailAddress?.emailAddress || "",
        phone: user.phoneNumbers[0]?.phoneNumber || "",
      }));
    }
  }, [user]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShipmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    if (!formData.name || !formData.street1 || !formData.city || !formData.country || !formData.length || !formData.weight) {
      alert("Please fill all required fields.");
      return;
    }

    const shipmentData = {
      ...formData,
      length: Number(formData.length),
      width: Number(formData.width),
      height: Number(formData.height),
      weight: Number(formData.weight),
      userId: user?.id || "",
    };

    try {



      const res = await fetch("/api/shipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shipmentData),
      });

      const data = await res.json();

      console.log("Response from shipment API:", data);
      console.log("Response from shipment API Order Id:", data.orderId);


      if (res.ok) {
        alert("Shipment info saved! ");
        router.push(`../payment?orderId=${data.orderId}`)
      } else {
        alert(data.message || "Shipment creation failed.");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div>
      <Banner title="Home" title2="Pages" heading="Shipping Info"
        subheading="Shipping Info" />
      <form onSubmit={handleShipmentSubmit} className="ml-7 mr-7 md:ml-[50px] md:mr-[50px] xl:ml-[200px] xl:mr-[200px] 2xl:ml-[371px] 2xl:mr-[371px] mt-5 lg:mt-10 mb-5 lg:mb-10">
        <p className="text-2xl lg:text-3xl flex font-bold text-left  text-[#151875] mt-2 lg:mt-5 mb-2 lg:mb-5">Please provide your shipping details below to continue.</p>

        <h3 className="text-lg font-semibold mb-2 text-[#151875]">Shipping Info</h3>

        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="border p-2 w-full mb-3" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="border p-2 w-full mb-3" />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="border p-2 w-full mb-3" />

        <input type="text" name="street1" value={formData.street1} onChange={handleChange} placeholder="Street Address" required className="border p-2 w-full mb-3" />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required className="border p-2 w-full mb-3" />
        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required className="border p-2 w-full mb-3" />
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP / Postal Code" required className="border p-2 w-full mb-3" />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country (e.g., PK)" required className="border p-2 w-full mb-3" />



        <h3 className="text-lg font-semibold mb-2 text-[#151875]">Parcel Dimensions (inches) and Weight (lbs)</h3>
        <input type="number" name="length" value={formData.length} onChange={handleChange} placeholder="Length" required className="border p-2 w-full mb-3" />
        <input type="number" name="width" value={formData.width} onChange={handleChange} placeholder="Width" required className="border p-2 w-full mb-3" />
        <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height" required className="border p-2 w-full mb-3" />
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required className="border p-2 w-full mb-3" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Shipment (Test)
        </button>
      </form>
    </div>
  );
}
