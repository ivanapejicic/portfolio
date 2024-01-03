import './Home.scss';
import { Link
 } from 'react-router-dom';
function Home() {

    return (
        <div className='home'>
            <div className='home__top'>
                <Link className='link' to='#' className='home__top-left'>Home</Link>
                <nav className='home__top-right'>
                    <Link className='link' to='#'>About</Link>
                    <Link className='link' to='#'>Work</Link>
                    <Link className='link' to='#'>Contact</Link>
                </nav>
            </div>
        </div>
    );
}

export default Home;
