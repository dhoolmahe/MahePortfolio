// Fixed Next.js 16 + Tailwind v4 portfolio page.tsx
// Properly closed JSX elements, safe symbols, CV link included

import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow p-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mahendran Visvanathan</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#resume" className="hover:text-blue-600">Resume</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Senior Java Lead / Full Stack Engineer</h2>
        <p className="text-lg text-gray-700">
          20+ years of experience building enterprise platforms using Java, Spring Boot, microservices, cloud infrastructure, and modern frontend frameworks.
        </p>
      </section>

      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-gray-700">
            Senior Java Lead Engineer based in the Netherlands with expertise in banking, healthcare, and mobility platforms. Skilled in microservices, reactive systems, and cloud-native applications.
          </p>
        </div>
      </section>

      <section id="skills" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Java','Spring Boot','Spring WebFlux','Microservices','Kubernetes','Docker','Kafka','PostgreSQL','React','TypeScript','Azure','AWS'].map(skill => (
              <div key={skill} className="bg-gray-100 p-4 rounded-xl text-center">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold text-lg mb-2">AI Document Intelligence</h4>
              <p className="text-gray-700">
                AI-powered platform for extracting insights from large document repositories using LLM APIs and scalable backend architecture.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold text-lg mb-2">Real-time GPS Tracker</h4>
              <p className="text-gray-700">
                Real-time location tracking app built with React, Supabase, and Leaflet maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Resume</h3>
        <a href="https://mahecv.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          View My CV
        </a>
      </section>

      <section id="contact" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/mahendran-visvanathan-1898bb27/</p>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Mahendran Visvanathan
      </footer>
    </div>
  );
}