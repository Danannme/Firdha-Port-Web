import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-name">Firdha Dewi Oktaviani</div>
        <div className="nav-links">
          <a href="#keahlian">Keahlian</a>
          <a href="#pengalaman">Pengalaman</a>
          <a href="#layanan">Layanan</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-left">
          <div className="hero-eyebrow">Behavior Therapist & Social Worker</div>
          <h1 className="hero-name">
            Firdha
            <br />
            <em>Dewi</em>
            <br />
            Oktaviani
          </h1>
          <div className="hero-degree">
            M.Tr.Sos · ABA Certified · Kemensos Certified
          </div>
          <p className="hero-bio">
            Membantu anak ASD dan keluarganya tumbuh — dari ruang terapi hingga
            rumah. Saya percaya bahwa perubahan nyata terjadi ketika intervensi
            klinis berjalan beriringan dengan dukungan keluarga dan sistem
            sosial yang kuat.
          </p>
          <div className="hero-tags">
            <span className="tag tag-primary">Behavior Therapist</span>
            <span className="tag tag-secondary">Social Worker</span>
            <span className="tag tag-secondary">Researcher</span>
            <span className="tag tag-tertiary">ASD Specialist</span>
            <span className="tag tag-tertiary">Caregiver Training</span>
          </div>
          <div className="hero-cta">
            <a href="#kontak" className="btn-primary">
              Mari Berkolaborasi
            </a>
            <a href="#pengalaman" className="btn-ghost">
              Lihat Pengalaman
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/profile.webp" alt="Firdha Dewi Oktaviani" className="hero-profile-img" />
          <div className="hero-pattern"></div>
          <div className="hero-right-inner">
            <div className="hero-quote">
              <p>
                "Data terbaik lahir dari interaksi langsung di lapangan — dan
                terapi terbaik lahir dari pemahaman mendalam tentang manusia di
                balik diagnosisnya."
              </p>
            </div>
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <div className="stat-num">
                  3<span>+</span>
                </div>
                <div className="stat-label">Tahun pengalaman terapi ABA</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  60<span>+</span>
                </div>
                <div className="stat-label">Responden survei nasional</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  2<span>×</span>
                </div>
                <div className="stat-label">Sertifikasi profesional resmi</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  5<span>+</span>
                </div>
                <div className="stat-label">
                  Lembaga & program yang dijalani
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" id="keahlian">
        <div className="section-label">Keahlian Utama</div>
        <h2 className="section-title">
          Tiga Pilar
          <br />
          <em>Kompetensi</em>
        </h2>
        <div className="pillars-grid">
          <div className="pillar fade-up">
            <div className="pillar-icon">🧠</div>
            <div className="pillar-title">Behavior & Therapy</div>
            <p className="pillar-desc">
              Spesialisasi dalam asesmen dan intervensi berbasis ABA untuk anak
              ASD. Terbiasa membaca perilaku, merancang program terapi
              individual, dan mendampingi keluarga memahami proses tumbuh
              kembang anak.
            </p>
            <div className="pillar-skills">
              <span className="skill-chip">Terapi ABA</span>
              <span className="skill-chip">Asesmen Perilaku</span>
              <span className="skill-chip">Program Intervensi</span>
              <span className="skill-chip">Laporan Perkembangan</span>
              <span className="skill-chip">Parent Counseling</span>
            </div>
          </div>
          <div className="pillar fade-up" style={{ transitionDelay: "0.15s" }}>
            <div className="pillar-icon">📊</div>
            <div className="pillar-title">Research & Social Work</div>
            <p className="pillar-desc">
              Pengalaman riset lapangan tingkat nasional dan analisis kebijakan
              sosial. Mampu mengubah temuan klinis yang kompleks menjadi
              rekomendasi program yang terukur dan modul edukasi yang aplikatif.
            </p>
            <div className="pillar-skills">
              <span className="skill-chip">Survei Nasional</span>
              <span className="skill-chip">Analisis Kebijakan</span>
              <span className="skill-chip">Penulisan Laporan</span>
              <span className="skill-chip">Wawancara Mendalam</span>
              <span className="skill-chip">Case Conference</span>
            </div>
          </div>
          <div className="pillar fade-up" style={{ transitionDelay: "0.3s" }}>
            <div className="pillar-icon">🌱</div>
            <div className="pillar-title">Community & Education</div>
            <p className="pillar-desc">
              Berpengalaman dalam pelatihan caregiver, home modelling untuk
              keluarga ABK, dan pengembangan program komunitas. Percaya bahwa
              ekosistem yang kuat di sekitar anak adalah kunci keberhasilan
              terapi.
            </p>
            <div className="pillar-skills">
              <span className="skill-chip">Caregiver Training</span>
              <span className="skill-chip">Home Modelling</span>
              <span className="skill-chip">Program Komunitas</span>
              <span className="skill-chip">Edukasi Orang Tua</span>
              <span className="skill-chip">Modul Intervensi</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="pengalaman">
        <div className="section-label">Rekam Jejak</div>
        <h2 className="section-title">
          Pengalaman yang
          <br />
          <em>Membentuk Praktik</em>
        </h2>
        <div className="exp-list">
          <div className="exp-item fade-up">
            <div className="exp-meta">
              <div className="exp-period">2024 – Sekarang</div>
              <div className="exp-org">Behavior Therapist Privat</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">
                Behavior Therapist — Praktik Mandiri
              </div>
              <p className="exp-impact">
                Menjalankan sesi terapi ABA secara mandiri untuk anak ASD.
                Melakukan asesmen awal, merancang program individual,
                mendampingi perkembangan klien, dan memberikan konseling berkala
                kepada orang tua mengenai strategi penanganan di rumah.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">ABA Therapy</span>
                <span className="exp-tag">Parent Counseling</span>
                <span className="exp-tag">Individual Program</span>
              </div>
            </div>
          </div>

          <div className="exp-item fade-up">
            <div className="exp-meta">
              <div className="exp-period">Sep 2024 – Sep 2025</div>
              <div className="exp-org">Rumah Bintang Ceria</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">Behavior Therapist</div>
              <p className="exp-impact">
                Memberikan terapi ABA kepada anak berkebutuhan khusus, melakukan
                asesmen sebelum program dimulai, menyampaikan perkembangan
                kepada orang tua setiap sesi, serta melakukan evaluasi berkala
                bersama tim dan keluarga klien.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">ABA Therapy</span>
                <span className="exp-tag">Progress Report</span>
                <span className="exp-tag">Team Evaluation</span>
              </div>
            </div>
          </div>

          <div className="exp-item fade-up">
            <div className="exp-meta">
              <div className="exp-period">2024</div>
              <div className="exp-org">Kementerian PPPA RI</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">
                Enumerator — Survei Nasional SPHIAR
              </div>
              <p className="exp-impact">
                Melakukan pendataan di 12 Desa/Kelurahan di 3 Kabupaten Jawa
                Timur (Pasuruan, Probolinggo, Bondowoso). Mewawancarai 60
                responden perempuan usia 13–24 tahun dan berkoordinasi dengan
                BPS serta pemerintah setempat.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Survei Nasional</span>
                <span className="exp-tag">Field Research</span>
                <span className="exp-tag">Data Collection</span>
              </div>
            </div>
          </div>

          <div className="exp-item fade-up">
            <div className="exp-meta">
              <div className="exp-period">2024</div>
              <div className="exp-org">Praktikum Magister — Bekasi</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">
                Praktisi Terapi Psikososial & Kebijakan Sosial
              </div>
              <p className="exp-impact">
                Merancang rekayasa teknologi konseling Time-Out Conditioning
                untuk menangani perilaku marah pada penyandang disabilitas
                sensorik netra. Mengembangkan program Home Modelling untuk
                keluarga anak disabilitas fisik, serta menyusun rekomendasi
                kebijakan pembinaan caregiver di Kota Bekasi.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Terapi Psikososial</span>
                <span className="exp-tag">Home Modelling</span>
                <span className="exp-tag">Analisis Kebijakan</span>
                <span className="exp-tag">Caregiver Training</span>
              </div>
            </div>
          </div>

          <div className="exp-item fade-up">
            <div className="exp-meta">
              <div className="exp-period">2021</div>
              <div className="exp-org">PPRBM Solo</div>
            </div>
            <div className="exp-content">
              <div className="exp-role">
                Staf Layanan & Fasilitator Disabilitas
              </div>
              <p className="exp-impact">
                Memberikan layanan pengembangan kapasitas forum disabilitas,
                memfasilitasi pelatihan public speaking di SLB, serta
                mendampingi beasiswa olahraga anak disabilitas di Sekolah Dasar.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Disability Services</span>
                <span className="exp-tag">Community Training</span>
                <span className="exp-tag">Fasilitator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="layanan">
        <div className="section-label">Yang Bisa Aku Tawarkan</div>
        <h2 className="section-title">
          Layanan &<br />
          <em>Kolaborasi</em>
        </h2>
        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-icon">🧩</div>
            <div className="service-title">Terapi ABA & Konsultasi ABK</div>
            <p className="service-desc">
              Sesi terapi ABA individual untuk anak ASD, asesmen perilaku awal,
              perancangan program, laporan perkembangan berkala, dan konseling
              orang tua pasca sesi.
            </p>
            <div className="service-for">
              Untuk → Orang tua & keluarga anak ASD
            </div>
          </div>
          <div
            className="service-card fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="service-icon">👨‍👩‍👧</div>
            <div className="service-title">Parent & Caregiver Training</div>
            <p className="service-desc">
              Pelatihan praktis bagi orang tua dan caregiver dalam memahami
              perilaku anak ASD, menerapkan strategi di rumah, dan membangun
              rutinitas yang mendukung regulasi emosi anak.
            </p>
            <div className="service-for">
              Untuk → Orang tua, sekolah, yayasan
            </div>
          </div>
          <div
            className="service-card fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="service-icon">📝</div>
            <div className="service-title">
              Riset & Konsultasi Program Sosial
            </div>
            <p className="service-desc">
              Pengembangan modul intervensi, asesmen kebutuhan komunitas,
              analisis kebijakan sosial, dan penyusunan program berbasis
              evidence untuk lembaga atau NGO yang bergerak di bidang
              disabilitas.
            </p>
            <div className="service-for">
              Untuk → NGO, lembaga riset, pemerintah
            </div>
          </div>
          <div
            className="service-card fade-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="service-icon">🎙️</div>
            <div className="service-title">Narasumber & Kolaborasi Konten</div>
            <p className="service-desc">
              Tersedia sebagai narasumber seminar/webinar seputar ASD, pola asuh
              ABK, dan inklusi sosial. Terbuka untuk kolaborasi konten edukasi
              dengan brand, media, atau platform yang relevan.
            </p>
            <div className="service-for">
              Untuk → Media, brand, institusi pendidikan
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="credentials">
        <div className="section-label">Kredensial</div>
        <h2 className="section-title">
          Pendidikan &<br />
          <em>Sertifikasi</em>
        </h2>
        <div className="cred-grid">
          <div className="cred-card fade-up">
            <div className="cred-icon">🎓</div>
            <div className="cred-title">
              Magister Pekerjaan Sosial (M.Tr.Sos)
            </div>
            <div className="cred-issuer">
              Politeknik Kesejahteraan Sosial Bandung · 2024 · IPK 3,72
            </div>
          </div>
          <div
            className="cred-card fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="cred-icon">📋</div>
            <div className="cred-title">
              Sertifikat Kompetensi Pekerja Sosial
            </div>
            <div className="cred-issuer">
              LSP Kementerian Sosial RI · Berlaku 2023–2028
            </div>
          </div>
          <div
            className="cred-card fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="cred-icon">🧠</div>
            <div className="cred-title">Pelatihan ABA Tersertifikasi</div>
            <div className="cred-issuer">
              CHARACTER × Yamet Training Center · Desember 2025
            </div>
          </div>
          <div
            className="cred-card fade-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="cred-icon">🏛️</div>
            <div className="cred-title">Workshop Pemenuhan Hak Disabilitas</div>
            <div className="cred-issuer">PPRBM Solo × Kemendikbud · 2021</div>
          </div>
          <div
            className="cred-card fade-up"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="cred-icon">📊</div>
            <div className="cred-title">Enumerator Survei Nasional SPHIAR</div>
            <div className="cred-issuer">Kementerian PPPA RI · 2024</div>
          </div>
          <div
            className="cred-card fade-up"
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="cred-icon">🌿</div>
            <div className="cred-title">
              Praktikum Magister — Terapi & Kebijakan
            </div>
            <div className="cred-issuer">
              Sentra Terpadu Pangudi Luhur Bekasi · 2024
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="kontak">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">Hubungi Saya</div>
            <h2 className="section-title">
              Ada yang bisa
              <br />
              kita <em>wujudkan</em>
              <br />
              bersama?
            </h2>
            <p className="contact-tagline">
              Terbuka untuk diskusi, kolaborasi konten, konsultasi program, atau
              sekadar bertukar pikiran seputar dunia ABK dan pekerjaan sosial.
            </p>
            <div className="contact-links">
              <a
                href="https://wa.me/6285746124020"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-link-icon">📱</div>
                <span>085746124020 (WhatsApp)</span>
              </a>
              <a href="mailto:firdhaoctav@gmail.com" className="contact-link">
                <div className="contact-link-icon">✉️</div>
                <span>firdhaoctav@gmail.com</span>
              </a>
              <a href="#" className="contact-link">
                <div className="contact-link-icon">📍</div>
                <span>Bandung, Jawa Barat</span>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="open-collab">
              Terbuka untuk <em>kolaborasi</em> dalam bidang:
            </div>
            <ul className="collab-list">
              <li>Konten edukasi parenting & ABK</li>
              <li>Training & workshop orang tua / caregiver</li>
              <li>Riset & pengembangan program sosial</li>
              <li>Narasumber seminar / webinar</li>
              <li>Konsultasi program inklusi</li>
              <li>Branding & partnership</li>
            </ul>
            <a
              href="https://wa.me/6285746124020"
              className="contact-cta"
              target="_blank"
              rel="noreferrer"
            >
              Mulai Percakapan →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-name">Firdha Dewi Oktaviani</div>
        <p>© 2025 · Behavior Therapist & Social Worker · Bandung</p>
      </footer>
    </>
  );
}

export default App;
