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
    <div id='contact' className='w-full  px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Let's Connect</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I'd be much pleased to hear from you ! If you have any questions, comments, or feedback
        use the form below.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
            <input type="text" className='flex-1  p-3 outline-none border-[0.5px] border-gray-400  rounded-md bg-white' name='name' placeholder='Enter your name' required/>
            <input type="email" className='flex-1  p-3 outline-none border-[0.5px] border-gray-400  rounded-md bg-white' name='email' placeholder='Enter your email' required/>
        </div>
        <textarea rows='6' placeholder='Enter your message'
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message' required></textarea>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between  gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
      <p className=' mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
