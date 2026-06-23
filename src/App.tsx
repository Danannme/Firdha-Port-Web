import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Keahlian from "./components/Keahlian";
import Pengalaman from "./components/Pengalaman";
import Aktivitas from "./components/Aktivitas";
import Testimoni from "./components/Testimoni";
import Program from "./components/Program";
import Sertifikasi from "./components/Sertifikasi";
import VisiMisi from "./components/VisiMisi";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#2C2C2C] font-sans antialiased">
      <Navbar />
      <Hero />
      <Keahlian />
      <Pengalaman />
      <Aktivitas />
      <Testimoni />
      <Program />
      <Sertifikasi />
      <VisiMisi />
      <Footer />
    </div>
  );
};

export default App;
