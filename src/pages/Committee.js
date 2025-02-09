// src/pages/Committee.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaMicrophone } from 'react-icons/fa';
import './Committee.css';

const Committee = () => {
  return (
    <div className="committee-container">
      <div className="committee-header">
        <h1>ICCSAI 2024</h1>
        <p className="conference-subtitle">
          International Conference on Computing, Systems, and Artificial Intelligence
        </p>
      </div>

      <div className="committee-navigation">
        <Link to="/committee/members" className="committee-nav-card">
          <FaUsers className="nav-icon" />
          <h2>Committee Members</h2>
          <p>View all organizing committee members and their roles</p>
        </Link>

        <Link to="/committee/speakers" className="committee-nav-card">
          <FaMicrophone className="nav-icon" />
          <h2>Keynote Speakers</h2>
          <p>Explore our distinguished keynote speakers</p>
        </Link>
      </div>
    </div>
  );
};

export default Committee;