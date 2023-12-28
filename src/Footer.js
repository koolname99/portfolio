import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
//import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            LN
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <h3 class='website-rights'>
                        Designed and Developed by Long Nguyen
                        <br/> Copyright © 2023 LN</h3>
                    
                </div>
            </section>
        </div>
    );
}

export default Footer;