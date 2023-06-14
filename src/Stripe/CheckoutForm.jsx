import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [coursePrice, setCoursePrice] = useState(0);

  useEffect(() => {
    const fetchCoursePrice = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/myclass/${id}`);
        const course = response.data;
        setCoursePrice(course.course.price);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoursePrice();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id: paymentMethodId } = paymentMethod;
        const response = await axios.post(
          "http://localhost:3000/stripe/charge",
          {
            amount: coursePrice * 100, // Convert price to cents
            paymentMethodId: paymentMethodId,
            courseId: id, // Pass the 'id' parameter to the API endpoint
          },
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};
