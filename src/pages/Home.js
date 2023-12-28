import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from "./../Assets/home-svg.jpg";
import './../App.css';

import Navbar from "./../Navbar";
import Type from './../Type';
import Particle from './../Particle';
import Home2 from "./Home2";

function App() {

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Navbar />
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">


                        <div style={{ padding: 50, textAlign: "center"}}>
                                
                                </div>


                                <h1 style={{ paddingBottom: 15, color: 'black' }} className="heading">
                                    Hi There! {" "}
                                    <span className="wave" role="img" aria-labelledby='wave'>
                                        👋
                                    </span>
                                </h1>

                                <h1 className="heading-name" style={{ color: 'black'}}>
                                    I'M
                                    <strong className="green"> Long Nguyen</strong>.
                                </h1>

                                <div style={{ padding: 50, textAlign: "left"}}>
                                <Type />
                                </div>
                                



                        
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default App;
