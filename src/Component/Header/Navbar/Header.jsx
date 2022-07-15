import React from 'react';
import Button from '../../Button/Button';
import './Header.css';

function Header() {
  return (
    <div>
      <div className="hero-container">
        <div className="home_content">
            <div className="home">
                <h1 className="home-text">Good Food, Great Vibes</h1>
                <h2 className="home-text">   
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin mi eget facilisis facilisis. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus nibh. Phasellus non lacus 
                ultricies, laoreet nibh eu, ultricies leo. 
                </h2>
                <Button />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
