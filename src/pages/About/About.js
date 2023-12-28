import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./../../Navbar";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Footer from './../../Footer';
import './../../App.css';
function About() {
    return (
      <Container fluid className="about-section">
        <Navbar />
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Welcome <strong className="purple">!</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Long Nguyen </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />
            I am currently pursuing a Master's Degree in Computer Science with an emphasis on Cybersecurity at the University of Texas at Dallas.
            <br />
            I have already completed my Bachelor's Degree in Computer Science at the same university."
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
               Playing Games
            </li>

            <li className="about-activity">
              Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Software are art!"{" "}
          </p>
          <footer className="blockquote-footer">Long</footer>
            </Col>
            </Row>
        </Container>
        <p>My tech stack</p>
        <Techstack />
        <p>My tool stack</p>
        <Toolstack />
        <Footer />
      </Container>
    );
  }
  export default About;