import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, SetStateAction } from "react";
export interface MenuItemType {
    icon: IconDefinition;
    path: string;
    displayText: string
};

export interface NavbarProps{
    activeSection : string; 
    setActiveSection: Dispatch<SetStateAction<string>>;
}