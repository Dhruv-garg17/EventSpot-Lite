// Modal.jsx

import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ event, closeModal }) => {
  const [registered, setRegistered] = useState(false);
  const [notified, setNotified] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (registered) {
      setMessage("You have already registered for this event.");
    } else {
      setRegistered(true);
      setMessage("You have registered for this event.");
    }
  };

  const handleNotify = () => {
    if (notified) {
      setMessage("You have already opted for notifications for this event.");
    } else {
      setNotified(true);
      setMessage("You will be notified for this event.");
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} />
        <p>Artist: {event.artist}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Price: {event.price}</p>
        <p>{event.description}</p>
        <div className="modal-buttons">
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleNotify}>Notify Me</button>
        </div>
        {message && <p className="popup-message">{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
