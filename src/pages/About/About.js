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
              Welcome!
            </h1>
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
            Hi Everyone, I am <span className="purple">Long Nguyen </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />
            I am currently pursuing a <span className="purple">Master's Degree</span> in <span className="purple">Cybersecurity</span> at the <span className="purple">University of Texas at Dallas</span>,
            <br />
            having previously earned my <span className="purple">Bachelor's Degree</span> in <span className="purple">Computer Science</span> from the same institution.
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
        <p style={{ textAlign: "center", fontSize: "1.2em", paddingBottom: "20px", fontWeight: "bold" }}>My tech stack</p>
        <Techstack />
        <p style={{ textAlign: "center", fontSize: "1.2em", paddingBottom: "20px", fontWeight: "bold" }}>My tool stack</p>
        <Toolstack />
    
      </Container>
    );
  }
  export default About;