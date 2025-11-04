import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-black text-white px-8 lg:px-16 py-12 shadow-inner font-serif">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

    {/* Brand */}
    <div className="md:col-span-2">
      <h1 className="text-2xl font-bold text-[#23BE0A] mb-4">
        Read<span className="text-white">Ora</span>
      </h1>
      <p className="text-gray-400 mb-5">A sanctuary of stories, curated for gentle minds.</p>

      {/* Newsletter */}
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Subscribe for updates"
          className="px-4 py-2 bg-gray-800 rounded-md focus:ring focus:ring-[#23BE0A] outline-none text-sm w-full"
        />
        <button className="rounded-lg bg-[#23BE0A] text-white font-semibold px-6 py-3  hover:bg-green-700 transition-colors">
          Join
        </button>
      </div>
    </div>

    {/* Services */}
    <div>
      <h6 className="text-[#23BE0A] font-semibold mb-4">Services</h6>
      <a className="block mb-2 hover:text-[#23BE0A]">Branding</a>
      <a className="block mb-2 hover:text-[#23BE0A]">Design</a>
      <a className="block mb-2 hover:text-[#23BE0A]">Marketing</a>
    </div>

    {/* Company */}
    <div>
      <h6 className="text-[#23BE0A] font-semibold mb-4">Company</h6>
      <a className="block mb-2 hover:text-[#23BE0A]">About us</a>
      <a className="block mb-2 hover:text-[#23BE0A]">Contact</a>
      <a className="block mb-2 hover:text-[#23BE0A]">Careers</a>
    </div>

    {/* Legal */}
    <div>
      <h6 className="text-[#23BE0A] font-semibold mb-4">Legal</h6>
      <a className="block mb-2 hover:text-[#23BE0A]">Privacy policy</a>
      <a className="block mb-2 hover:text-[#23BE0A]">Terms of use</a>
    </div>
  </div>

  {/* Socials */}
  <div className="flex justify-center gap-5 mt-10 text-gray-400">
    <i className="ri-facebook-fill text-xl hover:text-[#23BE0A] cursor-pointer"></i>
    <i className="ri-instagram-line text-xl hover:text-[#23BE0A] cursor-pointer"></i>
    <i className="ri-twitter-x-line text-xl hover:text-[#23BE0A] cursor-pointer"></i>
  </div>

  <p className="text-center mt-6 text-sm text-gray-400">
    © {new Date().getFullYear()} ReadOra. All rights reserved.
  </p>
</footer>

  );
};

export default Footer;
