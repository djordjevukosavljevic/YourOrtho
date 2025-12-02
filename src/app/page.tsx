import React, { useEffect, useRef } from "react";
import '../styles/page.module.css';
import { House, Stethoscope, Hospital, GraduationCap, Magnet, Contact } from 'lucide-react';
import About from "@/components/About";
import Contacts from "@/components/Contact";
import Services from "@/components/Services"
import Experience from "@/components/Experience";
import Equipment from "@/components/Equipment";
import "../styles/style.css"


export default function HomePage() {
  return (
    <main className="scroll-smooth">
      {/* NAVBAR */}
      {/* With views */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 flex justify-center space-x-6 py-4">
        <a href="#hero" className="flex items-center gap-2 hover:text-blue-600">
          <House className="w-4 h4" />
          Home</a>
        <a href="#about" className="flex items-center gap-2 hover:text-blue-600 text-center">
          <Stethoscope className="w-4 h4" />
          About</a>
        <a href="#services" className="flex items-center gap-2 hover:text-blue-600">
          <Hospital className="w-4 h4" />
          Services</a>
        <a href="#experience" className="flex items-center gap-2 hover:text-blue-600">
          <GraduationCap className="w-4 h4" />
          Experience</a>
        <a href="#equipment" className="flex items-center gap-2 hover:text-blue-600">
          <Magnet className="w-4 h4" />
          Equipment</a>
        <a href="#contact" className="flex items-center gap-2 hover:text-blue-600">
          <Contact className="w-4 h4" />
          Contact</a>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-center text-blue-800">Expert Radiology Consultations</h1>
        <p className="mt-4 text-lg text-center text-gray-700">Advanced scanning, precise results, professional care.</p>
        <a href="#contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get in touch
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
        <div className="max-w-2xl text-center"><About></About></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="min-h-screen flex flex-col justify-center bg-gray-100 px-4 py-20">
        <div className="space-y-4 text-lg text-black-700 max-w-xl mx-auto">
          <Services></Services>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
        <div className="max-w-2xl text-center">
          <Experience></Experience>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="min-h-screen flex flex-col justify-center bg-gray-100 px-4 py-20">
        <div>
          <Equipment></Equipment>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
        <div><Contacts></Contacts></div>
      </section>

      {/* FOOTER */}
      <section>
        <footer className="text-center py-6 text-gray-500 bg-gray-900 text-white">
          &copy; {new Date().getFullYear()} Radiologist - Dr Vladimir - All rights reserved
        </footer>
      </section>
    </main>
  );
}
