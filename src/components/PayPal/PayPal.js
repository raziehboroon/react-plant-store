//paypal feature works with vpn
import React, { useEffect, useRef } from "react";
import "./PayPal.scss";
import { useGlobalContext } from "../../Context";
const PayPal = () => {
  const { total, clearCart } = useGlobalContext();
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              { amount: { currency_code: "USD", value: total } },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("successfull purchase.");
          console.log(order);
          clearCart();
          alert("Thank you for your purchase, see you soon.");
        },
        onError: (err) => {
          console.log("unsuccessful purchase" + err);
        },
      })
      .render(paypal.current);
  }, [clearCart, total]);
  // when dependecy array is removed, add one paypal button each time +/_ is pressed
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
