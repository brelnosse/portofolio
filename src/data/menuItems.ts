import { fas } from "@fortawesome/free-solid-svg-icons";
import { MenuItemType } from "../types/navbar.types";

export const MenuItems:MenuItemType[] = [
    {
        icon: fas.faHome,
        displayText: 'Home'
    },
    {
        icon: fas.faUser,
        displayText: 'About me'
    },
    {
        icon: fas.faCodeBranch,
        displayText: 'Skills'
    },
    {
        icon: fas.faGraduationCap,
        displayText: 'Education'
    },
    {
        icon: fas.faBrain,
        displayText: 'Experiences'
    },
    {
        icon: fas.faCogs,
        displayText: 'Projects'
    }
];