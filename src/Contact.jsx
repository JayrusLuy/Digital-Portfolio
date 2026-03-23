import React, { useState, useEffect, useRef } from "react";
import Background2 from "./assets/background 2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Contact() {
  const heroRef = useRef(null);
  const [navbarStyle, setNavbarStyle] = useState("transparent");
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  // Measure navbar height
  useEffect(() => {
    const measure = () => {
      if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll effect for navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setNavbarStyle(window.scrollY > heroHeight ? "solid" : "transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for left text
  const leftTextRef = useRef([]);
  const [visibleLeft, setVisibleLeft] = useState([]);
  useEffect(() => {
    leftTextRef.current = leftTextRef.current.slice(0, 3);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleLeft((prev) => {
              const newVis = [...prev];
              newVis[index] = true;
              return newVis;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    leftTextRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for right card
  const cardRef = useRef(null);
  const [visibleCard, setVisibleCard] = useState(false);
  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleCard(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="navbar fixed-top portfolio-navbar"
        style={{
          backgroundColor: navbarStyle === "transparent" ? "transparent" : "white",
          padding: "0.5rem 1rem",
          zIndex: 1000,
          boxShadow:
            navbarStyle === "transparent" ? "none" : "0 2px 6px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex gap-3 align-items-center flex-wrap justify-content-center">
            {["About", "My Projects", "Contact Me"].map((text, i) => {
              const isTransparent = navbarStyle === "transparent";
              return (
                <Link
                  key={i}
                  to={i === 0 ? "/" : i === 1 ? "/projects" : "/contact"}
                  className="btn nav-btn fw-bold"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div
        ref={heroRef}
        style={{
          paddingTop: `${navbarHeight}px`,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
        className="main-section"
      >
        {/* LEFT SIDE - Background Image + Text */}
        <div
          className="left-section"
          style={{
            flex: 1,
            backgroundImage: `url(${Background2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem",
            color: "white",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "500px", fontSize: "1.5rem", fontWeight: "500" }}>
            {[
              "Interested in my work?",
              "Whether you're a client or an employer, let's connect.",
              "Send me a message.",
            ].map((text, idx) => (
              <h3
                key={idx}
                ref={(el) => (leftTextRef.current[idx] = el)}
                className="display-6 fw-bold"
                style={{
                  opacity: visibleLeft[idx] ? 1 : 0,
                  transform: visibleLeft[idx] ? "translateX(0)" : "translateX(-50px)",
                  transition: `all 0.6s ease ${idx * 0.2}s`,
                  marginBottom: "2rem",
                }}
              >
                {text}
              </h3>
            ))}

            {/* Scroll Down Indicator */}
            <div className="scroll-indicator d-block d-md-none">
              <div style={{ textAlign: "center", fontSize: "14px", marginTop: "1rem" }}>
                <div>Scroll down to see more</div>
                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "inline-block",
                    animation: "bob 3s ease-in-out infinite",
                  }}
                >
                  ▼
                </div>
              </div>
            </div>

            <style>
              {`
                @keyframes bob {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
              `}
            </style>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Card */}
        <div
          className="right-section"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            ref={cardRef}
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              opacity: visibleCard ? 1 : 0,
              transform: visibleCard ? "translateX(0)" : "translateX(50px)",
              transition: "all 0.6s ease",
            }}
          >
            <h4 className="mb-4 fw-bold text-center">Contact Me</h4>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:luyjayrus03@gmail.com">luyjayrus03@gmail.com</a>
            </p>
            <p>
              <strong>Mobile:</strong> 0915 704 3239
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .main-section {
              flex-direction: column !important;
            }
            .left-section, .right-section {
              flex: unset !important;
              width: 100%;
            }
            .portfolio-navbar {
              padding: 0.3rem 0.5rem !important;
            }
            .portfolio-navbar .nav-btn {
              padding: 0.25rem 0.5rem !important;
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Contact;