import React, { useState, useEffect } from 'react';
import './Home.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Home() {
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        const nameTimer = setTimeout(() => {
            setShowName(true);
        }, 1000); 

        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 2000); 

        const descriptionTimer = setTimeout(() => {
            setShowDescription(true);
        }, 3000); 

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(titleTimer);
            clearTimeout(descriptionTimer);
        };
    }, []);

    return (
        <div className='overlay'>
            <Header />
            <div className='main'>
                {showName && <h1 className='main__name'>Ivana Pejicic</h1>}
                {showTitle && <h3 className='main__title'>Full-stack Developer</h3>}
                {showDescription && <h4 className='main__description'>Crafting high-performance, elegant web applications.</h4>}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
