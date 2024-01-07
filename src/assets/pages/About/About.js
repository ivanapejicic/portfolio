import './About.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import headshot from '../../images/headshot.png';
import react from '../../images/image 2.png';

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
                <p className='about__main-text'>I am a recent graduate of BrainStation's Software Engineering bootcamp, currently pursuing
                    an Associate in Science degree at Miami Dade College with a GPA of 4.0.
                    I hold a Bachelor of Science degree with a major in Mathematics and Computer Science from Bosnia. </p>
            </div>
            <div className='about__main-tech'>
                <h2 className='about__main-tech__title'>Technical Specs</h2>
                <div className='about__main-tech__languages'>
                    <div className='about__main-tech__languages-language'>
                        <p className='about__main-tech__languages-language__title'>React</p>
                        <img className='about__main-tech__languages-language__icon' src={react} alt='icon for react.js'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;