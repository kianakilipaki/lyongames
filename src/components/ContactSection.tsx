import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Mail, Send, MapPin, ExternalLink } from "lucide-react";
import { submitContactForm } from "../api/contactAPI";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formState);

      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch for collaborations, feedback, or just to say hello"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info and quick links */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-6">
              <h3 className="font-pixel text-lg text-game-cyan mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-game-purple rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-pixel text-sm text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-300 text-sm">
                      alaniklyon@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-game-pink rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-pixel text-sm text-white mb-1">
                      Studio Location
                    </h4>
                    <p className="text-gray-300 text-sm">South Jordan, Utah</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-6">
              <h3 className="font-pixel text-lg text-game-yellow mb-6">
                Quick Links
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 bg-game-black/50 rounded-lg border border-game-purple/20 hover:border-game-cyan/50 transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="text-game-cyan" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Apple Store **coming soon**
                  </span>
                </a>

                <a
                  href="https://play.google.com/store/apps/dev?id=4834278271327400211"
                  className="flex items-center space-x-2 p-3 bg-game-black/50 rounded-lg border border-game-purple/20 hover:border-game-cyan/50 transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="text-game-cyan" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Google Play Store
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61575665674946"
                  className="flex items-center space-x-2 p-3 bg-game-black/50 rounded-lg border border-game-purple/20 hover:border-game-cyan/50 transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="text-game-pink" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Game Support
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-game-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-game-purple/30">
            <h3 className="font-pixel text-lg text-game-cyan mb-6">
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-game-green/20 border border-game-green p-6 rounded-lg text-center">
                <p className="text-white font-pixel mb-3">Message Sent!</p>
                <p className="text-gray-300 text-sm">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <div className="mt-4 inline-block">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-game-green/20 border border-game-green text-white rounded-md font-pixel text-sm hover:bg-game-green/30 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2 text-sm"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-game-black border border-game-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-game-cyan transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 text-sm"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-game-black border border-game-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-game-cyan transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 mb-2 text-sm"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-game-black border border-game-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-game-cyan transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Game Feedback">Game Feedback</option>
                    <option value="Business Inquiry">Business Inquiry</option>
                    <option value="Support">Technical Support</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 text-sm"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-game-black border border-game-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-game-cyan transition-colors duration-300"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-game-purple hover:bg-game-purple/80 text-white font-pixel text-sm transition-all duration-300 rounded-md relative overflow-hidden group flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center">
                          SEND MESSAGE
                          <Send size={16} className="ml-2" />
                        </span>
                        <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-game-pink to-game-purple transition-transform duration-300"></span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
