export type profile_element = {
    iccid: string;
    assigned_date: string;
    country_name: string;
    country_code: string;
}
export type profiledata = {
    customer_id: string;
    total: number;
    offset: number;
    count: string;
    elements: Array<profile_element>;
}