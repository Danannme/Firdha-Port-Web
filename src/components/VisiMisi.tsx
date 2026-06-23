import React from "react";

const VisiMisi: React.FC = () => {
  return (
    <section className="bg-[#7CA982] p-20 max-md:py-[60px] max-md:px-8 text-center">
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-white/70 mb-4 flex items-center justify-center">
        Visi &amp; Misi
      </div>
      <h2 className="vision-title font-serif text-[clamp(32px,4vw,52px)] text-white mb-5 leading-[1.2]">
        Menciptakan ruang tumbuh
        <br />
        yang{" "}
        <em className="text-[#F5E6BE] italic not-italic-all font-serif">
          inklusif dan bermakna.
        </em>
      </h2>
      <p className="vision-desc max-w-[600px] mx-auto mb-12 text-[16px] text-white/80 leading-[1.8]">
        Bersama keluarga, pendidik, dan komunitas — membangun ekosistem yang
        mendukung setiap anak mencapai potensi terbaiknya.
      </p>

      <div className="vision-pillars flex justify-center gap-8 flex-wrap">
        <div className="pillar bg-white/15 border border-white/25 rounded-xl py-5 px-7 text-white text-[14px] font-medium backdrop-blur-md">
          Caregiver Education
        </div>
        <div className="pillar bg-white/15 border border-white/25 rounded-xl py-5 px-7 text-white text-[14px] font-medium backdrop-blur-md">
          Community Support
        </div>
        <div className="pillar bg-white/15 border border-white/25 rounded-xl py-5 px-7 text-white text-[14px] font-medium backdrop-blur-md">
          Workshop &amp; Training
        </div>
        <div className="pillar bg-white/15 border border-white/25 rounded-xl py-5 px-7 text-white text-[14px] font-medium backdrop-blur-md">
          Inclusive Development
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
