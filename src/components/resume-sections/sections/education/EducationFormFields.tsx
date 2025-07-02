import { DatePicker, Form, Input } from "antd"
import dayjs from "dayjs"
import { FC } from "react"
import { IEducation } from "../../../common/constants/section-consts"

export interface IEducationFormFieldProps {
    field?: IEducation,
    index?: number
}

const EducationFormFields: FC<IEducationFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
                <Form.Item 
                    label="Degree"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'degree']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the degree title!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.degree}
                >
                    <Input placeholder="Enter degree"/>
                </Form.Item>
                <Form.Item 
                    label="Specialisation"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'field']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the specialisation!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.field}
                >
                    <Input placeholder="Enter specialisation"/>
                </Form.Item>
                <Form.Item 
                    label="Institute Name"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'collegeName']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the institute name!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.collegeName}
                >
                    <Input placeholder="Enter institute name"/>
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
    </>
}

export default EducationFormFields