const KEY = process.env.STRIPE_KEY;
//import stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
const stripe = await loadStripe(KEY);

export const payment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "eur",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
