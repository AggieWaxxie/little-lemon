import React from 'react';
import 'C:/Users/Aggiey Ness/Projects/little-lemon-web-app/src/index';
/** import { Image, Stack, Text } from '@chakra-ui/react'; **/
import restaurantFood from 'C:/Users/Aggiey Ness/Projects/little-lemon-web-app/src/images/restaurantFood.jpg';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text-content">
                <h2 className="hero-title">Little lemon</h2>
                <h3 className="hero-subtitle">Chicago</h3>
                <br />
                <p className="hero-description">
                We are a family-owned Mediterranean <br />
                restaurant focused on traditional <br />
                recipes served with a modern twist.
                </p>
                <Link to="../reservationsPage.js" className="reserve-button">
                Reserve a Table
                </Link>
            </div>
            <img className="hero-image" src={restaurantFood} alt="Waiter carrying food on a tray." />
        </div>
    );
};

export default HeroSection;