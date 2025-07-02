import { isEmpty } from "lodash-es"
import { FC } from "react"
import { ILanguage } from "../../../common/constants/section-consts"

interface LanguagesViewerProps {
    data: Array<ILanguage>
}

const LanguagesViewer: FC<LanguagesViewerProps> = ({
    data,
}) => {

    return(
        <div className="flex flex-col justify-start">
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<div className="flex justify-start">
                            <h4 className="font-semibold">{item.language}</h4><p>&nbsp;({item.proficiency})</p> 
                        </div>))
                    }
                </>
                :<></>
            }
        </div>
    )
}

export default LanguagesViewer