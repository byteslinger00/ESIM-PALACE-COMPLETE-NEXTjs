export const GetInfoFromCookie = (cookie: any) => {
    let user_Info;
    if (cookie && cookie.toString())
        user_Info = JSON.parse(cookie.toString());
    return user_Info
}