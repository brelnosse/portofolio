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
            <Underlined text='A propos de moi'/>
            <div className="aboutContainer">
                <div className="profileCaption">
                    <div className="pc-description">
                        <h3>Brel nosse</h3>
                        <h4>UI/UX Designer - fullstack developer</h4>
                    </div>
                    <div className="pc-img">
                    </div>
                </div>
                <div className="profileDescription">
                    Étudiant Ingénieur (3iL) – Développeur Fullstack En recherche d'alternance pour septembre 2026. Passionné par l'apprentissage continu et la veille technologique, je cultive une curiosité qui me pousse à explorer de nouvelles stacks et à automatiser mes projets (CI/CD, tests). Réactif et ouvert aux critiques, je transforme chaque défi en opportunité d'innover
                </div>
            </div>
        </section>
    );
}
export default About;