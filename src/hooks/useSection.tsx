import { RefObject, useContext, useEffect } from "react";
import { SectionContext } from "../context/SectionContext";

// Hook typé avec useSectionContext
export const useSection = (ref: RefObject<HTMLElement | null>, section: string) => {
    const context = useContext(SectionContext); // Hook custom type-safe

    useEffect(() => {
        if (!ref.current) return;
        
        const projectsElem = ref.current as HTMLElement;
        
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    context.setActiveSection(section);
                }
            },
            {
                threshold: section === 'projects' ? 0 : 0.3,
                rootMargin: section === 'projects' ? '0px' : '-20% 0px -40% 0px'
            }
        );

        observer.observe(projectsElem);
        return () => observer.disconnect();
    }, [ref, section, context.setActiveSection]); // Dépendance précise
};
