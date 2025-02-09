import React, { useState } from 'react';
import { FaUser, FaUniversity, FaCreditCard, FaQrcode } from 'react-icons/fa'; // Changed to FaQrcode
import './Register.css';

const Register = () => {
  const [memberType, setMemberType] = useState('ieee');
  const [nationality, setNationality] = useState('indian');
  const [registrationType, setRegistrationType] = useState('regular');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fees = {
    regular: {
      ieee: {
        indian: '7,000 INR',
        foreigner: '350 USD'
      },
      nonIeee: {
        indian: '9,000 INR',
        foreigner: '400 USD'
      }
    },
    student: {
      ieee: {
        indian: '5,000 INR',
        foreigner: '200 USD'
      },
      nonIeee: {
        indian: '6,000 INR',
        foreigner: '300 USD'
      }
    },
    industry: {
      ieee: {
        indian: '7,000 INR',
        foreigner: '350 USD'
      },
      nonIeee: {
        indian: '9,000 INR',
        foreigner: '400 USD'
      }
    },
    attendee: {
      ieee: {
        indian: '3,000 INR',
        foreigner: '50 USD'
      },
      nonIeee: {
        indian: '3,500 INR',
        foreigner: '100 USD'
      }
    }
  };

  const bankDetails = {
    accountName: "GU Conferences",
    accountNumber: "6717000100025845",
    ifscCode: "PUNB0671700",
    bankName: "Punjab National Bank, Noida",
    swiftCode: "PUNBINBBMSN"
  };

  const getCurrentFee = () => {
    return fees[registrationType][memberType === 'ieee' ? 'ieee' : 'nonIeee'][nationality];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Add your form submission logic here
    console.log({
      memberType,
      nationality,
      registrationType,
      fee: getCurrentFee()
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>Conference Registration</h1>
        <p>Register for the International Conference</p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2><FaUser /> Registration Type</h2>
          <div className="options-grid">
            <div className="radio-group">
              <input
                type="radio"
                id="ieee"
                name="memberType"
                value="ieee"
                checked={memberType === 'ieee'}
                onChange={(e) => setMemberType(e.target.value)}
                required
              />
              <label htmlFor="ieee">IEEE Member</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="nonIeee"
                name="memberType"
                value="nonIeee"
                checked={memberType === 'nonIeee'}
                onChange={(e) => setMemberType(e.target.value)}
                required
              />
              <label htmlFor="nonIeee">Non-IEEE Member</label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2><FaUniversity /> Participant Type</h2>
          <div className="options-grid">
            {['regular', 'student', 'industry', 'attendee'].map((type) => (
              <div className="radio-group" key={type}>
                <input
                  type="radio"
                  id={type}
                  name="registrationType"
                  value={type}
                  checked={registrationType === type}
                  onChange={(e) => setRegistrationType(e.target.value)}
                  required
                />
                <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)} {type === 'regular' || type === 'student' ? 'Author' : ''}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2><FaUser /> Nationality</h2>
          <div className="options-grid">
            {['indian', 'foreigner'].map((nat) => (
              <div className="radio-group" key={nat}>
                <input
                  type="radio"
                  id={nat}
                  name="nationality"
                  value={nat}
                  checked={nationality === nat}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                />
                <label htmlFor={nat}>{nat.charAt(0).toUpperCase() + nat.slice(1)}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="fee-display">
          <h2><FaCreditCard /> Registration Fee</h2>
          <div className="fee-amount">{getCurrentFee()}</div>
          <p className="fee-note">* Extra page charge of ₹1000/- INR per page for Indian authors and $50 per page for International authors will be applicable during the registration process.</p>
        </div>

        <div className="bank-details">
          <h2>Bank Account Details</h2>
          <div className="bank-info">
            {Object.entries(bankDetails).map(([key, value]) => (
              <div className="bank-row" key={key}>
                <span className="label">{key.split(/(?=[A-Z])/).join(' ')}:</span>
                <span className="value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="qr-section">
          <h2><FaQrcode /> Scan QR Code for Payment</h2>
          <div className="qr-placeholder">
            {/* Add your QR code image here */}
            <img src="/path-to-your-qr-code.png" alt="Payment QR Code" />
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={formSubmitted}>
          {formSubmitted ? 'Registration Submitted' : 'Submit Registration'}
        </button>
      </form>
    </div>
  );
};

export default Register;