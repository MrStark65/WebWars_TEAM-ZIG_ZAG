// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Import logos
import mainLogo from '../assets/logos/gu_icon.png';
import guLogo from '../assets/logos/gulogo.png';
import studentChapterLogo from '../assets/logos/gustudentchapter.png';
import icccaLogo from '../assets/logos/iccca_logo.png';
import ieeeLogo from '../assets/logos/ieee.png';
import wieLogo from '../assets/logos/wie.png';
import sdgLogo from '../assets/logos/sdg.png';
import vbaLogo from '../assets/logos/vba.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partnerLogos = [
    { img: guLogo, alt: "GU Logo" },
    { img: studentChapterLogo, alt: "IEEE Student Chapter" },
    { img: icccaLogo, alt: "ICCCA" },
    { img: ieeeLogo, alt: "IEEE" },
    { img: wieLogo, alt: "WIE" },
    { img: sdgLogo, alt: "SDG" },
    { img: vbaLogo, alt: "VBA" }
  ];

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className="top-bar">
        <div className="deadline-alert">
          Paper Submission Deadline: March 30, 2025
        </div>
      </div>

      <div className="partners-bar">
        <div className="container">
          <div className="partners-scroll">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="partner-logo">
                <img src={logo.img} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-wrapper">
          <Link to="/" className="brand">
            <img src={mainLogo} alt="ICCSAI Logo" />
            <div className="brand-info">
              <h1>ICCSAI 2025</h1>
              <span>International Conference on Computer Science and AI</span>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-content ${isOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
          
              <li><Link to="/guidelines">Guidelines</Link></li>
              <li><Link to="/committee">Committee</Link></li>
            </ul>

            <div className="nav-actions">
              <a 
                href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                IEEE Proceedings
              </a>
              <Link to="/register" className="btn btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

     
    </header>
  );
};

export default Navbar;