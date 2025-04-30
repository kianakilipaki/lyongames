import emailjs from "@emailjs/browser";

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const serviceID = "service_edjmt1r";
  const templateID = "template_abdnhaa";
  const publicKey = "VZV0pNcAoAnQcAVNe";

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const result = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};
