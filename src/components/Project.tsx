import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import '../assets/style/project.css';
import Button from "./Button";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { SkillsCardProps } from "../types/skillscard.type";
import SkillsCard from "./SkillsCard";

const Project: React.FC<ProjectProps> = ({ title, color, githubUrl, url, imgUrl, skills, type }) => {
    const projectRef = useRef<HTMLDivElement>(null);
    const firstDescriptionRef = useRef<HTMLDivElement>(null);
    const [titleProgress, setTitleProgress] = useState<number>(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking && firstDescriptionRef.current) {
                ticking = true;
                requestAnimationFrame(() => {
                    const firstDesc = firstDescriptionRef.current!;
                    const descRect = firstDesc.getBoundingClientRect();

                    const titleStickyPosition = 160;
                    const triggerDistance = 400; 
                    const distanceFromTitle = descRect.top - titleStickyPosition;

                    let progress = 0.5 - (distanceFromTitle / triggerDistance);
                    progress = Math.max(0, Math.min(1, progress));

                    setTitleProgress(progress);
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="project" ref={projectRef}>
            <div className="cube-container">
                <div className="cube" style={{ transform: `rotateY(${20 + (titleProgress * 90)}deg)` }}>
                    <div className="side front" style={{backgroundImage: `url(${imgUrl[0]})`}}></div>
                    <div className="side back" style={{backgroundImage: `url(${imgUrl[1]})`}}></div>
                    <div className="side left"></div>
                    <div className="side right" style={{backgroundImage: `url(${imgUrl[2]})`}}></div>
                    <div className="side top"></div>
                    <div className="side bottom"></div>
                </div>
            </div>
            
            <div className="projectDescription">
                <div 
                    className="p-title" 
                    style={{
                        transform: `scale(${1 - (titleProgress * 0.5)})`,
                        opacity: 1 - (titleProgress * 0.8),
                    }}>

                    <h3 style={{color: color}}>{title}</h3>
                    <div className="p-btns-container" style={{display: 'flex', gap: '10px'}}>
                        {url !== '' && <Button type='default' valueText='Visit' valueIcon={fas.faUpRightFromSquare} title='Visit the project online'/>}
                        {githubUrl !== '' && <Button type='light' valueText='Github' valueIcon={faGithub} title='View project on github'/>}                        
                    </div>
                </div>
                
                <div className="projectTextDescription" ref={firstDescriptionRef} style={{height: 'auto'}}>
                    <h4>Stack</h4>
                    <div className="stacks">
                        {
                            skills.map((el: SkillsCardProps, i: number) => {
                                return <SkillsCard key={el.text+i} icon={el.icon} text={el.text}/>
                            })
                        }
                    </div>
                </div>
                
                <div className="projectTextDescription">
                    <h4>Technologie</h4>
                    <p>Stack moderne : React, TypeScript et Node.js.</p>
                </div>

                <div className="projectTextDescription">
                    <h4>Technologie</h4>
                    <p>Stack moderne : React, TypeScript et Node.js.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;