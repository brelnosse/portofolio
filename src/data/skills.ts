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
            description: '.......'
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
            description: '.......',
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
            description: '.......'
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
            description: '.......'
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
            description: '.......'
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
            description: '.......'
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
            description: '.......'
        }
    },
        {
        icon: faJs,
        text: 'Javascript',
        active: true,
        tooltip: {
            title: {
                icon: faJs,
                text: 'javascript'
            },
            description: '.......'
        }
    },
    {
        icon: faReact,
        text: 'React.js',
        active: false,
        tooltip: {
            title: {
                icon: faReact,
                text: 'React.js'
            },
            description: '.......',
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
            description: '.......'
        }
    },
    {
        icon: faCss3,
        text: 'CSS3',
        active: true,
        tooltip: {
            title: {
                icon: faCss3,
                text: 'CSS3'
            },
            description: '.......'
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
            description: '.......'
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
            description: '.......'
        }
    },
    {
        icon: faHtml5,
        text: 'HTML5',
        active: true,
        tooltip: {
            title: {
                icon: faHtml5,
                text: 'HTML'
            },
            description: '.......'
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
            description: '.......'
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
            description: '.......'
        }
    },
    {
        icon: faPhp,
        text: 'PHP',
        active: true,
        tooltip: {
            title: {
                icon: faPhp,
                text: 'PHP'
            },
            description: '.......'
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
            description: '.......'
        }
    },
    {
        icon: faFlutter,
        text: 'Flutter',
        active: false,
        tooltip: {
            title: {
                icon: faFlutter,
                text: 'Flutter'
            },
            description: '.......',
        },
    },
]