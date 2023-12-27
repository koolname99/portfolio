import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
                    <div class='social-icons'>
                        <a href="https://github.com/koolname99"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />

                        </a>

                        <a href="https://www.linkedin.com/in/long-nguyen-165244288/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;