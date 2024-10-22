// src/components/WelcomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/Images/hogwarts_night.jpg',
        '/Images/ioa_night.jpg',
        '/Images/universals_islands_of_adventure.jpg',
        '/Images/velocicoaster_ride_pic.jpg'
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handleContinue = () => {
        navigate('/ticket-purchase');
    };

    return (
        <div className="full-page">
            <h1>Welcome to Universal's Islands of Adventure!</h1>
            <div className="image-gallery">
                <img
                    src={images[currentImageIndex]}
                    alt="Islands of Adventure Attraction"
                    onClick={handleNextImage}
                    className="medium-image"
                />
            </div>
            <button className="continue-button" onClick={handleContinue}>
                Continue to Ticket Purchase
            </button>
        </div>
    );
};

export default WelcomePage;


