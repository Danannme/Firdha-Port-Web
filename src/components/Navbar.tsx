import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF8F0]/92 backdrop-blur-[12px] border-b border-[#7CA982]/20 px-10 max-md:px-6 flex items-center justify-between h-[60px]">
      <div className="font-mono text-[12px] tracking-[0.15em] text-[#7CA982] font-bold uppercase">
        FDO · Portofolio
      </div>
      <div className="flex gap-7 max-md:hidden">
        <a
          href="#tentang"
          className="text-[12px] tracking-[0.08em] uppercase text-[#6B6B6B] no-underline font-medium transition-colors duration-200 hover:text-[#7CA982]"
        >
          Tentang
        </a>
        <a
          href="#keahlian"
          className="text-[12px] tracking-[0.08em] uppercase text-[#6B6B6B] no-underline font-medium transition-colors duration-200 hover:text-[#7CA982]"
        >
          Keahlian
        </a>
        <a
          href="#pengalaman"
          className="text-[12px] tracking-[0.08em] uppercase text-[#6B6B6B] no-underline font-medium transition-colors duration-200 hover:text-[#7CA982]"
        >
          Pengalaman
        </a>
        <a
          href="#aktivitas"
          className="text-[12px] tracking-[0.08em] uppercase text-[#6B6B6B] no-underline font-medium transition-colors duration-200 hover:text-[#7CA982]"
        >
          Aktivitas
        </a>
        <a
          href="#program"
          className="text-[12px] tracking-[0.08em] uppercase text-[#6B6B6B] no-underline font-medium transition-colors duration-200 hover:text-[#7CA982]"
        >
          Program
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
