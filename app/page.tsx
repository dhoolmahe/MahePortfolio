import React from 'react';

export default function Portfolio() {
return ( <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans"> <header className="bg-gray-900 bg-opacity-80 shadow p-6 backdrop-blur-md"> <div className="max-w-5xl mx-auto flex justify-between items-center"> <h1 className="text-3xl font-extrabold tracking-wide">Mahendran Visvanathan</h1> <nav className="space-x-6"> <a href="#about" className="hover:text-blue-400 transition-colors">About</a> <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a> <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a> <a href="#resume" className="hover:text-blue-400 transition-colors">Resume</a> <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a> </nav> </div> </header>

  <section className="max-w-5xl mx-auto py-24 px-6 text-center">
    <h2 className="text-5xl font-bold mb-6">Senior Java Lead / Full Stack Engineer</h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      20+ years of experience building enterprise platforms using Java, Spring Boot, microservices, cloud infrastructure, and modern frontend frameworks.
    </p>
  </section>

  <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl mx-6 mb-12">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">About</h3>
      <p className="text-gray-200 text-lg">
        Senior Java Lead Engineer based in the Netherlands with expertise in banking, healthcare, and mobility platforms. Skilled in microservices, reactive systems, and cloud-native applications.
      </p>
    </div>
  </section>

  <section id="skills" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">Core Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {['Java','Spring Boot','Spring WebFlux','Microservices','Kubernetes','Docker','Kafka','PostgreSQL','React','TypeScript','Azure','AWS'].map(skill => (
          <div key={skill} className="bg-gray-700 bg-opacity-60 hover:bg-blue-700 transition-colors p-4 rounded-2xl text-center text-white shadow-lg">
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="projects" className="py-20 px-6 bg-gray-900 bg-opacity-80 rounded-xl mx-6 mb-12">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg hover:shadow-blue-500 transition-shadow">
          <h4 className="font-bold text-xl mb-2">AI Document Intelligence</h4>
          <p className="text-gray-300">
            AI-powered platform for extracting insights from large document repositories using LLM APIs and scalable backend architecture.
          </p>
        </div>
        <div className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg hover:shadow-blue-500 transition-shadow">
          <h4 className="font-bold text-xl mb-2">Real-time GPS Tracker</h4>
          <p className="text-gray-300">
            Real-time location tracking app built with React, Supabase, and Leaflet maps.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="resume" className="py-20 px-6 text-center">
    <h3 className="text-3xl font-semibold mb-6">Resume</h3>
    <a href="https://mahecv.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-colors">
      View My CV
    </a>
  </section>

  <section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl mx-6 mb-12">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-4">Contact</h3>
      <p>Email: mahendran.visvanathan@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/mahendran-visvanathan-1898bb27/" className="text-blue-400 hover:underline">Profile</a></p>
    </div>
  </section>

  <footer className="text-center py-8 text-gray-400 border-t border-gray-700">
    &copy; {new Date().getFullYear()} Mahendran Visvanathan
  </footer>
</div>

);
}
