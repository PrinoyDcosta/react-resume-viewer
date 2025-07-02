import { DatePicker, Form, Input } from "antd"
import dayjs from "dayjs"
import { FC } from "react"
import { IProject } from "../../../common/constants/section-consts"

export interface IProjectFormFieldProps {
    field?: IProject,
    index?: number
}

const ProjectFormFields: FC<IProjectFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
                <Form.Item 
                    label="Project title"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'projectTitle']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the project title!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.projectTitle}
                >
                    <Input placeholder="Enter project title"/>
                </Form.Item>
                <Form.Item 
                    label="Project Url"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'projectUrl']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the project url!' },
                        // { 
                        //     pattern: new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'), 
                        //     message: 'Please enter a valid URL'
                        // }
                    ]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.projectUrl}
                >
                    <Input placeholder="Enter project url"/>
                </Form.Item>

                
                <Form.Item 
                    label="Start Date"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'dateFrom']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the start date!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={dayjs(field.dateFrom)}
                >
                    <DatePicker format={'MMM YYYY'} picker="month" />
                </Form.Item>

                <Form.Item 
                    label="End Date"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'dateTo']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the end date!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={dayjs(field.dateTo)}
                >
                    <DatePicker format={'MMM YYYY'} picker="month" />
                </Form.Item>
                <Form.Item 
                    label="Description"
                    name={['groups', index, 'description']}
                    rules={[{ required: true, message: 'Please enter the description!' }]}
                    initialValue={field.description}
                >
                    <Input placeholder="Enter project description"/>
                </Form.Item>
    </>
}

export default ProjectFormFields