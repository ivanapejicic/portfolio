import './Work.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import checklist from '../../images/checklist.png';

function Work() {
    return (
        <div className='work'>
            <Header />
            <div className='work__top'>
                <h1 className='work__top-title'>What I've done</h1>
                <img className='work__top-img' src={checklist} alt='yellow checklist as an indicator that next section will show my work'></img>
            </div>
        </div>
    )
}

export default Work;