import Form from 'antd/es/form'
import Input from 'antd/es/input'
import DatePicker from 'antd/es/date-picker'
import dayjs from "dayjs"
import { FC } from "react"
import { IWorkExperience } from "../../../common/constants/section-consts"
import InputList from "../../../common/components/InputList/InputList"

export interface IWorkExperienceFormFieldProps {
    field?: IWorkExperience,
    index?: number
}

const WorkExperienceFormFields: FC<IWorkExperienceFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
                <Form.Item 
                    label="Job title"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'jobTitle']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the job title!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.jobTitle}
                >
                    <Input placeholder="Enter job title"/>
                </Form.Item>
                <Form.Item 
                    label="Company Name"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'companyName']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the company name!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.companyName}
                >
                    <Input placeholder="Enter company name"/>
                </Form.Item>
                <Form.Item 
                    label="Company Location"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'companyLocation']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the company location!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.companyLocation}
                >
                    <Input placeholder="Enter company location"/>
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
                    <InputList />
                </Form.Item>
    </>
}

export default WorkExperienceFormFields