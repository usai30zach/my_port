const { useState } = React;

function Portfolio() {
  React.useEffect(() => {
    const rellaxScript = document.createElement('script');
    rellaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js';
    rellaxScript.onload = () => new Rellax('.rellax');
    document.body.appendChild(rellaxScript);
  }, []);

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
    <div className="bg-gradient-to-br from-blue-100 via-green-100 to-yellow-50 text-gray-800 font-[Poppins]">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-full rellax" data-rellax-speed="-2">
          <img
            src="https://undraw.co/api/illustrations/4560"
            alt="hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-blue-700 drop-shadow">Hi, I'm Sai 👋</h1>
          <p className="text-lg text-gray-700">Full Stack Developer | Team Lead | ERP Specialist</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
        <div className="md:flex items-center gap-8">
          <img
            src="https://undraw.co/api/illustrations/5748"
            alt="About"
            className="w-full md:w-1/3 rounded-xl shadow-md"
          />
          <p className="text-gray-700 leading-relaxed">
            I'm a full stack developer with 15+ years of experience, including 6+ years in Canada leading digital transformation projects.
            I've built scalable ERP systems, customer reporting dashboards, and contributed to humanitarian tech at UNOPS.
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-green-600">Work Experience</h2>
        <ul className="space-y-4">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-800">Team Lead – T.K. Graphics</h3>
            <p>Led ERP development and managed team delivery for a print manufacturing firm.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-800">Web Developer – UNOPS</h3>
            <p>Maintained and enhanced the official UNOPS website with a focus on performance and accessibility.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-800">Full Stack Developer – Freelance</h3>
            <p>Delivered applications using React, Laravel, PostgreSQL, and Node.js across multiple industries.</p>
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-yellow-600" id="projects">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all space-y-2"
            >
              <h3 className="text-xl font-bold text-blue-800">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-sm text-gray-500">Tech: {p.tech.join(', ')}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <a
            href="/public/Sai_Resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>

        <h2 className="text-3xl font-semibold text-green-600 pt-16" id="contact">Contact</h2>
        <div className="text-center space-y-2">
          <p>📧 sai.email@example.com</p>
          <p>🔗 <a href="https://linkedin.com/in/sai" className="underline text-blue-700">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/sai" className="underline text-blue-700">GitHub</a></p>
        </div>
      </section>
    </div>
  );
}

// render it into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);