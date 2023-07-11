const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN


async function callShopify(query) {
//   const response = await fetch('https://b97f78-2.mysopify.com/api/2023-07/graphql.json', {
//   mode: 'no-cors',
// });
  const fetchUrl = `https://${domain}/api/2023-07/graphql.json`;

  const fetchOptions = {
    mode: 'no-cors',
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    // const data = await fetch(fetchUrl, fetchOptions).then((response) =>
    //   response.json(),
    // );
    const data = await fetch(fetchUrl,fetchOptions);
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
  
}

export async function getProduct() {
  const query =
    `
    {
      products(first:5) {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ;

  const response = await callShopify(query);

  // const product = response.data.productByHandle
  //   ? response.data.productByHandle
  //   : [];

  // return product;
  return response;
}

export async function createCheckout(id, quantity) {
  const query =
    `mutation 
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {  
  const formattedLineItems = lineItems.map(item => {
    return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`
  })

  const query =
    `mutation 
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}
