import { NextResponse, NextRequest } from "next/server";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.headers.get('Order')
            },
            unit_amount: 100 * Number(req.headers.get('Price'))
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: req.headers.get('Route') === 'transaction'
        ? `${req.headers.get('origin')}/${req.headers.get('Route')}/${req.headers.get('Id')}`
        : `${req.headers.get('origin')}/esims?success=true&id=${req.headers.get('email')}&type=${req.headers.get('Id')}&iccid=${req.headers.get('iccid')}`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });
    const response = new NextResponse(null, { status: 200 });
    response.headers.set('Location', session.url);
    return response;
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}