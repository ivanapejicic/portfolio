import './Home.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Home() {

    return (
        <div className='overlay'>
            <Header />
            <div className='main'>
                <h1 className='main__name'>Ivana Pejicic</h1>
                <h3 className='main__title'>Full-stack Developer</h3>
                <h4 className='main__description'>Crafting high-performance, elegant web applications.</h4>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
