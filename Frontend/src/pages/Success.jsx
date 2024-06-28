import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

export function  Success(){
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity, // Assuming the correct property name is `quantity`
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        setOrderId(res.data._id);

      } catch (error) {
        console.error("Error creating order:", error);
        
      }
    };

  
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId ? (
        `Order has been created successfully. Your order number is ${orderId}`
      ) : (
        `Success. Your order is being prepared...`
      )}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => {
          // Navigate to homepage on button click
          window.location.href = "/";
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

