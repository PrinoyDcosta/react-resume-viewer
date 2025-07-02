import { first, isEmpty } from "lodash-es"
import { FC } from "react"
import { IHeader } from "../../../common/constants/section-consts"
interface HeaderViewerProps {
    data: IHeader[]
}

const HeaderViewer: FC<HeaderViewerProps> = ({
    data,
}) => {

    return(
        <>
            {
                !isEmpty(data) ?
                    <div className='flex flex-col justify-center '>
                        <h1 className='flex justify-center text-2xl text-gray-600 font-bold'>
                            {first(data)!.fullName}
                        </h1>
                        <div className="flex justify-center gap-2 pt-1">
                            <h1>{first(data)!.location}</h1>
                            &#x2022;
                            <h1>{first(data)!.email}</h1>
                            &#x2022;
                            <h1>{first(data)!.phoneNumber}</h1>
                            {
                                !isEmpty(first(data)!.linkedinUrl) && <>
                                    &#x2022;
                                    <a href={first(data)!.linkedinUrl} target='_blank'>{first(data)!.linkedinUrl}</a>
                                </>
                            }
                            {
                                !isEmpty(first(data)!.linkedinUrl) && <>
                                    &#x2022;
                                    <a href={first(data)!.githubUrl} target='_blank'>{first(data)!.githubUrl}</a>
                                </>
                            }
                        </div>
                    </div>
                : <></>
            }
        </>
    )
}

export default HeaderViewer