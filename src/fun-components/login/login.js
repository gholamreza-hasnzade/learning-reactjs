import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Menus from "./menu";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const Login = () => {
    return (
        <Container fluid>
            <Row>
                <Menus />
                <Col xs={12} md={6}>
                      <LeftSide />
                </Col>

                <Col xs={12} md={6}>
                      <RightSide />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
