import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Download, Terminal, ExternalLink } from 'lucide-react';
import { profile, projects, skills, highlights } from './data';
import './styles.css';

function App() {
  const emailReady = !profile.email.includes('YOUR_');
  const linkedInReady = !profile.linkedin.includes('YOUR_');
  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="header"><a className="brand" href="#home"><span className="brand-icon">{profile.initials.slice(0,2)}</span><span>{profile.name}<small>DEVELOPER PORTFOLIO</small></span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
    </header>
    <main>
      <section className="hero container" id="home"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> {profile.availability}</div>
        <h1>Hi, I'm <span className="gradient-name">{profile.name.split(' ')[0]}.</span><br/>{profile.headline}</h1>
        <p className="hero-sub">{profile.intro}</p>
        <div className="hero-actions"><a className="primary-btn" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="secondary-btn" href={profile.resume} target="_blank" rel="noreferrer">Resume <Download size={17}/></a></div>
        <div className="hero-socials"><span><MapPin size={15}/>{profile.location}</span><span className="social-divider"/>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
          {linkedInReady && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>}
          {emailReady && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19}/></a>}
        </div>
      </div><div className="hero-card"><div className="terminal-top"><div className="dots"><i/><i/><i/></div><span>about-me.json</span><Terminal size={16}/></div>
        <div className="terminal-body"><div><span className="purple">const</span> developer = {'{'}</div><div className="indent">name: <span className="mint">"{profile.name}"</span>,</div><div className="indent">focus: <span className="mint">"Security + AI"</span>,</div><div className="indent">likes: [</div><div className="indent double"><span className="mint">"Building things"</span>,</div><div className="indent double"><span className="mint">"Solving problems"</span>,</div><div className="indent double"><span className="mint">"Learning constantly"</span></div><div className="indent">],</div><div className="indent">status: <span className="mint">"shipping"</span></div><div>{'};'}</div><div className="terminal-end">▍</div></div>
      </div></section>
      <section className="about-section container" id="about"><div className="section-header"><p className="section-kicker">01 / ABOUT</p><h2>A little about me<span className="period">.</span></h2></div><div className="about-grid"><p>{profile.role}. I'm interested in how thoughtful engineering can make technology faster, safer, and easier to use. My projects span browser automation, backend services, security monitoring, and developer tooling.</p><div className="highlights">{highlights.map(x=><div className="highlight" key={x.label}><span>{x.label}</span><strong>{x.value}</strong></div>)}</div></div></section>
      <section className="projects-section" id="projects"><div className="container"><div className="section-header"><p className="section-kicker">02 / SELECTED WORK</p><div className="section-title-row"><h2>Featured projects<span className="period">.</span></h2><span className="minor-text">A few things I've built</span></div></div><div className="projects-grid">{projects.map(p=><article className="project-card" key={p.name}><div className="project-top"><span className="project-id">{p.number} / {p.kind}</span><span className="project-symbol">{p.symbol}</span></div><div className="project-content"><h3>{p.name}</h3><p>{p.description}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="project-bottom">{p.link?<a href={p.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16}/></a>:<span>Details available upon request <ArrowRight size={16}/></span>}</div></article>)}</div></div></section>
      <section className="skills-section container" id="skills"><div className="section-header"><p className="section-kicker">03 / TOOLBOX</p><h2>Technologies I use<span className="period">.</span></h2></div><div className="skills-grid">{skills.map(g=><div className="skill-group" key={g.group}><h3>{g.group}</h3><div className="skill-list">{g.items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></section>
      <section className="contact-section container" id="contact"><div className="contact-card"><p className="section-kicker">04 / GET IN TOUCH</p><h2>Have an idea?<br/><span>Let's build something.</span></h2><p>I'm always interested in engineering conversations, interesting projects, and opportunities to collaborate.</p><div className="contact-actions">{emailReady?<a className="primary-btn" href={`mailto:${profile.email}`}>Send me an email <Mail size={18}/></a>:<span className="contact-placeholder">Set your email address in src/data.js to enable email contact.</span>}{linkedInReady&&<a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={16}/></a>}</div></div></section>
    </main>
    <footer className="container footer"><span>© {new Date().getFullYear()} {profile.name}. Built with React.</span><a href="#home">Back to top ↑</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App/>);
