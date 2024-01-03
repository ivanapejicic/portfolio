// Home.js

import React, { useState } from 'react';
import './Home.scss';

function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='home'>
            <div className='home__top'>
                <button id='intro'>Home</button>
                <div
                    className='menu-icon'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    {isHovered && (
                        <div className='dropdown-menu'>
                            <a href='#'>About</a>
                            <a href='#'>Work</a>
                            <a href='#'>Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
