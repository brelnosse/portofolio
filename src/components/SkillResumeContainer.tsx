import { useEffect, useRef } from "react";
import { SkillsResumeCardprops } from "../types/skillsresumecard.type";
import { SkillResumeContainerProps } from "../types/skillsresumecontainer.type";
import SkillsResumeCard from "./SkillsResumeCard";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/skillresumecontainer.css';

const SkillResumeContainer: React.FC<SkillResumeContainerProps> = ({ skillsResumeItems }) => {
    // 1. Création d'une référence pour cibler le conteneur des cartes
    const containerRef = useRef<HTMLDivElement | null>(null);

    // 2. Écouteur d'événement de Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Vérifie si le conteneur est visible à l'écran
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calcule le pourcentage de visibilité (0 = tout en bas, 1 = tout en haut)
                const scrollProgress = (windowHeight - rect.top) / windowHeight;

                // Calcule le mouvement : commence à droite (ex: +100px) et va vers la gauche (ex: -100px)
                // Ajustez "150" pour augmenter ou réduire l'amplitude du mouvement
                const translateX = 150 - (scrollProgress * 300); 

                // Applique le mouvement en direct
                container.style.transform = `translateX(${translateX}px)`;
            }
        };

        // Ajoute l'écouteur au chargement
        window.addEventListener('scroll', handleScroll);
        
        // Nettoyage à la destruction du composant
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='resume'>
            <Underlined text='What Do I Do ?' />
            
            {/* 3. Ajout de la ref ici */}
            <div className="skillsResume_container" ref={containerRef}>
                {
                    skillsResumeItems.map((el: SkillsResumeCardprops, i: number) => {
                        return <SkillsResumeCard 
                            image={el.image} 
                            title={el.title} 
                            description={el.description} 
                            key={`${el.title + i}`} 
                            index={i} 
                        />
                    })
                }
            </div>
        </section>
    );
}

export default SkillResumeContainer;