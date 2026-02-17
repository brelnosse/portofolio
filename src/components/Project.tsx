import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import '../assets/style/project.css';
import Button from "./Button";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { SkillsCardProps } from "../types/skillscard.type";
import SkillsCard from "./SkillsCard";

const Project: React.FC<ProjectProps> = ({ title, color, githubUrl, type, url, imgUrl, description, features, skills }) => {
    const projectRef = useRef<HTMLDivElement>(null);
    const cubeRef = useRef<HTMLDivElement>(null);
    const firstDescriptionRef = useRef<HTMLDivElement>(null);
    const secondDescriptionRef = useRef<HTMLDivElement>(null);
    const thirdDescriptionRef = useRef<HTMLDivElement>(null);
    
    const [titleProgress, setTitleProgress] = useState<number>(0);
    const [cubeRotation, setCubeRotation] = useState<number>(0);

    useEffect(() => {
        if (!cubeRef.current) return;
        
        let isVisible = false;
        let ticking = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }); 

        const descriptionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const target = entry.target as HTMLElement;
                const ratio = entry.intersectionRatio;

                const minScale = 0.9;
                const maxScale = 1;
                
                if (entry.isIntersecting) {
                    const progress = Math.min(1, Math.max(0, (ratio - 0.2) / 0.7));
                    const currentScale = minScale + (progress * (maxScale - minScale));
                    
                    target.style.transform = `scale(${currentScale})`;
                    target.style.opacity = `${0.5 + (progress * 0.5)}`;
                } else {
                    target.style.transform = `scale(${minScale})`;
                    target.style.opacity = '0.5';
                }
            });
        }, {
            threshold: Array.from({ length: 51 }, (_, i) => i / 50),
            rootMargin: "-50px 0px" 
        });

        if(firstDescriptionRef.current && secondDescriptionRef.current && thirdDescriptionRef.current){
            descriptionObserver.observe(firstDescriptionRef.current);
            descriptionObserver.observe(secondDescriptionRef.current);
            descriptionObserver.observe(thirdDescriptionRef.current);
        }
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    if (firstDescriptionRef.current) {
                        const firstDesc = firstDescriptionRef.current;
                        const descRect = firstDesc.getBoundingClientRect();
                        const titleStickyPosition = 160;
                        const triggerDistance = 400;
                        const distanceFromTitle = descRect.top - titleStickyPosition;

                        let tProgress = 0.5 - (distanceFromTitle / triggerDistance);
                        setTitleProgress(Math.max(0, Math.min(1, tProgress)));
                    }

                    if (isVisible && projectRef.current) {
                        const rect = projectRef.current.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        const startPoint = windowHeight; 
                        const currentPoint = rect.top;

                        const relativeScroll = startPoint - currentPoint;
                        
                        const rotation = relativeScroll * 0.15; 
                        
                        setCubeRotation(rotation);
                    }

                    ticking = false;
                });
            }
        };

        observer.observe(cubeRef.current);
        window.addEventListener('scroll', handleScroll, { passive: true });
        

        handleScroll();

        return () => {
            observer.disconnect();
            descriptionObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="project" ref={projectRef}>
            <div className="cube-container">
                <div 
                    className="cube" 
                    ref={cubeRef} 
                    style={{ 
                        transform: `rotateY(${10+cubeRotation}deg)` 
                    }}
                >
                    <div className="side front" style={{backgroundImage: `url(${imgUrl[0]})`}}></div>
                    <div className="side back" style={{backgroundImage: `url(${imgUrl[1]})`}}></div>
                    <div className="side right" style={{backgroundImage: `url(${imgUrl[2]})`}}></div>
                    <div className="side left" style={{backgroundImage: `url(${imgUrl[3]})`}}></div>
                    <div className="side top"></div>
                    <div className="side bottom"></div>
                </div>
            </div>
            
            <div className="projectDescription" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imgUrl[0]})`}}>
                <div 
                    className="p-title" 
                    style={{
                        transform: `scale(${1 - (titleProgress * 0.3)})`, // Scale réduit pour l'UX
                        opacity: Math.max(0.4, 1 - (titleProgress * 0.8)), // Opacité min de 0.4 pour rester cliquable
                    }}>

                    <h3 style={{color: color}}>{title}</h3>
                    
                    <div className="p-btns-container" style={{display: 'flex', gap: '10px'}}>
                        {url !== '' && (
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <Button 
                                    type='default' 
                                    valueText='Visiter' 
                                    style={{backgroundColor: color, borderColor: color, color: 'white'}}
                                    valueIcon={fas.faUpRightFromSquare} 
                                    title={`Visiter ${title}`}
                                />
                            </a>
                        )}
                        {githubUrl !== '' && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <Button 
                                    type='light' 
                                    valueText='Github' 
                                    valueIcon={faGithub} 
                                    title="Voir le code source"
                                />
                            </a>
                        )}                        
                    </div>
                </div>

                <>
                    <div className="projectTextDescription" ref={firstDescriptionRef}>
                        <h4>Description</h4>
                        <p className="description">
                            {description}
                        </p>
                    </div>
                </>
                <>
                    <div className="projectTextDescription" ref={secondDescriptionRef}>
                        <h4>Fonctionnalités clés</h4>
                        <ul>
                            {
                                features.map((el: string, i: number) => {
                                    return <li key={el.split(' ').join('-')+'-'+i}><span>{el}</span></li>;
                                })
                            }
                        </ul>
                    </div>
                </>
                <>
                    <div className="projectTextDescription" ref={thirdDescriptionRef}>
                        <h4>Compétences</h4>
                        <div className="stacks">
                            {skills.map((el: SkillsCardProps, i: number) => (
                                <SkillsCard key={`${el.text}-${i}`} icon={el.icon} text={el.text}/>
                            ))}
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}

export default Project;