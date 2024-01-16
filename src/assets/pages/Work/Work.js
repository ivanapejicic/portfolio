import './Work.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import checklist from '../../images/checklist.png';
import travel1 from '../../images/projects/travelsite1.png';
import travel2 from '../../images/projects/travelsite2.png';
import travel3 from '../../images/projects/travelsite3.png';

function Work() {
    return (
        <div className='work'>
            <Header />
            <div className='work__top'>
                <h1 className='work__top-title'>What I've done</h1>
                <img className='work__top-img' src={checklist} alt='yellow checklist as an indicator that next section will show my work'></img>
            </div>
            <div className='work__projects'>
                <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>Travel Site</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={travel1} alt="screenshot of a travel website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={travel2} alt="another screenshot of a travel website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={travel3} alt="another screenshot of a travel website that I created"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3</h4>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work;