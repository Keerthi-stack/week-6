import React, { useState } from 'react';
import Project from './project';

// App Component
function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <section className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a passionate developer who loves to create amazing things with code!</p>
    </section>
  );
}

// About Component
function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I'm a web developer with experience in building responsive websites and web applications. I specialize in front-end technologies like React and JavaScript.</p>
    </section>
  );
}

// Projects Component
function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built using React.',
      techStack: 'React, JavaScript, CSS',
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce site with React and Firebase.',
      techStack: 'React, Firebase, Stripe',
      link: 'https://github.com/yourusername/e-commerce',
    },
    {
      title: 'Blog Platform',
      description: 'A blogging platform where users can create and share posts.',
      techStack: 'Node.js, Express, MongoDB, React',
      link: 'https://github.com/yourusername/blog-platform',
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies used:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skills = ['JavaScript', 'React', 'HTML/CSS', 'Node.js', 'MongoDB', 'Git'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}


  

  

// Inject the styles into the page
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;
