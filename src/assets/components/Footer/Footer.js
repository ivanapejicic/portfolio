import './Footer.scss';
import { Link } from 'react-router-dom';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import email from '../../images/email.png';

function Footer() {
    return (
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
    )
}
export default Footer;