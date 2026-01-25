import { ReactNode ,SetStateAction,createContext, useState } from "react";
import { NavbarProps } from "../types/navbar.types";
import { Dispatch } from "react";

export const SectionContext = createContext<NavbarProps>({
    activeSection: '',
    setActiveSection: () => {}
});

export const SectionContextProvider = ({children}:{children: ReactNode}) => {
    const [activeSection, setActiveSection] = useState<string>('home');

    return (
        <SectionContext.Provider value={{activeSection, setActiveSection}}>
            {children}
        </SectionContext.Provider>
    );
}