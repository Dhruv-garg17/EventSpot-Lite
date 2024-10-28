import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHelpForm, setShowHelpForm] = useState(false);
  const [helpQuery, setHelpQuery] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHelpClick = () => {
    setShowHelpForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Show a popup message with the help query
    alert(`Help Query Submitted: ${helpQuery}`);
    console.log('Help Query:', helpQuery);
    setShowHelpForm(false);
    setHelpQuery('');
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-item" onClick={() => toggleFAQ(0)}>
        <div className="faq-question">What types of events can I find on EventSpot?</div>
        {activeIndex === 0 && <div className="faq-answer"> EventSpot features a wide variety of events, including concerts, festivals, workshops, conferences, and community gatherings. You can browse events by category, date, or location to find the perfect experience for you.</div>}
      </div>
      
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question">How can I purchase tickets for an event?</div>
        {activeIndex === 1 && <div className="faq-answer">To purchase tickets, simply navigate to the event page of your choice, select the number of tickets you need, and click on the "Buy Tickets" button. You’ll be prompted to enter your payment information to complete the transaction. After your purchase, you will receive a confirmation email with your tickets.</div>}
      </div>
      
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question">What is the refund policy for tickets purchased through EventSpot?</div>
        {activeIndex === 2 && <div className="faq-answer">Our refund policy allows for refunds up to 48 hours before the event start time. If you need to cancel your ticket, please contact our customer support team, and they will assist you with the refund process. Note that fees may apply based on the event organizer’s policy.

</div>}
      </div>
      
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question">Are there any age restrictions for events listed on EventSpot?</div>
        {activeIndex === 3 && <div className="faq-answer">Age restrictions vary by event. Some events may be family-friendly, while others are designated for adults only. Please check the event details on the specific event page for any age restrictions before purchasing tickets.</div>}
      </div>

      <button className="help-button" onClick={handleHelpClick}>Help</button>

      {showHelpForm && (
        <div className="help-form-container">
          <form onSubmit={handleFormSubmit}>
            <label>Enter your query:</label>
            <textarea
              value={helpQuery}
              onChange={(e) => setHelpQuery(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FAQ;
