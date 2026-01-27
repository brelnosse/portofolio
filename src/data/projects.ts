import { faCss3, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { faChartLine, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const projects:ProjectProps[] = [
    {
        title: 'Miam',
        color: '#f5700a',
        type: 'websites-or-web-apps',
        imgUrl: [
            require('../assets/images/miamFront.png'), 
            require('../assets/images/miamRight.png'), 
            require('../assets/images/miamBack.png'), 
        ],
        url: 'https://miamcmr.netlify.app',
        githubUrl: '',
        skills: [
            {
                icon: faJs,
                text: 'Typescript'
            },
            {
                icon: faReact,
                text: 'React.js'
            },
            {
                icon: faNodeJs,
                text: 'Node.js'
            },
            {
                icon: faDatabase,
                text: 'MongoDB'
            },
            {
                icon: faCss3,
                text: 'CSS3'
            },
            {
                icon: faChartLine,
                text: 'Chart.js'                
            },
        ] 
    },    {
        title: 'Thayipizza',
        color: '#e82a33',
        type: 'websites-or-web-apps',
        imgUrl: [
            require('../assets/images/thayipizzaFront.png'), 
            require('../assets/images/thayipizzaRight.png'), 
            require('../assets/images/thayipizzaBack.png'), 
        ],
        url: 'https://miamcmr.netlify.app',
        githubUrl: '',
        skills: [
            {
                icon: faJs,
                text: 'Typescript'
            },
            {
                icon: faReact,
                text: 'React.js'
            },
            {
                icon: faNodeJs,
                text: 'Node.js'
            },
            {
                icon: faDatabase,
                text: 'MongoDB'
            },
            {
                icon: faCss3,
                text: 'CSS3'
            },
            {
                icon: faChartLine,
                text: 'Chart.js'                
            },
        ] 
    }
]