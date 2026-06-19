import { useState,useEffect} from 'react'
import cyberScope from './assets/cyberScope.png'
import coffee from './assets/coffee.png'
import debug from './assets/debugger.png'
import dbms from './assets/DBMS.png'
import login from './assets/login.png'
import { speak } from "./useSpeech"
import ParticlesBackground from "./ParticlesBackground"

import './App.css'

function App() {
const [speaking, setSpeaking] = useState(false)
const [activeProject, setActiveProject] = useState("")
const [activeSection, setActiveSection] = useState("")
const [autoMode, setAutoMode] = useState(true)
const [hasSpoken, setHasSpoken] = useState({})
const [isUserScrolling, setIsUserScrolling] = useState(false)
const speakText = (text) => {
  setSpeaking(true)

  speak(text, () => {
    setSpeaking(false)
  })
}

const speakProject = (projectName, description) => {
  speechSynthesis.cancel()
  setSpeaking(true)
  setActiveProject(projectName)

  speak(description, () => {
    setSpeaking(false)
    setActiveProject("")
  })
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)

  if (element) {
    setActiveSection(id)

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
const startTour = () => {
  setSpeaking(true)

  speak("Welcome to my AI-powered portfolio. Let me give you a guided tour.", () => {
    scrollToSection("about")

    setTimeout(() => {
      speak(
        "I am a Computer Science Engineering student focused on web development and AI systems.",
        () => {
          scrollToSection("education")

          setTimeout(() => {
            speak(
              "I am currently a fourth year student at NSS College of Engineering, Palakkad.",
              () => {
                scrollToSection("skills")

                setTimeout(() => {
                  speak(
                    "My strongest skills include HTML, CSS, JavaScript, React, Java, Python, MongoDB and Git.",
                    () => {
                      scrollToSection("projects")

                      setTimeout(() => {
                        speak(
                          "Here are my featured projects including Coffee Site, Java Employee Dashboard, CyberScope SOC Dashboard, Offline Debugger and Login Page UI.",
                          () => {
                            scrollToSection("certifications")

                            setTimeout(() => {
                              speak(
                                "I have completed certifications in Artificial Intelligence, Generative AI, AI Agents, NLP, Statistics for Data Science, Supervised Learning, Java, SQL and IBM Design Thinking.",
                                () => {
                                  scrollToSection("contact")

                                  setTimeout(() => {
                                    speak(
                                      "You can contact me via email or GitHub. Thank you for visiting my portfolio.",
                                      () => {
                                        setSpeaking(false)
                                      }
                                    )
                                  }, 1200)
                                }
                              )
                            }, 1200)
                          }
                        )
                      }, 1200)
                    }
                  )
                }, 1200)
              }
            )
          }, 1200)
        }
      )
    }, 1200)
  })

}




 
  const triggerSpeech = (id) => {
  speechSynthesis.cancel()
  }
  return (
    <>
    
    <ParticlesBackground />
    <nav className="navbar">
      <h2>Nandana</h2>

      <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          
          <li><a href="#certifications">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
       </ul>
    </nav>
      <section className="hero">
        
        <h1>Nandana Vinu</h1>
        <h2>Frontend Developer | React Developer</h2>
        <p>
          Building responsive websites and modern web applications.
        </p>
  
   <div className="ai-tour">


  <button className="btn" onClick={startTour}>
    🤖 Start Portfolio Tour
  </button>

  <button
    className="btn"
    onClick={() =>
      speakText(
        "I am Nandana, a Computer Science student focused on web development, React, Java and artificial intelligence projects."
      )
    }
  >
    👤 About Me
  </button>
<button
  className="btn"
  onClick={() => {
    scrollToSection("education")

    setTimeout(() => {
      speakText(
        "I am currently a fourth year Computer Science and Engineering student at NSS College of Engineering, Palakkad. My interests include web development, artificial intelligence, machine learning and software engineering."
      )
    }, 700)
  }}
>
  🎓 Education
</button>
 <button
  className="btn"
  onClick={() => {
    scrollToSection("skills")

    setTimeout(() => {
      speakText(
        "My strongest skills include HTML, CSS, JavaScript, React, Java, Python, MongoDB and Git."
      )
    }, 700)
  }}
>
  🛠 Skills
</button>


 <button
  className="btn"
  onClick={() => {
    scrollToSection("projects")

    setTimeout(() => {
      speakText(
        "Here are my featured projects: Coffee Site, Java Employee Dashboard, CyberScope SOC Dashboard, Offline Debugger, and Login Page UI."
      )
    }, 700)
  }}
>
  🚀 Projects
</button>
<button
  className="btn"
  onClick={() => {
    scrollToSection("certifications")

    setTimeout(() => {
      speakText(
        "I have completed certifications in Artificial Intelligence, Generative AI, AI Agents, Natural Language Processing, Statistics for Data Science, Supervised Learning, Java, SQL and IBM Design Thinking."
      )
    }, 700)
  }}
>
  🏆 Certifications
</button>
</div>

{speaking && <p className="speaking">🔊 Speaking...</p>}
       
        <a
           href="https://github.com/Nand0ana00"
           target="_blank"
           rel="noreferrer"
           className="btn"
        >View GitHub</a>
        <a
           href="https://www.linkedin.com/in/nandana-vinu-a49543297"
           target="_blank"
           rel="noreferrer"
           className="btn"
        >View LinkedIn</a>

      </section>

     <section id="about" className={activeSection === "about" ? "about active" : "about"}>
  <h2
    style={{ cursor: "pointer" }}
    onClick={() =>
      speakText(
        "I am a Computer Science student and web developer passionate about building responsive websites, web applications and software solutions."
      )
    }
  >
    About Me 🔊
  </h2>

  <p>
    I am a Computer Science student and web developer passionate
    about building responsive websites, web applications, and
    software solutions. I enjoy working with JavaScript, React,
    Java, Python, and MongoDB.
  </p>
</section>
  <section
  id="education"
  className={activeSection === "education" ? "education active" : "education"}
>
  <h2>Education</h2>

  <div className="education-card">
    <h3>B.Tech Computer Science & Engineering</h3>

    <p>
      Fourth Year Student at NSS College of Engineering, Palakkad.
    </p>

    <p>
      Passionate about Web Development, Artificial Intelligence,
      Machine Learning, and Software Engineering.
    </p>
  </div>
</section>

 <section
  id="skills"
  className={activeSection === "skills" ? "skills active" : "skills"}
>
  <h2
    style={{ cursor: "pointer" }}
    onClick={() =>
      speakText(
        "My strongest skills include HTML, CSS, JavaScript, React, Java, Python, MongoDB and Git."
      )
    }
  >
    Skills 🔊
  </h2>

  <div className="skills-grid">
    <div>HTML</div>
    <div>CSS</div>
    <div>JavaScript</div>
    <div>React</div>
    <div>Java</div>
    <div>Python</div>
    <div>MongoDB</div>
    <div>Git</div>
  </div>
</section>
<section id="projects" className={activeSection === "projects" ? "projects active" : "projects"}>
  <h2
  style={{ cursor: "pointer" }}
  onClick={() =>
    speakText(
       "My featured projects include Coffee Site, a responsive coffee shop website built using HTML, CSS and JavaScript. Java Employee Dashboard, an employee management system with CRUD operations. CyberScope SOC Dashboard, a real-time cyber attack visualization system. Offline Debugger, a lightweight debugging tool for low specification devices. And Login Page UI, a modern authentication interface with validation."
    )
  }

>
  
  Projects 🔊
</h2>

  <div className="project-grid">

    <div
      className={`project-card coffee ${
      activeProject === "coffee" ? "active-card" : ""
      }`}
      onClick={() =>
        speakProject(
         "coffee",
        "Coffee Site is a responsive coffee shop website built using HTML, CSS and JavaScript."
         )
      }
    >
      <h3>CoffeeSite</h3>
      <p>
        Responsive coffee shop website built using HTML, CSS and JavaScript.
      </p>
       <a
    href="https://coffee-site-fawn.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="project-link"
    onClick={(e) => e.stopPropagation()}
  > Live Demo</a>
    </div>

    <div
    className={`project-card dbms ${
    activeProject === "dbms" ? "active-card" : ""
    }`}
    onClick={() =>
     speakProject(
      "dbms",
      "Java Employee Dashboard is an employee management system with CRUD functionality built using Java and database technologies."
     )
    }
  >
      <h3>Java Employee Dashboard</h3>
      <p>
        Employee management dashboard with CRUD functionality.
      </p>
    </div>

    <div
  className={`project-card cyber ${
    activeProject === "cyber" ? "active-card" : ""
  }`}
  onClick={() =>
    speakProject(
      "cyber",
      "Cyber Scope is a real time cyber attack visualization dashboard with a futuristic security operations center interface."
    )
  }
>
      <h3>CyberScope SOC Dashboard</h3>
      <p>
      Real-time cyber attack visualization dashboard with a futuristic SOC interface.
      </p>
       <a
    href="https://cyber-scope-ten.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="project-link"
    onClick={(e) => e.stopPropagation()}
  >
    🚀 Live Demo
  </a>
    </div>

    <div
  className={`project-card debugger ${
    activeProject === "debugger" ? "active-card" : ""
  }`}
  onClick={() =>
    speakProject(
      "debugger",
      "Offline Debugger is a lightweight debugging tool designed for low specification devices and offline environments."
    )
  }
>
      <h3>Offline Debugger</h3>
      <p>
        Lightweight debugging tool designed for low-spec devices.
      </p>
    </div>
    <div
  className={`project-card login ${
    activeProject === "login" ? "active-card" : ""
  }`}
  onClick={() =>
    speakProject(
      "login",
      "Login Page UI is a responsive authentication interface with modern design and form validation."
    )
  }
>
      <h3>Login Page UI</h3>
       <p>
        Responsive authentication UI with modern design and form validation.
        </p>
      </div>

  </div>
</section>
<section id="certifications" className="certifications">
  <h2>Certifications</h2>

  <div className="cert-card">
    <h3>AI & Machine Learning</h3>
    <p>
      Artificial Intelligence Fundamentals, Generative AI,
      AI Agents, NLP Foundations, NLP in Practice,
      Statistics for Data Science, Supervised Learning
    </p>
  </div>

  <div className="cert-card">
    <h3>Programming</h3>
    <p>
      Java Basics, SQL Basics
    </p>
  </div>

  <div className="cert-card">
    <h3>Design & Innovation</h3>
    <p>
      IBM Design Thinking
    </p>
  </div>
</section>
<section id="contact" className="contact">
  <h2>Contact</h2>

  <p>Email: nandanavinu000@gmail.com</p>


  <p>
    GitHub:
    <a href="https://github.com/Nand0ana00">
      github.com/Nand0ana00
    </a>
  </p>
  <p>Contact no:+91-6235228993</p>
</section>

{/* 🤖 Floating AI Assistant */}
<div className="assistant-wrapper">

  <div className="assistant-bubble">
    🤖 Hi! I'm Nandu AI.<br />
    Click me for a tour.
  </div>

  <div
    className="ai-assistant"
    onClick={() => {
      setSpeaking(true)

      speak(
        "Welcome to my portfolio. I will guide you through my projects.",
        () => setSpeaking(false)
      )
    }}
  >
    <div className="ai-assistant">
  🤖 AI Assistant (voice mode active)
</div>
  </div>

</div>
<footer className="footer">
  <p>© 2026 Nandana Vinu. Built with React & Three.js.</p>
</footer>
</>
  );
}

export default App;