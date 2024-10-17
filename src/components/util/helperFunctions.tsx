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

export function formatDateAndTime(dateString: string) {
  const date = new Date(dateString);

  // Format the time (e.g., "8:29am")
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // For am/pm
  };
  const time = date.toLocaleString('en-US', timeOptions).toLowerCase();

  // Format the date (e.g., "19/05/2024")
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleString('en-GB', dateOptions); // 'en-GB' to get 'dd/mm/yyyy'

  return {
    time,
    date: formattedDate,
  };
}

