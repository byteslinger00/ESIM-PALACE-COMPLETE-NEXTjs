export type transaction_request = {
    customer_id: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    package_type_id: string;
    phone_number: string;
}
export type transaction = {
    country_name: string;
    iccid: string;
    order_number: number;
    qr_code: string;
    request: transaction_request;
}