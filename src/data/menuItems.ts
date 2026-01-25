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
        icon: fas.faCodeBranch,
        path: '/education',
        displayText: 'Education'
    },
    {
        icon: fas.faBrain,
        path: '/experience',
        displayText: 'Experiences'
    },
    {
        icon: fas.faCogs,
        path: '/project',
        displayText: 'Projects'
    }
    ,{
        icon: fas.faUser,
        path: '/about-me',
        displayText: 'About me'
    }
];