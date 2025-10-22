
import { Mail, X, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactGlobe from "./ContactGlobe";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setResultMessage("Sending...");

    const data = new FormData(formRef.current);
    data.append("access_key", "2ca7bb10-35b1-4fcb-bd0b-98493f87b0a5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const resultData = await response.json();

      if (resultData.success) {
        setShowSuccessMessage(true);
        setResultMessage("✅ Message sent successfully. I'll get back to you soon!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        formRef.current.reset();

        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        setResultMessage(resultData.message || "Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail, 
      title: "Email", 
      info: "buildwithsumanayak@gmail.com",
      isLink: false,
      href:"buildwithsumanayak@gmail.com"
    
    },
    
  { 
    icon: X, 
    title: "X", 
    info: "https://x.com/Sumanayak__", // Replace with your Twitter handle
    isLink: true,
    href: "https://x.com/Sumanayak__",
  },
  ];

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-green-600">work together</span> 
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Whether it's work, collaboration, or a tech chat. I'm just a message away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Get in touch</h3>
              <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
                I'm open to job offers. Got a project or idea? Reach out anytime.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <div className="w-[36px] h-[36px] bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{contact.title}</h4>
                        {contact.isLink ? (
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm sm:text-base hover:text-white transition-colors"
            >
              {contact.info}
            </a>
          ) : (
            <p className="text-gray-400 text-sm sm:text-base">{contact.info}</p>
          )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* <ContactGlobe className="h-96 w-full" globeRadius={1} connectionCount={50} /> */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-slate-800 p-6 sm:p-8 rounded-lg">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-sm sm:text-base"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-sm sm:text-base"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-green-500 transition-colors text-sm sm:text-base"
                  />
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none text-sm sm:text-base"
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                {resultMessage && (
                  <p
                    className={`text-center font-medium ${
                      showSuccessMessage ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {resultMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full ${
                    isSending ? "bg-green-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                  } text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base`}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
