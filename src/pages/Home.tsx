import { useState } from 'react';
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

const Home:React.FC = () =>{
    const [activeTab, setActiveTab] = useState<string>('all');
    const [skillsData, setSkillsData] = useState<SkillsCardProps[]>(Skills);

    return (
        <div className="container">
            <Navbar />
            <Hero/>
            <SkillResumeContainer skillsResumeItems={skillsResumeItems}/>
            <SkillsContainer skillsData={skillsData} setSkillsData={setSkillsData}/>
            <CareerContainer />
            <ExperienceContainer/>
            <section className="projects">
                <Underlined text='Projects'/>
                <div className="projects_container">
                    <div className="projects-container_header">
                        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </div>
                    <div className="my-projects">
                        {
                            projects.map((el:ProjectProps, i: number) => {
                                if(activeTab !== 'all' && el.type.toLocaleLowerCase() !== activeTab){
                                    return;
                                }
                                return (
                                    <Project 
                                        key={el.title+i}
                                        title={el.title} 
                                        type={el.type}
                                        imgUrl={el.imgUrl} 
                                        url={el.url} 
                                        githubUrl={el.githubUrl}
                                        skills={el.skills}
                                        />
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;