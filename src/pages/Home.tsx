//@ts-ignore
import '../assets/style/home.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Underlined from '../components/Underlined';

const Home:React.FC = () =>{
    return (
        <div className="container">
            <Navbar />
            <section className="hero">
                <div className="heroDescription">
                    <h3>Hi, There</h3>
                    <h1>I'm <span className="primary">Brel nosse</span></h1>
                    <h4>
                        Web <span style={{fontFamily: 'calibri', margin: '0px 3px', fontWeight: 200, fontSize:'0.8em'}}>&</span> mobile app developer
                    </h4>
                    <div className="actions">
                        <Button type='light' valueText='Download cv'/>
                        <Button type='default' valueText='Download portofolio'/>
                    </div>
                </div>
                <div className="heroImg">
                    <img src={require('../assets/images/d.webp')} alt="brel nosse" />
                </div>
            </section>
            <section className='resume'>
                <Underlined text='What Do I Do ?'/>
                <div className="skillsResume_container">
                    <div className="skills-resume_card">
                        <img src={require('../assets/images/d.webp')} alt="" />
                        <h3>UI UX Designer</h3>
                        <p>create a design that is aestheticaly pleasing but does not compromise user experience</p>
                    </div>
                    <div className="skills-resume_card">
                        <img src={require('../assets/images/d.webp')} alt="" />
                        <h3>UI UX Designer</h3>
                        <p>create a design that is aestheticaly pleasing but does not compromise user experience</p>
                    </div>
                    <div className="skills-resume_card">
                        <img src={require('../assets/images/d.webp')} alt="" />
                        <h3>UI UX Designer</h3>
                        <p>create a design that is aestheticaly pleasing but does not compromise user experience</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;