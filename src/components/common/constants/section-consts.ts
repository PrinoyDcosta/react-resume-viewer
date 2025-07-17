export enum SectionType {
    SKILLS,
    EXPERIENCE,
    EDUCATION,
    AWARDS,
    HEADER,
    LANGUAGES,
    PROJECTS
}

export type SectionTypes = ISkills | IAwards | IEducation | ILanguage | IWorkExperience | IProject | IHeader

export interface ISection {
    title: string
    type: SectionType
    items: Array<SectionTypes>
}

export interface ISkills {
    title: string
    items: Array<string>
}

export interface IAwards {
    awardTitle: string
    awardeeTitle: string
    dateStamp: string
}

export interface IEducation {
    degree: string
    field: string
    dateFrom: string
    dateTo: string
    collegeName: string
}

export interface ILanguage {
    language: string
    proficiency: string
}

export interface IWorkExperience {
    jobTitle: string
    companyName: string
    companyLocation: string
    dateFrom: string
    dateTo: string
    description: string[] // need to use tailwind richtexteditor
}

export interface IProject {
    projectTitle: string
    projectUrl: string
    dateFrom: string
    dateTo: string
    description: string[] // need to use tailwind richtexteditor
}


export interface IHeader {
    fullName: string
    githubUrl: string
    linkedinUrl: string
    location: string
    email: string 
    phoneNumber: string 
}