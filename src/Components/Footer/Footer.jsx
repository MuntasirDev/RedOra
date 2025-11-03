import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 lg:px-16 py-10 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-[#23BE0A] mb-4">
            Read<span className="text-white">Ora</span>
          </h1>
          <p className="text-gray-400">A sanctuary of stories, curated for gentle minds.</p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-[#23BE0A] font-semibold mb-4">Services</h6>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Branding</a>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Design</a>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Marketing</a>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-[#23BE0A] font-semibold mb-4">Company</h6>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">About us</a>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Contact</a>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-[#23BE0A] font-semibold mb-4">Legal</h6>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Privacy policy</a>
          <a className="block mb-2 hover:text-[#23BE0A] transition-colors duration-300">Terms of use</a>
        </div>

      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} ReadOra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
