import { faDatabase, faExchangeAlt, faGears, fas, faSitemap, faTable, faVial } from "@fortawesome/free-solid-svg-icons";
import { SkillsCardProps } from "../types/skillscard.type";
import { faCss, faCss3, faFigma, faFlutter, faGithub, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";

export const Skills:SkillsCardProps[] = [
    {
        icon: faGithub,
        text: 'Github',
        active: false,
    },
    {
        icon: faJava,
        text: 'Java',
        tooltip: {
            title: {
                icon: faJava,
                text: 'Java'
            },
            description: 'Exp. 2 ans',
        },
        active: true,
    },
    {
        icon: faGears,
        text: 'CI/CD',
        active: false,
    },
    {
        icon: faVial,
        text: 'tests unitaires',
        active: false,
    },
    {
        icon: faExchangeAlt,
        text: 'Rest API',
        active: false,
    },
    {
        icon: faReact,
        text: 'React.js',
        active: true,
        tooltip: {
            title: {
                icon: faReact,
                text: 'React.js'
            },
            description: 'Exp. 7 mois',
        },
    },
    {
        icon: faFigma,
        text: 'Figma',
        active: false,
    },
    {
        icon: faJs,
        text: 'TypeScript',
        active: false,
    },
    {
        icon: faCss,
        text: 'CSS',
        active: false,
    },
    {
        icon: faHtml5,
        text: 'HTML',
        active: false,
    },
    {
        icon: faTable,
        text: 'SQL',
        active: false,
    },
    {
        icon: faTable,
        text: 'PostgreSQL',
        active: false,
    },
    {
        icon: faDatabase,
        text: 'MongoDB',
        active: false,
    },
    {
        icon: fas.faFire,
        text: 'Firebase',
        active: false,
    },
    {
        icon: faPhp,
        text: 'PHP',
        active: false,
    },
    {
        icon: faNodeJs,
        text: 'Node.js',
        active: false,
    },
    {
        icon: faSitemap,
        text: 'web integrator',
        active: false,
    },
    {
        icon: faFlutter,
        text: 'Flutter',
        active: true,
        tooltip: {
            title: {
                icon: faFlutter,
                text: 'Flutter'
            },
            description: 'Exp. 1 ans',
        },
    },
]