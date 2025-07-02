import { isEmpty } from "lodash-es"
import { FC } from "react"
import { IWorkExperience } from "../../../common/constants/section-consts"
interface WorkExperienceViewerProps {
    data: Array<IWorkExperience>
}

const WorkExperienceViewer: FC<WorkExperienceViewerProps> = ({
    data,
}) => {

    return(
        <>
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<div>
                            <div className='flex justify-between'>
                                <h4 className="font-semibold">{item.jobTitle}</h4>
                                <h4 className="font-semibold">{item.dateFrom}&nbsp;-&nbsp;{!isEmpty(item.dateTo) ? item.dateTo : 'present'}</h4>
                            </div>
                            <div className='flex justify-between'>
                                <h4 className="font-semibold">{item.companyName}</h4>
                                <h4 className="font-semibold">{item.companyLocation}</h4>
                            </div>
                            <div className='px-10 pr-5'>
                                <ul className="list-disc">
                                    {
                                        item.description.map(line => <li>{line}</li>)
                                    }
                                </ul>
                            </div>
                        </div>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default WorkExperienceViewer