import './About.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import headshot from '../../images/headshot.png';
import react from '../../images/image 2.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/javascript.png';
import node from '../../images/node.png';
import sass from '../../images/image 3.png';
import mysql from '../../images/mysql.png';
import demo from '../../images/demo.png';

function About() {
    return (
        <div className='about'>
            <Header />
            <div className='about__main'>
                <div className='about__main-top'>
                    <h1 className='about__main-top__title'>Hey there</h1>
                    <img className='about__main-top__image' src={headshot} alt="Ivana's headshot"></img>
                </div>
                <p className='about__main-text'>My name is Ivana Pejicic. I was born and raised in Bosnia and Herzegovina.
                    My journey into the world of computer science and programming began right after high school. </p>

            </div>
            <div className='about__main-tech'>
                <h2 className='about__main-tech__title'>Technical Specs</h2>
                <div className='about__main-tech__languages'>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>HTML5</p>
                        <img className='about__main-tech__languages-language__icon' src={html} alt='icon for html5'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>CSS3</p>
                        <img className='about__main-tech__languages-language__icon' src={css} alt='icon for css3'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>JavaScript</p>
                        <img className='about__main-tech__languages-language__icon' src={js} alt='icon for javascript'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>SASS</p>
                        <img className='about__main-tech__languages-language__icon' src={sass} alt='icon for sass'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>React</p>
                        <img className='about__main-tech__languages-language__icon' src={react} alt='icon for react.js'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>Node.js</p>
                        <img className='about__main-tech__languages-language__icon' src={node} alt='icon for node.js'></img>
                    </div>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>MySql</p>
                        <img className='about__main-tech__languages-language__icon' src={mysql} alt='icon for mySQL'></img>
                    </div>
                </div>
                <p className='about__main-text'>Over the last three months in 2023, I've been immersed in BrainStation's Software Engineering Bootcamp, mastering new skills and contributing to various projects. Some were solo, others in pairs, and a few collaborative efforts with SE and UX/UI teams.
                    Excited to share these experiences on the next page, showcasing my passion for full-stack web development. </p>
            </div>
            <div className='about__main-history'>
                <h2 className='about__main-history__title'>A Brief History</h2>
                <div className='about__main-history__content'>
                    <p className='about__main-text'>I am a recent graduate of BrainStation's Software Engineering bootcamp, currently pursuing
                    an Associate in Science degree at Miami Dade College with a GPA of 4.0.
                    I hold a Bachelor of Science degree with a major in Mathematics and Computer Science from Bosnia. </p>
                    <img className='about__main-history__content-photo' src={demo} alt='photo of me for demo day at BrainStation'></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;