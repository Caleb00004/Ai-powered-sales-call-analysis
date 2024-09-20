import { AuthResponseType } from "../../../api-feature/types";

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

export const scrollToView = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
        ref?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

export const saveAuthorizationTokenWithExpiry = (key: "unikrib-token", token: string , expiryInMinutes: number) => {
    const now = new Date();
    const item = {
        token: token,
        expiry: now.getTime() + expiryInMinutes * 60 * 1000 // Convert expiry time to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
    setCheckedLocalStorage(true)
};