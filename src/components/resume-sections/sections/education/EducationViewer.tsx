import { isEmpty } from "lodash-es"
import { FC } from "react"
import { IEducation } from "../../../common/constants/section-consts"
interface EducationViewerProps {
    data: Array<IEducation>
}

const EducationViewer: FC<EducationViewerProps> = ({
    data,
}) => {

    return(
        <>
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<div className="flex justify-between">
                            <div className='flex flex-col'>
                                <h4 className="font-semibold">{item.degree}&nbsp;in&nbsp;{item.field}</h4>
                                <p>{item.collegeName}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">{item.dateFrom}&nbsp;-&nbsp;{!isEmpty(item.dateTo) ? item.dateTo : 'present'}</h4>
                            </div>
                        </div>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default EducationViewer