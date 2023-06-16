import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseId, setCourseId] = useState(0);

  useEffect(() => {
    const fetchCoursePrice = async () => {
      try {
        const response = await axios.get(
          `https://ass12.vercel.appmyclass/${id}`,
        );
        const course = response.data;
        setCoursePrice(course.course.price);
        setCourseId(course.course.courseId);
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

        // Update the payment status of the course
        const updatePaymentStatus = await axios.put(
          `https://ass12.vercel.appcourse/${courseId}}`,
          { enroll: +1 },
        );

        if (updatePaymentStatus.status === 200) {
          console.log("Payment status updated successfully");

          // Make the payment charge to Stripe
          await axios.post(`https://ass12.vercel.appmyclass/${id}`, {
            amount: coursePrice * 100, // Convert price to cents
            paymentMethodId: paymentMethodId,
            courseId: id,
          });

          console.log("CheckoutForm.js 25 | payment successful!");
        } else {
          console.log("Failed to update payment status");
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
