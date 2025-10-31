import React from 'react';
import Pfp from './assets/profile picture/pfp.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PRMS from './assets/PRMS.png';
import SG2 from './assets/SG2.png';
import UsamiWit from './assets/usamiwit.png';
import Usamiweb from './assets/usamiweb.png';
import Portfolio from './assets/portfolio.png';

function Projects() {
  return (
    <div>
      <div className="container">
        <title>My Projects</title>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-sm navbar-dark fixed-top"
          style={{
            background: 'linear-gradient(to right, #731cff, #b366ff)',
            padding: '15px 30px',
          }}
        >
          <div className="container d-flex align-items-center justify-content-start">
            <img src={Pfp} alt="Profile" className="pfp" />
            <div style={{paddingLeft: "30px"}}>
              <h3 className="fw-bold mb-1 text-white">Jayrus T. Luy</h3>
              <h5 className="fw-semibold text-white mb-2">Online Portfolio</h5>
              <nav className="nav">
                <Link className="nav-link text-white p-0 me-3" to="/">
                  About me
                </Link>
                <Link className="nav-link text-white p-0 me-3" to="/projects">
                  My projects
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ paddingTop: '200px' }}></div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* PRMS card */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <center>
                <img src={PRMS} className="project-pic card-img-top" alt="PRMS" />
              </center>
              <div className="card-body">
                <div className="card-header custom-card-border">
                  <center>
                    <h5 className="title-pad">Patient Record Management System</h5>
                  </center>
                </div>
                <br />
                <p className="card-text content-text">
                  A Medical Records System designed to help the Rural Health Unit of Burgos Isabela
                  transition from a paper-based Medical Records System to a Computerized one.
                </p>
                <p>
                  Note: This is a capstone project not an official system/application used by The
                  Municipality of Burgos.
                </p>
                <div className="card-footer custom-card-border">
                  <center>
                    Not Deployed
                    <br />
                    VB.NET | MySQL
                    <br />
                    <a
                      className="link-underline-primary"
                      href="https://github.com/JayrusLuy/Patient-Record-Management-System-Administrators-Application"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code on GitHub
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>

          {/* Simon Glass Card */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <center>
                <img src={SG2} className="project-pic card-img-top" alt="SG2" />
              </center>
              <div className="card-body">
                <div className="card-header custom-card-border">
                  <center>
                    <h5>S.A. Simon Glass & Aluminum Cashier and Project Monitoring System</h5>
                  </center>
                </div>
                <br />
                <p className="card-text content-text">
                  A Cashier and Project Monitoring System for S.A. Simon Glass & Aluminum that
                  aims to accelerate their retail process and automate receipt generation as well as
                  having a digitalized project monitoring to eliminate the possibility of losing
                  physical copies.
                </p>
                <div className="card-footer custom-card-border">
                  <center>
                    Coming Soon
                    <br />
                    VB.NET | MySQL
                    <br />
                    <a
                      className="link-underline-primary"
                      href="https://github.com/JayrusLuy/Cashier-and-Project-Monitoring-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code on GitHub
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>

          {/* UsamiWit */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <center>
                <img src={UsamiWit} className="project-pic card-img-top usamiwit" alt="UsamiWit" />
              </center>
              <div className="card-body">
                <div className="card-header custom-card-border">
                  <center>
                    <h5>UsamiWit Quiz Maker</h5>
                  </center>
                </div>
                <br />
                <p className="card-text content-text">
                  A Quiz Maker System with different quiz modes I developed for my Girlfriend after
                  being inconvenienced by payment walls. This system aims at helping people without
                  funds create quiz reviewers whether it's for Board or Bar Examinations or for
                  general academic activities.
                </p>
                <div className="card-footer custom-card-border">
                  <center>
                    Deployed July 2025
                    <br />
                    VB.NET | MySQL
                    <br />
                    <a
                      className="link-underline-primary"
                      href="https://github.com/JayrusLuy/UsamiWit-Quiz-Maker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code on GitHub
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Portfolio */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <center>
                <img src={Portfolio} className="project-pic card-img-top" alt="Portfolio" />
              </center>
              <div className="card-body">
                <div className="card-header custom-card-border">
                  <center>
                    <h5>Digital Portfolio</h5>
                  </center>
                </div>
                <br />
                <p className="card-text content-text">
                  A self-made digital portfolio to showcase my skills, projects, and allow a
                  recruiter to contact me.
                </p>
                <div className="card-footer custom-card-border">
                  <center>
                    Deployed October 2025
                    <br />
                    React.JS | Node.JS
                    <br />
                    <a
                      className="link-underline-primary"
                      href="https://github.com/JayrusLuy/Digital-Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code on GitHub
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>

          {/* UsamiWit Web Version */}
          <div className="col">
            <div className="card text-white bg-dark mb-3 h-100 custom-card-border">
              <center>
                <img src={Usamiweb} className="project-pic card-img-top usamiwit" alt="UsamiWit Web" />
              </center>
              <div className="card-body">
                <div className="card-header custom-card-border">
                  <center>
                    <h5>UsamiWit Quiz Maker Web Version</h5>
                  </center>
                </div>
                <br />
                <p className="card-text content-text">Coming Soon</p>
                <div className="card-footer custom-card-border">
                  <center>
                    Deployed July 2025
                    <br />
                    React.JS | Node.JS | MySQL
                    <br />
                    <a className="link-underline-primary" href="#" target="_blank" rel="noopener noreferrer">
                      Sit tight I am currently developing this!
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
