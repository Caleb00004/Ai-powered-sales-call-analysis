export const isStrongPassword = (password: string) => {
    // Check if password length is at least 6 characters
    if (password.length < 6) {
        return false;
    }
    // Check if password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one number
    if (!/\d/.test(password)) {
        return false;
    }
    // Check if password contains at least one special character
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false;
    }
    // If all conditions pass, password is considered strong
    return true;
}
