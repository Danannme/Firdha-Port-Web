import React from "react";

const Pengalaman: React.FC = () => {
  return (
    <section
      className="py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#FFFCF7]"
      id="pengalaman"
    >
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#7CA982]/25">
        Pengalaman Profesional
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#2C2C2C] mb-12 max-w-[700px]">
        Perjalanan yang membentuk praktik saya hari ini.
      </h2>

      <div className="timeline relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-[#7CA982] before:to-transparent">
        {/* Item 1 */}
        <div className="timeline-item relative mb-12">
          <div className="timeline-dot absolute left-[-38px] top-1 w-3 h-3 rounded-full bg-[#7CA982] border-2 border-[#FDF8F0]"></div>
          <div className="timeline-period font-mono text-[11px] text-[#D4A847] tracking-[0.1em] uppercase mb-1">
            Agustus 2025 – Sekarang
          </div>
          <div className="timeline-title font-serif text-[20px] text-[#2C2C2C] mb-[2px]">
            Behavior Therapist – Privat
          </div>
          <div className="timeline-place text-[13px] text-[#7CA982] font-medium mb-3">
            Bandung
          </div>
          <div className="timeline-desc text-[14px] text-[#6B6B6B] leading-[1.8]">
            Melakukan asesmen perilaku, menyusun program ABA individual, dan
            berkolaborasi dengan orang tua untuk konsistensi program di rumah.
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-item relative mb-12">
          <div className="timeline-dot absolute left-[-38px] top-1 w-3 h-3 rounded-full bg-[#7CA982] border-2 border-[#FDF8F0]"></div>
          <div className="timeline-period font-mono text-[11px] text-[#D4A847] tracking-[0.1em] uppercase mb-1">
            September 2024 – September 2025
          </div>
          <div className="timeline-title font-serif text-[20px] text-[#2C2C2C] mb-[2px]">
            Behavior Therapist
          </div>
          <div className="timeline-place text-[13px] text-[#7CA982] font-medium mb-3">
            Rumah Bintang Ceria
          </div>
          <div className="timeline-desc text-[14px] text-[#6B6B6B] leading-[1.8]">
            Memberikan terapi perilaku berbasis ABA untuk mendukung komunikasi,
            perilaku adaptif, dan kemandirian anak berkebutuhan khusus.
          </div>
        </div>

        {/* Item 3 */}
        <div className="timeline-item relative mb-12">
          <div className="timeline-dot absolute left-[-38px] top-1 w-3 h-3 rounded-full bg-[#7CA982] border-2 border-[#FDF8F0]"></div>
          <div className="timeline-period font-mono text-[11px] text-[#D4A847] tracking-[0.1em] uppercase mb-1">
            Juni – Juli 2024
          </div>
          <div className="timeline-title font-serif text-[20px] text-[#2C2C2C] mb-[2px]">
            Enumerator SNPHAR
          </div>
          <div className="timeline-place text-[13px] text-[#7CA982] font-medium mb-3">
            Kementerian PPPA – Jawa Timur
          </div>
          <div className="timeline-desc text-[14px] text-[#6B6B6B] leading-[1.8]">
            Wawancara mendalam ke responden perempuan 13–24 tahun, pendataan di
            12 desa/kelurahan pada 3 kabupaten.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
