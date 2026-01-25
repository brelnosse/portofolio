import { SkillsResumeCardprops } from "../types/skillsresumecard.type";
//@ts-ignore
import '../assets/style/skillsresumecard.css';
import { useEffect, useRef } from "react";

const SkillsResumeCard: React.FC<SkillsResumeCardprops & { index: number }> = ({ 
    image, 
    title, 
    description, 
    index, 
    ...props 
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!cardRef.current) return;
        const card = cardRef.current;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        }, {
            threshold: 0.2,
        });

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="card skills-resume_card"
            style={{ transitionDelay: `${index * 0.15}s` }}
            {...props}
        >
            <img src={image} alt="compétence" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SkillsResumeCard;