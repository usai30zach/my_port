const { useState } = React;

function App() {
  const projects = [
    {
      title: 'Shipping App',
      description: 'A full-stack shipment management system with PDF upload, sales order creation, packaging, and shipping flows.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: '#'
    },
    {
      title: 'LTV Report Tool',
      description: 'Customer LTV generator with CSV upload, filtering, PDF export, and charts.',
      tech: ['React', 'Express', 'TypeScript'],
      link: '#'
    },
    {
      title: 'ShopVox Webhook Handler',
      description: 'Node.js API that captures ShopVox webhook data and displays it in a sortable, filterable dashboard.',
      tech: ['Node.js', 'MongoDB', 'Express'],
      link: '#'
    }
  ];

  return React.createElement(
    'div',
    { className: 'space-y-12' },
    // Home / Intro
    React.createElement('section', { className: 'text-center space-y-4' },
      React.createElement('h1', { className: 'text-4xl font-bold' }, "Hi, I'm Sai 👋"),
      React.createElement('p', { className: 'text-lg text-gray-600' }, 'Full Stack Developer | Team Lead | Problem Solver'),
      React.createElement('div', { className: 'flex justify-center gap-4 pt-2' }, 
        React.createElement('a', { href: '#contact', className: 'underline text-blue-600' }, 'Get in Touch'),
        React.createElement('a', { href: '#projects', className: 'underline text-blue-600' }, 'View Projects')
      )
    ),

    // About Me
    React.createElement('section', { id: 'about', className: 'space-y-4' },
      React.createElement('h2', { className: 'text-2xl font-semibold' }, 'About Me'),
      React.createElement('p', { className: 'text-gray-700' },
        'I’m a full stack developer with 15+ years of experience, including over 6 years in Canada leading teams. I build scalable web apps with React, Node.js, Laravel, PostgreSQL, and more.'
      )
    ),

    // Projects
    React.createElement('section', { id: 'projects', className: 'space-y-6' },
      React.createElement('h2', { className: 'text-2xl font-semibold' }, 'Projects'),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
        ...projects.map((project, index) =>
          React.createElement('div', { key: index, className: 'p-4 bg-white rounded shadow space-y-2' },
            React.createElement('h3', { className: 'text-xl font-bold' }, project.title),
            React.createElement('p', { className: 'text-gray-600' }, project.description),
            React.createElement('p', { className: 'text-sm text-gray-500' }, `Tech: ${project.tech.join(', ')}`),
            React.createElement('a', { href: project.link, className: 'text-blue-600 underline' }, 'View')
          )
        )
      )
    ),

    // Resume
    React.createElement('section', { id: 'resume', className: 'space-y-4' },
      React.createElement('h2', { className: 'text-2xl font-semibold' }, 'Resume'),
      React.createElement('a', {
        href: './public/Sai_Resume.pdf',
        target: '_blank',
        className: 'inline-block px-4 py-2 bg-blue-600 text-white rounded'
      }, 'Download PDF')
    ),

    // Contact
    React.createElement('section', { id: 'contact', className: 'space-y-4' },
      React.createElement('h2', { className: 'text-2xl font-semibold' }, 'Contact'),
      React.createElement('div', { className: 'flex flex-col gap-2 text-sm text-gray-700' },
        React.createElement('div', null, '📧 sai.email@example.com'),
        React.createElement('div', null,
          '🔗 ',
          React.createElement('a', { href: 'https://linkedin.com/in/sai', className: 'underline text-blue-600' }, 'LinkedIn')
        ),
        React.createElement('div', null,
          '💻 ',
          React.createElement('a', { href: 'https://github.com/sai', className: 'underline text-blue-600' }, 'GitHub')
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
