import React, { useEffect, useRef, useState } from 'react';
import Pfp from './assets/profile picture/pfp.png';
import Background2 from './assets/background 2.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mysql from './assets/programming_lang/mysql.png';
import vbnet from './assets/programming_lang/VB.NET.png';
import html from './assets/programming_lang/html.webp';
import css from './assets/programming_lang/css.png';
import javascript from './assets/programming_lang/javascript.png';
import node from './assets/frameworks/node.png';
import react from './assets/frameworks/react.png';
import bootstrap from './assets/frameworks/bootstrap.png';
function Homepage() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false, false]);

  // handle scroll to detect when past hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setNavbarScrolled(window.scrollY > heroHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for About Me paragraphs
  useEffect(() => {
    if (!aboutRef.current) return;

    const paragraphs = Array.from(aboutRef.current.querySelectorAll('p'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = paragraphs.indexOf(entry.target);
            setVisibleParagraphs((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    paragraphs.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
  }, []);

  const aboutParagraphs = [
    `I am a fresh graduate with a Bachelor's Degree in Information Technology, having completed my studies in May 2025. Throughout my academic journey, I consistently strived for excellence, earning the distinction of Magna Cum Laude and being recognized as the Database Programmer of the Year.`,
    `My passion for technology and problem-solving extends beyond the classroom. I proudly placed 2nd in individual performance during the Capture the Flag (CTF) competition in Hack for Gov 3, showcasing my skills in cybersecurity and analytical thinking.`,
    `I am a hardworking and dedicated individual seeking an IT-related position where I can apply my technical knowledge, grow professionally, and contribute meaningfully to innovative projects.`,
    `Feel free to explore my online portfolio to learn more about my projects and skills.`,
  ];

  const skillsRef = useRef(null);
  const skillsList = [
    { name: 'MySQL', image: mysql },
    { name: 'VB.NET', image: vbnet },
    { name: 'HTML5', image: html },
    { name: 'CSS3', image: css },
    { name: 'JavaScript', image: javascript },
  ];


  const [visibleSkills, setVisibleSkills] = useState(
    new Array(skillsList.length).fill(false)
  );

  useEffect(() => {
    if (!skillsRef.current) return;

    const cards = Array.from(skillsRef.current.querySelectorAll('.col-auto'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target);
            setVisibleSkills((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar fixed-top portfolio-navbar"
        style={{
          transition: 'all 0.3s ease',
          backgroundColor: navbarScrolled ? 'white' : 'transparent',
          boxShadow: navbarScrolled ? '0 4px 6px rgba(0,0,0,0.2)' : 'none', // add shadow only when white
        }}
      >

        <div className="container justify-content-center">
          <div className="d-flex gap-3">
            <Link
              to="/"
              className="btn nav-btn fw-bold"
              style={{
                color: navbarScrolled ? 'black' : 'white',
                border: navbarScrolled ? 'none' : '1px solid rgba(255,255,255,1)',
                boxShadow: navbarScrolled ? '0 4px 6px rgba(0,0,0,0.2)' : 'none',
                borderRadius: '5px',
                backgroundColor: navbarScrolled ? '#ffffff' : 'transparent',
              }}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="btn nav-btn fw-bold"
              style={{
                color: navbarScrolled ? 'black' : 'white',
                border: navbarScrolled ? 'none' : '1px solid rgba(255,255,255,1)',
                boxShadow: navbarScrolled ? '0 4px 6px rgba(0,0,0,0.2)' : 'none',
                borderRadius: '5px',
                backgroundColor: 'transparent',
              }}
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">
            <div className="col-12 col-md-7 text-center text-md-start text-white">
              <h1 className="display-4 fw-bold">Hi, I'm Jayrus T. Luy</h1>
              <p className="lead mt-3">Software Developer, and Database Programmer</p>
            </div>

            <div className="col-12 col-md-4 text-center">
              <img
                src={Pfp}
                alt="Profile"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '7px solid rgba(255,255,255,0.8)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="card-body" ref={aboutRef}>
              <center><h3 className="fw-bold mb-3">About Me</h3></center>
              {aboutParagraphs.map((text, i) => (
                <p
                  key={i}
                  className="lead"
                  style={{
                    fontSize: '19px',
                    opacity: visibleParagraphs[i] ? 1 : 0,
                    transform: visibleParagraphs[i] ? 'translateY(0px)' : 'translateY(20px)',
                    transition: `opacity 0.8s ease ${i * 0.3}s, transform 0.8s ease ${i * 0.3}s`,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <div className="container mt-5" ref={skillsRef}>
        <center>
          <h3 className="fw-bold mb-4">My Skills</h3>
          <h5 className="mb-4">Programming Languages</h5>
        </center>

        <div className="row justify-content-center g-4">
          {skillsList.map((skill, i) => (
            <div
              key={i}
              className="col-auto"
              style={{
                opacity: visibleSkills[i] ? 1 : 0,
                transform: visibleSkills[i] ? 'translateY(0px)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${i * 0.3}s, transform 0.8s ease ${i * 0.3}s`,
              }}
            >
              <div
                className="card text-center"
                style={{
                  width: '150px',
                  minHeight: '150px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  padding: '20px',
                }}
              >
                {skill.image && (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      marginBottom: '10px',
                      marginLeft: '4px',
                    }}
                  />
                )}
                <h5 className="fw-bold mt-2">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Libraries and Frameworks */}
        <center className="mt-5">
          <h5 className="mb-4">Libraries and Frameworks</h5>
        </center>

        <div className="row justify-content-center g-4">
          {[
            { name: 'Node.js', image: node },
            { name: 'React.js', image: react },
            { name: 'Bootstrap', image: bootstrap },
          ].map((lib, i) => (
            <div
              key={i + skillsList.length}
              className="col-auto"
              style={{
                opacity: visibleSkills[i + skillsList.length] ? 1 : 0,
                transform: visibleSkills[i + skillsList.length] ? 'translateY(0px)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${i * 0.3}s, transform 0.8s ease ${i * 0.3}s`,
              }}
            >
              <div
                className="card text-center"
                style={{
                  width: '150px',
                  minHeight: '150px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  padding: '20px',
                }}
              >
                {lib.image && (
                  <img
                    src={lib.image}
                    alt={lib.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      marginBottom: '10px',
                      marginLeft: '4px',
                    }}
                  />
                )}
                <h5 className="fw-bold mt-2">{lib.name}</h5>
              </div>
            </div>
          ))}
          <div style={{ marginBottom: '50px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
