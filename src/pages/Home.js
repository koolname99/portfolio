// App.js
import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import logo from './../Assets/avatar.jpg';
import './../App.css';
import Tilt from "react-parallax-tilt";
import Navbar from "./../Navbar";

function App() {

    return (
        
        <div className="App">
            <Navbar />
            <div className="container">
               

                <Tilt>
                    <img src={logo} className="App-logo" alt="logo"  />
                </Tilt>


                <h1 >

                    Hi There! 👋
                    <br /> I'm Long Nguyen
                </h1>
                {/* Description about the person */}
                <p className="home-about-body">
                    I love software and fell in love with programming since I was a kid
                    <br />
                    <br />I am fluent in classics like
                    <i>
                        <b className="purple"> Java, Javascript, and Python. </b>
                    </i>
                    <br />
                    <br />
                    My field of interest is building new
                    <i>
                        <b className="purple"> Web Technologies and Products </b>
                    </i>
                    and also in areas related to{" "}
                    <b className="purple">
                        Cybersecurity.
                    </b>
                    <br />
                    <br />
                    Whenever possible, I also apply my passion for developing products
                    with <b className="purple">Node.js</b> and
                    <i>
                        <b className="purple">
                            {" "}
                            Modern Javascript Library and Frameworks
                        </b>
                    </i>
                    &nbsp; like
                    <i>
                        <b className="purple"> React.js and Next.js</b>
                    </i>
                </p>

            </div>
        </div>
    );
}

export default App;
