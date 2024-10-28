// src/AboutUs.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './AboutUS.css';  // For additional styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-grid">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>
                    
At EventSpot Lite, we’re dedicated to making your event planning and participation seamless and enjoyable. Whether you're looking to discover exciting upcoming events, learn about event details, or find the perfect experience to match your interests, our platform is here to guide you every step of the way. With EventSpot Lite, explore, plan, and stay connected with the events that matter to you.
                    </p>
                    <button className="connect-button">Connect With Us</button>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="about-images">
                    <img src="/images/About1.webp" alt="Office" className="image-left" />
                </div>
            </div>

            {/* Second Section - Image on the Left */}
            <div className="about-grid">
                <div className="about-image-left">
                    <img src="/images/About2.jpg" alt="Office Vision" className="image-right" />
                </div>
                <div className="about-text">
                    <h2>Our Vision</h2>
                    <p>
                    At EventSpot Lite, our vision is to transform the way people connect with events and experiences around them. We aim to make event discovery effortless by providing personalized event recommendations that align with each individual's interests and lifestyle. By leveraging the power of technology, we envision a world where finding meaningful, enriching experiences is simple, accessible, and enjoyable for everyone. We are dedicated to helping you seamlessly integrate exciting events into your life, guiding you towards memorable and impactful moments—one event at a time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
