"use client";
import { useState } from "react";
import Navbar from "../../libreries/components/Navbar";
import Content from "../../libreries/components/Content";
import Footer from "../../libreries/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("ABOUT");

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background mode:bg-black">
      {/* Navbar fijo */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Padding para que el contenido no quede detrás del navbar */}
      <main className="flex flex-1 w-full max-w-5xl mx-auto py-40 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* Renderizado dinámico según sección activa */}
          <Content section={activeSection} />
        </div>
      </main>

      <footer className="w-full py-8 text-center">
        <Footer/>
      </footer>
    </div>
  );
}
