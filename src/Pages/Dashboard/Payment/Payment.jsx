import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk)
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => {
        return sum + item.price
    }, 0);
    const price = parseFloat(total.toFixed(2))
    console.log(total, price)

    return (
        <div>
            <SectionTitle subHeading="Hurry up" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;