import { IAwards, IEducation, IHeader, ILanguage, IProject, ISkills, IWorkExperience, SectionType } from "../components/common/constants/section-consts"

    const skillsData: ISkills[] = [{
        "title": "Frontend",
        "items": ["Javascript", "Typescript"]
    },{
        "title": "Backend",
        "items": [".NET Core", "Postgres"]
    }]

    const awardsData: IAwards[] = [{
        "awardTitle": "Winner of the year",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Dec 2024"
    },{
        "awardTitle": "Winner of the year",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Dec 2024"
    }]

    const educationData: IEducation[] = [{
        "degree": "Masters of Engineering",
        "field": "Rock Technology",
        "dateFrom": "Dec 2024",
        "dateTo": "Jan 2025",
        "collegeName": "Goa College of Engineering"
    },
    {
        "degree": "Bachelors of Engineering",
        "field": "Information Technology",
        "dateFrom": "May 2009",
        "dateTo": "Dec 2024",
        "collegeName": "Padre Conces"
    }]

    const languageData: ILanguage[] = [{
        "language": "English",
        "proficiency": "Native proficiency"
    },
    {
        "language": "Hindi",
        "proficiency": "Native proficiency"
    },]

    const experienceData: IWorkExperience[] = [{
        "jobTitle": "Software Engineer",
        "companyName": "Persistent Systems",
        "companyLocation": "Goa",
        "dateFrom": "Dec 2024",
        "dateTo": "Dec 2025",
        "description": [
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%."
        ]
    }]

    const projectData: IProject[] = [{
        "projectTitle": "Developed Google nest",
        "projectUrl": "https://support.google.com/product-documentation/answer/10231940?hl=en",
        "dateFrom": "Dec 2024",
        "dateTo": "Dec 2025",
        "description": "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",

    }]

    const headerData: IHeader[] = [{
        fullName: `Prinoy D'Costa`,
        githubUrl: '',
        linkedinUrl: '',
        location: 'Goa',
        email: 'prinoy@gmaisl.com', 
        phoneNumber: '+919822222222' 
    }]

    export const dataSource = [    
    {
        "title": "Header",
        "type": SectionType.HEADER,
        "items": headerData
    },
    {
        "title": "Skills",
        "type": SectionType.SKILLS,
        "items": skillsData
    },
    {
        "title": "Work Experience",
        "type": SectionType.EXPERIENCE,
        "items": experienceData
    },
    {
        "title": "Awards",
        "type": SectionType.AWARDS,
        "items": awardsData
    },
    {
        "title": "Education",
        "type": SectionType.EDUCATION,
        "items": educationData
    },
    {
        "title": "Languages",
        "type": SectionType.LANGUAGES,
        "items": languageData
    },
    {
        "title": "Projects",
        "type": SectionType.PROJECTS,
        "items": projectData
    },]