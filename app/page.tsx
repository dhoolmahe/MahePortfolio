// ========================
// File: app/page.tsx
// ========================
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const skills = ['Java','Spring Boot','Spring WebFlux','Microservices','Kubernetes','Docker','Kafka','PostgreSQL','React','TypeScript','Azure','AWS'];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Background Gradient Animation */}
      <div className="fixed inset-0 -z-10 animate-gradient-bg"></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600 opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-600 opacity-10 rounded-full animate-pulse-slow"></div>

      {/* Header */}
      <header className="bg-gray-900 bg-opacity-80 shadow p-6 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">Mahendran Visvanathan</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-gray-300 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-24 px-6 text-center">
        <motion.h2 className="text-5xl font-bold mb-6" variants={fadeUp} initial="hidden" animate="visible">
          Senior Java Lead / Full Stack Engineer
        </motion.h2>
        <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          20+ years of experience building enterprise platforms using Java, Spring Boot, microservices, cloud infrastructure, and modern frontend frameworks.
        </motion.p>
      </section>

      {/* About Section */}
      <motion.section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl mx-6 mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">About</h3>
          <p className="text-gray-200 text-lg">
            Senior Java Lead Engineer based in the Netherlands with expertise in banking, healthcare, and mobility platforms. Skilled in microservices, reactive systems, and cloud-native applications.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="py-20 px-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map(skill => (
              <div key={skill} className="bg-gray-700 bg-opacity-60 hover:bg-gray-600 hover:scale-105 transition-all p-4 rounded-2xl text-center text-white shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="py-20 px-6 bg-gray-900 bg-opacity-80 rounded-xl mx-6 mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-xl mb-2">AI Document Intelligence</h4>
              <p className="text-gray-300">
                AI-powered platform for extracting insights from large document repositories using LLM APIs and scalable backend architecture.
              </p>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-xl mb-2">Real-time GPS Tracker</h4>
              <p className="text-gray-300">
                Real-time location tracking app built with React, Supabase, and Leaflet maps.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section id="resume" className="py-20 px-6 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold mb-6">Resume</h3>
        <a href="https://mahecv.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-blue-500 transition-all">
          View My CV
        </a>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl mx-6 mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Contact</h3>
          <p className="flex justify-center items-center gap-2"><FaEnvelope className="inline" /> mahendran.visvanathan@gmail.com</p>
          <p className="flex justify-center items-center gap-2">
            <FaLinkedin className="inline" />
            <a href="https://www.linkedin.com/in/mahendran-visvanathan-1898bb27/" className="text-blue-400 hover:underline">Profile</a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Mahendran Visvanathan
      </footer>
    </div>
  );
}
