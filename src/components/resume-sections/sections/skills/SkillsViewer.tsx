import { isEmpty } from "lodash-es"
import { FC } from "react"
import { ISkills } from "../../../common/constants/section-consts"
interface SkillsViewerProps {
    data: Array<ISkills>
}

const SkillsViewer: FC<SkillsViewerProps> = ({
    data,
}) => {

    return(
        <>
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<p>
                            <b>{item.title}</b>
                            &nbsp;:&nbsp;
                            {item.items.map((skill) => skill).join(", ")}
                        </p>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default SkillsViewer