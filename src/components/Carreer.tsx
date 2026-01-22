import { useCallback, useEffect, useRef, useState } from "react";
import { CareerProps } from "../types/career.type";
//@ts-ignore
import '../assets/style/career.css';
const Career: React.FC<CareerProps> = ({step, postTitle, organization, period, skills, ...props}) =>{
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const careerRef = useRef<HTMLDivElement>(null);

    const handleWindowResize = useCallback((): void =>{
        setWindowSize(window.innerWidth); 
    }, []);

    useEffect(() => {
  window.addEventListener('resize', handleWindowResize);

  let observer: IntersectionObserver | null = null;

  if (careerRef.current) {
    const career = careerRef.current;
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        career.classList.add('visible');
      }else{
        career.classList.remove('visible');
      }
    }, { threshold: 0.4 });

    observer.observe(career);
  }

  return () => {
    window.removeEventListener('resize', handleWindowResize);
    if (observer) observer.disconnect();
  };
}, [handleWindowResize]);

    return (
        <div 
            ref={careerRef}
            className={`career${windowSize > 597 ? (step%2 === 0 ? ' left' : '') : ''}`} 
            {...props}>
            <span className="indicator"></span>
            <div className="card scholar-career">
                <span className='step'>{step}</span>
                <div className="scholar-career_text">
                    <h3>{postTitle}</h3>
                    <div className="timeline">
                        <h4>{organization}</h4>
                        <span className="badge">{period}</span>
                    </div>
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