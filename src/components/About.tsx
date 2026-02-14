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
                    Étudiant à <span>3iL Ingénieurs</span>, je cherche une <span>alternance</span>
                    en <span>développement Full-stack | DevOps | IoT</span> pour <span>septembre 2026</span>. Plutôt curieux, 
                    j'aime tester de nouvelles stacks et automatiser mes projets. 
                    Je sais que j'ai encore à apprendre, mais <span>j'apprends vite</span> et
                    j'apprécie les <span>retours constructifs</span> qui me font progresser.
                </p>
            </div>
        </section>
    );
}

export default About;