import React from "react";

const Program: React.FC = () => {
  return (
    <section className="py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#FDF8F0]" id="program">
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#7CA982]/25">
        Program yang Dikembangkan
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#2C2C2C] mb-12 max-w-[700px]">
        Membangun ekosistem tumbuh kembang anak.
      </h2>
      
      <div className="programs-grid grid grid-cols-3 max-md:grid-cols-1 gap-6">
        {/* Card 1 */}
        <div className="program-card rounded-2xl p-8 bg-gradient-to-br from-[#EDF4EE] to-[#F5E6BE] border border-[#7CA982]/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(124,169,130,0.2)]">
          <div className="program-num font-mono text-[40px] text-[#7CA982]/25 font-bold leading-none mb-4">
            01
          </div>
          <h3 className="font-serif text-[20px] text-[#2C2C2C] mb-3">
            Learning &amp; Independence Program
          </h3>
          <p className="text-[13px] text-[#6B6B6B] leading-[1.7]">
            Mendukung kemampuan belajar dan kemandirian anak berkebutuhan khusus melalui aktivitas bermakna yang disesuaikan kebutuhan individu.
          </p>
        </div>

        {/* Card 2 */}
        <div className="program-card rounded-2xl p-8 bg-gradient-to-br from-[#EDF4EE] to-[#F5E6BE] border border-[#7CA982]/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(124,169,130,0.2)]">
          <div className="program-num font-mono text-[40px] text-[#7CA982]/25 font-bold leading-none mb-4">
            02
          </div>
          <h3 className="font-serif text-[20px] text-[#2C2C2C] mb-3">
            Caregiver Empowerment
          </h3>
          <p className="text-[13px] text-[#6B6B6B] leading-[1.7]">
            Membantu caregiver memahami perilaku anak dan menerapkan strategi yang bisa dijalankan dalam kehidupan sehari-hari di rumah.
          </p>
        </div>

        {/* Card 3 */}
        <div className="program-card rounded-2xl p-8 bg-gradient-to-br from-[#EDF4EE] to-[#F5E6BE] border border-[#7CA982]/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(124,169,130,0.2)]">
          <div className="program-num font-mono text-[40px] text-[#7CA982]/25 font-bold leading-none mb-4">
            03
          </div>
          <h3 className="font-serif text-[20px] text-[#2C2C2C] mb-3">
            Montessori at Home for Special Needs
          </h3>
          <p className="text-[13px] text-[#6B6B6B] leading-[1.7]">
            Mendukung kemandirian anak melalui aktivitas Montessori sederhana yang bisa dilakukan bersama caregiver di rumah.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Program;
