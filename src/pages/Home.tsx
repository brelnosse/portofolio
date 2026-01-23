import { useEffect, useRef, useState } from 'react';
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
import { schoolCareer } from '../data/schoolCareer';
import { CareerProps } from '../types/career.type';
import Career from '../components/Carreer';
import { experiences } from '../data/experiences';
import { ExperienceProps } from '../types/experience.type';
import Experience from '../components/Experience';
import TabNavigation from '../components/TabNavigation';
import { projects } from '../data/projects';
import { ProjectProps } from '../types/project.type';
import Project from '../components/Project';
import Hero from '../components/Hero';
import SkillResumeContainer from '../components/SkillResumeContainer';
import SkillsContainer from '../components/SkillsContainer';
const Home:React.FC = () =>{
    const scrollIndicator = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const educationSectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<string>('all');
    const [skillsData, setSkillsData] = useState<SkillsCardProps[]>(Skills);

    useEffect(() => {
        const indicator = scrollIndicator.current;
        const track = containerRef.current;
        const section = educationSectionRef.current;

        if (!indicator || !track || !section) return;

        const handleScroll = () => {
            const rect = track.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
            const clampedProgress = Math.max(0, Math.min(1, progress));

            const maxTravel = (track.offsetHeight) - indicator.offsetHeight;
            const translateY = clampedProgress * maxTravel;

            indicator.style.transform = `translate(-50%, ${translateY}px)`;
        };
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            
            if (entry.isIntersecting) {
                window.addEventListener('scroll', handleScroll);
                handleScroll();
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        }, { 
            threshold: 0.3
        });

        observer.observe(section); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="container">
            <Navbar />
            <Hero/>
            <SkillResumeContainer skillsResumeItems={skillsResumeItems}/>
            <SkillsContainer skillsData={skillsData} setSkillsData={setSkillsData}/>
            <section className='education' ref={educationSectionRef}>
                <Underlined text='Education'/>
                <div className="scholar-career_container">
                    <div className="sliderLevel" ref={containerRef}>
                        <span className="scrolling-indicator" ref={scrollIndicator}></span>
                        {
                            schoolCareer.map((el: CareerProps, i:number) =>{
                                return <Career 
                                        step={el.step} 
                                        postTitle={el.postTitle} 
                                        organization={el.organization}
                                        period={el.period} 
                                        skills={el.skills} 
                                        key={el.step+el.postTitle.split(' ').join('')}/>
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="experiences">
                <Underlined text='Experience'/>
                <div className="experience_container">
                   {
                    experiences.map((el:ExperienceProps, i:number) => 
                        <Experience 
                            key={el.enterprise.split(' ').join(' ')+i}
                            enterprise={el.enterprise} 
                            period={el.period} 
                            postTitle={el.postTitle} 
                            location={el.location}
                            skills={el.skills}
                            tools={el.tools}
                        />)
                   }
                </div>
            </section>
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