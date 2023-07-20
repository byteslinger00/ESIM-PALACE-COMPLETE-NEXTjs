export const validEmail = (email: string) => {
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegExp.test(email);
    if (isValidEmail) return { response: "", error: false };
    else return { response: "Invalid email address.", error: true };
}

export const validPhone = (phoneNumber: string) => {
    const phoneRegExp = /^\+\d{1,3}(\s?\d{4})(\s?\d{4})(\s?\d{2})$/;
    const isValidPhoneNumber = phoneRegExp.test(phoneNumber);
    if (isValidPhoneNumber) return { response: "", error: false };
    else return { response: "Invalid phone number.", error: true };
}

export const validName = (name: string) => {
    if (name.length === 0)
        return { response: "Name is required.", error: true };
    else return { response: "", error: false };
}

export const validPassword = (password: string) => {
    if (password.length < 8)
        return { response: "Password has at least 8 letters", error: true };
    else return { response: "", error: false };
}

export const loginValidation = (id: string, password: string) => {
    let response = { id: "", password: "" };
    let error = false;
    if (!validEmail(id))
        response.id = "Invalid email address.", error = true;
    if (password.length < 6)
        response.password = "Password has at least 8 letters", error = true;
    return { response, error };
}

