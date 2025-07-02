import { DatePicker, Form, Input } from "antd"
import dayjs from "dayjs"
import { FC } from "react"
import { IAwards } from "../../../common/constants/section-consts"

export interface IAwardFormFieldProps {
    field?: IAwards,
    index?: number
}

const AwardFormFields: FC<IAwardFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
                <Form.Item 
                    label="Award Title"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'awardTitle']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the award title!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.awardTitle}
                >
                    <Input placeholder="Enter award title"/>
                </Form.Item>
                
                <Form.Item 
                    label="Awarded by"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'awardeeTitle']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the awardee title!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.awardeeTitle}
                >
                    <Input placeholder="Enter awardee title"/>
                </Form.Item>
                <Form.Item 
                    label="Award on"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'dateStamp']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please enter the date!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={dayjs(field.dateStamp)}
                >
                    <DatePicker format={'MMM YYYY'} picker="month" />
                </Form.Item>
    </>
}

export default AwardFormFields