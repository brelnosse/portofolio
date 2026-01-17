import { useEffect, useState } from "react";
import { CareerProps } from "../types/career.type";

const Career: React.FC<CareerProps> = ({step, postTitle, period, skills, ...props}) =>{
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const handleResize = (): void =>{
        setWindowSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])   
    return (
        <div className={`career ${windowSize > 597 ? (step%2 === 0 ? 'left' : '') : ''}`} {...props}>
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