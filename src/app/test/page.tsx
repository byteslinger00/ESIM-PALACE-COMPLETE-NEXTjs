import { GetServerSideProps } from 'next';
import Client, {Config} from 'shopify-buy';

interface Props {
  products: any[];
}

const clientConfig: Config = {
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN || '',
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '',
    apiVersion: '2023-07'
  };

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const client = Client.buildClient(clientConfig);

  const products = await client.product.fetchAll();
  console.log("This is product")
  console.log(products)
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  };
};

export default function Page({ products }: Props) {
  // Render the page using the data fetched from the Shopify API
  return(
    <div className='h-[200px] text-[#000000]'>{products}</div>
  )
}