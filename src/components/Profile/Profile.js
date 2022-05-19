import Typical from "react-typical";
import "../../styles/components/Profile/profile.css";
import image from "../../assets/pro.png";
import Data from "./data.json";
import Button from "../Button/Button";
import { BsMouse, BsArrowDown } from "react-icons/bs";
const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-info">
          <div className="info-content" data-aos="fade-right">
            <div className="info-description">
              <h2>{Data.name}</h2>
              <Typical
                className="title"
                steps={[
                  "Developer",
                  3000,
                  "Security Researcher!",
                  3000,
                  "🔥 Design UI/UX",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
              <p className="about-me">{Data.portfolioInfo}</p>
              <Button className="main-btn" />
              <div className="scroll-down-text">
                <h5>
                  <BsMouse />
                  Scroll down
                  <BsArrowDown />
                </h5>
              </div>
            </div>
          </div>{" "}
          <img data-aos="fade-left" src={image} alt="image of declan" />
        </div>
      </div>
    </>
  );
};

export default Profile;
