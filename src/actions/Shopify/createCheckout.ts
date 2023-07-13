// import { createStorefrontClient } from '@shopify/shopify-api';
export default async function createCheckout() {
    
    const res = await fetch("/api/createcheckout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
    if(res.ok === false){
        console.log('response-------2')
        console.log("Error occured");
        return;
    }
    const response = await res.json();
    
}
