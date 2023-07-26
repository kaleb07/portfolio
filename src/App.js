import { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

import "./App.css";
import profilePicture from "./assets/image/profile.JPG";
import sembuh from "./assets/image/sembuh.jpg";
import fithappy from "./assets/image/fithappy.jpg";
import jobseeker from "./assets/image/jobseeker.JPG";
import cimb from "./assets/image/cimb.JPG";

function App() {
  const [loading, setLoading] = useState(false);
  const sections = document.getElementsByClassName("content-card");
  const allMenu = document.getElementsByClassName("menu-icon");
  const formRef = useRef(null);

  const handleScroll = useCallback((e) => {
    const { scrollTop } = e.target;
    Array.from(sections).forEach((element, idx) => {
      const { offsetTop, clientHeight } = element;
      const scrollPosition = scrollTop + Array.from(sections)[0].offsetTop;
      const sectionEnd =
        offsetTop - Array.from(sections)[0].offsetTop - 1 + clientHeight;
      const sectionStart = sectionEnd - clientHeight;

      if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
        reset();
        Array.from(allMenu)[idx].classList.add("active");
      }
    });
  }, []);

  const reset = () => {
    Array.from(allMenu).forEach((element) => {
      element.classList.remove("active");
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Email successfully sent");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something when wrong");
        }
      );
  };

  return (
    <>
      <nav id="navbar" className="navbar">
        <a href="#"></a>
      </nav>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container">
        <div id="all-menu" className="menu">
          <a
            href="#welcome-section"
            className="menu-icon active fas fa-home"
          ></a>
          <a href="#about" className="menu-icon fas fa-user"></a>
          <a href="#projects" className="menu-icon fas fa-code"></a>
          <a href="#experience" className="menu-icon fas fa-briefcase"></a>
          <a href="#contact" className="menu-icon fas fa-envelope"></a>
        </div>

        <div className="portfolio">
          <div className="header">
            <img className="header-img" src={profilePicture} alt="" />
            <h1 className="name">Kaleb Lonari Simanungkalit</h1>
            <h2>Frontend Developer</h2>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/kaleb-lonari-simanungkalit"
                target="_blank"
                className="fab fa-linkedin-in"
                id="profile-link"
              ></a>
              <a
                href="https://github.com/kaleb07"
                target="_blank"
                className="fab fa-github"
              ></a>
            </div>
            <a
              href="https://drive.google.com/file/d/1E178laA548QlwfRQg9Hqbw5UExoT-dcl/view?usp=sharing"
              target="_blank"
              className="cta"
            >
              DownIoad CV
            </a>
          </div>

          <div onScroll={handleScroll} className="content">
            <section className="content-card home" id="welcome-section">
              <h1>Hello, I am Kaleb Lonari Simanungkalit</h1>
            </section>

            <section className="content-card about" id="about">
              <h1>About me</h1>
              <div className="about-item about-me">
                <p>
                  I am a bachelor in information technology who is very
                  passionate about taking on challenges and solving problems in
                  that field. I am also a very adaptable person so I can work
                  alone or as a team without concerns.
                </p>
                <p>
                  Creating a technology that can help human life better is my
                  dream.
                </p>
              </div>
              <div className="col-2">
                <div className="about-item">
                  <h1>Skills</h1>
                  <div className="skills">
                    <span className="skill">HTML</span>
                    <span className="skill">CSS</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">React JS</span>
                    <span className="skill">React Native</span>
                    <span className="skill">React-Hooks</span>
                    <span className="skill">Redux-Saga</span>
                    <span className="skill">Bootstrap</span>
                    <span className="skill">Git</span>
                    <span className="skill">Bitbucket</span>
                    <span className="skill">Firebase</span>
                  </div>
                </div>

                <div className="about-item languages">
                  <h1>Languages</h1>
                  <div className="language">
                    <p>Indonesia</p>
                    <span className="bar">
                      <span className="indonesia"></span>
                    </span>
                  </div>
                  <div className="language">
                    <p>English</p>
                    <span className="bar">
                      <span className="english"></span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-card projects" id="projects">
              <h1>Projects</h1>
              <div className="col-2 project-list">
                <div className="project-tile">
                  <img src={sembuh} alt="" />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Sembuh</h3>
                      <p>
                        Now you can share with Fighters, Survivors, and Health
                        Workers in the Heal Application Support Group.
                      </p>
                      <a
                        href="https://play.google.com/store/apps/details?id=id.sembuh.app&hl=en"
                        target="_blank"
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img src={fithappy} alt="" />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>FitHappy</h3>
                      <p>
                        An end-to-end holistic wellness & well being solution
                        that changes the habits of healthy eating, exercise,
                        mindfulness, and productivity to help employees become
                        healthier, happier, and more productive.
                      </p>
                      <a
                        href="https://play.google.com/store/apps/details?id=app.fithappy&hl=en"
                        target="_blank"
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img src={jobseeker} alt="" />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>JobSeeker</h3>
                      <p>Find your dream job here, now or never.</p>
                      <a
                        href="https://job-seekers-project.netlify.app/landing"
                        target="_blank"
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img src={cimb} alt="" />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Loan Maintenance</h3>
                      <p>Maintain customer's secure lending by CIMB Niaga.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://github.com/kaleb07">see more...</a>
            </section>

            <section className="content-card experience" id="experience">
              <h1>Experience</h1>
              <div className="timeline">
                <div className="timeline-items">
                  <div className="timeline-item">
                    <div className="timeline-date">2022 - now</div>
                    <div className="timeline-content">
                      <h3>CIMB Niaga - (Contract)</h3>
                      <p>
                        The purpose of this project is developing a web
                        application dashboard to maintain customer loans in
                        CIMB-Niaga. In this project I have responsibility to
                        implement UI based on UI scratch into a complete app,
                        integrate API to the application, handling
                        authentication and role management, and fixing bugs.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2021 - 2022</div>
                    <div className="timeline-content">
                      <h3>Cepat Sembuh Hidup Sehat - (Contract)</h3>
                      <br></br>
                      <h4>- FitHappy</h4>
                      <p>
                        The purpose of this project is developing a mobile
                        application that changes the habits of healthy eating,
                        exercise, mindfulness, and productivity to help
                        employees become healthier, happier, and more
                        productive.
                      </p>
                      <h4>- Sembuh</h4>
                      <p>
                        The purpose of this project is developing a mobile
                        application real time group chat application called
                        Support Group with React Native.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2019</div>
                    <div className="timeline-content">
                      <h3>TaniHub - (Internship)</h3>
                      <p>
                        I was an intern at PT. TaniHub Indonesia where I build
                        mobile app in 3 months. In this project I have
                        responsibilty to fulfill the company's requirement for
                        develop activity reporting app for employee's activity
                        in field. For the specific task I have integrate app
                        with the API, authentication account with email for
                        employee access only and integrating storage system with
                        Google Cloud Storage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-card contact" id="contact">
              <h1>Contact</h1>
              <form
                ref={formRef}
                className="form"
                id="form"
                onSubmit={(e) => sendEmail(e)}
              >
                <div className="input-box">
                  <input
                    type="text"
                    className="text-input"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    className="text-input"
                    name="user_email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="subject"
                    className="text-input"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="input-box">
                  <textarea
                    name="message"
                    className="message"
                    placeholder="Message..."
                    required
                  />
                </div>
                <div className="input-box">
                  <button type="submit" className="submit-btn" id="submit">
                    {loading ? <div className="loader"></div> : "Submit"}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
