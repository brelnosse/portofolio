import { SkillsCardProps } from "./skillscard.type";

export interface ProjectProps{
    title: string;
    type: string;
    imgUrl: string, 
    url ?: string, 
    githubUrl ?: string, 
    skills: SkillsCardProps[];
    disabled ?: boolean
}