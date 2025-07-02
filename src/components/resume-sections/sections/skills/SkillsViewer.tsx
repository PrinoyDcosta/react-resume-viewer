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
                        data.map(item => (<div className="flex">
                            <h4 className="justify-start font-semibold">{item.title}</h4>
                            &nbsp;:&nbsp;
                            <p className="justify-start">{item.items.map((skill) => skill).join(", ")}</p>
                        </div>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default SkillsViewer