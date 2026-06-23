import React from "react";

const Testimoni: React.FC = () => {
  return (
    <section className="py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#FFFCF7]">
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#7CA982] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#7CA982]/25">
        Kata Orang Tua
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#2C2C2C] mb-12 max-w-[700px]">
        Kepercayaan keluarga adalah motivasi terbesar.
      </h2>
      
      <div className="testimonials grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-12">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <p>
            MasyaAllah, sangat terharu melihat setiap perkembangan yang sangat baik.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <p>
            Sebelum terapi sering tantrum, seiring berjalannya terapi sangat berkurang.
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <p>
            Tidak memaksa keadaan anak dan selalu sabar saat kelas terapi.
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial-card">
          <p>
            Mudah-mudahan Ms. Firdha selalu sehat, sukses dan jangan menyerah untuk bantu anak-anak ASD agar bisa menjadi anak-anak mandiri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
