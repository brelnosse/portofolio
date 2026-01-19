import { fas } from "@fortawesome/free-solid-svg-icons";
import { MenuItemType } from "../types/navbar.types";

export const MenuItems:MenuItemType[] = [
    {
        icon: fas.faHome,
        path: '/',
        displayText: 'Home'
    },
    {
        icon: fas.faCodeBranch,
        path: '/skills',
        displayText: 'Skills'
    },
    {
        icon: fas.faBrain,
        path: '/experience',
        displayText: 'Experience'
    },
    {
        icon: fas.faCogs,
        path: '/project',
        displayText: 'Project'
    }
    ,{
        icon: fas.faUser,
        path: '/about-me',
        displayText: 'About me'
    }
];