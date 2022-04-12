import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";



// import "../styles.css";
import { Link, useParams } from "react-router-dom";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const {cantidadPagar} =useParams()
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkoutSection">
      <h1 className="checkout-price">Checkout</h1>
      
      <h1 className="checkout-price">$ {cantidadPagar}</h1>
      
      <button className="checkout-button" onClick={redirectToCheckout} disabled={isLoading}>
        
        
          <Link to="/success" className="text2">{isLoading ? "Loading..." : "Pagar"}</Link>
        
      </button>
    </div>
  );
};

export default Checkout;
