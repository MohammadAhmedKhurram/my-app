// schemas/order.ts
export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "userId",
        title: "Clerk User ID",
        type: "string",
      },
      {
        name: "name",
        title: "Full Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "phone",
        title: "Phone",
        type: "string",
      },

      {
        name: "productdetails",
        title: "Product Details",
        type: "array",   
        of: [
          {
            type: "object",
            fields: [
              { name: "name", title: "Product Name", type: "string" },
              { name: "price", title: "Price", type: "number" },
              { name: "quantity", title: "Quantity", type: "number" },
            ],
          },
        ],
      },

      {
        name: "shippingAddress",
        title: "Shipping Address",
        type: "object",
        fields: [
          { name: "street", title: "Street", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "state", title: "State", type: "string" },
          { name: "zip", title: "ZIP / Postal Code", type: "string" },
          { name: "country", title: "Country", type: "string" },
        ],
      },
      {
        name: "parcel",
        title: "Parcel",
        type: "object",
        fields: [
          { name: "length", title: "Length", type: "number" },
          { name: "width", title: "Width", type: "number" },
          { name: "height", title: "Height", type: "number" },
          { name: "weight", title: "Weight", type: "number" },
        ],
      },
      {
        name: "shipment",
        title: "Shipment Info",
        type: "object",
        fields: [
          { name: "trackingNumber", title: "Tracking Number", type: "string" },
          { name: "labelUrl", title: "Label URL", type: "url" },
          { name: "status", title: "Status", type: "string" },
        ],
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        readOnly: true,
      },
    ],
  };
  