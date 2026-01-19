import { SkillsCardProps } from "../types/skillscard.type";
//@ts-ignore
import '../assets/style/skillscard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard:React.FC<SkillsCardProps> = ({icon, text, active, ...props}) => {
    return (
        <span className={`skills-card ${active ? 'active' : ''}`} {...props}>
            {icon && <FontAwesomeIcon icon={icon} style={{marginBottom: '-1px', fontSize: '15px', marginRight: '4px'}}/>}
            {text}
        </span>
    );
}
export default SkillsCard;