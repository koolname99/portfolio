import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./../../Navbar";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Footer from './../../Footer';
import './../../App.css';
import { BsBackpack } from "react-icons/bs";
import { BsController } from "react-icons/bs";
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
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
            Hi Everyone, I am <span className="purple">Long Nguyen </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />
            I am currently pursuing a Master's Degree in Computer Science with an emphasis on Cybersecurity at the University of Texas at Dallas.
            <br />
            I have already completed my Bachelor's Degree in Computer Science at the same university."
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul style={{fontSize: "18px"}}>
           
            
              Playing Games <BsController />
            
              <br />
            
              
              Travelling <BsBackpack />
        
          </ul>
          <p style={{ color: "rgb(255 10 10)", fontSize: "18px" }}>
            "Software are art!"{" "}
          </p>
          <p style={{fontSize: "18px"}}>Long</p>
            </Col>
            </Row>
        </Container>
        <p style={{ textAlign: "justify", fontSize: "18px" }}>My tech stack</p>
        <Techstack />
        <p style={{ textAlign: "justify", fontSize: "18px" }}>My tool stack</p>
        <Toolstack />
        <Footer />
      </Container>
    );
  }
  export default About;