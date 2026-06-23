import React from "react";

const Keahlian: React.FC = () => {
  return (
    <section
      className="py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#FDF8F0]"
      id="keahlian"
    >
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#7CA982]/25">
        Bidang Keahlian
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#2C2C2C] mb-12 max-w-[700px]">
        Pendekatan yang holistik, dari anak hingga keluarga.
      </h2>
      <div className="skills-grid grid grid-cols-3 max-md:grid-cols-1 gap-6">
        {/* Card 1 */}
        <div className="skill-card bg-[#FDF8F0] border border-[#7CA982]/20 rounded-xl p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(124,169,130,0.15)] hover:-translate-y-1">
          <div className="skill-icon w-11 h-11 bg-[#EDF4EE] rounded-lg mb-4 flex items-center justify-center text-[20px]">
            🧠
          </div>
          <h3 className="font-serif text-[18px] mb-3 text-[#2C2C2C]">
            Behavior Therapist
          </h3>
          <ul className="list-none p-0">
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Functional behavior understanding
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Behavior support strategies
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Social skills development
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Communication support
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Adaptive behavior
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Applied Behavior Analysis (ABA)
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="skill-card bg-[#FDF8F0] border border-[#7CA982]/20 rounded-xl p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(124,169,130,0.15)] hover:-translate-y-1">
          <div className="skill-icon w-11 h-11 bg-[#EDF4EE] rounded-lg mb-4 flex items-center justify-center text-[20px]">
            🤝
          </div>
          <h3 className="font-serif text-[18px] mb-3 text-[#2C2C2C]">
            Caregiver Support
          </h3>
          <ul className="list-none p-0">
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Parent coaching
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Home program guidance
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Daily routine support
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Psychoeducation keluarga
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="skill-card bg-[#FDF8F0] border border-[#7CA982]/20 rounded-xl p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(124,169,130,0.15)] hover:-translate-y-1">
          <div className="skill-icon w-11 h-11 bg-[#EDF4EE] rounded-lg mb-4 flex items-center justify-center text-[20px]">
            🌱
          </div>
          <h3 className="font-serif text-[18px] mb-3 text-[#2C2C2C]">
            Home-Based Learning
          </h3>
          <ul className="list-none p-0">
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Practical life activities
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Daily living skills
            </li>
            <li className="text-[13px] text-[#6B6B6B] py-1 border-b border-black/5 flex items-center gap-2 before:content-['→'] before:text-[#7CA982] before:text-[11px]">
              Independence training
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Keahlian;
