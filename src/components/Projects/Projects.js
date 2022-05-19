import "../../styles/components/Projects/Projects.css";
import data from "./projects.json";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project-container">
        <div className="project-cards">
          <div className="card" data-aos="fade-up">
            <div className="card-title">{data.project1["card-title"]}</div>
            <div className="card-info">{data.project1["card-info"]}</div>
            <div className="link">
              <a href="#">Link to project ></a>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-title">{data.project2["card-title"]}</div>
            <div className="card-info">{data.project2["card-info"]}</div>
            <div className="link">
              <a href="#">Link to project ></a>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-title">{data.project3["card-title"]}</div>
            <div className="card-info">{data.project3["card-info"]}</div>
            <div className="link">
              <a href="#">Link to project ></a>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-title">{data.project4["card-title"]}</div>
            <div className="card-info">{data.project4["card-info"]}</div>
            <div className="link">
              <a href="#">Link to project ></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
