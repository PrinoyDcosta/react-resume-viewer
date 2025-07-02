import { FC, useState } from "react"
import AwardsViewer from "./AwardsViewer"
import { IAwardFormFieldProps } from "./AwardFormFields"
import dayjs from "dayjs"
import AwardFormFields from "./AwardFormFields"
import { IAwards } from "../../../common/constants/section-consts"
import { withToolbar } from "../../../common/components/WithToolbar/withToolbar"
import { withDNDForm } from "../../../common/components/withDNDForm/withDNDForm"


interface AwardsProps {
    title: string
    data: Array<IAwards>
    updateData: (newData?: Array<IAwards>, title?: string) => void
    readonly?: boolean
}

const Awards: FC<AwardsProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const ComponentToRender = withToolbar(AwardsViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<IAwards>, title?: string) => {
        let result = newData.map(item => {
            item.dateStamp = dayjs(item.dateStamp).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const AwardsDragAndDropForm = withDNDForm<IAwardFormFieldProps, IAwards>(AwardFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <AwardsDragAndDropForm />
            :
                <ComponentToRender data={data} />
        }
    </>)
}

export default Awards