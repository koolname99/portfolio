import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            LN
                        </Link>
                    </div>
                    <p class='website-rights'>
                        Designed and Developed by Long Nguyen
                        <br/> Copyright © 2024 LN</p>
                    
                </div>
            </section>
        </div>
    );
}

export default Footer;