import "../../styles/components/About/About.css";
import declanPro from "../../assets/declan.png";
import Data from "./data.json";
import {
  DiJsBadge,
  DiHtml5,
  DiSass,
  DiBootstrap,
  DiReact,
} from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="about-container" data-aos="fade-left">
      <div className="about-content">
        <div className="about-profile">
          <img src={declanPro} alt="Steve jobs but Declan" />
          <div className="about-profile-info">
            <h1>About me</h1>
            <p>
              {Data.aboutDescription}
              <br />
              <br />
              {Data.secondDescription}
            </p>
            <div className="about-icons">
              <DiJsBadge size={30} />
              <DiReact size={30} />
              <DiHtml5 size={30} />
              <DiSass size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
