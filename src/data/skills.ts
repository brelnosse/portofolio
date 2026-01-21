import { faBullhorn, faCode, faDatabase, faExchangeAlt, faGears, fas, faServer, faSitemap, faTable } from "@fortawesome/free-solid-svg-icons";
import { SkillsCardProps } from "../types/skillscard.type";
import { faAws, faCss, faFigma, faFlutter, faGithub, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";

export const Skills:SkillsCardProps[] = [
    {
        icon: faFigma,
        text: 'Figma',
        tooltip: {
            title: {
                icon: faFigma,
                text: 'Figma'
            },
            description: 'Exp. 1 ans',
        },
        active: true,
    },
    {
        icon: faReact,
        text: 'React.js',
        active: false,
        tooltip: {
            title: {
                icon: faFigma,
                text: 'React.js'
            },
            description: 'Exp. 1 ans',
        },
    },
    {
        icon: faJs,
        text: 'TypeScript',
        active: false,
    },
    {
        icon: faBullhorn,
        text: 'communication',
        active: false,
    },
    {
        icon: fas.faHandshake,
        text: 'collaboration',
        active: false,
    },
    {
        icon: faCss,
        text: 'CSS',
        tooltip: {
            title: {
                icon: faFigma,
                text: 'CSS'
            },
            description: 'Exp. 1 ans',
        },
        active: true,
    },
    {
        icon: faHtml5,
        text: 'HTML',
        active: false,
    },
    {
        icon: faPhp,
        text: 'PHP natif',
        active: false,
    },
    {
        icon: faTable,
        text: 'MySQL',
        active: false,
    },
    {
        icon: faDatabase,
        text: 'MongoDB',
        active: false,
    },
    {
        icon: faJava,
        text: 'Java',
        active: false,
    },
    {
        icon: faGears,
        text: 'CI/CD',
        active: false,
    },
    {
        icon: faExchangeAlt,
        text: 'Rest API',
        active: false,
    },
    {
        icon: faNodeJs,
        text: 'Node.js',
        active: false,
    },
    {
        icon: faCode,
        text: 'Frontend',
        active: false,
    }, 
    {
        icon: faServer,
        text: 'Backend',
        active: false,
    },
    {
        icon: faSitemap,
        text: 'web integrator',
        active: false,
    },
    {
        icon: faAws,
        text: 'Amazon web service',
        active: false,
    },
    {
        icon: fas.faFire,
        text: 'Firebase',
        active: false,
    },
    {
        icon: faFlutter,
        text: 'Flutter',
        active: false,
    },
    {
        icon: faGithub,
        text: 'Github / gitLab',
        active: false,
    }
]