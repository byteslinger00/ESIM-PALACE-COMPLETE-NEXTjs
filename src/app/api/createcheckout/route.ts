import type { NextApiRequest, NextApiResponse } from 'next'
// import { shopifyClient } from '@/utils/shopify';
import { NextResponse } from 'next/server'

// import { gql, GraphQLClient } from "graphql-request";
const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN

async function storefront(query: any, variables = {}) {
  const response = await fetch(
    endpoint || '',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken || ''
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}
const gql = String.raw;
const productQuery = gql`
query Shop {
	shop {
		name
	}
}
`
export async function POST() {
    const { data } = await storefront(productQuery);
    return NextResponse.json(data.Shop);
}