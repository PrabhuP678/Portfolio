import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg"; // Replace with actual image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project = {
    title: "eCommerce Shopping App",
    description: "Developed a full-stack eCommerce platform with integrated payment gateway, user authentication, and product management using React, Node.js, MongoDB, and Stripe.",
    imgUrl: projImg1,
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} className="d-flex justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn text-center" : "text-center"}>
                  <h2>Project</h2>
                  <p>Here is the project I've worked on, which demonstrates my expertise in full-stack development, user experience design, and solving real-world problems.</p>
                  <Row className="justify-content-center">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.imgUrl}
                    />
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
