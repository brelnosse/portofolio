import { faCss, faCss3, faHtml5, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { faChartArea, faChartLine, faDatabase, faFire, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { text } from "stream/consumers";

export const projects:ProjectProps[] = [
    {
        title: 'Miam',
        type: 'websites-or-web-apps',
        imgUrl: require('../assets/images/iucbibli.png'),
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
    },
    {
        title: 'Thayipizza',
        type: 'websites-or-web-apps',
        imgUrl: require('../assets/images/d.webp'),
        url: 'https://thayipizza.netlify.app',
        githubUrl: '',
        skills: [
            {
                icon: faReact,
                text: 'React.js'
            },
            {
                icon: faJs,
                text: 'Javascript'
            },
            {
                icon: faFire,
                text: 'firebase'
            },
            {
                icon: faNodeJs,
                text: 'Node.js'
            },
            {
                icon: faCss3,
                text: 'CSS'
            },
            {
                icon: faMoneyBill1Wave,
                text: 'Mesomb'
            }
        ] 
    },    {
        title: 'Cabinet dentaire d\'akwa',
        type: 'websites-or-web-apps',
        imgUrl: require('../assets/images/d.webp'),
        url: 'h',
        githubUrl: 'h',
        skills: [
            {
                icon: faPhp,
                text: 'Php'
            }
        ] 
    },    {
        title: 'Thayipizza',
        type: 'websites-or-web-apps',
        imgUrl: require('../assets/images/d.webp'),
        url: 'h',
        githubUrl: '',
        skills: [
            {
                icon: faPhp,
                text: 'Php'
            }
        ] 
    }
]