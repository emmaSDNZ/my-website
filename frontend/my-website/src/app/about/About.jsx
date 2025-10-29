"use client";
import React from "react";

export default function About() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 text-center">
      
      {/* Título */}
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      {/* Descripción */}
    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
    I am a software developer and data scientist specialized in
    <span className="font-semibold text-gray-900">
        {" "} intelligent automation and enterprise AI agents.
    </span> 
    I design and implement solutions that integrate Large Language Models (LLMs),
    multi-agent architectures and process automation to bring
    Artificial Intelligence into real business operations — improving efficiency, and
    enabling companies to scale with technology.
    </p>
      {/* Bloque de dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="font-semibold text-xl mb-3">Core Expertise</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✅ AI Agents & LLM Integration</li>
            <li>✅ Web Development & Microservices</li>
            <li>✅ Database & Data Engineering</li>
            <li>✅ Machine Learning Applications</li>
            <li>✅ Process Automation in Enterprises</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="font-semibold text-xl mb-3">Tech Stack</h3>
          <ul className="text-gray-600 space-y-2">
            <li>⚙️ Python, JavaScript, FastAPI, Node.js</li>
            <li>🧠 LangChain, RAG, Vector Databases</li>
            <li>🗄 SQL Server, PostgreSQL, MongoDB</li>
            <li>⚡ React.js, Next.js, TailwindCSS</li>
            <li>☁️ Docker, Cloud Integration</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
