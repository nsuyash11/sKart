import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4vG5egfyDsbZlTYsH1W5jnRQ0095nDByZ7";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      name="sKart Corp. Ltd."
      description="Pay with Confidence"
      image="https://banner2.cleanpng.com/20180327/pyq/kisspng-computer-icons-stock-photography-royalty-free-clip-add-to-cart-button-5ab9c9da53d0b8.5222550915221252743433.jpg"
      panelLabel="Pay"
      amount={priceForStripe}
      currency="INR"
      shippingAddress
      zipCode={false}
      email="support@skart.com"
    />
  );
};

export default StripeCheckoutButton;
