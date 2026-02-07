import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/about.css';
import { useRef } from "react";
import { useSection } from "../hooks/useSection";

const About:React.FC = () => {
    const AboutRef = useRef<HTMLElement>(null);
    useSection(AboutRef, 'a propos');
    return (
        <section className="aboutme" ref={AboutRef}>
            <Underlined text='Qui suis-je ?'/>
            <div className="aboutContainer">
                <div className="profileCaption">
                    <div className="pc-description">
                        <h3>Brel nosse</h3>
                        <h4>Etudiant développeur full-stack</h4>
                    </div>
                    <div className="pc-img">
                    </div>
                </div>
                <div className="profileDescription">
                    Étudiant Ingénieur (3iL) – Développeur 
                    Fullstack En recherche d'alternance pour 
                    septembre 2026. Doté d'une grande capacité 
                    d'apprentissage rapide, je m'appuie sur une veille constante 
                    pour explorer de nouvelles stacks et automatiser mes projets (intégration continue, tests unitaires). 
                    Curieux, réactif et ouvert aux critiques, je transforme chaque défi
                    technique en une opportunité d'innover et de progresser.
                </div>
            </div>
        </section>
    );
}
export default About;