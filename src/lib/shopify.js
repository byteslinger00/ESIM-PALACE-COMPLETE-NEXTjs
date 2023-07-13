import { gql, GraphQLClient } from "graphql-request";
const endpoint  = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});

export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      Shop{
        name
      }
    }
  `;
  try {
    return await graphQLClient.request(getAllProductsQuery);
  } catch (error) {
    throw new Error(error);
  }
}


export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));