import Form from 'antd/es/form'
import Input from 'antd/es/input'
import { FC } from "react"
import { IHeader } from "../../../common/constants/section-consts"

export interface IHeaderFormFieldProps {
    field?: IHeader,
    index?: number
}

const HeaderFormFields: FC<IHeaderFormFieldProps> = ({
    field,
    index
} : any) => {

    return <>
                <Form.Item 
                    label="Full Name"
                    name={['groups', index, 'fullName']}
                    rules={[{ required: true, message: 'Please enter your full name!' }]}
                    initialValue={field.fullName}
                >
                    <Input placeholder="Enter your full name"/>
                </Form.Item>
                <Form.Item 
                    label="Location"
                    name={['groups', index, 'location']}
                    rules={[{ required: true, message: 'Please enter your location!' }]}
                    initialValue={field.location}
                >
                    <Input placeholder="Enter your location"/>
                </Form.Item>
                <Form.Item 
                    label="Email"
                    name={['groups', index, 'email']}
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                    initialValue={field.email}
                >
                    <Input placeholder="Enter your contact email"/>
                </Form.Item>
                <Form.Item 
                    label="Phone Number"
                    name={['groups', index, 'phoneNumber']}
                    rules={[{ required: true, message: 'Please enter your phone number!' }]}
                    initialValue={field.phoneNumber}
                >
                    <Input placeholder="Enter your phone number"/>
                </Form.Item>
                <Form.Item 
                    label="Github Url"
                    name={['groups', index, 'githubUrl']}
                    //rules={[{ required: true, message: 'Please enter your github url!' }]}
                    initialValue={field.githubUrl}
                >
                    <Input placeholder="Enter your Github URL"/>
                </Form.Item>
                <Form.Item 
                    label="Linkedin Url"
                    name={['groups', index, 'linkedinUrl']}
                    //rules={[{ required: true, message: 'Please enter your linkedin url!' }]}
                    initialValue={field.linkedinUrl}
                >
                    <Input placeholder="Enter your Linkedin URL"/>
                </Form.Item>
    </>
}

export default HeaderFormFields