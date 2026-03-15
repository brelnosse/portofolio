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
                    Étudiant à <span>3iL Ingénieurs</span>, je prépare une <span>alternance</span> en <span> Dev Full-stack | DevOps | IoT </span> pour <span> septembre 2026</span>. Passionné par l'innovation, j'aime explorer de nouvelles stacks et automatiser mes projets. Grâce à mon <span> agilité </span>, je transforme chaque défi en opportunité pour <span> monter en compétences</span> et apporter une réelle valeur ajoutée.
                </p>
            </div>
        </section>
    );
}

export default About;