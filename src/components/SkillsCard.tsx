import { SkillsCardProps } from "../types/skillscard.type";
//@ts-ignore
import '../assets/style/skillscard.css';

const SkillsCard:React.FC<SkillsCardProps> = ({text, active, ...props}) => {
    return (
        <span className={`skills-card ${active ? 'active' : ''}`} {...props}>
            {text}
        </span>
    );
}
export default SkillsCard;