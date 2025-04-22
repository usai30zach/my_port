import React from 'react';

const experiences = [
  {
    title: 'Lead Web Application Developer',
    company: 'T.K. Graphics',
    location: 'Canada · On-site',
    date: 'Jun 2018 – Present',
    points: [
      'Led development of in-house ERP system using Laravel and PostgreSQL, reducing processing time by 25%',
      'Ensured data integrity and performance scalability within ERP database systems',
      'Integrated React, PHP, JavaScript, HTML5, and jQuery for responsive UI',
      'Established Git version control to streamline collaboration',
      'Directed company website upgrade via WordPress (30% traffic increase)',
      'Provided technical support across IT infrastructure and machinery'
    ]
  },
  {
    title: 'Junior IT & Product Manager',
    company: 'Daraz Myanmar Co., Ltd',
    location: 'Yangon, Myanmar · On-site',
    date: 'May 2017 – Apr 2018',
    points: [
      'Managed online shop operations and product content coordination',
      'Developed new seller sites and maintained platform IT infrastructure',
      'Managed PBX call center systems to improve support efficiency'
    ]
  },
  {
    title: 'Project Manager',
    company: 'TAKUMI',
    location: 'Japan-based projects · Remote/On-site',
    date: 'Apr 2016 – Apr 2017',
    points: [
      'Directed client project execution, resource allocation, and delivery',
      'Oversaw social media content strategy (15% engagement increase)'
    ]
  },
  {
    title: 'IT & Language Specialist',
    company: 'Hansem Vietnam',
    location: 'Ho Chi Minh City, Vietnam',
    date: 'Apr 2016 – Jun 2016',
    points: [
      'Led Korean-to-English localization projects',
      'Developed internal systems to enhance translation project workflows'
    ]
  },
  {
    title: 'Team Leader',
    company: 'Cyber Plus Co., Ltd',
    location: 'Myanmar',
    date: 'Apr 2015 – Apr 2016',
    points: [
      'Delivered IT systems with 98% client satisfaction',
      'Led integration and custom theme development for web projects'
    ]
  },
  {
    title: 'IT & Administrative Manager',
    company: 'Technomation',
    location: 'Yangon, Myanmar',
    date: 'Jan 2014 – Feb 2015',
    points: [
      'Maintained company IT infrastructure and support',
      'Led GPS product sales strategy, expanding customer base by 25%'
    ]
  },
  {
    title: 'Web Specialist (Project Based)',
    company: 'UNOPS',
    location: 'Yangon, Myanmar · Hybrid',
    date: 'Aug 2013 – Dec 2014',
    points: [
      'Redesigned UNOPS website using HTML5, CSS3, Bootstrap',
      'Developed location-based database systems using Google Maps API'
    ]
  },
  {
    title: 'Team Lead / Senior Developer / Junior Developer',
    company: 'iHost Myanmar',
    location: 'Myanmar',
    date: 'Oct 2011 – Aug 2013',
    points: [
      'Grew from junior to team lead within 2 years',
      'Delivered scalable custom web apps and managed junior dev team'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">Work Experience</h2>
      <div className="relative border-l-2 border-blue-300 pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-12" data-aos="fade-up">
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
            <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company} · {exp.location}</p>
            <p className="text-sm text-gray-400 mb-2 italic">{exp.date}</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-200">
              {exp.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
