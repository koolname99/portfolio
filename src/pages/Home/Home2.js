import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import Footer from '../../Footer';
import './../../App.css';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from './../../Assets/main.jpg';


function Home2() {

    return (
        <Container fluid className="home-about-section" id="about">
            <Container >
                <Row>            
                    <Col md={7} className="home-about-description">

                        <h1 style={{ fontSize: "2.em" }}>
                            LET ME <span className="green"> INTRODUCE </span> MYSELF
                        </h1>

                        <Col md={4} className="myAvatar">
    <img src={logo} alt="logo" style={{ width: '168px', height: '168px', borderRadius: '50%' }} />
</Col>



                        <p style={{ color: "black", fontSize: "18px" }}>
                            I love software and fell in love with programming since I was a kid
                            <br />
                            <br />I am fluent in
                            <i>
                                <b className="green"> Java, Javascript and Python.</b>
                            </i>
                            <br />
                            <br />
                            My field of interest is building new
            
                            <i>
                                <b className="green">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="green">
                                    Cybersecurity.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="green">Node.js</b> and
                            <i>
                                <b className="green">
                                    {" "}
                                    Modern Javascript Library and Framework
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="green"> React.js</b>
                            </i>
                        </p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="" >connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a href="https://www.linkedin.com/in/long-nguyen-165244288/"
                                    style={{ color: "black", marginRight: "15px" }}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/koolname99"
                                    style={{ color: "black", marginRight: "10px" }}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <AiFillGithub />

                                </a>
                             
                <a
                  href="https://www.instagram.com/codewithlong/"
                  style={{ color: "black", marginRight: "10px" }}
                  target="_blank"
                  rel="noreferrer"

                >
                  
                       </a>
                       </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>


    );
}

export default Home2;
