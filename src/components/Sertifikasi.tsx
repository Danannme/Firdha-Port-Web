import React from "react";

const Sertifikasi: React.FC = () => {
  return (
    <section className="py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#FFFCF7]">
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#7CA982]/25">
        Sertifikasi &amp; Pelatihan
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#2C2C2C] mb-12 max-w-[700px]">
        Kompetensi
      </h2>

      <div className="cert-list grid grid-cols-2 max-md:grid-cols-1 gap-4">
        {/* Cert 1 */}
        <div className="cert-item flex items-start gap-[14px] bg-[#FFFCF7] border border-[#D4A847]/20 p-[18px] px-5 rounded-[10px]">
          <div className="cert-badge flex-shrink-0 w-9 h-9 rounded-full bg-[#F5E6BE] flex items-center justify-center text-[16px]">
            🏛️
          </div>
          <p className="text-[13px] text-[#2C2C2C] leading-[1.6]">
            <strong>Sertifikasi Kompetensi Pekerja Sosial Generalis</strong>
            <br />
            2023–2028
          </p>
        </div>

        {/* Cert 2 */}
        <div className="cert-item flex items-start gap-[14px] bg-[#FFFCF7] border border-[#D4A847]/20 p-[18px] px-5 rounded-[10px]">
          <div className="cert-badge flex-shrink-0 w-9 h-9 rounded-full bg-[#F5E6BE] flex items-center justify-center text-[16px]">
            🎓
          </div>
          <p className="text-[13px] text-[#2C2C2C] leading-[1.6]">
            <strong>Sertifikasi Terapis ABA</strong>
            <br />
            Rumah Bintang Ceria · 2024
          </p>
        </div>

        {/* Cert 3 */}
        <div className="cert-item flex items-start gap-[14px] bg-[#FFFCF7] border border-[#D4A847]/20 p-[18px] px-5 rounded-[10px]">
          <div className="cert-badge flex-shrink-0 w-9 h-9 rounded-full bg-[#F5E6BE] flex items-center justify-center text-[16px]">
            🎓
          </div>
          <p className="text-[13px] text-[#2C2C2C] leading-[1.6]">
            <strong>Sertifikasi Terapis ABA</strong>
            <br />
            Character &amp; Yamet Child Development · 2025
          </p>
        </div>

        {/* Cert 4 */}
        <div className="cert-item flex items-start gap-[14px] bg-[#FFFCF7] border border-[#D4A847]/20 p-[18px] px-5 rounded-[10px]">
          <div className="cert-badge flex-shrink-0 w-9 h-9 rounded-full bg-[#F5E6BE] flex items-center justify-center text-[16px]">
            🌿
          </div>
          <p className="text-[13px] text-[#2C2C2C] leading-[1.6]">
            <strong>Montessori untuk Anak Berkebutuhan Khusus</strong>
            <br />
            Jejak Jemari Indonesia – Montessori Indonesia · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sertifikasi;
