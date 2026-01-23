import { SkillsCardProps } from "../types/skillscard.type";
import { SkillsContainerProps } from "../types/skillscontainer.type";
import SkillsCard from "./SkillsCard";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/skillscontainer.css';
const SkillsContainer:React.FC<SkillsContainerProps> = ({skillsData, setSkillsData}) =>{
    return (
            <section className='skills'>
                <Underlined text='Skills'/>
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