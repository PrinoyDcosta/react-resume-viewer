import { FC, useState } from "react"
import dayjs from "dayjs"
import EducationViewer from "./EducationViewer"
import EducationFormFields, { IEducationFormFieldProps } from "./EducationFormFields"
import { IEducation } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface EducationProps {
    title: string
    data: Array<IEducation>
    updateData: (newData?: Array<IEducation>, title?: string) => void
    readonly?: boolean
}

const Education: FC<EducationProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const EducationWithToolbar = withToolbar(EducationViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<IEducation>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const EducationDragAndDropForm = withDNDForm<IEducationFormFieldProps, IEducation>(EducationFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <EducationDragAndDropForm />
            :
                <EducationWithToolbar data={data} />
        }
    </>)
}

export default Education