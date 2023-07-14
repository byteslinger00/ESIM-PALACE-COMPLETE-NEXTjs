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
                  product_data: { // Same as with price_data, we're creating a Product inline here, alternatively pass the ID of an existing Product using line_items.price_data.product
                      name: 'Shoes'
                  },
                  unit_amount: 1000 // 10 US$
              },
              quantity: 1,
          },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });
    return NextResponse.redirect(session.url);
  } catch (err:any) {
    // res.status(err.statusCode || 500).json(err.message);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}