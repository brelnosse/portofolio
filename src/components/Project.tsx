import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SkillsCardProps } from "../types/skillscard.type";
import Button from "./Button";
import SkillsCard from "./SkillsCard";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "../types/project.type";
//@ts-ignore
import '../assets/style/project.css';

const Project: React.FC<ProjectProps> = ({title, imgUrl, url, githubUrl, skills, disabled}) => {
    return (
        <div className={`project project-1 ${disabled && 'disabled'}`}>
            <div className="project-header">
                {url !== '' && <Button type='default' valueText='Visit' valueIcon={fas.faUpRightFromSquare} title='Visit the project online'/>}
                {githubUrl !== '' && <Button type='light' valueText='Github' valueIcon={faGithub} title='View project on github'/>}
            </div>
            <img src={imgUrl} alt={title} />
            <div className="project-footer">
                {
                    skills.map((el:SkillsCardProps, i:number) => {
                        return <SkillsCard icon={el.icon} text={el.text} key={`${el.text+i+title}`}/>
                    })
                }
            </div>
        </div>
    );
}
export default Project;