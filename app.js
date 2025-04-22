function Portfolio() {
  const { useEffect, useState } = React;

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
    <div className="transition duration-300 ease-in-out bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white font-[Poppins, sans-serif]">
      <section className="h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold leading-tight">Hi, I'm Sai 👋</h1>
          <p className="text-xl text-gray-300">Full Stack Developer | Team Lead | ERP Specialist</p>
          <a href="#projects" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow">Explore Projects</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20" id="about">
        <div className="md:flex items-center gap-10">
          <img src="./images/about.svg" alt="About" className="w-full md:w-1/2 rounded-xl shadow-md" />
          <div className="text-gray-300 leading-relaxed mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
            <p>
              I'm a full stack developer with 15+ years of experience, including 6+ years in Canada leading digital transformation projects. I've built scalable ERP systems, customer reporting dashboards, and contributed to humanitarian tech at UNOPS.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition space-y-2"
              >
                <h3 className="text-xl font-bold text-blue-300">{p.title}</h3>
                <p className="text-gray-300">{p.description}</p>
                <p className="text-sm text-gray-400">Tech: {p.tech.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-green-400 mb-6">Contact</h2>
        <p className="text-gray-400 mb-2">📧 sai.email@example.com</p>
        <p>
          <a href="https://linkedin.com/in/sai" className="underline text-blue-400">LinkedIn</a> |
          <a href="https://github.com/sai" className="underline text-blue-400 ml-2">GitHub</a>
        </p>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);
