import * as Stripe from 'stripe';

const stripe = new Stripe.default('sk_test_lomdOfxbm7QDgZWvR82UhV6D');
/**
 * Payment integration with stripe
 */
class Payment {
 
  public charge = async (req: any, res: any) => {
    stripe.customers
      .create({
        email: req.body.email,
        description: req.body.description
      })
      .then((customer: any) => stripe.customers.createSource(customer.id, {
        source: 'tok_visa',
      }))
      .then((source: any) => stripe.charges.create({
        amount: req.body.amount,
        currency: req.body.currency || 'usd',
        customer: source.customer,
      }))
      .then((charge: any) => {
        res.status(200).json({
          status: 200,
          charge
        });
      })
      .catch((err: any) => {
        res.status(400).json({
          status: 400,
          err
        });
      });
  }
}

export default Payment;
