import { LinkIcon } from "@heroicons/react/16/solid"
import { isEmpty } from "lodash-es"
import { FC } from "react"
import { IProject } from "../../../common/constants/section-consts"
import { Button } from "../../../ui/button"

interface ProjectsViewerProps {
    data: Array<IProject>
}

const ProjectsViewer: FC<ProjectsViewerProps> = ({
    data,
}) => {

    return(
        <>
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center">
                                    <h4 className="font-semibold">{item.projectTitle}</h4>
                                    <Button variant="link" size="sm" style={{ cursor: 'pointer'}} onClick={() => window.open(item.projectUrl,'_blank')}>
                                        <LinkIcon className='text-gray-500'/>
                                    </Button>
                                </div>
                                <h4 className="font-semibold">{item.dateFrom}&nbsp;-&nbsp;{!isEmpty(item.dateTo) ? item.dateTo : 'present'}</h4>
                            </div>
                            {/* <div className='flex px-5'>
                                <p>{item.description}</p>
                            </div> */}
                            <div className='px-10 pr-5'>
                                <ul className="list-disc">
                                    {
                                        item.description.map(line => <li>{line}</li>)
                                    }
                                </ul>
                            </div>
                        </>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default ProjectsViewer