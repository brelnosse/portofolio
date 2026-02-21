import { faDatabase, faExchangeAlt, faGears, faPlug, fas, faSitemap, faTable, faVial } from "@fortawesome/free-solid-svg-icons";
import { SkillsCardProps } from "../types/skillscard.type";
import { faCss, faCss3, faFigma, faFlutter, faGithub, faHtml5, faJava, faJs, faNode, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";

export const Skills:SkillsCardProps[] = [
    {
        icon: faGithub,
        text: 'Github',
        active: false,
        tooltip: {
            title: {
                icon: faGithub,
                text: 'Github'
            },
            description: 'Exp. 4 ans'
        }
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
        tooltip: {
            title: {
                icon: faGears,
                text: 'CI/CD'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: faVial,
        text: 'tests unitaires',
        active: false,
        tooltip: {
            title: {
                icon: faVial,
                text: 'tests unitaires'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: faExchangeAlt,
        text: 'Rest API',
        active: false,
        tooltip: {
            title: {
                icon: faExchangeAlt,
                text: 'Rest API'
            },
            description: 'Exp. 1 ans'
        }
    },
    {
        icon: faPlug,
        text: 'Swagger',
        active: false,
        tooltip: {
            title: {
                icon: faPlug,
                text: 'Swagger'
            },
            description: 'Exp. Moins d\'1 ans'
        }
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
            description: 'Exp. Moins d\'1 ans',
        },
    },
    {
        icon: faFigma,
        text: 'Figma',
        active: false,
        tooltip: {
            title: {
                icon: faFigma,
                text: 'Figma'
            },
            description: 'Exp. 1 ans'
        }
    },
    {
        icon: faJs,
        text: 'TypeScript',
        active: false,
        tooltip: {
            title: {
                icon: faJs,
                text: 'Typescript'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: faCss3,
        text: 'CSS3',
        active: false,
        tooltip: {
            title: {
                icon: faCss3,
                text: 'CSS3'
            },
            description: 'Exp. 4 ans'
        }
    },
    {
        icon: faHtml5,
        text: 'HTML5',
        active: false,
        tooltip: {
            title: {
                icon: faHtml5,
                text: 'HTML'
            },
            description: 'Exp. 4 ans'
        }
    },
    {
        icon: faTable,
        text: 'SQL',
        active: false,
        tooltip: {
            title: {
                icon: faTable,
                text: 'SQL'
            },
            description: 'Exp. 3 ans'
        }
    },
    {
        icon: faTable,
        text: 'PostgreSQL',
        active: false,
        tooltip: {
            title: {
                icon: faTable,
                text: 'PostgreSQL'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: faDatabase,
        text: 'MongoDB',
        active: false,
        tooltip: {
            title: {
                icon: faDatabase,
                text: 'MongoDB'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: fas.faFire,
        text: 'Firebase',
        active: false,
        tooltip: {
            title: {
                icon: fas.faFire,
                text: 'Firebase'
            },
            description: 'Exp. Moins d\'1 ans'
        }
    },
    {
        icon: faPhp,
        text: 'PHP',
        active: false,
        tooltip: {
            title: {
                icon: faPhp,
                text: 'PHP'
            },
            description: 'Exp. 3 ans'
        }
    },
    {
        icon: faNodeJs,
        text: 'Node.js',
        active: false,
        tooltip: {
            title: {
                icon: faNodeJs,
                text: 'Node.js'
            },
            description: 'Exp. 2 ans'
        }
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
            description: 'Exp. Moins d\'1 ans',
        },
    },
]