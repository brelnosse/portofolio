import { SkillsCardProps } from "../types/skillscard.type";
//@ts-ignore
import '../assets/style/skillscard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolTip from "./ToolTip";
import { useEffect, useRef, useState } from "react";

const SkillsCard:React.FC<SkillsCardProps> = ({icon, text, active, tooltip, skillsData, setSkillsData, ...props}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(!skillsRef.current) return;
        const skillsElem = skillsRef.current as HTMLElement;
        const observer = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting){
                if((skillsElem.childNodes[0] as HTMLElement).classList.contains('tooltip') && active){
                    skillsElem.firstElementChild?.classList.add('visible');
                    setIsHovered(true);
                }
            }
        },{
            threshold: 0.5,
        });
        observer.observe(skillsElem);

        return ()=>{
            observer.disconnect();
        }
    });
    return (
        <div 
            ref={skillsRef}
            className={`skills-card${active ? ' active' : ''}`} 
            onMouseEnter={()=> {
                if(!active)
                setIsHovered(true)
            }}
            onMouseLeave={()=> {
                if(!active)
                setIsHovered(false)
            }}
            {...props}>
            {
                tooltip &&
                <ToolTip 
                    title={{
                        icon: tooltip?.title.icon,
                        text: tooltip?.title.text
                    }}
                    skillsData={skillsData}
                    active={active}
                    setSkillsData={setSkillsData}
                    isHovered={(isHovered) ? true : false}
                    setIsHovered={setIsHovered}
                    description={tooltip.description}/>
            }
            {icon && <FontAwesomeIcon icon={icon} style={{marginBottom: '-1px', fontSize: '15px', marginRight: '4px'}}/>}
            {text}
        </div>
    );
}
export default SkillsCard;