import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState ("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ca7bb10-35b1-4fcb-bd0b-98493f87b0a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
  id="contact"
  className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-none"
>
  {/* Headings OUTSIDE the card */}
  <h4 className="text-center mb-2 text-lg font-ovo">Let's Connect</h4>
  <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
  <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
    I'd be much pleased to hear from you! If you have any questions, comments, or feedback,
    use the form below.
  </p>

  {/* Contact Form Card */}
  <div
    className="max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-700
               bg-[#252a41]
                p-6 sm:p-10"
  >
    <form onSubmit={onSubmit} className="w-full mx-auto">
      <input type="checkbox" name="botcheck" className="hidden" />

      {/* 👇 Inputs layout — responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          required
          className="w-full sm:p-3 text-sm sm:text-base bg-[#22273a] p-2 text-white outline-none border border-white/60 rounded-md
                     focus:border-green-400 transition-all duration-200 "
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          required
          className="w-full sm:p-3 text-sm sm:text-base p-2 text-white outline-none border border-white/60 rounded-md
                     focus:border-green-400 transition-all duration-200 bg-[#22273a]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full sm:p-3 text-sm sm:text-base p-2 text-white outline-none border border-white/60 rounded-md
                     focus:border-green-400 transition-all duration-200 bg-[#22273a]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full sm:p-3 text-sm sm:text-base p-2 text-white outline-none border border-white/60 rounded-md
                     focus:border-green-400 transition-all duration-200 bg-[#22273a]"
        />
      </div>

      <textarea
        rows={6}
        name="message"
        placeholder="Enter your message"
        required
        className="w-full sm:p-4 text-sm sm:text-base  p-3 text-white outline-none border border-white/60 rounded-md
                   focus:border-green-400 transition-all duration-200 bg-[#22273a] resize-none mb-6"
      ></textarea>

      <button
        type="submit"
        className="py-3 px-8 w-max flex items-center justify-between gap-2 cursor-pointer
                   text-white rounded-full mx-auto duration-500 bg-[#22273a] border border-white/70
                   hover:bg-white/10 hover:border-green-400"
      >
        Submit
        <Image src={assets.right_arrow_white} alt="" className="w-4" />
      </button>

      <p className="text-center text-gray-400 mt-4">{result}</p>
    </form>
  </div>
</div>



  )
}

export default Contact
