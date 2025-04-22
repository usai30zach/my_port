function Portfolio() {
  const { useEffect, useState } = React;

  useEffect(() => {
    const rellaxScript = document.createElement('script');
    rellaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js';
    rellaxScript.onload = () => new Rellax('.rellax');
    document.body.appendChild(rellaxScript);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    aosScript.onload = () => AOS.init({ duration: 800, once: true });
    document.body.appendChild(aosScript);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToJourney = (e) => {
    e.preventDefault();
    const journeySection = document.getElementById("journey");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToStack = (e) => {
    e.preventDefault();
    const stackSection = document.getElementById("techstack");
    if (stackSection) {
      stackSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const journey = [
    {
      year: "2018–Present",
      title: "Lead Developer – T.K. Graphics",
      desc: "Built an in-house ERP system using Laravel, PostgreSQL and React. Reduced processing time by 25%.",
      tech: ["Laravel", "React", "PostgreSQL"]
    },
    {
      year: "2017–2018",
      title: "IT & Product Manager – Daraz Myanmar",
      desc: "Managed seller onboarding and PBX setup. Improved infrastructure stability by 40%.",
      tech: ["Laravel", "Bootstrap", "MySQL"]
    },
    {
      year: "2016–2017",
      title: "Project Manager – Takumi",
      desc: "Directed Japan-based digital projects and boosted social media engagement.",
      tech: ["JavaScript", "HTML5", "CSS3"]
    },
    {
      year: "2015–2016",
      title: "Team Lead – Cyber Plus",
      desc: "Led full-stack projects for enterprise clients and managed a team of developers.",
      tech: ["PHP", "jQuery", "HTML"]
    },
    {
      year: "2014–2015",
      title: "IT & Admin Manager – Technomation",
      desc: "Developed GPS tracking solutions and improved customer acquisition by 25%.",
      tech: ["GPS", "MySQL", "Networking"]
    },
    {
      year: "2013–2014",
      title: "Web Specialist – UNOPS",
      desc: "Rebuilt website and implemented a CMS with location-based features.",
      tech: ["CodeIgniter", "Google Maps", "Bootstrap"]
    },
    {
      year: "2007–2013",
      title: "Dev & Team Lead – iHost Myanmar",
      desc: "Progressed from junior to lead and delivered scalable web applications.",
      tech: ["PHP", "HTML", "JavaScript"]
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''} font-[Poppins,sans-serif] transition duration-300`} style={{ scrollBehavior: 'smooth' }}>
      <style>{`@import url('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css');`}</style>
      <style>{`body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at top left, #4f46e5, transparent), radial-gradient(circle at bottom right, #0ea5e9, transparent); opacity: 0.05; pointer-events: none; z-index: 0; }`}</style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">Sai.dev</h1>
          <div className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#techstack" className="hover:underline">Tech Stacks</a>
            <a href="#journey" className="hover:underline">Journey</a>
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
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute w-full h-full rellax" data-rellax-speed="-2">
            <img src="./images/developer.svg" alt="hero" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight">Hi, I'm Sai 👋</h1>
            <p className="text-xl text-gray-300">Full Stack Developer | Team Lead | ERP Specialist</p>
            <div className="flex justify-center gap-4">
              <button onClick={scrollToJourney} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow">Explore My Journey</button>
              <button onClick={scrollToStack} className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold shadow">Check My Stacks</button>
              <a href="/SaiAung.pdf" target="_blank" className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold shadow border border-white/30">Download Resume</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="max-w-6xl mx-auto px-4 py-20" id="about">
          <div className="md:flex items-center gap-10" data-aos="fade-up">
            <img src="./images/me.png" alt="About" className="w-full md:w-1/2 rounded-xl shadow-md" />
            <div className="text-gray-300 mt-6 md:mt-0 leading-relaxed">
              <h2 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
              <p>
                I'm a full stack developer with 15+ years of experience, including 6+ years in Canada leading digital transformation projects. I've built scalable ERP systems, dashboards, and contributed to humanitarian tech at UNOPS.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="techstack" className="bg-gray-800 py-16 text-center text-white">
  <h2 className="text-3xl font-semibold text-blue-400 mb-8" data-aos="fade-up">Tech Stack</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm" data-aos="fade-up" data-aos-delay="100">
    {[
      "React.js", "Laravel", "TypeScript", "PostgreSQL",
      "Node.js", "Tailwind CSS", "Bootstrap", "HTML5",
      "CSS3", "JavaScript", "Git", "MongoDB",
      "REST API", "MySQL", "Figma", "Docker (basic)"
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-white/10 rounded-xl py-4 px-3 border border-white/10 hover:bg-white/20 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>


        {/* Journey Timeline */}
        <section id="journey" className="bg-gray-900 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-12 text-center" data-aos="fade-up">My Professional Journey</h2>
            <div className="relative border-l-4 border-blue-500 pl-6">
              {journey.map((item, i) => (
                <div key={i} className="mb-12 relative" data-aos="fade-up" data-aos-delay={i * 100}>
                   {/* <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full animate-ping" /> */}
                   <div className="ml-8 transition-all duration-500 border border-blue-500 hover:border-blue-400 hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] rounded-xl p-6 bg-white/5">
                    <h3 className="text-xl font-bold text-blue-300">{item.title}</h3>
                    <span className="text-sm text-gray-400">{item.year}</span>
                    {/* <p className="text-gray-300 mt-2">{item.desc}</p> */}
                    <p
              className="text-gray-300 mt-2"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
                    <p className="text-sm text-blue-400 mt-1">Tech: {item.tech.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 text-center" id="contact">
          <h2 className="text-3xl font-semibold text-green-400 mb-6">Contact</h2>
          <p className="text-gray-400 mb-2">📧 sai.zach2011@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/sai-aung-05a8baa1/" className="underline text-blue-400">LinkedIn</a> |
            <a href="https://github.com/usai30zach" className="underline text-blue-400 ml-2">GitHub</a>
          </p>
        </section>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
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
