import { token } from "@/utils/token";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {  
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_forgot_password/",
            {
                mode:'no-cors',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    customer_id:req.headers.get('customer_id'),
                }),
            }
        );
        const response = await res.json();
        if (res.ok === false) throw response.detail;
        return new NextResponse(response, {
            status: 500,
          });
        return response;
    } catch (error) {
        return new NextResponse('Connection Error', {
            status: 500,
          });
    }
}
