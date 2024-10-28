import React, { useState } from 'react';
import './SponsorForm.css';

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowConfirmation(true);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: ''
    });

    // Hide the confirmation message after a few seconds
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div className="sponsor-form-container">
      <h1>Become a Sponsor</h1>
      <p>Thank you for your interest in becoming an EventSpot Lite sponsor! Please fill out the form below to be among the first to hear about future EventSpot Lite sponsorship opportunities.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Company Name*</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <p className="privacy-text">
        We’re committed to your privacy. EventSpot Lite uses the information you provide to contact you about content and events. You may unsubscribe at any time. For more information, check out our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      {showConfirmation && (
        <div className="confirmation-message">
          Thank you for submitting the form. We’ll be in touch soon!
        </div>
      )}
    </div>
  );
};

export default SponsorForm;
