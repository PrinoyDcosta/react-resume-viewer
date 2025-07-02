
import { FC, useState } from "react"
import HeaderViewer from "./HeaderViewer"
import HeaderFormFields, { IHeaderFormFieldProps } from "./HeaderFormFields"
import { IHeader } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface HeaderProps {
    title: string
    data: IHeader[]
    updateData: (newData?: IHeader[], title?: string) => void
    readonly?: boolean
}

const Header: FC<HeaderProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const HeaderWithToolbar = withToolbar(HeaderViewer, title, () => setIsEditMode(true), readonly, true)

    const updateSkills = (newData: IHeader[], title?: string) => {
        updateData(newData, title)
    }
    
    const HeaderDragAndDropForm = withDNDForm<IHeaderFormFieldProps, IHeader>(HeaderFormFields, title, () => setIsEditMode(false), data, updateSkills, true)

    return (<>
        {
            isEditMode ? 
                <HeaderDragAndDropForm />
            :
                <HeaderWithToolbar data={data} />
        }
    </>)
}

export default Header