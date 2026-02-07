import { faCss3, faHtml5, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { faChartLine, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const projects:ProjectProps[] = [
    {
        title: 'Miam',
        color: '#f5700a',
        type: 'web',
        imgUrl: [
            require('../assets/images/miamFront.png'), 
            require('../assets/images/miamRight.png'), 
            require('../assets/images/miamBack.png'), 
        ],
        description: "Miam est une plateforme immersive dédiée à la gastronomie camerounaise. L'application permet de découvrir et de partager des recettes traditionnelles à travers une interface fluide et moderne, connectée à une API publique permettant d'exporter les données culinaires vers d'autres services",
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
        type: 'web',
        imgUrl: [
            require('../assets/images/thayipizzaFront.png'), 
            require('../assets/images/thayipizzaRight.png'), 
            require('../assets/images/thayipizzaBack.png'), 
        ],
        description: "Thayi Pizza est une application web de commande en ligne conçue pour simplifier l'interaction entre une pizzeria et ses clients. Le projet met l'accent sur une expérience utilisateur (UX) fluide, permettant de parcourir le menu, de personnaliser sa commande et de faciliter la prise de contact pour la livraison" ,
        url: 'https://thayipizza.netlify.app',
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
        title: 'IUCBibli',
        color: '#e82a33',
        type: 'web',
        imgUrl: [
            require('../assets/images/iucbibliFront.png'), 
            require('../assets/images/iucbibliBack.png'), 
            require('../assets/images/iucbibliRight.png'), 
        ],
        description: "Iucbibli est un système de gestion de bibliothèque interactif conçu pour automatiser le suivi des ouvrages et des emprunts. Le projet se concentre sur l'intégrité des données et la simplicité d'utilisation, offrant une interface d'administration robuste pour la gestion d'un catalogue en temps réel.",
        url: 'https://sevux.alwaysdata.net',
        githubUrl: 'https://github.com/brelnosse/iucbibli',
        skills: [
            {
                icon: faHtml5,
                text: 'HTML'
            },
            {
                icon: faJs,
                text: 'Javascript'
            },
            {
                icon: faPhp,
                text: 'PHP'
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