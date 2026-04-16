import { SkillsResumeCardprops } from "../types/skillsresumecard.type";
import { SkillResumeContainerProps } from "../types/skillsresumecontainer.type";
import SkillsResumeCard from "./SkillsResumeCard";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/skillresumecontainer.css';
import { useRef } from "react";
import { useSection } from "../hooks/useSection";

const SkillResumeContainer: React.FC<SkillResumeContainerProps> = ({ skillsResumeItems }) => {
    const skillResumeRef = useRef<HTMLElement>(null);
    useSection(skillResumeRef, 'compétences');
    return (
        <section className='resume' ref={skillResumeRef}>
            <Underlined text="Qu'est-ce que je fais ?" />
            
            <div className="skillsResume_container">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', bottom: '0px'}}>
                <path fill="#2A5B69" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    );
}

export default SkillResumeContainer;