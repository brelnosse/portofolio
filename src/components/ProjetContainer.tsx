import { useContext, useEffect, useRef, useState } from "react";
import { ProjectProps } from "../types/project.type";
import Project from "./Project";
import TabNavigation from "./TabNavigation";
import Underlined from "./Underlined";
import { projects } from "../data/projects";
//@ts-ignore
import '../assets/style/projectcontainer.css';
import { useSection } from "../hooks/useSection";

const ProjectContainer: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const projectsRef = useRef<HTMLElement>(null);
    useSection(projectsRef, 'projects');
    
    return (
        <section className="projects" ref={projectsRef}>
            <Underlined text='Projects'/>
            <div className="projects_container">
                <div className="projects-container_header">
                    <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                <div className="my-projects">
                    {
                        projects.map((el: ProjectProps, i: number)=>{
                            if(activeTab !== 'all' && el.type.toLocaleLowerCase() !== activeTab){
                                return;
                            }
                            return <Project 
                                key={el.title+i}
                                url={el.url} 
                                title={el.title} 
                                imgUrl={el.imgUrl} 
                                disabled={false} 
                                type={el.type} 
                                githubUrl={el.githubUrl}
                                skills={el.skills}/>
                            }
                        )
                    }
                </div>
            </div>
        </section>
    );
}
export default ProjectContainer;