import { useState } from 'react';
//@ts-ignore
import '../assets/style/home.css';
import Navbar from '../components/Navbar';
import { Skills } from '../data/skills';
import { skillsResumeItems } from '../data/skillsresumeItems';
import { SkillsCardProps } from '../types/skillscard.type';
import Hero from '../components/Hero';
import SkillResumeContainer from '../components/SkillResumeContainer';
import SkillsContainer from '../components/SkillsContainer';
import CareerContainer from '../components/CareerContainer';
import ExperienceContainer from '../components/ExperienceContainer';
import ProjectContainer from '../components/ProjetContainer';
import About from '../components/About';
import ParticlesComponent from '../components/Particles';
import Alert from '../components/Alert';

const Home:React.FC = () =>{
    const [skillsData, setSkillsData] = useState<SkillsCardProps[]>(Skills);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
    const [alertDatas, setAlertDatas] = useState<{type: string; title: string; description: string}>({
        type: '',
        title: '',
        description:''
    });

    return (
        <div className="container">
            <ParticlesComponent/>
            <Navbar isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} setIsAlertVisible={setIsAlertVisible} setAlertDatas={setAlertDatas}/>
            <Hero isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
            <About />
            <SkillResumeContainer skillsResumeItems={skillsResumeItems}/>
            <SkillsContainer skillsData={skillsData} setSkillsData={setSkillsData}/>
            <CareerContainer />
            <ExperienceContainer/>
            <ProjectContainer />
            <Alert 
                type={alertDatas.type}
                title={alertDatas.title} 
                description={alertDatas.description}
                isAlertVisible={isAlertVisible}
                setIsAlertVisible={setIsAlertVisible}/>
        </div>
    );
}
export default Home;