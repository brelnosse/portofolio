import { faCss, faCss3, faFigma, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "../types/project.type";
import { faChartLine, faCode, faDatabase, faFire, faPanorama } from "@fortawesome/free-solid-svg-icons";

export const projects:ProjectProps[] = [
    {
        title: 'Mon portfolio',
        color: '#2a5b69',
        type: 'web',
        imgUrl: [
            require('../assets/images/portfolioFront.webp'), 
            require('../assets/images/portfolioBack.webp'), 
            require('../assets/images/portfolioLeft.webp'), 
            require('../assets/images/portfolioRight.webp'), 
        ],
        description: "Découvrez mon expérience et mes projets informatiques : applications web, mobile (Flutter) et systèmes. Étudiant ingénieur à la recherche d'une alternance Full-stack | DevOps | IoT.",
        features: [
            'Envoi de mails',
            'Animation moderne',
            'Easter egg'
        ],
        url: 'https://brelnosse.com',
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
                icon: faCss3,
                text: 'CSS3'
            },
        ] 
    },
    {
        title: 'Miam',
        color: '#f5700a',
        type: 'web',
        imgUrl: [
            require('../assets/images/miamFront.webp'), 
            require('../assets/images/miamRight.webp'), 
            require('../assets/images/miamBack.webp'), 
            require('../assets/images/miamLeft.webp'), 
        ],
        description: "Miam est une plateforme immersive dédiée à la gastronomie camerounaise. L'application permet de découvrir et de partager des recettes traditionnelles à travers une interface fluide et moderne, connectée à une API publique permettant d'exporter les données culinaires vers d'autres services",
        features: [
            'Recherche des marchés à proximité',
            'Visualisation des recettes',
            'Authentification moderne avec JWT',
            'Vérification de compte par e-mail',
            'Intégration du concept security by design',
            'Gestion de l\'API et des utilisateurs'
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
    },    
    {
        title: 'Thayipizza',
        color: '#e82a33',
        type: 'web',
        imgUrl: [
            require('../assets/images/thayipizzaFront.webp'), 
            require('../assets/images/thayipizzaRight.webp'), 
            require('../assets/images/thayipizzaBack.webp'), 
            require('../assets/images/thayipizzaLeft.webp'), 
        ],
        description: "ThayiPizza est une application web de commande en ligne conçue pour simplifier l'interaction entre une pizzeria et ses clients. Le projet met l'accent sur une expérience utilisateur (UX) fluide, permettant de parcourir le menu, de personnaliser sa commande et de faciliter la prise de contact pour la livraison" ,
        features: [
            'Authentification moderne avec JWT et firebase Auth',
            'Gestion des commandes',
            'Paiement sécurisés',
            'Gestion des utilisateurs et des pizzas'
        ],
        url: 'https://thayipizza.netlify.app',
        githubUrl: '',
        skills: [
            {
                icon: faJs,
                text: 'Javascript'
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
            {
                icon: faFire,
                text: 'Firebase'                
            },
        ] 
    },
    {
        title: 'IUCBibli',
        color: '#e82a33',
        type: 'web',
        imgUrl: [
            require('../assets/images/iucbibliFront.webp'), 
            require('../assets/images/iucbibliBack.webp'), 
            require('../assets/images/iucbibliRight.webp'), 
            require('../assets/images/iucbibliLeft.webp'), 
        ],
        description: "Iucbibli est un système de gestion de bibliothèque interactif conçu pour automatiser le suivi des ouvrages et des emprunts. Le projet se concentre sur l'intégrité des données et la simplicité d'utilisation, offrant une interface d'administration robuste pour la gestion d'un catalogue en temps réel.",
        features: [
            'Gestion sécurisée des accès utilisateurs',
            'Administration complète du catalogue (CRUD)',
            'Suivi automatisé des emprunts et retours',
            'Moteur de recherche multicritère d\'ouvrages'
        ],
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
                icon: faDatabase,
                text: 'MySQL'
            },
            {
                icon: faChartLine,
                text: 'Chart.js'                
            },
        ] 
    },
    {
        title: 'PrintSpot (UI)',
        color: '#2fcc70',
        type: 'ui-design',
        imgUrl: [
            require('../assets/images/printspotFront.webp'), 
            require('../assets/images/printspotBack.webp'), 
            require('../assets/images/printspotRight.webp'), 
            require('../assets/images/printspotLeft.webp'), 
        ],
        description: "8 écrans pour une application mobile permettant de faire des commandes d'impressions/photocopies de documents.",
        url: 'https://www.figma.com/proto/FdzJT32K4Mwxf3r4iJxVnD/PrintSpot?t=ouJJCyMjiUytkPkZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=18-60',
        features: [
            'Design minimaliste et moderne',
            'Optimisation du parcours utilisateur (UX)'
        ],
        githubUrl: '',
        skills: [
            {
                icon: faFigma,
                text: 'Figma'
            }
        ] 
    },
    {
        title: 'ThayiPizza (UI)',
        color: '#ff0051',
        type: 'ui-design',
        imgUrl: [
            require('../assets/images/thayiUiFront.webp'), 
            require('../assets/images/thayiUiBack.webp'), 
            require('../assets/images/thayiUiRight.webp'), 
            require('../assets/images/thayiUiLeft.webp'), 
        ],
        description: "10 écrans pour une application web de commande de pizzas",
        features: [
            'Optimisation du parcours de commande (UX)',
            'Mise en valeur visuelle des produits',
            'Design de l\'interface du panier', 
        ],
        url: 'https://www.figma.com/proto/FqGTHgUcCOO69SLgEVCZuy/ThayiPizza?node-id=1-222&p=f&t=o200wAMsFllFJhUn-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        githubUrl: '',
        skills: [
            {
                icon: faFigma,
                text: 'Figma'
            }
        ] 
    },
    {
        title: 'ArchiveX',
        color: '#ff0051',
        type: 'desktop',
        imgUrl: [
            require('../assets/images/archiveXFront.webp'), 
            require('../assets/images/archiveXBack.webp'), 
            require('../assets/images/archiveXRight.webp'), 
            require('../assets/images/archiveXLeft.webp'), 
        ],
        description: "Application java d'archivage de documents académiques (Rapport de stage, rapport de projet, mémoire...)",
        features: [
            'Gestion complète des archives (CRUD)',
            'Recherche et filtrage multicritères',
            'Interface graphique stylisée avec CSS et XML',
            'Connexion sécurisée à la base de données MySQL'
        ],
        url: '',
        githubUrl: 'https://github.com/brelnosse/archiveX',
        skills: [
            {
                icon: faJava,
                text: 'Java'
            },
            {
                icon: faJava,
                text: 'JavaFx'
            },
            {
                icon: faDatabase,
                text: 'MySQL'
            },
            {
                icon: faCss,
                text: 'CSS'
            },
            {
                icon: faCode,
                text: 'XML'
            }
        ] 
    }
]