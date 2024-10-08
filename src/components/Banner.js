import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Memoize the toRotate array
  const toRotate = useMemo(() => ["Full Stack Developer", "Web Developer", "Software Engineer"], []);

  // Wrapping tick function with useCallback to memoize it
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length, toRotate, period]); // Dependencies

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [tick, delta]); // Include tick as a dependency

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My Portfolio</span>
                  <h1>
                    {`Hi! I'm Prabhu Prasad Panda`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Full Stack Developer", "Web Developer", "Software Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a passionate software developer currently pursuing a Master's in Computer Applications (MCA) at GIET University, where I have consistently excelled academically.
                    My journey began with a Bachelor of Science in Chemistry (Hons), which equipped me with a robust analytical mindset.
                  </p>
                  <p>
                    My true passion lies in crafting transformative software solutions. I specialize in full-stack development, harnessing the power of technologies such as Java, Python, PHP, React, Angular, and MongoDB.
                    Each project I undertake is an opportunity to innovate, create, and push the boundaries of what’s possible.
                  </p>
                  <p>
                    With an unwavering commitment to continuous learning, I actively pursue new challenges and embrace emerging technologies. My mission is to leverage my technical expertise and creative problem-solving abilities to contribute to projects that not only achieve business objectives but also make a significant positive impact on users' lives.
                  </p>
                  <p>
                    I thrive on collaboration and believe that the best solutions arise from diverse perspectives. I am excited to connect with like-minded professionals and explore opportunities to work together on meaningful projects.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Illustration" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
