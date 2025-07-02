
import { FC, useState } from "react"
import LanguagesFormFields, { ILanguagesFormFieldProps } from "./LanguagesFormFields"
import LanguagesViewer from "./LanguagesViewer"
import { ILanguage } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface LanguagesProps {
    title: string
    data: Array<ILanguage>
    updateData: (newData?: Array<ILanguage>, title?: string) => void
    readonly?: boolean
}

const Languages: FC<LanguagesProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const LanguagesWithToolbar = withToolbar(LanguagesViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<ILanguage>, title?: string) => {
        updateData(newData, title)
    }
    
    const LanguagesDragAndDropForm = withDNDForm<ILanguagesFormFieldProps, ILanguage>(LanguagesFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <LanguagesDragAndDropForm />
            :
                <LanguagesWithToolbar data={data} />
        }
    </>)
}

export default Languages