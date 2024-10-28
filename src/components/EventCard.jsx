// EventCard.jsx

import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>Artist: {event.artist}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Price: {event.price}</p>
    </div>
  );
};

export default EventCard;
