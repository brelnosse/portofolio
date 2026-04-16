import { SkillsCardProps } from "../types/skillscard.type";
import { SkillsContainerProps } from "../types/skillscontainer.type";
import SkillsCard from "./SkillsCard";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/skillscontainer.css';
import { useRef } from "react";
import { useSection } from "../hooks/useSection";
const SkillsContainer:React.FC<SkillsContainerProps> = ({skillsData, setSkillsData}) =>{
    const skillsContainerRef = useRef<HTMLElement>(null);
    useSection(skillsContainerRef, 'compétences');
    return (
            <section className='skills' ref={skillsContainerRef}>
                <Underlined text='Compétences'/>
                <svg xmlns="http://www.w3.org/2000/svg"  style={{position: 'absolute', left: '0px', top: '0px'}} viewBox="0 0 1440 320"><path fill="#2A5B69" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,53.3C672,32,768,64,864,69.3C960,75,1056,53,1152,37.3C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="skills_container">
                    {
                        skillsData.map((el:SkillsCardProps, i:number) => {
                            return  <SkillsCard 
                                        icon={el.icon} 
                                        text={el.text} 
                                        key={`${el.text+i}`} 
                                        tooltip={el.tooltip} 
                                        skillsData={skillsData}
                                        setSkillsData={setSkillsData}
                                        active={el.active}/>
                        })
                    }
                </div>
            </section>        
    );
}
export default SkillsContainer;