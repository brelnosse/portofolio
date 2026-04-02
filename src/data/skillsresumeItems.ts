import { SkillsResumeCardprops } from "../types/skillsresumecard.type";

export const skillsResumeItems: SkillsResumeCardprops[] = [
  {
    image: require('../assets/images/star.png'),
    title: 'Développement Fullstack',
    description: 'Conception d’interfaces avec React et mise en place de logiques back-end via Node.js ou PHP.',
  },
  {
    image: require('../assets/images/code.png'),
    title: 'Mobile & Desktop',
    description: 'Création d’applications multi-plateformes avec Flutter et développement d’outils Java (JavaFX, Swing).',
  },
  {
    image: require('../assets/images/square.png'),
    title: 'Systèmes & Données',
    description: 'Gestion de bases de données PostgreSQL et initiation aux langages de bas niveau (C, Assembleur).',
  },
  {
    image: require('../assets/images/write.png'),
    title: 'Analyse de Besoins',
    description: 'Traduction technique des besoins utilisateurs via la modélisation UML pour structurer les projets.',
  }
]
