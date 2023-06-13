import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51NIe9tFg48tOJuAibSXqxDKrJtoWajzw3QXYgLSqSYoSCwTt0mszT8nvUgRLDomGDeif6OZLDmqAlAhGOwS3Anar0013DvvsVi";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
