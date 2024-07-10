import React from "react";

//importing navigation
import { useNavigate } from "react-router-dom";

//importing images

//importing css code
import ".././assets/css/style.css";

//importing css vendor variables
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

//importing elements
import DonationForm from "./Elements/DonateForm";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div>
      {/* first header */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <button
              style={{
                borderWidth: 0,
                borderColor: "#fff",
                background: "#fff",
                color: "blue",
              }}
              href="index.html"
            >
              Avinx
            </button>
          </h1>
          {/* 
      <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  {" "}
                  <span id="Love"> Home </span>{" "}
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#services">
                  {" "}
                  Services{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  {" "}
                  Donate{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  {" "}
                  Contact{" "}
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  className="getstarted scrollto"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Try AVA{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Second header */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
                {" "}
                Revitalize Your Mind and Body with AVA, AI-powered therapy{" "}
              </h1>
              <ul>
                <p>
                  Welcome to our AI-powered mind therapy app. Our cutting-edge
                  tehcnology provides personalized solutions to improve your
                  mental health. Our team of experts created an AI, AVA(Avinx
                  Virtual Assistant) to tailor therapy programs to your unique
                  needs, helping you achieve your goals. Say goodbye to anxiety
                  and stress.
                </p>
              </ul>
              <div className="mt-3">
                <button
                  style={{
                    borderWidth: 0,
                  }}
                  onClick={() => navigate("/register")}
                  className="btn-get-started scrollto"
                >
                  {" "}
                  Get Started{" "}
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Third section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness Meditation </a>
                </h4>
                <p>
                  {" "}
                  Our Mindfulness meditation program utilizes AI technology to
                  deliver personalized guided meditations and regular meditation
                  practice that fits your lifestyle and supports your mental
                  health.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Cognitive Therapy </a>
                </h4>
                <p>
                  {" "}
                  Our mindfulness-based cognitive therapy program helps you
                  manage negative thoughts, emotions and behaviours.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Stress Reduction </a>
                </h4>
                <p>
                  {" "}
                  Offers a holistic approach to stress management that
                  incorporates mindfulness practices, yoga and body awareness
                  techniques.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
              
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                <span style={{fontWeight: 'bold', fontSize: 50}}>
                  AVA's
                </span>
                distinctive edge lies in its dedication to simplicity and accessibility, mirroring the essence of mental health care. Just as AVA prioritizes ease of use and affordability in financial services, it champions these values in mental health support, ensuring that individuals facing mental health challenges can readily access the care they need. Our commitment extends to breaking down barriers for the underbanked and unbanked, aligning with the ethos of inclusivity crucial in mental health services.
              </p>

              <p className="fst-italic">
              Drawing parallels to our customer acquisition channels, which utilize community mobilization and social media outreach, we recognize the importance of community engagement and online platforms in mental health awareness. By leveraging these channels effectively, we can reach individuals who may be struggling silently, offering them avenues to seek support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* parallax effect */}
      <section style={{ position: 'relative', height: 700}}> 
    <div class="p-one parallax-inner">
      <h2 style={{fontWeight: 'bold'}}> AVINX HEALTH </h2>
    </div>
      </section>

      {/* Donation Form */}
      <section id="team" className="donate">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

  {/* Contact */}
  <section id="contact" className="about">
  <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2> Contact </h2> 
          </div>
          </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default HomeScreen;
