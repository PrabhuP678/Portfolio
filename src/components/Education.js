import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css'; // Ensure animate.css is imported
import TrackVisibility from 'react-on-screen';
// import './education.css'; // Make sure to include your CSS

// Education data
const educationData = [
    {
        degree: "M.C.A",
        year: "2023-2025",
        institute: "GIET University",
        board: "GIET University",
        marks: "8.86",
        brief: "Pursuing a Master’s in Computer Applications, focusing on software development, database management, and web technologies. Achieved a strong CGPA of 8.86."
    },
    {
        degree: "B.Sc (Chemistry)",
        year: "2020-2023",
        institute: "Mahamaya Group of Institution Nuapada",
        board: "Kalahandi University",
        marks: "81.9%",
        brief: "Completed a Bachelor’s degree in Chemistry with an 81.9% score. Gained proficiency in analytical techniques and laboratory practices."
    },
    {
        degree: "+2 (Science)",
        year: "2018-2020",
        institute: "D.A.V College Titilagarh",
        board: "CHSE",
        marks: "56.5%",
        brief: "Completed higher secondary education in Science with a focus on Physics, Chemistry, and Mathematics. Secured a 56.5% under the CHSE board."
    },
    {
        degree: "10th",
        year: "2018",
        institute: "S.D.M.T.P Public School Titilagarh",
        board: "CBSE",
        marks: "73.5%",
        brief: "Achieved a 73.5% in secondary education, with a solid foundation in Mathematics, Science, and Social Studies under the CBSE board."
    }
];

const Education = () => {
    return (
        <Container className="education-container" id="education">
            <Row>
                <Col>
                    <h2>Education</h2>
                    {educationData.map((edu, index) => (
                        <TrackVisibility once key={index}>
                            {({ isVisible }) => (
                                <div className={`education-entry ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                                    <h3>{edu.degree} - {edu.year}</h3>
                                    <p><strong>Institute:</strong> {edu.institute}</p>
                                    <p><strong>Board/University:</strong> {edu.board}</p>
                                    <p><strong>Marks:</strong> {edu.marks}</p>
                                    <p>{edu.brief}</p>
                                </div>
                            )}
                        </TrackVisibility>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Education;
