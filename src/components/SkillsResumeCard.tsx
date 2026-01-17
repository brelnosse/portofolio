import { SkillsResumeCardprops } from "../types/skillsresumecard.type";
//@ts-ignore
import '../assets/style/skillsresumecard.css';

const SkillsResumeCard:React.FC<SkillsResumeCardprops> = ({image, title, description, ...props}) => {
    return (
        <div className="card skills-resume_card" {...props}>
            <img src={image} alt="compétence" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default SkillsResumeCard;