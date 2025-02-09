// src/pages/CommitteeMembers.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Committee.css';

// Import your 6 images here
import suneelGalgotiaImage from '../assets/persons/sunilSir.jpeg';
import snSinghImage from '../assets/persons/snsingh.jpeg';
import dhruvGalgotiaImage from '../assets/persons/dhruvSir.jpeg';
import mkBabuImage from '../assets/persons/vcsir.jpg';
import aradhanaGalgotiaImage from '../assets/persons/aradhanaMaam.jpg';
import avadheshKumarImage from '../assets/persons/pvcsir.jpg';

const CommitteeMembers = () => {
  const committeeStructure = {
    chiefPatron: [
      {
        name: "Shri Suneel Galgotia",
        role: "Hon'ble Chancellor",
        institution: "Galgotias University, India",
        image: suneelGalgotiaImage
      }
    ],
    patrons: [
      {
        name: "Prof.(Dr.) S.N. Singh",
        role: "Director IIITM",
        institution: "Gwalior, India",
        image: snSinghImage
      },
      {
        name: "Dr. Dhruv Galgotia",
        role: "CEO",
        institution: "Galgotias University, India",
        image: dhruvGalgotiaImage
      },
      {
        name: "Prof.(Dr.) M.K. Babu Kayala",
        role: "VC",
        institution: "Galgotias University, India",
        image: mkBabuImage
      },
      {
        name: "Ms. Aradhana Galgotia",
        role: "Director Operations",
        institution: "Galgotias University, India",
        image: aradhanaGalgotiaImage
      }
    ],
    conferenceGeneralChair: [
      {
        name: "Prof.(Dr.) Avadhesh Kumar",
        role: "Pro-VC",
        institution: "Galgotias University, India",
        image: avadheshKumarImage
      }
      
    ],
    conferenceChair: [
      {
        name: "Dr. Aanjey M. Tripathi",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Prashant Johri",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Kuldeep S. Kaswan",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    conferenceOrganizingChair: [
      {
        name: "Dr. Vimal Kumar",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Gaurav Agarwal",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Abdul Aleem",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    conferenceTechnicalChair: [
      {
        name: "Dr. Suneeta Yadav",
        role: "Dean, SCSE",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. V. Khemchandani",
        role: "Dean, SCAT",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Anurag Singh",
        role: "Associate Professor",
        institution: "NIT Delhi, India"
      },
      {
        name: "Dr. Arvind Panwar",
        role: "Professor",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    publicationChairs: [
      {
        name: "Prof. Shrddha Sagar",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Ashok K. Yadav",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    conferenceOrganizingCoChairs: [
      {
        name: "Prof. Meenakshi Awasthi",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Deepak Soni",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Sunil Bharti",
        institution: "GCET, Greater Noida, India"
      }
    ],
    conferenceTechnicalCoChairs: [
      {
        name: "Prof. Ravi Sharma",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Tarun Kumar",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Manish Kumar",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Sonu Jha",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Sunil Kumar",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    conferenceSecretaries: [
      {
        name: "Dr. K. K. Agrawal",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Vipin Rai",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Arunendra Mani Tripathi",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. Avneesh Kumar",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    internationalAdvisoryChairs: [
      {
        name: "Prof. Sanjeev K. Singh",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Prof. N. Partheeban",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    publicationCoChairs: [
      {
        name: "Dr. Sachi Mall",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Ajeet Singh",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    publicityChairs: [
      {
        name: "Prof. Ravi Sharma",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    sponsorshipIndustryChairs: [
      {
        name: "Prof. Vipul Narayan Srivastava",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    eventOrganisingChair: [
      {
        name: "Dr. Pragya Tewari",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Ambika Gupta",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Dr. Pooja Singh",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    financeChairs: [
      {
        name: "Prof. E. Rajesh",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    transportChairs: [
      {
        name: "Prof. T. Ganesh Kumar",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    websiteGraphicsChairs: [
      {
        name: "Mr. Pankaj Lamba",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    mediaChairs: [
      {
        name: "Prof. AR Pandey",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    hospitalityChairs: [
      {
        name: "Prof. (Dr.) Rajiv Mishra",
        role: "Dean of SOHT",
        institution: "Galgotias University, Greater Noida, India"
      },
      {
        name: "Ms. Monalisha Dash",
        role: "Associate Professor",
        institution: "Galgotias University, Greater Noida, India"
      }
    ],
    internationalAdvisoryCommittee: [
      // Add all international advisory committee members here
      {
        name: "Dr. Liudong Xing",
        institution: "Electrical and Computer Engineering Department, University of Massachusetts, Dartmouth"
      },
      // ... Add all other international advisory committee members
    ],
    nationalAdvisoryCommittee: [
      // Add all national advisory committee members here
      {
        name: "Prof. Adarsh Anand",
        institution: "University Of Delhi, Delhi, India"
      },
      // ... Add all other national advisory committee members
    ],
    technicalProgramCommittee: [
      // Add all technical program committee members here
      {
        name: "Dr. Arvind Kumar",
        institution: "Electronics & Comm. Engg., MNNIT, Prayagraj, India"
      },
      // ... Add all other technical program committee members
    ]
  };

  // Function to render committee sections
  const renderCommitteeSection = (title, members, showImages = false) => (
    <div className={`committee-category ${title === 'chiefPatron' ? 'chief-patron' : ''}`}>
      <h2>{title.replace(/([A-Z])/g, ' $1').trim()}</h2>
      <div className={`members-grid ${title === 'chiefPatron' ? 'single-member' : ''}`}>
        {members.map((member, index) => (
          <div key={index} className="member-card">
            {showImages && (
              <div className="member-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="member-placeholder">
                    <span>{member.name[0]}</span>
                  </div>
                )}
              </div>
            )}
            <div className="member-info">
              <h3>{member.name}</h3>
              {member.role && <p className="role">{member.role}</p>}
              <p className="institution">{member.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="committee-container">
      <Link to="/committee" className="back-button">
        <FaArrowLeft /> Back to Committee
      </Link>
      <div className="committee-header">
        <h1>Conference Committee</h1>
        <p className="conference-subtitle">ICCSAI 2024</p>
      </div>
      <div className="committee-content">
        {/* Render sections with images */}
        {renderCommitteeSection('chiefPatron', committeeStructure.chiefPatron, true)}
        {renderCommitteeSection('patrons', committeeStructure.patrons, true)}
        {renderCommitteeSection('conferenceGeneralChair', committeeStructure.conferenceGeneralChair, true)}
        
        {/* Render all other sections without images */}
        {renderCommitteeSection('conferenceChair', committeeStructure.conferenceChair)}
        {renderCommitteeSection('conferenceOrganizingChair', committeeStructure.conferenceOrganizingChair)}
        {renderCommitteeSection('conferenceTechnicalChair', committeeStructure.conferenceTechnicalChair)}
        {renderCommitteeSection('publicationChairs', committeeStructure.publicationChairs)}
        {renderCommitteeSection('conferenceOrganizingCoChairs', committeeStructure.conferenceOrganizingCoChairs)}
        {renderCommitteeSection('conferenceTechnicalCoChairs', committeeStructure.conferenceTechnicalCoChairs)}
        {renderCommitteeSection('conferenceSecretaries', committeeStructure.conferenceSecretaries)}
        {renderCommitteeSection('internationalAdvisoryChairs', committeeStructure.internationalAdvisoryChairs)}
        {renderCommitteeSection('publicationCoChairs', committeeStructure.publicationCoChairs)}
        {renderCommitteeSection('publicityChairs', committeeStructure.publicityChairs)}
        {renderCommitteeSection('sponsorshipIndustryChairs', committeeStructure.sponsorshipIndustryChairs)}
        {renderCommitteeSection('eventOrganisingChair', committeeStructure.eventOrganisingChair)}
        {renderCommitteeSection('financeChairs', committeeStructure.financeChairs)}
        {renderCommitteeSection('transportChairs', committeeStructure.transportChairs)}
        {renderCommitteeSection('websiteGraphicsChairs', committeeStructure.websiteGraphicsChairs)}
        {renderCommitteeSection('mediaChairs', committeeStructure.mediaChairs)}
        {renderCommitteeSection('hospitalityChairs', committeeStructure.hospitalityChairs)}
        {renderCommitteeSection('internationalAdvisoryCommittee', committeeStructure.internationalAdvisoryCommittee)}
        {renderCommitteeSection('nationalAdvisoryCommittee', committeeStructure.nationalAdvisoryCommittee)}
        {renderCommitteeSection('technicalProgramCommittee', committeeStructure.technicalProgramCommittee)}
      </div>
    </div>
  );
};

export default CommitteeMembers;