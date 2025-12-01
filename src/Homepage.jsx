import React from 'react';
import Pfp from './assets/profile picture/pfp.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      {/* Navbar */}
      <div className="container">
        <title>About me</title>
            <nav
              className="navbar navbar-dark fixed-top w-100"
              style={{ background: 'linear-gradient(to right, #731cff, #b366ff)' }}
            >
            <div
              className="container d-flex align-items-center flex-nowrap"
              style={{ gap: '1rem' }}
            >
            <Link to="/contact" className="d-flex flex-shrink-0">
              <img src={Pfp} alt="Profile" className="pfp" />
            </Link>
            <div className="d-flex flex-column flex-grow-1">
              <div>
                <h3 className="fw-bold mb-1 text-white">Jayrus T. Luy</h3>
                <h5 className="fw-semibold text-white mb-2">Online Portfolio</h5>
              </div>

              <div className="d-flex flex-wrap" style={{ gap: '1rem' }}>
                <Link className="nav-link text-white p-0 me-1" to="/">
                  About me
                </Link>
                <Link className="nav-link text-white p-0 me-1" to="/projects">
                  My projects
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ paddingTop: '180px' }}></div>

      {/* About Me Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="card text-white bg-dark mb-3 card-body card custom-card-border h-100">
              <div className="card-header custom-card-border">
                <h2>About Me</h2>
              </div>
              <div className="card-body">
                <p>
                  I am a fresh graduate with a Bachelor's Degree in Information Technology, having
                  completed my studies in May 2025. Throughout my academic journey, I consistently
                  strived for excellence, earning the distinction of Magna Cum Laude and being
                  recognized as the Database Programmer of the Year.
                </p>
                <p>
                  My passion for technology and problem-solving extends beyond the classroom. I
                  proudly placed 2nd in individual performance during the Capture the Flag (CTF)
                  competition in Hack for Gov 3, showcasing my skills in cybersecurity and
                  analytical thinking.
                </p>
                <p>
                  I am a hardworking and dedicated individual seeking an IT-related position where I
                  can apply my technical knowledge, grow professionally, and contribute meaningfully
                  to innovative projects.
                </p>
                <p>Feel free to explore my online portfolio to learn more about my projects and skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Cards */}
      <div className="container" style={{ paddingTop: '20px' }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Soft Skills */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <div className="card-header custom-card-border">
                <h4>Soft Skills</h4>
              </div>
              <div className="card-body">
                <ul>
                  <li>Excellent communication skills</li>
                  <li>Strong critical thinking skills</li>
                  <li>Outstanding work ethic</li>
                  <li>Ability to perform well under pressure</li>
                  <li>Highly adaptable to changing environments</li>
                  <li>Fast learner with a proactive attitude</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <div className="card-header custom-card-border">
                <h4>Technical Skills</h4>
              </div>
              <div className="card-body">
                <ul>
                  <li>Web Development</li>
                  <li>Software Development</li>
                  <li>Database Programming</li>
                  <li>Troubleshooting</li>
                  <li>Computer Systems Servicing</li>
                  <li>AI Tools Usage</li>
                  <li>Git Version Control</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages and Frameworks */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <div className="card-header custom-card-border">
                <h4>Languages and Frameworks</h4>
              </div>
              <div className="card-body">
                <h5>Web Development</h5>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Node.JS</li>
                  <li>React.JS</li>
                  <li>Bootstrap</li>
                </ul>
                <h5>Software Development</h5>
                <ul>
                  <li>VB.NET</li>
                </ul>
                <h5>Database Programming</h5>
                <ul>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
