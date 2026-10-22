// Edit this file to personalize the entire website.
export const profile = {
  name: 'Sai Pranav Chakka',
  initials: 'SPC',
  headline: 'Building secure systems, intelligent agents, and useful software.',
  role: 'Software Engineer | AI & Cybersecurity | Infrastructure',
  location: 'Houston, Texas',
  intro: 'I work at the intersection of software engineering, cybersecurity, AI, and infrastructure. I enjoy taking ideas from prototype to working systems.',
  email: 'YOUR_EMAIL@example.com', // Replace before publishing
  linkedin: 'https://www.linkedin.com/in/sai-pranav-c-/', // Replace before publishing
  github: 'https://github.com/schakka0401', // Confirm or replace
  resume: '', // Add your resume to public/resume.pdf
  availability: 'Open to internship and collaboration opportunities',
};

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript', 'Bash'] },
  { group: 'Backend & Infrastructure', items: ['FastAPI', 'PostgreSQL', 'Docker', 'REST APIs', 'AWS'] },
  { group: 'AI & Data', items: ['RAG', 'Gemini API', 'ChromaDB', 'Data Analysis'] },
  { group: 'Security & Tools', items: ['Linux', 'Playwright', 'Git', 'Cybersecurity', 'Kibana'] },
];

export const projects = [
  {
    number: '01', name: 'ORION', kind: 'AI / Browser Automation',
    description: 'A desktop browser agent that translates natural-language instructions into multi-step web actions, including navigation, searching, clicking, and managing tabs.',
    stack: ['Python', 'FastAPI', 'Gemini', 'Playwright', 'React', 'Tauri'],
    link: '', // Add repository/demo URL if public
    symbol: '',
  },
  {
    number: '02', name: 'The House Is You', kind: 'HackRice / Backend Infrastructure',
    description: 'Hackathon game infrastructure supporting persistent player sessions, results, and structured game analytics through a containerized API and relational database.',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Docker'],
    link: 'https://github.com/schakka0401/TheHouseIsYou_1', symbol: '',
  },
  {
    number: '03', name: 'Security Honeypot', kind: 'Cybersecurity / Observability',
    description: 'A Raspberry Pi honeypot using Cowrie to capture suspicious access attempts and investigate activity with centralized logging and dashboards.',
    stack: ['Linux', 'Cowrie', 'ELK Stack', 'Kibana', 'Raspberry Pi'],
    link: '', symbol: '',
  },
];

export const highlights = [
  { label: 'Focus', value: 'Software + Security' },
  { label: 'Currently exploring', value: 'AI Agents' },
  { label: 'Approach', value: 'Build / Test / Iterate' },
];
