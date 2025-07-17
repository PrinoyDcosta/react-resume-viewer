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
                        <p className="flex justify-center flex-wrap font-light">
                            {first(data)!.location}
                            &nbsp;
                            &#x2022;
                            &nbsp;
                            {first(data)!.email}
                            &nbsp;
                            &#x2022;
                            &nbsp;
                            {first(data)!.phoneNumber}
                            {
                                !isEmpty(first(data)!.linkedinUrl) && <>
                                    &nbsp;
                                    &#x2022;
                                    &nbsp;
                                    <a href={first(data)!.linkedinUrl} target='_blank'>{first(data)!.linkedinUrl}</a>
                                </>
                            }
                            {
                                !isEmpty(first(data)!.githubUrl) && <>
                                    &nbsp;
                                    &#x2022;
                                    &nbsp;
                                    <a href={first(data)!.githubUrl} target='_blank'>{first(data)!.githubUrl}</a>
                                </>
                            }
                        </p>
                    </div>
                : <></>
            }
        </>
    )
}

export default HeaderViewer