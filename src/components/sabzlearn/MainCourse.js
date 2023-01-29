import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import coursesData from "./CoursesData";

const MainCourse = () => {
    let {courseID} = useParams();
    let mainCouseData = coursesData.find(
        (course) => course.id == courseID
    );
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <img
                        src={mainCouseData.img}
                        style={{ width: "80%", height: "300px" }}
                        alt={mainCouseData.title}
                    />
                </Col>
                <Col>
                    <h2>{mainCouseData.title}</h2>
                    <p>{mainCouseData.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default MainCourse;
