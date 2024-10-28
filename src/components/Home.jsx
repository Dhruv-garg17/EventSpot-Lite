// Home.jsx

import React, { useState } from 'react';
import EventCard from './EventCard';
import Modal from './Modal';
import eventsData from '../data/events.json'; // Ensure path is correct
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on search term
  const filteredEvents = eventsData.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open the modal with the selected event
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="home">
      <h1>Welcome to EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events by name or location"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
        ))}
      </div>
      {selectedEvent && (
        <Modal event={selectedEvent} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Home;
