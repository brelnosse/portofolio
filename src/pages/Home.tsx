//@ts-ignore
import '../assets/style/home.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import SkillsCard from '../components/SkillsCard';
import SkillsResumeCard from '../components/SkillsResumeCard';
import Underlined from '../components/Underlined';
import { Skills } from '../data/skills';
import { skillsResumeItems } from '../data/skillsresumeItems';
import { SkillsCardProps } from '../types/skillscard.type';
import { SkillsResumeCardprops } from '../types/skillsresumecard.type';

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
                    {
                        skillsResumeItems.map((el:SkillsResumeCardprops) => {
                            return <SkillsResumeCard image={el.image} title={el.title} description={el.description}/>
                        })
                    }
                </div>
            </section>
            <section className='skills'>
                <Underlined text='Skills'/>
                <div className="skills_container">
                    {
                        Skills.map((el:SkillsCardProps) => {
                            return <SkillsCard text={el.text}/>
                        })
                    }
                </div>
            </section>
        </div>
    );
}
export default Home;