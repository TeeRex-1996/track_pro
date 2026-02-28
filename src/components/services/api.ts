import axios from "axios";
import emailjs from "@emailjs/browser";
import { LoginFormValues, User } from "../../types/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const emailJs = (userData: User) => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  emailjs.send(serviceId, templateId, {
    fullname: userData.fullname,
    email: userData.email,
    role: userData.role,
  });
};
