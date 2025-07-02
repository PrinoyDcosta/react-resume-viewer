import { FC, useState } from "react"
import dayjs from "dayjs"
import WorkExperienceViewer from "./WorkExperienceViewer"
import WorkExperienceFormFields, { IWorkExperienceFormFieldProps } from "./WorkExperienceFormFields"
import { IWorkExperience } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface WorkExperienceProps {
    title: string
    data: Array<IWorkExperience>
    updateData: (newData?: Array<IWorkExperience>, title?: string) => void
    readonly?: boolean
}

const WorkExperience: FC<WorkExperienceProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const WorkExperienceWithToolbar = withToolbar(WorkExperienceViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<IWorkExperience>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const WorkExperienceDragAndDropForm = withDNDForm<IWorkExperienceFormFieldProps, IWorkExperience>(WorkExperienceFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <WorkExperienceDragAndDropForm />
            :
                <WorkExperienceWithToolbar data={data} />
        }
    </>)
}

export default WorkExperience