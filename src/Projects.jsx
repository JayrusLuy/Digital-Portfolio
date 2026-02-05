import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PRMS from './assets/PRMS.png';
import SG2 from './assets/SG2.png';
import UsamiWit from './assets/usamiwit.jpg';
import Usamiweb from './assets/usamiweb.png';
import Portfolio from './assets/portfolio.png';
import Project1 from './assets/project_bg/project_background1.png';
import Project2 from './assets/project_bg/project_background2.png';
import Prms1 from './assets/prms/prms1.png';
import React, { useEffect, useRef, useState } from 'react';

function Projects() {
  const [navbarStyle, setNavbarStyle] = useState('transparent');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // prms animation refs and states
  const prmsRef = useRef(null);
  const prmsImageRef = useRef(null);
  const prmsTextRefs = useRef([]);
  const prmsButtonRefs = useRef([]);
  const [prmsImageVisible, setPrmsImageVisible] = useState(false);
  const [prmsTextVisible, setPrmsTextVisible] = useState(
  Array(5).fill(false)
  );
  const [prmsButtonsVisible, setPrmsButtonsVisible] = useState(false);

  // prms image slide
  useEffect(() => {
    if (!prmsImageRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrmsImageVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(prmsImageRef.current);
    return () => observer.disconnect();
  }, []);

  // prms text slide
  useEffect(() => {
    if (!prmsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // slide text line by line
          prmsTextRefs.current.forEach((el, i) => {
            setTimeout(() => {
              setPrmsTextVisible((prev) => {
                const copy = [...prev];
                copy[i] = true;
                return copy;
              });
            }, i * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(prmsRef.current);
    return () => observer.disconnect();
  }, []);

  // prms button slide
  useEffect(() => {
    if (!prmsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPrmsButtonsVisible(true), 1000);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(prmsRef.current);
    return () => observer.disconnect();
  }, []);

  // SG animation refs and states
  const sgRef = useRef(null);
  const sgImageRef = useRef(null);
  const sgTextRefs = useRef([]);
  const [sgImageVisible, setSgImageVisible] = useState(false);
  const [sgTextVisible, setSgTextVisible] = useState(
    Array(5).fill(false)
  );
  const [sgButtonsVisible, setSgButtonsVisible] = useState(false);

  // SG image slide
  useEffect(() => {
    if (!sgImageRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSgImageVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sgImageRef.current);
    return () => observer.disconnect();
  }, []);

  // SG text slide
  useEffect(() => {
    if (!sgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sgTextRefs.current.forEach((el, i) => {
            setTimeout(() => {
              setSgTextVisible((prev) => {
                const copy = [...prev];
                copy[i] = true;
                return copy;
              });
            }, i * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sgRef.current);
    return () => observer.disconnect();
  }, []);

  // Trigger buttons after text animation
  useEffect(() => {
    if (!sgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger text animation
          sgTextRefs.current.forEach((el, i) => {
            setTimeout(() => {
              setSgTextVisible((prev) => {
                const copy = [...prev];
                copy[i] = true;
                return copy;
              });
            }, i * 200);
          });

    // SG button slide
    setTimeout(() => setSgButtonsVisible(true), sgTextRefs.current.length * 200);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(sgRef.current);
      return () => observer.disconnect();
    }, []);

    // UsamiWit animation refs and states
    const usamiRef = useRef(null);
    const usamiImageRef = useRef(null);
    const usamiTextRefs = useRef([]);
    const [usamiImageVisible, setUsamiImageVisible] = useState(false);
    const [usamiTextVisible, setUsamiTextVisible] = useState(Array(5).fill(false));
    const [usamiButtonsVisible, setUsamiButtonsVisible] = useState(false);

    // UsamiWit image slide
    useEffect(() => {
      if (!usamiImageRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setUsamiImageVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(usamiImageRef.current);
      return () => observer.disconnect();
    }, []);

    // UsamiWit text slide
    useEffect(() => {
      if (!usamiRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            usamiTextRefs.current.forEach((el, i) => {
              setTimeout(() => {
                setUsamiTextVisible((prev) => {
                  const copy = [...prev];
                  copy[i] = true;
                  return copy;
                });
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(usamiRef.current);
      return () => observer.disconnect();
    }, []);

    // UsamiWit button slide
    useEffect(() => {
      if (!usamiRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // appear after all text lines
            setTimeout(() => setUsamiButtonsVisible(true), usamiTextRefs.current.length * 230);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(usamiRef.current);
      return () => observer.disconnect();
    }, []);

    // Portfolio animation refs and states
    const portfolioRef = useRef(null);
    const portfolioImageRef = useRef(null);
    const portfolioTextRefs = useRef([]);
    const [portfolioImageVisible, setPortfolioImageVisible] = useState(false);
    const [portfolioTextVisible, setPortfolioTextVisible] = useState(Array(5).fill(false));
    const [portfolioButtonsVisible, setPortfolioButtonsVisible] = useState(false);

    // Portfolio image slide
    useEffect(() => {
      if (!portfolioImageRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setPortfolioImageVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(portfolioImageRef.current);
      return () => observer.disconnect();
    }, []);

    // Portfolio text slide
    useEffect(() => {
      if (!portfolioRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // slide text line by line
            portfolioTextRefs.current.forEach((el, i) => {
              setTimeout(() => {
                setPortfolioTextVisible((prev) => {
                  const copy = [...prev];
                  copy[i] = true;
                  return copy;
                });
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(portfolioRef.current);
      return () => observer.disconnect();
    }, []);

    // Buttons slide
    useEffect(() => {
      if (!portfolioRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setPortfolioButtonsVisible(true), portfolioTextRefs.current.length * 250);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(portfolioRef.current);
      return () => observer.disconnect();
    }, []);

  // Animation helpers
  const slideFromRight = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(60px)',
    transition: `all 0.7s ease ${delay}s`,
  });

  const slideFromLeft = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-60px)',
    transition: `all 0.7s ease ${delay}s`,
  });

  const slideUp = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  // scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const topSection = document.getElementById('top-section');
      const topSectionHeight = topSection ? topSection.offsetHeight : 0;

      if (scrollTop > topSectionHeight - 70) {
        setNavbarStyle('solid');
      } else {
        setNavbarStyle('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
    {/* Navbar */}
    <nav
    className="navbar fixed-top portfolio-navbar"
    style={{
    backgroundColor: navbarStyle === 'transparent' ? 'transparent' : 'white',
    padding: '0.5rem 1rem',
    zIndex: 1000,
    boxShadow: navbarStyle === 'transparent' ? 'none' : '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    }}
    >
    <div className="container justify-content-center">
    <div className="d-flex gap-3 align-items-center">
      {['About', 'My Projects'].map((text, i) => {
        const isTransparent = navbarStyle === 'transparent';
        return (
          <Link
            key={i}
            to={i === 0 ? '/' : '/projects'}
            className="btn nav-btn fw-bold"
            style={{
              color: isTransparent ? 'white' : 'black',
              backgroundColor: isTransparent ? 'transparent' : 'white',
              border: isTransparent ? '1px solid white' : 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              borderRadius: '5px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}
          >
            {text}
          </Link>
        );
      })}
    </div>
    </div>
    </nav>

    {/* PRMS project feature*/}
    <div
      ref={prmsRef}
      id="top-section"
      className="project-top-section d-flex align-items-center flex-wrap"
      style={{
        backgroundImage: `url(${Project1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '612px',
        padding: '2rem',
        color: 'white',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
      }}
    >
      {/* Image */}
      <div
        ref={prmsImageRef}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: isMobile ? '1.5rem' : '0',
        }}
      >
        <img
          src={Prms1}
          alt="PRMS Logo"
          style={{
            width: isMobile ? '200px' : '400px',
            height: isMobile ? '200px' : '400px',
            borderRadius: '5px',
            objectFit: 'cover',
            border: '3px solid #ccc',
            ...slideFromRight(prmsImageVisible),
          }}
        />
      </div>

      {/* Text*/}
      <div
        style={{
          flex: 1,
          paddingLeft: isMobile ? '0' : '2rem',
          textAlign: isMobile ? 'center' : 'start',
        }}
      >
        {[
        'EMR - Patient Record Management System',
        'A capstone project designed to help the Rural Health Unit of Burgos Isabela transition from paper-based to computerized medical records.',
        'Tech stack:',
        'VB.NET',
        'MySQL'
      ].map((text, idx) => (
        <p
          key={idx}
          ref={(el) => (prmsTextRefs.current[idx] = el)}
          style={{
            fontWeight: idx === 0 || idx === 2 ? 'bold' : 'normal',
            fontSize: idx === 0 ? (isMobile ? '1.5rem' : '2rem') : (isMobile ? '0.9rem' : '1rem'),
            marginTop: idx === 0 ? 0 : idx >= 3 ? '0.2rem' : '0.5rem', // smaller gap for tech stack items
            ...slideFromLeft(prmsTextVisible[idx]),
          }}
        >
          {text}
        </p>
      ))}
       {/* Buttons */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          {[
            { text: 'View more info', link: '#' },
            { text: 'View code on GitHub', link: 'https://github.com/JayrusLuy/Patient-Record-Management-System-Administrators-Application' }
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              className="btn nav-btn fw-bold"
              target={btn.link.includes('github') ? '_blank' : undefined}
              rel={btn.link.includes('github') ? 'noopener noreferrer' : undefined}
              style={{
                color: 'white',
                backgroundColor: 'transparent',
                border: '1px solid white',
                borderRadius: '5px',
                fontWeight: 'bold',
                width: isMobile ? '80%' : 'auto',
                textAlign: 'center',
                ...slideUp(prmsButtonsVisible),
                transition: 'opacity 0.7s ease, transform 0.7s ease, background-color 0.2s ease, color 0.2s ease', // instant hover
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* S.A. Simon Glass & Aluminum Feature Section */}
    <div
      ref={sgRef}
      className="project-feature-section d-flex align-items-center flex-wrap"
      style={{
        backgroundColor: 'white',
        minHeight: isMobile ? 'auto' : '500px',
        padding: isMobile ? '1.5rem' : '2rem',
        color: 'black',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Text */}
      <div
        style={{
          flex: 1,
          paddingLeft: isMobile ? '0' : '12rem',
          paddingRight: isMobile ? '0' : '2rem',
          textAlign: isMobile ? 'center' : 'start',
          marginBottom: isMobile ? '1.5rem' : '0',
        }}
      >
        {[
          'POS - Cashier and Project Monitoring System for S.A. Simon Glass & Aluminum',
          'A cashier and project monitoring platform designed for S.A. Simon Glass & Aluminum to streamline their sales and project management processes. Deployed in April 2025.',
          'Tech stack:',
          'VB.NET',
          'MySQL'
        ].map((text, idx) => (
          <p
            key={idx}
            ref={(el) => (sgTextRefs.current[idx] = el)}
            style={{
              fontWeight: idx === 0 ? 'bold' : idx === 2 ? 'bold' : 'normal',
              fontSize: idx === 0 ? (isMobile ? '1.5rem' : '2rem') : (isMobile ? '0.9rem' : '1rem'),
              marginTop: idx === 0 ? 0 : '0.5rem',
              ...slideFromRight(sgTextVisible[idx]), // slide from right for text
            }}
          >
            {text}
          </p>
        ))}

        {/* Buttons */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <a
            href="#"
            className="btn nav-btn fw-bold"
            style={{
              color: 'black',
              backgroundColor: 'transparent',
              border: '1px solid black',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: isMobile ? '80%' : 'auto',
              textAlign: 'center',
              ...slideUp(sgButtonsVisible),
              transition: 'opacity 0.7s ease, transform 0.7s ease, background-color 0.2s ease, color 0.2s ease', // hover instant
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'black';
            }}
          >
            View more info
          </a>

          <a
            href="https://github.com/JayrusLuy/Cashier-and-Project-Monitoring-System"
            target="_blank"
            rel="noopener noreferrer"
            className="btn nav-btn fw-bold"
            style={{
              color: 'black',
              backgroundColor: 'transparent',
              border: '1px solid black',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: isMobile ? '80%' : 'auto',
              textAlign: 'center',
              ...slideUp(sgButtonsVisible),
              transition: 'opacity 0.7s ease, transform 0.7s ease, background-color 0.2s ease, color 0.2s ease', // hover instant
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'black';
            }}
          >
            View code on GitHub
          </a>
        </div>
      </div>

      {/* Image */}
      <div
        ref={sgImageRef}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: isMobile ? '1.5rem' : '0',
          ...slideFromLeft(sgImageVisible),
        }}
      >
        <img
          src={SG2}
          alt="S.A. Simon Glass & Aluminum Logo"
          style={{
            width: isMobile ? '200px' : '400px',
            height: isMobile ? '200px' : '400px',
            borderRadius: '5px',
            objectFit: 'cover',
            border: '3px solid #ccc',
          }}
        />
      </div>
    </div>

    {/* UsamiWit Quiz Maker Feature Section */}
    <div
      className="project-feature-section d-flex align-items-center flex-wrap"
      style={{
        backgroundImage: `url(${Project2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: window.innerWidth <= 768 ? 'auto' : '612px',
        padding: window.innerWidth <= 768 ? '1.5rem' : '2rem',
        color: 'white',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image */}
      <div
        ref={usamiImageRef}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: window.innerWidth <= 768 ? '1.5rem' : '0',
          ...slideFromRight(usamiImageVisible),
        }}
      >
        <img
          src={UsamiWit}
          alt="UsamiWit Logo"
          style={{
            width: window.innerWidth <= 768 ? '200px' : '400px',
            height: window.innerWidth <= 768 ? '200px' : '400px',
            borderRadius: '5px',
            objectFit: 'cover',
            border: '3px solid rgba(255,255,255,0.7)',
          }}
        />
      </div>
      {/* Text */}
      <div
        ref={usamiRef}
        style={{
          flex: 1,
          paddingLeft: window.innerWidth <= 768 ? '0' : '2rem',
          textAlign: window.innerWidth <= 768 ? 'center' : 'start',
        }}
      >
        {[
        'UsamiWit Quiz Maker',
        'An offline quiz maker platform developed as an alternative to online quiz makers, enabling students with limited internet access and funds to create, take, and track their academic performance through quizzes. Deployed in July 2025.',
        'Tech stack:',
        'VB.NET',
        'MySQL'
      ].map((text, idx) => (
        <p
          key={idx}
          ref={el => (usamiTextRefs.current[idx] = el)}
          style={{
            fontWeight: idx === 0 || idx === 2 ? 'bold' : 'normal',
            fontSize: idx === 0 ? (isMobile ? '1.5rem' : '2rem') : (isMobile ? '0.9rem' : '1rem'),
            marginTop: idx === 0 ? 0 : '0.5rem',
            ...slideFromLeft(usamiTextVisible[idx], idx * 0.2),
          }}
        >
          {text}
        </p>
      ))}
        {/* Buttons */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            gap: '1rem',
            alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start',
          }}
        >
          {[
            { text: 'View more info', link: '#' },
            { text: 'View code on GitHub', link: 'https://github.com/JayrusLuy/UsamiWit-Quiz-Maker' }
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target={btn.link.includes('github') ? '_blank' : undefined}
              rel={btn.link.includes('github') ? 'noopener noreferrer' : undefined}
              className="btn nav-btn fw-bold"
              style={{
                color: 'white',
                backgroundColor: 'transparent',
                border: '1px solid white',
                borderRadius: '5px',
                fontWeight: 'bold',
                width: window.innerWidth <= 768 ? '80%' : 'auto',
                textAlign: 'center',
                cursor: 'pointer',
                ...slideUp(usamiButtonsVisible, 0),
                transition: 'opacity 0.7s ease, transform 0.7s ease, background-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>

        {/* Online Portfolio Feature Section */}
        <div
          ref={portfolioRef}
          className="project-feature-section d-flex align-items-center flex-wrap"
          style={{
            backgroundColor: '#f8f9fa',
            minHeight: isMobile ? 'auto' : '500px',
            padding: isMobile ? '1.5rem' : '2rem',
            color: 'black',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Image */}
          <div
            ref={portfolioImageRef}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '1.5rem' : '0',
              ...slideFromLeft(portfolioImageVisible),
            }}
          >
            <img
              src={Portfolio}
              alt="Portfolio Logo"
              style={{
                width: isMobile ? '200px' : '400px',
                height: isMobile ? '200px' : '400px',
                borderRadius: '5px',
                objectFit: 'cover',
                border: '3px solid #ccc',
              }}
            />
          </div>

          {/* Text */}
          <div
            style={{
              flex: 1,
              paddingLeft: isMobile ? '0' : '12rem',
              paddingRight: isMobile ? '0' : '2rem',
              textAlign: isMobile ? 'center' : 'start',
            }}
          >
            {[
              'Online Portfolio',
              'A self-made digital portfolio to showcase my skills, projects, and achievements that also serves as a way to demonstrate my web development capabilities and allow for potential clients and employers to contact me.',
              'Tech stack:',
              'React.js',
              'Node.js',
              'Bootstrap'
            ].map((text, idx) => (
              <p
                key={idx}
                ref={el => (portfolioTextRefs.current[idx] = el)}
                style={{
                  fontWeight: idx === 0 || idx === 2 ? 'bold' : 'normal',
                  fontSize: idx === 0 ? (isMobile ? '1.5rem' : '2rem') : (isMobile ? '0.9rem' : '1rem'),
                  marginTop:
                    idx === 0 || idx === 1 || idx === 2 ? '0.5rem' : '0',
                  ...slideFromRight(portfolioTextVisible[idx], idx * 0.2),
                }}
              >
                {text}
              </p>
            ))}
            {/* Buttons */}
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '1rem',
                alignItems: isMobile ? 'center' : 'flex-start',
              }}
            >
              {[
                { text: 'Check Contact Me Page', link: '/contact', isLink: true },
                { text: 'View Code on GitHub', link: 'https://github.com/JayrusLuy/Digital-Portfolio', isLink: false }
              ].map((btn, i) => {
                const Component = btn.isLink ? Link : 'a';
                return (
                  <Component
                    key={i}
                    to={btn.isLink ? btn.link : undefined}
                    href={btn.isLink ? undefined : btn.link}
                    target={!btn.isLink ? '_blank' : undefined}
                    rel={!btn.isLink ? 'noopener noreferrer' : undefined}
                    className="btn nav-btn fw-bold"
                    style={{
                      color: 'black',
                      backgroundColor: 'transparent',
                      border: '1px solid black',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      width: isMobile ? '80%' : 'auto',
                      textAlign: 'center',
                      ...slideUp(portfolioButtonsVisible),
                      transition: 'opacity 0.7s ease, transform 0.7s ease, background-color 0.2s ease, color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'black';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'black';
                    }}
                  >
                    {btn.text}
                  </Component>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Projects;