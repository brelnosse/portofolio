import { ExperienceProps } from "../types/experience.type";
//@ts-ignore
import '../assets/style/experience.css';

const Experience: React.FC<ExperienceProps> = ({enterprise, period, postTitle, location, skills, tools, ...props}) => {
    return (
        <div className="experience" {...props}>
            <div className="line">
                <h3>{enterprise}</h3>
                <span className="date">{period}</span>
            </div>
            <div className="line">
                <h3>{postTitle}</h3>
                <span className='location'>{location}</span>
            </div>
            <ul>
                {skills.map((el: string, i: number) => <li key={el+i}>{el}</li>)}                
            </ul>
            <b>Tools:</b>
            {skills.map((el: string, i:number) => <span className="tools" key={el+i}>{el}</span>)}             
        </div>        
    );
}
export default Experience;