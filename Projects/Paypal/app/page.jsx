"use client"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  const initialOptions = {
    clientId: "AWV2xN5gnFoREX8XwtNkjlQkz0v94lpzZHKn-dQ8K9RbIrtizu3MWeUP0CBgrM0HxmMPKTt76liF1enB",
    currency: "CAD"
  };

  

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons createOrder={createOrder} />
      </PayPalScriptProvider>
    </div>
  );
}



async function createOrder(data, actions) {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          currency_code: "CAD",
          value: "1.00",
        },
      }
    ]
  });
}