export type customer_detail = {
    customer_id: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    phone_number: string;
    wallet: number;
    wallet_currency: string;
}
export type user_info = { 
    customer_authenticated: boolean;
    customer_details: customer_detail;
    get_session_auth_hash: string;
}