import { useEffect, useRef } from "react";
import { schoolCareer } from "../data/schoolCareer";
import { CareerProps } from "../types/career.type";
import Career from "./Carreer";
import Underlined from "./Underlined";
//@ts-ignore
import '../assets/style/careerContainer.css';
import { useSection } from "../hooks/useSection";

const CareerContainer: React.FC = () =>{
    const educationSectionRef = useRef<HTMLElement>(null);
    const scrollIndicator = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useSection(educationSectionRef, 'education');
    useEffect(() => {
        const indicator = scrollIndicator.current;
        const track = containerRef.current;
        const section = educationSectionRef.current;

        if (!indicator || !track || !section) return;

        const handleScroll = () => {
            const rect = track.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
            const clampedProgress = Math.max(0, Math.min(1, progress));

            const maxTravel = (track.offsetHeight) - indicator.offsetHeight;
            const translateY = clampedProgress * maxTravel;

            indicator.style.transform = `translate(-50%, ${translateY}px)`;
        };
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            
            if (entry.isIntersecting) {
                window.addEventListener('scroll', handleScroll);
                handleScroll();
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        }, { 
            threshold: 0.3
        });

        observer.observe(section); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
            <section className='education section-animated' ref={educationSectionRef}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', bottom: '0px'}} viewBox="0 0 1440 320"><path fill="#2A5B69" fill-opacity="1" d="M0,320L48,298.7C96,277,192,235,288,181.3C384,128,480,64,576,80C672,96,768,192,864,245.3C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <Underlined text='Education'/>
                <div className="scholar-career_container">
                    <div className="sliderLevel" ref={containerRef}>
                        <span className="scrolling-indicator" ref={scrollIndicator}></span>
                        {
                            schoolCareer.map((el: CareerProps, i:number) =>{
                                return <Career 
                                        step={el.step} 
                                        postTitle={el.postTitle} 
                                        orgUrl={el.orgUrl}
                                        organization={el.organization}
                                        period={el.period} 
                                        skills={el.skills} 
                                        key={el.step+el.postTitle.split(' ').join('')}/>
                            })
                        }
                    </div>
                </div>
            </section>        
    );
}
export default CareerContainer;