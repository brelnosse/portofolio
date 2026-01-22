import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolTipProps } from "../types/tooltip.type";
//@ts-ignore
import '../assets/style/tooltip.css';
import { SkillsCardProps } from "../types/skillscard.type";
import { useCallback, useLayoutEffect, useRef } from "react";

const ToolTip:React.FC<ToolTipProps> = ({isHovered, setIsHovered, title, active, description, skillsData, setSkillsData}) =>{
    const ToolRef = useRef<HTMLDivElement>(null);

    const handleCloseActiveSkills = useCallback((title:string) => {
        if(!setSkillsData || !skillsData) return;
        setSkillsData(
            skillsData.map((el:SkillsCardProps) => 
                el.tooltip?.title.text.trim().toLocaleLowerCase() === title.trim().toLocaleLowerCase() ? 
                {...el, active: !el.active} : 
                el 
            )
        );

    }, [skillsData, setSkillsData]);

    const resizingBox = useCallback(() =>{
        if(!ToolRef.current) return;
        const ToolElem = ToolRef.current as HTMLElement;
        let right = window.innerWidth-(ToolElem.getBoundingClientRect().x+ToolElem.offsetWidth+20);
        let left = ToolElem.getBoundingClientRect().x;

        if(right < 0){
            ToolElem.classList.add('spaceRight');
            ToolElem.style.left = -ToolElem.offsetWidth+45 + 'px';
        }
        else if(left < 0){
            ToolElem.style.left = '0px';
            ToolElem.classList.remove('spaceRight');            
        }
    }, [isHovered]);

    const handleScreenRezise = useCallback(()=>{
        if(!ToolRef.current) return;
        const ToolElem = ToolRef.current as HTMLElement;
        if(ToolElem.classList.contains('visible')){
            resizingBox();
        }
    }, [resizingBox]);

    useLayoutEffect(() => {
        if (!ToolRef.current || !isHovered) return;
        resizingBox();
    }, [isHovered, resizingBox]);

    useLayoutEffect(()=>{
        window.addEventListener('resize', handleScreenRezise);
        return () =>{
            window.removeEventListener('resize', handleScreenRezise);
        }
    }, [resizingBox, handleScreenRezise]);
    return (
        <div ref={ToolRef} className={`tooltip${isHovered ? ' visible' : ''}`}>
            <div className="tooltip-header">
                <h2 className="tooltip-title">
                    <FontAwesomeIcon icon={title.icon}/>
                    <span>{title.text}</span>
                </h2>
                <span 
                    className="close-tooltip"
                    onClick={()=>{
                        if(active)
                            handleCloseActiveSkills(title.text);  
                        setIsHovered?.(false);
                    }}>
                    <FontAwesomeIcon icon={fas.faTimes}/>
                </span>
            </div>
            <p className="tooltip-description">{description}</p>
        </div>
    );
}
export default ToolTip;