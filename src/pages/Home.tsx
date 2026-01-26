import { useContext, useState } from 'react';
//@ts-ignore
import '../assets/style/home.css';
import Navbar from '../components/Navbar';
import Underlined from '../components/Underlined';
import { Skills } from '../data/skills';
import { skillsResumeItems } from '../data/skillsresumeItems';
import { SkillsCardProps } from '../types/skillscard.type';
import TabNavigation from '../components/TabNavigation';
import { projects } from '../data/projects';
import { ProjectProps } from '../types/project.type';
import Project from '../components/Project';
import Hero from '../components/Hero';
import SkillResumeContainer from '../components/SkillResumeContainer';
import SkillsContainer from '../components/SkillsContainer';
import CareerContainer from '../components/CareerContainer';
import ExperienceContainer from '../components/ExperienceContainer';
import ProjectContainer from '../components/ProjetContainer';
import About from '../components/About';

const Home:React.FC = () =>{
    const [skillsData, setSkillsData] = useState<SkillsCardProps[]>(Skills);

    return (
        <div className="container">
            <Navbar />
            <Hero/>
            <SkillResumeContainer skillsResumeItems={skillsResumeItems}/>
            <About />
            <SkillsContainer skillsData={skillsData} setSkillsData={setSkillsData}/>
            <CareerContainer />
            <ExperienceContainer/>
            <ProjectContainer />
        </div>
    );
}
export default Home;