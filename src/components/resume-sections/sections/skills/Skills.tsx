import { FC, useState } from "react"
import SkillsViewer from "./SkillsViewer"
import SkilsFormFields, { ISkilsFormFieldProps } from "./SkillsFormFields"
import { ISkills } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"

interface SkillsProps {
    title: string
    data: Array<ISkills>
    updateData: (newData?: Array<ISkills>, title?: string) => void
    readonly?: boolean
    index: number
    moveSection: (currentPosition: number, newPosition: number) => void
}

const Skills: FC<SkillsProps> = ({
    data,
    title,
    updateData,
    readonly,
    index, 
    moveSection
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const SkillsWithToolbar = withToolbar(SkillsViewer, title, () => setIsEditMode(true), index, moveSection, readonly)

    const updateSkills = (newData: Array<ISkills>, title?: string) => {
        updateData(newData, title)
    }
    const SkillsDragAndDropForm = withDNDForm<ISkilsFormFieldProps, ISkills>(SkilsFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
            <SkillsDragAndDropForm />
            :
            <SkillsWithToolbar data={data} />
        }
    </>)
}

export default Skills