"use client";
import { useEffect } from "react";
import '../styles/page.module.css';
import "locomotive-scroll/dist/locomotive-scroll.css";
import {House, Stethoscope, Hospital, Star, Magnet, Contact} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 flex justify-center space-x-6 py-4">
        <a href="#hero" className="flex items-center gap-2 hover:text-blue-600">
            <House className="w-4 h4"/>
            Home</a>
        <a href="#about" className="flex items-center gap-2 hover:text-blue-600">
            <Stethoscope className="w-4 h4"/>
            About</a>
        <a href="#services" className="flex items-center gap-2 hover:text-blue-600">
            <Hospital className="w-4 h4"/>
            Services</a>
        <a href="#testimonials" className="flex items-center gap-2 hover:text-blue-600">
            <Star className="w-4 h4"/>
            Testimonials</a>
        <a href="#equipment" className="flex items-center gap-2 hover:text-blue-600">
            <Magnet className="w-4 h4"/>
            Equipment</a>
        <a href="#contact" className="flex items-center gap-2 hover:text-blue-600">
            <Contact className="w-4 h4"/>
            Contact</a>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-center text-blue-800">Expert Radiology Diagnostics</h1>
        <p className="mt-4 text-lg text-center text-gray-700">Advanced scanning, precise results, professional care.</p>
        <a href="#services" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Services
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Vukosavljevic is a board-certified radiologist with over 40 years of experience providing diagnostic imaging services. Dedicated to accurate diagnosis and compassionate care.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="min-h-screen flex flex-col justify-center bg-gray-100 px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-xl mx-auto">
          <li>✅ Magnetic Resonance Imaging (MRI)</li>
          <li>✅ Computed Tomography (CT Scan)</li>
          <li>✅ Ultrasound (Sonography)</li>
          <li>✅ X-Ray Imaging</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <p className="italic text-gray-600 mb-4">
            "Professional service, quick results. I highly recommend!"
          </p>
          <p className="italic text-gray-600">
            "State-of-the-art equipment and friendly staff."
          </p>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="min-h-screen flex flex-col justify-center bg-gray-100 px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Equipment</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          Our clinic is equipped with the latest MRI and CT scanning technology for the most precise diagnostic results.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name and Lastname"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />
         <input
            type="text" 
            placeholder="Subject"
            className="w-full p-3 border rounded"
         />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows={4}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-gray-600">📍 Address | ☎️ Phone Number | ✉️ Email</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 bg-gray-900 text-white">
        &copy; {new Date().getFullYear()} Radiologist Clinic. All rights reserved.
      </footer>
    </main>
  );
}