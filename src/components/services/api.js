import axios from "axios";
import emailjs from "@emailjs/browser";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const emailJs = (userData) => {
  emailjs.init("");
  const serviceId = "";
  const templateId = "";
  emailjs.send(serviceId, templateId, userData);
};
