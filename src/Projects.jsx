import React, { useEffect, useState } from 'react';
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

function Projects() {
  const [navbarStyle, setNavbarStyle] = useState('transparent');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position
      const scrollTop = window.scrollY;

      // Get the top section height
      const topSection = document.getElementById('top-section');
      const topSectionHeight = topSection ? topSection.offsetHeight : 0;

      // Switch navbar style based on whether we are past the top section
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
              color: isTransparent ? 'white' : 'black', // text color
              backgroundColor: isTransparent ? 'transparent' : 'white', // solid white button
              border: isTransparent ? '1px solid white' : 'none', // border only when transparent
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

    {/* Top project feature section */}
    <div
      id="top-section"
      className="project-top-section d-flex align-items-center flex-wrap"
      style={{
        backgroundImage: `url(${Project1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '612px',
        padding: '2rem',
        color: 'white',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // stack on mobile
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Left side: PRMS logo */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: window.innerWidth <= 768 ? '1.5rem' : '0', // spacing on mobile
        }}
      >
        <img
          src={Prms1}
          alt="PRMS Logo"
          style={{
            width: window.innerWidth <= 768 ? '200px' : '400px',
            height: window.innerWidth <= 768 ? '200px' : '400px',
            borderRadius: '5px',
            objectFit: 'cover',
            border: '3px solid white',
          }}
        />
      </div>

      {/* Right side text */}
      <div
        style={{
          flex: 1,
          paddingLeft: window.innerWidth <= 768 ? '0' : '2rem',
          textAlign: window.innerWidth <= 768 ? 'center' : 'start',
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem' }}>
          EMR - Patient Record Management System
        </h1>
        <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.25rem', marginTop: '0.5rem' }}>
          A capstone project designed to help the Rural Health Unit of Burgos Isabela transition from paper-based to computerized medical records.
        </p>
        <p style={{ marginTop: '1rem', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
          <strong>Tech stack:</strong><br />
          MySQL<br />
          VB.NET
        </p>

        {/* Transparent buttons with border and shadow */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            gap: '1rem',
            alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start',
          }}
        >
          <a
            href="#"
            className="btn nav-btn fw-bold"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: '1px solid white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: window.innerWidth <= 768 ? '80%' : 'auto',
              textAlign: 'center',
            }}
          >
            View more info
          </a>
          <a
            href="https://github.com/JayrusLuy/Patient-Record-Management-System-Administrators-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="btn nav-btn fw-bold"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: '1px solid white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: window.innerWidth <= 768 ? '80%' : 'auto',
              textAlign: 'center',
            }}
          >
            View code on GitHub
          </a>
        </div>
      </div>
    </div>

        {/* S.A. Simon Glass & Aluminum Feature Section */}
        <div
          className="project-feature-section d-flex align-items-center flex-wrap"
          style={{
            backgroundColor: 'white', // plain white background
            minHeight: window.innerWidth <= 768 ? 'auto' : '500px', // auto for mobile to avoid scroll
            padding: window.innerWidth <= 768 ? '1.5rem' : '2rem', // reduce padding on mobile
            color: 'black',
            flexDirection: window.innerWidth <= 768 ? 'column-reverse' : 'row', // image on top in mobile
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Left side: Text */}
          <div
            style={{
              flex: 1,
              paddingLeft: window.innerWidth <= 768 ? '0' : '12rem', // margin from left edge on desktop
              paddingRight: window.innerWidth <= 768 ? '0' : '2rem', // consistent spacing
              textAlign: window.innerWidth <= 768 ? 'center' : 'start',
              marginBottom: window.innerWidth <= 768 ? '1.5rem' : '0', // spacing on mobile
            }}
          >
            <h1 style={{ fontWeight: 'bold', fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem' }}>
              POS - Cashier and Project Monitoring System for S.A. Simon Glass & Aluminum
            </h1>
            <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.25rem', marginTop: '0.5rem' }}>
              A cashier and project monitoring platform designed for S.A. Simon Glass & Aluminum to streamline their sales and project management processes. Deployed in April 2025.
            </p>
            <p style={{ marginTop: '1rem', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
              <strong>Tech stack:</strong><br />
              VB.NET<br />
              MySQL
            </p>

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
              <a
                href="#"
                className="btn nav-btn fw-bold"
                style={{
                  color: 'black',
                  backgroundColor: 'transparent',
                  border: '1px solid black',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  width: window.innerWidth <= 768 ? '80%' : 'auto',
                  textAlign: 'center',
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
                  width: window.innerWidth <= 768 ? '80%' : 'auto',
                  textAlign: 'center',
                }}
              >
                View code on GitHub
              </a>
            </div>
          </div>

          {/* Right side: SG2 Logo */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: window.innerWidth <= 768 ? '1.5rem' : '0', // spacing on mobile
            }}
          >
            <img
              src={SG2}
              alt="S.A. Simon Glass & Aluminum Logo"
              style={{
                width: window.innerWidth <= 768 ? '200px' : '400px', // reduce size on mobile to fit screen
                height: window.innerWidth <= 768 ? '200px' : '400px',
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
        minHeight: window.innerWidth <= 768 ? 'auto' : '612px', // auto for mobile
        padding: window.innerWidth <= 768 ? '1.5rem' : '2rem',
        color: 'white',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // stack on mobile
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Left side: Image */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: window.innerWidth <= 768 ? '1.5rem' : '0',
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
            border: '3px solid rgba(255,255,255,0.7)', // subtle white border for contrast
          }}
        />
      </div>

      {/* Right side: Text */}
      <div
        style={{
          flex: 1,
          paddingLeft: window.innerWidth <= 768 ? '0' : '2rem',
          textAlign: window.innerWidth <= 768 ? 'center' : 'start',
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem' }}>
          UsamiWit Quiz Maker
        </h1>
        <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.25rem', marginTop: '0.5rem' }}>
          An offline quiz maker platform developed as an alternative to online quiz makers, enabling students with limited internet access and funds to create, take, and track their academic performance through quizzes. Deployed in July 2025.
        </p>
        <p style={{ marginTop: '1rem', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
          <strong>Tech stack:</strong><br />
          VB.NET<br />
          MySQL
        </p>

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
          <a
            href="#"
            className="btn nav-btn fw-bold"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: '1px solid white',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: window.innerWidth <= 768 ? '80%' : 'auto',
              textAlign: 'center',
            }}
          >
            View more info
          </a>
          <a
            href="https://github.com/JayrusLuy/UsamiWit-Quiz-Maker"
            target="_blank"
            rel="noopener noreferrer"
            className="btn nav-btn fw-bold"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: '1px solid white',
              borderRadius: '5px',
              fontWeight: 'bold',
              width: window.innerWidth <= 768 ? '80%' : 'auto',
              textAlign: 'center',
            }}
          >
            View code on GitHub
          </a>
        </div>
      </div>
    </div>

   {/* Online Portfolio Feature Section */}
      <div
        className="project-feature-section d-flex align-items-center flex-wrap"
        style={{
          backgroundColor: '#f8f9fa',
          minHeight: isMobile ? 'auto' : '500px',
          padding: isMobile ? '1.5rem' : '2rem',
          color: 'black',
          flexDirection: isMobile ? 'column' : 'row-reverse', // IMAGE ON TOP in mobile, right side on desktop
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Image */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: isMobile ? '1.5rem' : '0',
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
          <h1 style={{ fontWeight: 'bold', fontSize: isMobile ? '1.5rem' : '2rem' }}>
            Online Portfolio
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: '0.5rem' }}>
            A self-made digital portfolio to showcase my skills, projects, and achievements in web development.
          </p>
          <p style={{ marginTop: '1rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
            <strong>Tech stack:</strong><br />
            React.JS<br />
            Node.JS<br />
            Bootstrap
          </p>

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
            <Link
              to="/contact"
              className="btn nav-btn fw-bold"
              style={{
                color: 'black',
                backgroundColor: 'transparent',
                border: '1px solid black',
                borderRadius: '5px',
                fontWeight: 'bold',
                width: isMobile ? '80%' : 'auto',
                textAlign: 'center',
              }}
            >
              Check Contact Me Page
            </Link>
            <a
              href="https://github.com/JayrusLuy/Digital-Portfolio"
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
              }}
            >
              View Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;