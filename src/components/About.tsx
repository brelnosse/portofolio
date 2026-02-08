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
                        <h3>Brel NOSSE</h3>
                        <h4>Etudiant développeur full-stack</h4>
                    </div>
                    <div className="pc-img">
                    </div>
                </div>
                <p className="profileDescription">
                    Étudiant à<span>3iL Ingénieurs</span>, je cherche une<span>alternance</span>
                    en <span>développement Fullstack</span>pour<span>septembre 2026</span>. Plutôt curieux, 
                    j'aime tester de nouvelles stacks et automatiser mes projets. 
                    Je sais que j'ai encore à apprendre, mais<span>j'apprends vite</span>et
                    j'apprécie les<span>retours constructifs</span>qui me font progresser.
                </p>
            </div>
        </section>
    );
}
export default About;