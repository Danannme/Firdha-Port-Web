import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="hero min-h-screen md:h-screen md:min-h-0 md:max-h-screen grid grid-cols-2 max-md:grid-cols-1 pt-[60px] bg-[#FFFCF7] overflow-hidden max-md:overflow-visible"
      id="tentang"
    >
      {/* Hero Left */}
      <div className="hero-left flex flex-col justify-center py-20 md:py-[4vh] pr-[60px] md:pr-[5vw] pl-20 md:pl-[6vw] max-md:px-8 max-md:py-16 w-full h-full">
        <div className="hero-eyebrow font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-6 md:mb-[2vh] flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-[#7CA982]">
          Behavior Therapist &amp; - Certified Social Worker
        </div>
        <h1 className="font-serif text-[clamp(42px,5vw,64px)] leading-[1.1] text-[#2C2C2C] mb-3 md:mb-[1.5vh]">
          Firdha Dewi
          <br />
          <em className="italic text-[#7CA982] not-italic-all font-serif">
            Oktaviani
          </em>
        </h1>
        <div className="hero-tagline text-[13px] tracking-[0.12em] uppercase text-[#D4A847] font-semibold mb-6 md:mb-[2vh] font-mono">
          Behavior Therapist · Learning Support · Certified Social Worker
        </div>
        <p className="hero-bio text-[16px] text-[#6B6B6B] leading-[1.8] max-w-[480px] mb-10 md:mb-[3vh]">
          Mendampingi anak berkebutuhan khusus bukan hanya di ruang terapi —
          tapi membangun jembatan antara anak, keluarga, dan komunitas yang
          lebih inklusif.
        </p>
        <div className="hero-philosophy bg-[#EDF4EE] border-l-3 border-[#7CA982] py-4 px-5 md:py-3 md:px-4 rounded-r-lg max-w-[440px] mb-10 md:mb-[3vh]">
          <p className="font-serif text-[18px] text-[#2C2C2C] italic">
            "Every little step matters."
          </p>
          <span className="text-[11px] font-mono text-[#A8A8A8] tracking-[0.15em] uppercase block mt-1">
            Filosofi kerja
          </span>
        </div>
        <div className="hero-contacts flex gap-4 flex-wrap">
          <a
            href="mailto:firdhaoctav@gmail.com"
            className="contact-pill flex items-center gap-2 bg-[#FFFCF7] border border-[#7CA982]/30 py-2 px-4 rounded-full text-[12px] text-[#6B6B6B] no-underline transition-all duration-200 hover:border-[#7CA982] hover:text-[#7CA982]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-[14px] h-[14px]"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            firdhaoctav@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/firdhaoktaviani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill flex items-center gap-2 bg-[#FFFCF7] border border-[#7CA982]/30 py-2 px-4 rounded-full text-[12px] text-[#6B6B6B] no-underline transition-all duration-200 hover:border-[#7CA982] hover:text-[#7CA982]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[14px] h-[14px]"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Hero Right */}
      <div className="hero-right bg-[#EDF4EE] relative overflow-hidden flex items-center justify-center max-md:h-[400px] w-full h-full">
        <div className="hero-img-grid p-10 max-md:p-4 w-full h-full flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-xl transition-transform duration-400 ease-in-out hover:scale-[1.03]"
            src="/images/HeroPicture.jpeg"
            alt="Aktivitas terapi anak"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
