const { useState } = React;

function App() {
  const projects = [
    {
      title: 'ERP System – T.K. Graphics',
      description:
        'Built a custom ERP for print manufacturing including inventory, order management, production tracking, and invoicing. Integrated PDF handling, dashboards, and reporting tools.',
      tech: ['Laravel', 'React', 'PostgreSQL', 'Tailwind'],
    },
    {
      title: 'UNOPS Website Maintenance',
      description:
        'Maintained and upgraded the official UNOPS website, ensuring consistent performance, accessibility, and implementing new features.',
      tech: ['HTML', 'CSS', 'JavaScript', 'CMS'],
    },
    {
      title: 'LTV Report Tool',
      description:
        'CSV upload tool that calculates customer LTV monthly. Features include filtering, average retention, and PDF export.',
      tech: ['React', 'Node.js', 'TypeScript'],
    },
  ];

  return React.createElement(
    'div',
    { className: 'space-y-16' },

    // Intro
    React.createElement('section', { className: 'text-center space-y-4' },
      React.createElement('h1', { className: 'text-5xl font-bold text-blue-700' }, "Hi, I'm Sai 👋"),
      React.createElement('p', { className: 'text-lg text-gray-600' }, 'Full Stack Developer | Team Lead | Problem Solver'),
      React.createElement('div', { className: 'flex justify-center gap-4 pt-2' },
        React.createElement('a', { href: '#contact', className: 'underline text-green-600' }, 'Get in Touch'),
        React.createElement('a', { href: '#projects', className: 'underline text-yellow-600' }, 'View Projects')
      )
    ),

    // About Me
    React.createElement('section', { id: 'about', className: 'space-y-4' },
      React.createElement('h2', { className: 'text-3xl font-semibold text-blue-600' }, 'About Me'),
      React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
        "I'm a Full Stack Developer with 15+ years of experience, including over 6 years in Canada leading development teams. I specialize in scalable web applications, ERP systems, and data-driven dashboards using React, Laravel, Node.js, PostgreSQL, and more."
      )
    ),

    // Work Experience
    React.createElement('section', { id: 'experience', className: 'space-y-4' },
      React.createElement('h2', { className: 'text-3xl font-semibold text-green-600' }, 'Work Experience'),
      React.createElement('ul', { className: 'space-y-3' },
        React.createElement('li', { className: 'bg-white p-4 rounded-xl shadow' },
          React.createElement('h3', { className: 'text-xl font-semibold' }, 'Team Lead – T.K. Graphics'),
          React.createElement('p', { className: 'text-gray-700' },
            'Led development of a custom ERP system for print manufacturing. Oversaw feature architecture, database design, and production deployment.'
          )
        ),
        React.createElement('li', { className: 'bg-white p-4 rounded-xl shadow' },
          React.createElement('h3', { className: 'text-xl font-semibold' }, 'Web Developer – UNOPS'),
          React.createElement('p', { className: 'text-gray-700' },
            'Maintained and upgraded the UNOPS website, improving performance and building new CMS-backed features.'
          )
        ),
        React.createElement('li', { className: 'bg-white p-4 rounded-xl shadow' },
          React.createElement('h3', { className: 'text-xl font-semibold' }, 'Full Stack Developer – Various Projects'),
          React.createElement('p', { className: 'text-gray-700' },
            'Developed full-stack apps with React, TypeScript, Laravel, and PostgreSQL. Strong focus on user experience, reusability, and scalable design.'
          )
        )
      )
    ),

    // Projects
    React.createElement('section', { id: 'projects', className: 'space-y-6' },
      React.createElement('h2', { className: 'text-3xl font-semibold text-yellow-600' }, 'Projects'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
        ...projects.map((p, i) =>
          React.createElement('div', { key: i, className: 'bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all space-y-2' },
            React.createElement('h3', { className: 'text-xl font-bold text-blue-800' }, p.title),
            React.createElement('p', { className: 'text-gray-600' }, p.description),
            React.createElement('p', { className: 'text-sm text-gray-500' }, `Tech: ${p.tech.join(', ')}`)
          )
        )
      )
    ),

    // Resume
    React.createElement('section', { id: 'resume', className: 'space-y-4 text-center' },
      React.createElement('h2', { className: 'text-3xl font-semibold text-blue-600' }, 'Resume'),
      React.createElement('a', {
        href: './public/Sai_Resume.pdf',
        target: '_blank',
        className: 'inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition'
      }, 'Download Resume (PDF)')
    ),

    // Contact
    React.createElement('section', { id: 'contact', className: 'space-y-4 text-center' },
      React.createElement('h2', { className: 'text-3xl font-semibold text-green-600' }, 'Contact'),
      React.createElement('p', {}, '📧 sai.email@example.com'),
      React.createElement('p', {}, '🔗 ',
        React.createElement('a', { href: 'https://linkedin.com/in/sai', className: 'underline text-blue-700' }, 'LinkedIn')
      ),
      React.createElement('p', {}, '💻 ',
        React.createElement('a', { href: 'https://github.com/sai', className: 'underline text-blue-700' }, 'GitHub')
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
