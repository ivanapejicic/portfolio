import './About.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import headshot from '../../images/headshot.png';

function About() {
    return (
        <div className='about'>
            <Header />
            <div className='about__main'>
                <div className='about__main-top'>
                    <h1 className='about__main-top__title'>Hey there</h1>
                    <img className = 'about__main-top__image' src={headshot} alt="Ivana's headshot"></img>
                </div>
                <p className='about__main-text'>My name is Ivana Pejicic. I was born and raised in Bosnia and Herzegovina. </p>
                <p className='about__main-text'>My journey into the world of computer science and programming began right after high school.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;