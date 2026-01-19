// form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // accepts formats: (123) 456-7890, 123-456-7890, 1234567890
  const phoneRegex = /^[\d\s()-]+$/;
  const digitsOnly = phone.replace(/\D/g, "");
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const validateContactForm = (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!validateRequired(formData.name)) {
    errors.name = "Name is required";
  }

  if (!validateRequired(formData.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!validateRequired(formData.message)) {
    errors.message = "Message is required";
  }

  return errors;
};
