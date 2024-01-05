import './Home.scss';
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <div className='home'>
                <div className='home__top'>
                    <Link className='link' to='#'>Home</Link>
                    <nav className='home__top-right'>
                        <Link className='link' to='#'>About</Link>
                        <Link className='link' to='#'>Work</Link>
                        <Link className='link' to='#'>Contact</Link>
                    </nav>
                </div>
            </div>
            <div className='main'>
                <h1 className='main__name'>Ivana Pejicic</h1>
                <h2 className='main__title'>Full-stack Developer</h2>
                <h3 className='main__description'>Crafting high-performance, elegant web applications.</h3>
            </div>
        </>
    );
}

export default Home;
