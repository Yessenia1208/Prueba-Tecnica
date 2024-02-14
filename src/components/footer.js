import React from "react";
import '../styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a>Home</a>
                <span>|</span>
                <a>Terms and Conditions</a>
                <span>|</span>
                <a>Privacy Policy</a>
                <span>|</span>
                <a>Collection Statement</a>
                <span>|</span>
                <a>Help</a>
                <span>|</span>
                <a>Manage Account</a>
            </div>
            <div className="rights__content">
                <p> Copyright &copy; 2016 DEMO Streaming All Rights Reserved</p>
            </div>
            <div className="media__content">
                <div className="social__icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                <div className="image__content">
                    <img
                        src="https://cdn.freecodecamp.org/platform/universal/apple-store-badge.svg"
                        lang="en"
                        alt="Download on the App Store"
                        style={{ width: '120px', height: 'auto' }}
                    />
                    <img
                        src="https://cdn.freecodecamp.org/platform/universal/google-play-badge.svg"
                        lang="en"
                        alt="Get it on Google Play"
                        style={{ width: '120px', height: 'auto' }}
                    />
                    <img
                        src="https://cdn.freecodecamp.org/platform/universal/apple-store-badge.svg"
                        lang="en"
                        alt="Get it from Microsoft"
                        style={{ width: '120px', height: 'auto' }}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;