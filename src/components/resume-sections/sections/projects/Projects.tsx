
import { FC, useState } from "react"
import dayjs from "dayjs"
import ProjectFormFields,{ IProjectFormFieldProps } from "./ProjectsFormFields"
import ProjectsViewer from "./ProjectsViewer"
import { IProject } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface ProjectProps {
    title: string
    data: Array<IProject>
    updateData: (newData?: Array<IProject>, title?: string) => void
    readonly?: boolean
    index: number
    moveSection: (currentPosition: number, newPosition: number) => void
    totalSections: number
}

const Project: FC<ProjectProps> = ({
    data,
    title,
    updateData,
    readonly,
    index, 
    moveSection,
    totalSections
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const ProjectWithToolbar = withToolbar(ProjectsViewer, title, () => setIsEditMode(true), index, totalSections, moveSection, readonly)

    const updateSkills = (newData: Array<IProject>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const ProjectDragAndDropForm = withDNDForm<IProjectFormFieldProps, IProject>(ProjectFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <ProjectDragAndDropForm />
            :
                <ProjectWithToolbar data={data} />
        }
    </>)
}

export default Project