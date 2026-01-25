import { ExperienceProps } from "../types/experience.type";
import Experience from "./Experience";
import Underlined from "./Underlined";
import { experiences } from '../data/experiences';
//@ts-ignore
import '../assets/style/experienceContainer.css';
const ExperienceContainer: React.FC = () => {
    return (
            <section className="experiences">
                <Underlined text='Experience'/>
                <div className="experience_container">
                   {
                    experiences.map((el:ExperienceProps, i:number) => 
                        <Experience 
                            key={el.enterprise.split(' ').join(' ')+i}
                            enterprise={el.enterprise} 
                            period={el.period} 
                            postTitle={el.postTitle} 
                            location={el.location}
                            skills={el.skills}
                            tools={el.tools}
                        />)
                   }
                </div>
            </section>
    );
}
export default ExperienceContainer;