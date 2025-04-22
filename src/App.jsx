import React from 'react';
import ReactDOM from 'react-dom/client';
import ExperienceSection from './experiencesection';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Rellax from 'rellax';

function Portfolio() {
  const { useEffect, useState } = React;

  useEffect(() => {
    new Rellax('.rellax');
    AOS.init({ duration: 800, once: true });
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'ERP System – T.K. Graphics',
      description: 'Built a custom ERP for print manufacturing including inventory, order management, production tracking, and invoicing.',
      tech: ['Laravel', 'React', 'PostgreSQL', 'Tailwind'],
    },
    {
      title: 'UNOPS Website Maintenance',
      description: 'Maintained and upgraded the official UNOPS website.',
      tech: ['HTML', 'CSS', 'JavaScript', 'CMS'],
    },
    {
      title: 'LTV Report Tool',
      description: 'CSV upload tool that calculates customer LTV monthly. Includes filters, retention, and PDF export.',
      tech: ['React', 'Node.js', 'TypeScript'],
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''} transition duration-300 ease-in-out font-[Poppins, sans-serif]`} style={{ scrollBehavior: 'smooth' }}>
      <style>{`body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at top left, #4f46e5, transparent), radial-gradient(circle at bottom right, #0ea5e9, transparent); opacity: 0.05; pointer-events: none; z-index: 0; }`}</style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">Sai.dev</h1>
          <div className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm px-3 py-1 rounded-full shadow hover:shadow-md transition"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <div className="bg-gradient-to-br from-[#0f172a] via-indigo-900 to-blue-800 dark:from-black dark:via-gray-900 dark:to-gray-800 text-white pt-20 relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute w-full h-full rellax" data-rellax-speed="-2">
            <img
              src="./images/developer.svg"
              alt="hero background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight">Hi, I'm Sai 👋</h1>
            <p className="text-xl text-gray-300">Full Stack Developer | Team Lead | ERP Specialist</p>
            <div className="flex justify-center gap-4">
              <button onClick={scrollToProjects} className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow">Explore Projects</button>
              <a href="/Sai_Resume.pdf" target="_blank" className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold shadow border border-white/30">Download Resume</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-20" id="about">
          <div className="md:flex items-center gap-10" data-aos="fade-up">
            <img src="./images/me.png" alt="About" className="w-full md:w-1/2 rounded-xl shadow-md" />
            <div className="text-gray-300 leading-relaxed mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
              <p>
                I'm a full stack developer with 15+ years of experience, including 6+ years in Canada leading digital transformation projects. I've built scalable ERP systems, customer reporting dashboards, and contributed to humanitarian tech at UNOPS.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center" id="contact">
          <h2 className="text-3xl font-semibold text-green-400 mb-6">Contact</h2>
          <p className="text-gray-400 mb-2">📧 sai.zach2011@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/sai-aung-05a8baa1/" className="underline text-blue-400">LinkedIn</a> |
            <a href="https://github.com/usai30zach" className="underline text-blue-400 ml-2">GitHub</a>
          </p>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to top"
        >
          ⬆️
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);

export default Portfolio;