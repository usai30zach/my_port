import { useEffect, useState } from 'react';

export default function Portfolio() {
  useEffect(() => {
    const rellaxScript = document.createElement('script');
    rellaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js';
    rellaxScript.onload = () => new Rellax('.rellax');
    document.body.appendChild(rellaxScript);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

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
    <div className={`transition duration-300 ease-in-out ${darkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-blue-100 via-green-100 to-yellow-50 text-gray-800'} font-[Poppins]`}>
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm px-4 py-2 rounded-full shadow hover:shadow-md transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
      </div>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-full rellax" data-rellax-speed="-2">
          <img
            src="https://undraw.org/api/illustrations/undraw_developer_activity_re_39tg.svg"
            alt="hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-300 drop-shadow">Hi, I'm Sai 👋</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Full Stack Developer | Team Lead | ERP Specialist</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12 animate-fade-in">
        <div>
          <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400">About Me</h2>
          <div className="md:flex items-center gap-8 mt-4">
            <img
              src="https://undraw.org/api/illustrations/undraw_feeling_proud_qne1.svg"
              alt="About"
              className="w-full md:w-2/5 rounded-xl shadow-md"
            />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 md:mt-0">
              I'm a full stack developer with 15+ years of experience, including 6+ years in Canada leading digital transformation projects. I've built scalable ERP systems, customer reporting dashboards, and contributed to humanitarian tech at UNOPS.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-green-600 dark:text-green-400">Work Experience</h2>
          <ul className="space-y-4 mt-4">
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Team Lead – T.K. Graphics</h3>
              <p>Led ERP development and managed team delivery for a print manufacturing firm.</p>
            </li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Web Developer – UNOPS</h3>
              <p>Maintained and enhanced the official UNOPS website with a focus on performance and accessibility.</p>
            </li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Full Stack Developer – Freelance</h3>
              <p>Delivered applications using React, Laravel, PostgreSQL, and Node.js across multiple industries.</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400" id="projects">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all space-y-2"
              >
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{p.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tech: {p.tech.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-12">
          <a
            href="/public/Sai_Resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white rounded-full shadow transition"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div id="contact">
          <h2 className="text-3xl font-semibold text-green-600 dark:text-green-400 pt-16">Contact</h2>
          <div className="text-center space-y-2 mt-4">
            <p>📧 sai.email@example.com</p>
            <p>🔗 <a href="https://linkedin.com/in/sai" className="underline text-blue-700 dark:text-blue-300">LinkedIn</a></p>
            <p>💻 <a href="https://github.com/sai" className="underline text-blue-700 dark:text-blue-300">GitHub</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
