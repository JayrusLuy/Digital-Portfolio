import React, { useState, useEffect, useRef } from "react";
import Pfp from "./assets/profile picture/pfp.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Emailme from "./Emailme";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    // measure navbar after mount
    const measure = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };
    measure();

    // update on resize / font changes
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Emailme(email, subject, body);
      alert(result?.message || "Something went wrong!");
      setEmail("");
      setSubject("");
      setBody("");
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  const closeModal = () => setShowModal(false);

  // Provide a sensible fallback so padding isn't huge on first render
  const paddingTop = navbarHeight ? `${navbarHeight + 16}px` : "72px";

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="navbar navbar-dark fixed-top w-100"
        style={{ background: "linear-gradient(to right, #731cff, #b366ff)" }}
      >
        <div className="container d-flex align-items-center" style={{ gap: "1rem" }}>
          <Link to="/contact" className="d-flex align-items-center flex-shrink-0">
            <img src={Pfp} alt="Profile" className="pfp" />
          </Link>

          <div className="d-flex flex-column flex-grow-1">
            <div>
              <h3 className="fw-bold mb-1 text-white">Jayrus T. Luy</h3>
              <h5 className="fw-semibold text-white mb-2">Online Portfolio</h5>
            </div>

            <div className="d-flex flex-wrap" style={{ gap: "1rem" }}>
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

      {/* Responsive padding */}
      <div style={{ paddingTop: `${navbarHeight + 16}px` }}>
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* Contact text */}
            <div className="col-12 col-md-6 text-light contact-text">
              <p>
                If you're a recruiter and
                <br />
                found my portfolio intriguing,
                <br />
                feel free to contact me.
              </p>
            </div>

            {/* Email me card */}
            <div className="col-12 col-md-6 d-flex">
              <div className="card text-white bg-dark mb-3 flex-fill custom-card-border">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderColor: "#731cff" }}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ borderColor: "#731cff" }}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Body</label>
                      <textarea
                        className="form-control"
                        rows="6"
                        style={{ resize: "vertical", borderColor: "#731cff" }}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-100"
                      style={{ backgroundColor: "#731cff", color: "white" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ backgroundColor: "#000", borderColor: "#731cff" }}
            >
              <div className="modal-header" style={{ borderColor: "#731cff" }}>
                <h5 className="modal-title text-white">Notice</h5>
                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-white" style={{ borderTop: "1px solid #731cff", borderBottom: "1px solid #731cff" }}>
                Backend functionalities are not working due to GitHub Pages limitations.
                This page only serves as proof that Node.js was used in this Digital Portfolio.
              </div>
              <div className="modal-footer" style={{ borderColor: "#731cff" }}>
                <button className="btn" style={{ backgroundColor: "#731cff", color: "white" }} onClick={closeModal}>
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
