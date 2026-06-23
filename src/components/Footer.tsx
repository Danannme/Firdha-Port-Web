import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12 px-20 max-md:p-8 flex max-md:flex-col items-center justify-between max-md:gap-5 max-md:text-center">
      <div className="text-left max-md:text-center">
        <p className="footer-name font-serif text-[20px] text-white">
          Firdha Dewi Oktaviani
        </p>
        <p className="font-mono text-[11px] text-[#A8A8A8] tracking-[0.1em] mt-1">
          Behavior Therapist · Bandung, Indonesia
        </p>
      </div>
      <div className="footer-contact text-right max-md:text-center">
        <a
          href="mailto:firdhaoctav@gmail.com"
          className="block text-[12px] text-[#B8D4BB] no-underline mb-1 transition-colors duration-200 hover:text-white"
        >
          firdhaoctav@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/firdhaoktaviani"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[12px] text-[#B8D4BB] no-underline mb-1 transition-colors duration-200 hover:text-white"
        >
          linkedin.com/in/firdhaoktaviani
        </a>
      </div>
    </footer>
  );
};

export default Footer;
