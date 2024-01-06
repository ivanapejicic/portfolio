import './Home.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import arrow_right from '../../images/arrow-right.png';

function Home() {

    return (
        <div className='overlay'>
            <Header />
            <div className='main'>
                <h1 className='main__name'>Ivana Pejicic</h1>
                <h3 className='main__title'>Full-stack Developer</h3>
                <h4 className='main__description'>Crafting high-performance, elegant web applications.</h4>
                {/* <Link to="#">
                    <img className='main__arrow' src={arrow_right} alt='arrow that takes to the next page'></img>
                </Link> */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
