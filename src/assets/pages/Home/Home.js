import './Home.scss';
import { Link } from 'react-router-dom';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import email from '../../images/email.png';
import arrow_right from '../../images/arrow-right.png';

function Home() {

    return (
        <div className='overlay'>
            <div className='header'>
                <div className='header__top'>
                    <Link className='link' to='#'>Home</Link>
                    <nav className='header__top-right'>
                        <Link className='link' to='#'>About</Link>
                        <Link className='link' to='#'>Work</Link>
                        <Link className='link' to='#'>Contact</Link>
                    </nav>
                </div>
            </div>
            <div className='main'>
                <h1 className='main__name'>Ivana Pejicic</h1>
                <h3 className='main__title'>Full-stack Developer</h3>
                <h4 className='main__description'>Crafting high-performance, elegant web applications.</h4>
                {/* <Link to="#">
                    <img className='main__arrow' src={arrow_right} alt='arrow that takes to the next page'></img>
                </Link> */}
            </div>
            <div className='footer'>
                <Link to='https://www.linkedin.com/in/ivanapejicic/'>
                    <img className='footer-logo' src={linkedin} alt='linkedin logo that takes to my linkedin profile' />
                </Link>
                <Link to='https://github.com/ivanapejicic'>
                    <img className='footer-logo' src={github} alt='github logo that takes to my github profile' />
                </Link>
                <Link to='mailto:ivanapejicic@icloud.com'>
                    <img className='footer-logo' src={email} alt='email logo that redirects to new email with my address' />
                </Link>
            </div>
        </div>
    );
}

export default Home;
