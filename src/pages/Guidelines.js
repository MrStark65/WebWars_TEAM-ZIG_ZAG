// src/pages/Guidelines.js
import React from 'react';
import { 
  FaDownload, 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaFileAlt,
  FaFilePdf 
} from 'react-icons/fa';
import ieeeTemplate from '../assets/docs/ieee-copyright-process.pdf'; // Add your PDF path
import './Guidelines.css';

const Guidelines = () => {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="guidelines-container">
      {/* Government Seal/Logo Header */}
      <div className="gov-header">
        <div className="gov-logo">
          <img src="https://www.iccsai.in/assets/logos/gustudentchapter.png" alt="Conference Logo" />
        </div>
        <h1>Conference Guidelines</h1>
        <div className="header-decoration"></div>
      </div>

      <div className="guidelines-content">
        {/* Author's Guidelines Section */}
        <section className="guideline-section">
          <div className="section-header">
            <FaFileAlt className="section-icon" />
            <h2>Author's Guidelines</h2>
          </div>
          <div className="guideline-card">
            <div className="card-content">
              <p className="emphasis-text">
                Authors are invited to submit original, high-quality, and previously unpublished research articles.
              </p>
            
              <div className="submission-info">
                <p>Submit manuscripts via Microsoft CMT following the IEEE template format.</p>
                <p>Maximum length: 6 pages (including figures, tables, and references)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Paper Formatting Section */}
        <section className="guideline-section">
          <div className="section-header">
            <FaFilePdf className="section-icon" />
            <h2>Paper Formatting Guidelines</h2>
          </div>
          <div className="guideline-card">
            <div className="download-section">
             
            </div>
            
            <div className="format-specifications">
              <div className="spec-grid">
                <div className="spec-item">
                  <h3>Paper Size</h3>
                  <p>US Letter (8.5" x 11")</p>
                </div>
                <div className="spec-item">
                  <h3>Page Length</h3>
                  <p>Maximum 6 pages</p>
                </div>
                <div className="spec-item">
                  <h3>Font</h3>
                  <p>Times New Roman, 10pt</p>
                </div>
                <div className="spec-item">
                  <h3>Layout</h3>
                  <p>Double-column, single-spaced</p>
                </div>
              </div>

              <div className="margins-box">
                <h3>Margins</h3>
                <ul>
                  <li>Top: 1" (25mm) on title page; 0.75" (19mm) elsewhere</li>
                  <li>Left, Right, Bottom: 0.75" (19mm)</li>
                </ul>
              </div>

              <div className="additional-charges">
                <h3>Additional Page Charges</h3>
                <div className="charges-table">
                  <div className="charge-row">
                    <span>Indian Authors</span>
                    <span>₹1000 per page</span>
                  </div>
                  <div className="charge-row">
                    <span>International Authors</span>
                    <span>$50 per page</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* General Instructions Section */}
        <section className="guideline-section">
          <div className="section-header">
            <FaCheckCircle className="section-icon" />
            <h2>General Instructions</h2>
          </div>
          <div className="guideline-card">
            <ul className="instruction-list">
              <li>Papers violating formatting guidelines may be rejected</li>
              <li>Submissions must be original, unpublished work</li>
              <li>All manuscripts must be in English and PDF format</li>
              <li>Strict adherence to IEEE two-column format required</li>
              <li>Maximum file size: 5MB with embedded fonts</li>
              <li>No page numbers in the manuscript</li>
            </ul>
          </div>
        </section>

        {/* IEEE Publication Section */}
        <section className="guideline-section">
          <div className="section-header">
            <FaFileAlt className="section-icon" />
            <h2>IEEE Publication Process</h2>
          </div>
          
          <div className="guideline-card">
            <div className="publication-process">
              <div className="process-step">
                <h3>Submission to IEEE Xplore</h3>
                <p>Accepted papers will be submitted for inclusion in IEEE Xplore</p>
              </div>
              <div className="process-step">
                <h3>Author Presentation</h3>
                <p>At least one author must present the paper at the conference</p>
              </div>
              <div className="process-step">
                <h3>Registration Requirement</h3>
                <p>Authors must complete paid registration for final paper submission</p>
              </div>
            </div>
            <button 
                className="download-btn primary"
                onClick={() => handleDownload(ieeeTemplate, 'IEEE_Template.pdf')}
              >
                <FaDownload /> Download IEEE Template
              </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;