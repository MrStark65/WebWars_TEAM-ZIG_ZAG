// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaLinkedin, 
    FaTwitter,
    FaGlobe,
    FaChevronRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col conference-info">
                            <h3>ICCSAI 2025</h3>
                            <p className="conference-desc">
                                3rd International Conference on Communication, 
                                Security, and Artificial Intelligence
                            </p>
                            <div className="conference-date">
                                <span className="highlight">4th - 6th April, 2025</span>
                                <span className="divider">|</span>
                                <span>Hybrid Mode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-col">
                            <h4>Contact Details</h4>
                            <div className="contact-list">
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="icon" />
                                    <div>
                                        <p>Galgotias University</p>
                                        <p>Plot No.2, Sector 17-A</p>
                                        <p>Greater Noida, UP, India</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="icon" />
                                    <div>
                                        <p>+91 1234567890</p>
                                        <p>+91 9876543210</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="icon" />
                                    <div>
                                        <p>iccsai2025@galgotiasuniversity.edu.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/about">About Conference</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/call-for-papers">Call for Papers</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/important-dates">Important Dates</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/registration">Registration</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/committee">Committee</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Conference Tracks</h4>
                            <ul className="footer-links">
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/tracks/ai-ml">AI & Machine Learning</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/tracks/security">Security & Blockchain</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/tracks/communication">Communication & Networks</Link>
                                </li>
                                <li>
                                    <FaChevronRight className="arrow" />
                                    <Link to="/tracks/computing">Computing & Applications</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Connect With Us</h4>
                            <div className="social-links">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://website.com" target="_blank" rel="noopener noreferrer">
                                    <FaGlobe />
                                </a>
                            </div>
                            <div className="conference-venue">
                                <h5>Venue</h5>
                                <p>Galgotias University</p>
                                <p>Greater Noida, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} ICCSAI 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;