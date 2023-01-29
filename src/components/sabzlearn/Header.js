import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">SabzLearn</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/courses"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        login
                    </NavLink>
                    <NavLink
                        to="/panel"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        panel
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{ marginLeft: 35, color: "#fff" }}
                    >
                        dashboard
                    </NavLink>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;
