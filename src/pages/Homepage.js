import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { HeroWrap, HomeWrap } from '../styles/Home.style';
import Navigation from '../components/Navigation/Navigation';
import hero from '../assets/Homepage/hero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  return (
    <HomeWrap>
      <Navigation />
      <HeroWrap>
        <div className="leftHero">
          <h2>Your Personal Medical Chatbot</h2>
          <p>Instantly receive preliminary medical advice, swift, fast and easy to navigate.</p>
          {/* Use Link to create a link to the chat page */}
          <Link to="/diagnosis">
            <button>Chat Now <FontAwesomeIcon icon={faComment} /></button>
          </Link>
        </div>
        <div className="rightHero">
          <img src={hero} alt="Icare" />
        </div>
      </HeroWrap>
    </HomeWrap>
  );
};

export default Homepage;
