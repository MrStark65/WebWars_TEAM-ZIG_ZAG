// src/pages/KeynoteSpeakers.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './KeynoteSpeakers.css';

// Import speaker images
import snSinghImage from '../assets/persons/snsingh.jpeg';
import yogeshChauhanImage from '../assets/persons/yogesh1.png';
import ramkumarImage from '../assets/persons/jramkumar.jpg';
import liudongImage from '../assets/persons/Liudong1.png';
import nurfadhlinaImage from '../assets/persons/nurfa.png';
import elngarImage from '../assets/persons/elngar.jpg';
import muraliImage from '../assets/persons/yogesh1.png';
import rajeevImage from '../assets/persons/yogesh1.png';
import asheeshImage from '../assets/persons/asheeshksingh.png';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof.(Dr.) S.N. Singh",
      position: "Director IIITM",
      institution: "Gwalior, India",
      image: snSinghImage
    },
    {
      name: "Dr. Yogesh S. Chauhan",
      position: "Professor",
      institution: "Indian Institute of Technology Kanpur, U.P., India",
      image: yogeshChauhanImage
    },
    {
      name: "Prof. J. Ramkumar",
      position: "Dean (Planning)",
      institution: "IIT Kanpur, India",
      image: ramkumarImage
    },
    {
      name: "Dr. Liudong Xing",
      position: "Professor, Director (R)",
      institution: "University of Massachusetts, Dartmouth",
      image: liudongImage
    },
    {
      name: "Ts. Dr. Nurfadhlina Mohd Sharef",
      position: "Assoc. Professor",
      institution: "UKM, Malaysia",
      image: nurfadhlinaImage
    },
    {
      name: "Dr. Ahmed A. Elngar",
      position: "Associate Professor",
      institution: "Beni-Suef University, Egypt",
      image: elngarImage
    },
    {
      name: "Prof. Ts. Dr. Murali Raman",
      position: "Deputy Vice Chancellor",
      institution: "Asia Pacific University, Malaysia",
      image: muraliImage
    },
    {
      name: "Dr. Rajeev Srivastava",
      position: "Professor",
      institution: "IIT BHU, Varanasi, India",
      image: rajeevImage
    },
    {
      name: "Dr. Asheesh Kumar Singh",
      position: "Professor",
      institution: "MNNIT Allahabad, India",
      image: asheeshImage
    }
  ];

  return (
    <div className="keynote-container">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>
      
      <div className="keynote-header">
        <h1>Keynote Speakers</h1>
        <p className="conference-subtitle">
          International Conference on Computing, Systems, and Artificial Intelligence
        </p>
      </div>

      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card" data-aos="fade-up">
            <div className="speaker-image">
              {speaker.image ? (
                <img src={speaker.image} alt={speaker.name} />
              ) : (
                <div className="speaker-placeholder">
                  <span>{speaker.name[0]}</span>
                </div>
              )}
            </div>
            <div className="speaker-info">
              <h2>{speaker.name}</h2>
              <p className="position">{speaker.position}</p>
              <p className="institution">{speaker.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;