import { checkout } from '@/actions/Stripe/checkout';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);
export const Reload = () => {
  const router = useRouter();
  const onCheckout = async () => {
    const response = await checkout();
    console.log(response);
    router.push(response || '');
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="font-montserratbold lg:text-[24px] text-[16px] text-left">
        Please reload page if no qr code is shown
      </p>
      <button className="bg-[#F2B21B] w-full rounded-lg" onClick={onCheckout}>
        <p className="lg:text-[18px] text-[16px] font-montserrat leading-[64px]">
          Checkout
        </p>
      </button>
    </div>
  );
};
