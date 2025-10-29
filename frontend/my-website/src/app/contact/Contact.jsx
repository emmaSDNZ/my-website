"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Aquí podrías integrar un servicio real como EmailJS, API Next.js, o backend propio
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-gray-600 text-center mb-10">
        Have a project or idea in mind? Let's connect and bring it to life.
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-md border border-gray-100"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Información de contacto adicional */}
      <div className="mt-12 text-gray-600 text-center space-y-2">
        <p>Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/tu-perfil" className="text-blue-500 hover:underline">linkedin.com/in/tu-perfil</a></p>
        <p>GitHub: <a href="https://github.com/tu-usuario" className="text-blue-500 hover:underline">github.com/tu-usuario</a></p>
      </div>
    </section>
  );
}
