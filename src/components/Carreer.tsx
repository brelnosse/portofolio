import { CareerProps } from "../types/career.type";

const Career: React.FC<CareerProps> = ({step, postTitle, period, skills, ...props}) =>{
    return (
        <div className={`career ${step%2 === 0 ? 'left' : ''}`} {...props}>
            <span className="indicator"></span>
            <div className="card scholar-career">
                <span className='step'>{step}</span>
                <div className="scholar-career_text">
                    <h3>{postTitle}</h3>
                    <h4>{period}</h4>
                    <p>
                        <span className="primary">Compétences acquises:</span>
                        {skills}
                    </p>
                </div>
            </div>
        </div>        
    );
}
export default Career;