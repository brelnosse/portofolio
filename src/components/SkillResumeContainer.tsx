import { SkillsResumeCardprops } from "../types/skillsresumecard.type";
import { SkillResumeContainerProps } from "../types/skillsresumecontainer.type";
import SkillsResumeCard from "./SkillsResumeCard";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/skillresumecontainer.css';

const SkillResumeContainer: React.FC<SkillResumeContainerProps> = ({ skillsResumeItems }) => {
    return (
        <section className='resume'>
            <Underlined text='What Do I Do ?' />
            
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
        </section>
    );
}

export default SkillResumeContainer;