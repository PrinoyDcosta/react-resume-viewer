
import { Form, Input } from "antd"
import { FC } from "react"
import { ISkills } from "../../../common/constants/section-consts"
import Tags from "../../../common/components/Tags/Tags"

export interface ISkilsFormFieldProps {
    field?: ISkills,
    index?: number
}

const SkilsFormFields: FC<ISkilsFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
            <Form.Item 
                label="Skill Group Title"
                // name={[field.name, 'title']}
                name={['groups', index, 'title']}
                //name={`${}`}
                rules={[{ required: true, message: 'Please enter the skill group title!' }]}
                //initialValue={fieldData ? fieldData.title : ''}
                initialValue={field.title}
            >
                <Input placeholder="Enter group title"/>
            </Form.Item>
            <Form.Item 
                label="Skills"
                name={['groups', index, 'items']}
                rules={[{ required: true, message: 'Please enter atleast one skill!' }]}
                // initialValue={fieldData ? fieldData.items : []}
                initialValue={field.items}
            >
                <Tags />
            </Form.Item>
    </>
}

export default SkilsFormFields