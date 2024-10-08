import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the key skills and technologies I have gained proficiency in throughout my academic journey and professional training.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Programming Languages Icon" />
                  <h5>Programming Languages</h5>
                  <p>JAVA, Python</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Web Technologies Icon" />
                  <h5>Web Technologies</h5>
                  <p>HTML, CSS, JavaScript, Express, Node.js</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Frontend Frameworks Icon" />
                  <h5>Frontend Frameworks</h5>
                  <p>React.js</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Databases Icon" />
                  <h5>Databases</h5>
                  <p>MySQL, MongoDB</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Full-Stack Development Icon" />
                  <h5>Full-Stack Development</h5>
                  <p>Experienced in MERN stack (MongoDB, Express Js, React JS, Node Js)</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Graphic" />
    </section>
  );
};
