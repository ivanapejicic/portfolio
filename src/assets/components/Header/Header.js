import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='header__top'>
                <Link className='link' to='/'>Home</Link>
                <nav className='header__top-right'>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/work'>Work</Link>
                </nav>
            </div>
        </div>
    )
}
export default Header;