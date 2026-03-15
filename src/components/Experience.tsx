import React, { useEffect, useRef, useState } from 'react';
import { ExperienceProps } from "../types/experience.type";
//@ts-ignore
import '../assets/style/experience.css';
import MagicLink from './MagicLink';

const Experience: React.FC<ExperienceProps> = ({enterprise, period, postTitle, location, skills, tools, ...props}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }else{
                    setIsVisible(false);
                }
            });
        }, { threshold: 0.5 }); 

        if (domRef.current) observer.observe(domRef.current);
        
        return () => observer.disconnect();
    }, []);

    const softColors = ["#E3F2FD", "#F1F8E9", "#FFF3E0", "#F3E5F5", "#EFEBE9", "#E0F2F1"];
    const getRandomColor = (index: number) => softColors[index % softColors.length];

    return (
// Dans ton return :
<div className={`experience ${isVisible ? 'visible' : ''}`} ref={domRef} {...props}> 
    {/* Bloc Titre Entreprise */}
    <div className="line">
        <h3><MagicLink path='https://www.ovnicode.com/' text={enterprise}/></h3>
        <span className="date">{period}</span>
    </div>
    
    {/* Bloc Titre de Poste */}
    <div className="line" style={{fontFamily: 'Poppins', marginTop: '10px'}}>
        <h3 style={{fontSize: '1.1em', color: 'var(--primary-color)'}}>{postTitle}</h3>
        <span className='location'>{location}</span>
    </div>
    
    {/* Liste des Skills centrée */}
    <ul className="skills_list">
        {skills.map((el: string, i: number) => (
            <li key={el + i} style={{ '--i': i } as React.CSSProperties}>
                <span>{el}</span>
            </li>
        ))}                
    </ul>

    {/* Outils */}
    <div className="tools_container">
        <b style={{textAlign: 'center', display: 'block'}}>Outils</b>
        <div className="toools">
            {tools && tools.map((tool: string, i: number) => (
                <span 
                    className="tools_pill" 
                    key={tool + i}
                    style={{ 
                        backgroundColor: getRandomColor(i),
                        '--i': i + skills.length 
                    } as React.CSSProperties}
                >
                    {tool}
                </span>
            ))} 
        </div>
    </div>            
</div>        
    );
}

export default Experience;