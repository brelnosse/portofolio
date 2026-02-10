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
import ParticlesComponent from '../components/Particles';

const Home:React.FC = () =>{
    const [skillsData, setSkillsData] = useState<SkillsCardProps[]>(Skills);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    return (
        <div className="container">
            <ParticlesComponent/>
            <Navbar isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
            <Hero isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
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