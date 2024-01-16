import './Work.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import checklist from '../../images/checklist.png';
import travel1 from '../../images/projects/travelsite1.png';
import travel2 from '../../images/projects/travelsite2.png';
import travel3 from '../../images/projects/travelsite3.png';
import band1 from '../../images/projects/beesknees1.png';
import band2 from '../../images/projects/beesknees3.png';
import band3 from '../../images/projects/beesknees2.png';
import capstone1 from '../../images/projects/wepool1.png';
import capstone2 from '../../images/projects/capstone2.png';
import capstone3 from '../../images/projects/capstone3.png';
import cafe1 from '../../images/projects/cafe1.png';
import cafe2 from '../../images/projects/cafe2.png';
import cafe3 from '../../images/projects/cafe3.png';
import brainflix1 from '../../images/projects/brainflix2.png';
import brainflix2 from '../../images/projects/brainflix1.png';
import brainflix3 from '../../images/projects/brainflix3.png';

function Work() {
    return (
        <div className='work'>
            <Header />
            <div className='work__top'>
                <h1 className='work__top-title'>What I've done</h1>
                <img className='work__top-img' src={checklist} alt='yellow checklist as an indicator that next section will show my work'></img>
            </div>
            <div className='work__projects'>
                {/* <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>Travel Site</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={travel1} alt="screenshot of a travel website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={travel2} alt="another screenshot of a travel website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={travel3} alt="another screenshot of a travel website that I created"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3</h4>
                </div> */}
                <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>Band Site</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={band1} alt="screenshot of a band website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={band2} alt="another screenshot of a band website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={band3} alt="another screenshot of a band website that I created"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3 SASS BEM APIs AXIOS</h4>
                </div>
                <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>BrainFlix</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={brainflix1} alt="screenshot of a brainflix website that I created, similar to youtube"></img>
                        <img className='work__projects-project__photos-photo' src={brainflix2} alt="another screenshot of a brainflix website that I created, similar to youtube"></img>
                        <img className='work__projects-project__photos-photo' src={brainflix3} alt="another screenshot of a brainflix website that I created, similar to youtube"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3 React.js JSON REST-APIs</h4>
                </div>
                <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>Cafe Beignet</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={cafe1} alt="screenshot of a cafe website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={cafe2} alt="another screenshot of a cafe website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={cafe3} alt="another screenshot of a cafe website that I created"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3 SASS JavaScript React.js</h4>
                </div>
                <div className='work__projects-project'>
                    <h3 className='work__projects-project__title'>WePool - ride sharing app</h3>
                    <div className='work__projects-project__photos'>
                        <img className='work__projects-project__photos-photo' src={capstone1} alt="screenshot of a ride sharing website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={capstone2} alt="another screenshot of a ride sharing website that I created"></img>
                        <img className='work__projects-project__photos-photo' src={capstone3} alt="another screenshot of a ride sharing website that I created"></img>
                    </div>
                    <h4 className='work__projects-project__tools'>Tools used: HTML5 CSS3 JavaScript React.js Node.js MySQL</h4>
                </div>
                
                
            </div>
            <Footer />
        </div>
    )
}

export default Work;