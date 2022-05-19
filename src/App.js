import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { FaDiscord, FaGithub } from "react-icons/fa";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { useEffect } from "react";
import AOS from "aos";
import LogRocket from "logrocket";
import "aos/dist/aos.css";
LogRocket.init("e5l7j0/portfolio");

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <div className="container">
      <Navbar />
      <section className="main-section">
        <div className="profile">
          <Profile />
          <div className="social-icons">
            <a href="https://github.com/DevDeclann" target="_blank">
              <FaGithub />
            </a>
            <a href="https://discord.gg/SaCYjdBE">
              <FaDiscord />
            </a>
          </div>
        </div>
      </section>
      <About />
      <section>
        <Projects />
      </section>
      <Contact />
    </div>
  );
}

export default App;
