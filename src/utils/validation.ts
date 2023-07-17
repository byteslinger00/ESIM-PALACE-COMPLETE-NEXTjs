export const validEmail = (email: string) => {
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegExp.test(email);
    if (isValidEmail) return true;
    else return false;
}

export const validPhone = (phoneNumber: string) => {
    const phoneRegExp = /^\+\d{1,3}(\s?\d{4})(\s?\d{4})(\s?\d{2})$/;
    const isValidPhoneNumber = phoneRegExp.test(phoneNumber);
    if (isValidPhoneNumber) return true;
    else return false;
}

export const signup_validate = (toast: any, name: string, email: string, phone: string, password: string) => {
    let error = false;
    if (name.length === 0)
        toast.error("Name is required."), error = true;
    if (!validEmail(email))
        toast.error('Invalid email address'), error = true;
    if (!validPhone(phone))
        toast.error('Invalid phone number'), error = true;
    if (password.length < 6)
        toast.error('Password has at least 8 letters'), error = true;
    return error;
}