import React from "react";

const Aktivitas: React.FC = () => {
  return (
    <section
      className="gallery-section py-[100px] px-20 max-md:py-[60px] max-md:px-8 bg-[#2C2C2C]"
      id="aktivitas"
    >
      <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#B8D4BB] mb-4 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-[#B8D4BB]/20">
        Aktivitas &amp; Sesi Terapi
      </div>
      <h2 className="section-title font-serif text-[clamp(28px,3.5vw,42px)] text-[#FFFCF7] mb-12 max-w-[700px]">
        Setiap sesi adalah ruang tumbuh.
      </h2>

      <div className="gallery-grid grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {/* Item 1 - Wide */}
        <div className="gallery-item md:col-span-2 relative overflow-hidden rounded-xl cursor-pointer group">
          <img
            className="w-full h-[320px] max-md:h-[260px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06] block"
            src="/images/gallery_3.webp"
            alt="Ring toss counting activity"
          />
          <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-10 px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-serif text-[16px] mb-1">
              Number Recognition &amp; Motor Skills
            </h4>
            <p className="text-[12px] opacity-80 font-mono">
              Ring toss dengan kartu angka UNO · Koordinasi &amp; berhitung
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="gallery-item relative overflow-hidden rounded-xl cursor-pointer group">
          <img
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06] block"
            src="/images/gallery_4.webp"
            alt="Ball pit sorting"
          />
          <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-10 px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-serif text-[16px] mb-1">
              Fine Motor &amp; Focus
            </h4>
            <p className="text-[12px] opacity-80 font-mono">
              Memasukkan kancing ke tali · Konsentrasi &amp; motorik halus
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="gallery-item relative overflow-hidden rounded-xl cursor-pointer group">
          <img
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06] block"
            src="/images/gallery_5.webp"
            alt="Emotion face matching"
          />
          <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-10 px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-serif text-[16px] mb-1">Emotion Recognition</h4>
            <p className="text-[12px] opacity-80 font-mono">
              Face puzzle · Ekspresi emosi &amp; social skills
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="gallery-item relative overflow-hidden rounded-xl cursor-pointer group">
          <img
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06] block"
            src="/images/gallery_6.webp"
            alt="Button lacing activity"
          />
          <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-10 px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-serif text-[16px] mb-1">Color Sorting</h4>
            <p className="text-[12px] opacity-80 font-mono">
              Pom-pom sorting · Klasifikasi warna &amp; pinset Ball pit ·
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="gallery-item relative overflow-hidden rounded-xl cursor-pointer group">
          <img
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06] block"
            src="/images/gallery_7.webp"
            alt="Pom pom sorting"
          />
          <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-10 px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-serif text-[16px] mb-1">
              Sensory Play &amp; Sorting
            </h4>
            <p className="text-[12px] opacity-80 font-mono">
              Pengenalan warna &amp; sensorik
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aktivitas;
