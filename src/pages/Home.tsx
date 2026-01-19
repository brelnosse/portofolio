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
import {motion} from 'motion/react';
import { projects } from '../data/projects';
import { ProjectProps } from '../types/project.type';
import Project from '../components/Project';
const Home:React.FC = () =>{
    const scrollIndicator = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const educationSectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<string>('all');

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
            <section className="hero">
                <div className="heroDescription">
                    <h3>Hi, There</h3>
                    <h1>I'm <span className="primary">Brel nosse</span></h1>
                    <h4>
                        web <span style={{fontFamily: 'calibri', margin: '0px 3px', fontWeight: 200, fontSize:'0.8em'}}>&</span> mobile app developer
                    </h4>
                    <div className="actions">
                        <Button type='default' valueText='Download cv'/>
                        <Button type='light' valueText='Download portofolio'/>
                    </div>
                </div>
                <div className="heroImg">
                    <img src={require('../assets/images/square.png')} alt="squares" style={{height: '80px', width: '100px'}} className='s'/>
                    <img src={require('../assets/images/d.webp')} alt="brel nosse" className='profil'/>
                    <img src={require('../assets/images/star.png')} alt="star" style={{height: '120px', width: '120px'}} className='r'/>
                </div>
            </section>
            <section className='resume'>
                <Underlined text='What Do I Do ?'/>
                <div className="skillsResume_container">
                    {
                        skillsResumeItems.map((el:SkillsResumeCardprops, i:number) => {
                            return <SkillsResumeCard image={el.image} title={el.title} description={el.description} key={`${el.title+i}`}/>
                        })
                    }
                </div>
            </section>
            <section className='skills'>
                <Underlined text='Skills'/>
                <div className="skills_container">
                    {
                        Skills.map((el:SkillsCardProps, i:number) => {
                            return  <SkillsCard icon={el.icon} text={el.text} key={`${el.text+i}`}/>
                        })
                    }
                </div>
            </section>
            <section className='education' ref={educationSectionRef}>
                <Underlined text='Education'/>
                <div className="scholar-career_container">
                    <div className="sliderLevel" ref={containerRef}>
                        <span className="scrolling-indicator" ref={scrollIndicator}></span>
                        {
                            schoolCareer.map((el: CareerProps, i:number) =>{
                                return <Career step={el.step} postTitle={el.postTitle} period={el.period} skills={el.skills} key={el.step+el.postTitle.split(' ').join('')}/>
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