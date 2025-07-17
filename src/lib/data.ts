import { IAwards, IEducation, IHeader, ILanguage, IProject, ISkills, IWorkExperience, SectionType } from "../components/common/constants/section-consts"

    const skillsData: ISkills[] = [{
        "title": "Frontend",
        "items": [
                    'JavaScript',
                    ' React',
                    ' NextJs',
                    ' TypeScript',
                    ' Redux',
                    ' Redux Saga',
                    ' Webpack',
                    ' Vite',
                    ' Vitest',
                    ' Jest',
                    ' React Testing Library',
                    ' HTML',
                    ' CSS',
                    ' Ant Design',
                    ' Bootstrap',
                    ' WebSockets'
                ]
    },{
        "title": "Backend",
        "items": [
                    '.NET Core',
                    ' Web APIs',
                    ' C#',
                    ' PostgreSQL',
                    ' MS SQL',
                    ' Entity Framework',
                    ' LINQ'
                ]
    },{
        "title": "Cloud & DevOps",
        "items": [ 'Azure DevOps CI/CD pipelines', ' GCP', ' AWS', ' TeamCity' ]
    },{
        "title": "Other Expertise",
        "items": [
                    'Version Control (GitHub)',
                    ' Micro-frontend architecture',
                    ' Cross-browser compatibility',
                    ' UI/UX Principles',
                    ' Server Side rendering (SSR)',
                    ' JSON Web Token (JWT)',
                    ' OAuth',
                    ' OpenID Connect (OIDC)'
                ]
    }]

    const awardsData: IAwards[] = [{
        "awardTitle": "Bravo Team Award - Q4",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Feb 2025"
    },{
        "awardTitle": "Bravo Team Award - Q3",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Dec 2024"
    },{
        "awardTitle": "Bravo Team Award - Q2",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Aug 2024"
    },{
        "awardTitle": "On-time performer of the year",
        "awardeeTitle": "Teknorix",
        "dateStamp": "Jan 2023"
    },{
        "awardTitle": "Leader of the year",
        "awardeeTitle": "Teknorix",
        "dateStamp": "Jan 2022"
    }]

    const educationData: IEducation[] = [
    {
        "degree": "Bachelors of Engineering",
        "field": "Information Technology",
        "dateFrom": "Aug 2016",
        "dateTo": "Jul 2019",
        "collegeName": "Padre Conceicao College of Engineering"
    }]

    const languageData: ILanguage[] = [{
        "language": "English",
        "proficiency": "Native proficiency"
    },
    {
        "language": "Konkani",
        "proficiency": "Native proficiency"
    },]

    const experienceData: IWorkExperience[] = [{
        "jobTitle": "Lead Frontend Engineer",
        "companyName": " Persistent Systems ( US-Based Client - GoTo Technologies )",
        "companyLocation": "Goa",
        "dateFrom": "Mar 2024",
        "dateTo": "Jun 2025",
        "description": [
            "Led front-end development using React, Next.js, TypeScript, and Redux, improving user experience by 40% and application performance.",
            "Built a dynamic unified checkout system (micro front-end), cutting launch times by 30% and reducing redundancy by 90%.",
            "Developed a CMS-driven dynamic form widget, slashing form creation time by 30% for seamless integration.",
            "Optimized web performance, boosting load speeds by 110% through scalable architecture.",
            "Collaborated with UX designers to transform Figma prototypes into accessible, functional React apps.",
        ]
    },
    {
        "jobTitle": "Senior Frontend Engineer",
        "companyName": "Teknorix Systems Pvt. Ltd ( Belgium-Based Client )",
        "companyLocation": "Goa",
        "dateFrom": "Oct 2020",
        "dateTo": "Mar 2024",
        "description": [
            "Built a dynamic content creation tool for news portals, boosting content delivery speed and engagement by 40%.",
            "Developed a centralized app & website catalog (internal app store), improving usability and productivity by 20%.",
            "Engineered a ticket management system, cutting response times by 60% and optimizing task tracking.",
            "Designed a dynamic form builder widget, enhancing functionality and streamlining data collection by 50%.",
            "Created a custom CKEditor ReactJS npm package and React-PDF viewer, improving content editing and user experience.",
        ]
    },
    {
        "jobTitle": "Web Developer",
        "companyName": "Freelance",
        "companyLocation": "Goa",
        "dateFrom": "Aug 2019",
        "dateTo": "May 2020",
        "description": [
            "Developed a Node.js WhatsApp chatbot for booking private chartered flights (UK-Goa), providing real-time COVID-19 updates, flight availability, and automated booking confirmations.",
            "Automated flight-related responses (pricing, availability, bookings), reducing operational overhead.",
            "Built and deployed a responsive landing page for a medical association using AWS EC2 & Route 53, attracting 6,200+ visitors with a doctor locator tool. ",
            "Created an admin dashboard for dynamic content management, enabling photo albums, event updates, and media uploads.",
        ]
    }]

    const projectData: IProject[] = [{
        "projectTitle": "Aternos Auto Confirm Chrome Extension",
        "projectUrl": "https://github.com/PrinoyDcosta/aternos-auto-confirm-extension",
        "dateFrom": "May 2025",
        "dateTo": "Jun 2025",
        "description": [
            "Developed a Chrome extension to auto-confirm Aternos Minecraft server queues, eliminating manual intervention and ensuring 100% automated server activation.",
            "Gained 300+ active users, solving the repetitive confirmation problem and reducing wait times for seamless gameplay."
        ],
    },
    {
        "projectTitle": "React Resume Builder/Viewer",
        "projectUrl": "https://github.com/PrinoyDcosta/react-resume-viewer",
        "dateFrom": "Mar 2025",
        "dateTo": "Mar 2025",
        "description": [
            "Developed a React resume builder with TypeScript, TailwindCSS & ShadCN, featuring dynamic forms, real-time previews, and PDF export for seamless resume creation.",
            "Published as an npm package and hosted demo page using Vercel, gaining 870+ downloads, showcasing rapid developer adoption."
        ],
    }]

    const headerData: IHeader[] = [{
        fullName: `Prinoy D'Costa`,
        githubUrl: 'https://github.com/PrinoyDcosta',
        linkedinUrl: 'https://www.linkedin.com/in/prinoy-d-costa-66500a6b/',
        location: 'Dubai',
        email: 'prinoydcosta12@gmail.com', 
        phoneNumber: '+971527284691' 
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