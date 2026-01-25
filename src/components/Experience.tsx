import React, { useEffect, useRef, useState } from 'react';
import { ExperienceProps } from "../types/experience.type";
//@ts-ignore
import '../assets/style/experience.css';

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
        }, { threshold: 0.15 }); 

        if (domRef.current) observer.observe(domRef.current);
        
        return () => observer.disconnect();
    }, []);

    const softColors = ["#E3F2FD", "#F1F8E9", "#FFF3E0", "#F3E5F5", "#EFEBE9", "#E0F2F1"];
    const getRandomColor = (index: number) => softColors[index % softColors.length];

    return (
        <div 
            className={`experience ${isVisible ? 'visible' : ''}`} 
            ref={domRef} 
            {...props}
        > 
            <div className="line">
                <h3>{enterprise}</h3>
                <span className="date">{period}</span>
            </div>
            
            <div className="line">
                <h3>{postTitle}</h3>
                <span className='location'>{location}</span>
            </div>
            
            <ul className="skills_list">
                {skills.map((el: string, i: number) => (
                    <li 
                        key={el + i} 
                        style={{ '--i': i } as React.CSSProperties}
                    >
                        {el}
                    </li>
                ))}                
            </ul>

            <div className="tools_container">
                <b>Tools:</b>
                <div className="toools">
                    {tools && tools.map((tool: string, i: number) => (
                        <span 
                            className="tools_pill" 
                            key={tool + i}
                            style={{ 
                                backgroundColor: getRandomColor(i),
                                '--i': i + skills.length // Démarre après la fin des skills
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