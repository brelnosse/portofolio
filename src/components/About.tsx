import React, { useRef, useEffect, useState } from "react";
import Underlined from "./Underlined";
import { useSection } from "../hooks/useSection";
//@ts-ignore
import '../assets/style/about.css';

const About: React.FC = () => {
    const AboutRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useSection(AboutRef, 'a propos');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }else{
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (AboutRef.current) {
            observer.observe(AboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            className={`aboutme ${isVisible ? 'active' : ''}`} 
            ref={AboutRef}
        >
            <Underlined text='Qui suis-je ?'/>
            
            <div className="aboutContainer">
                {/* On ajoute la classe de base reveal-item pour l'animation */}
                <div className="profileCaption reveal-item">
                    <div className="pc-description">
                        <h3>Brel NOSSE</h3>
                        <h4>Etudiant ingénieur en informatique</h4>
                    </div>
                    <div className="pc-img"></div>
                </div>

                <p className="profileDescription reveal-item">
                    Étudiant à <span>3iL Ingénieurs</span>, je recherche une <span>alternance</span> en <span> Dev Full-stack | DevOps | IoT </span> pour <span> septembre 2026</span>. Passionné par l'innovation, j'aime explorer de nouvelles stacks et automatiser mes projets. Grâce à mon <span> agilité </span>, je transforme chaque défi en opportunité pour <span> monter en compétences</span> et apporter une réelle valeur ajoutée.
                </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: '0px'}} viewBox="0 0 1440 320"><path fill="#2A5B69" fill-opacity="1" d="M0,288L40,293.3C80,299,160,309,240,277.3C320,245,400,171,480,117.3C560,64,640,32,720,26.7C800,21,880,43,960,48C1040,53,1120,43,1200,37.3C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </section>
    );
}

export default About;