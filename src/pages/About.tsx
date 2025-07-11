import AnimatedLetters from "../components/AnimatedLetters";
import "../components/AnimatedLetters/skills.css";
import "../components/AnimatedLetters/cube.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const skills = [
    "CSharp",
    "DataBase",
    "React",
    "Node.js",
    "GitHub",
    "JavaScript",
  ];
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9">
            <AnimatedLetters textAnimated="About me" />
            <p>
              I'm very ambitious BackEnd Developer looking for a role in
              stablished IT company with the oportunity to work with the latest
              technologies on challenging and diverse proyects.
            </p>
            <p>
              I'm quietly confident, naturaly corious, and perpetually working
              on improving my chops one design problem at a time.
            </p>
            <div className="">
              <h3 className="text-principal">My Skills</h3>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="badge skill-badge bg-dark me-2 mb-2"
                  style={{ fontSize: "1rem" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faNode} color="#28A4D9" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faDatabase} color="#04132d" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faCode} color="#178600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
