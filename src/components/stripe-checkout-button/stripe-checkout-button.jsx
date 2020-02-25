import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4vG5egfyDsbZlTYsH1W5jnRQ0095nDByZ7";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return <StripeCheckout token={onToken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
