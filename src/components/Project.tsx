import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import '../assets/style/project.css';
import Button from "./Button";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project: React.FC<any> = ({ title, githubUrl, url, type }) => {
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

                    let progress = 1 - (distanceFromTitle / triggerDistance);
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
                <div className="cube" style={{ transform: `rotateY(${30 + (titleProgress * 90)}deg)` }}>
                    <div className="side front"></div>
                    <div className="side back"></div>
                    <div className="side left"></div>
                    <div className="side right"></div>
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

                    <h3>{title}</h3>
                    <div className="p-btns-container" style={{display: 'flex', gap: '10px'}}>
                        {url !== '' && <Button type='default' valueText='Visit' valueIcon={fas.faUpRightFromSquare} title='Visit the project online'/>}
                        {githubUrl !== '' && <Button type='light' valueText='Github' valueIcon={faGithub} title='View project on github'/>}                        
                    </div>
                </div>
                
                <div className="projectTextDescription" ref={firstDescriptionRef}>
                    <h4>Contexte</h4>
                    <p>Développement d'une solution innovante pour le projet Ghomálá'.</p>
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