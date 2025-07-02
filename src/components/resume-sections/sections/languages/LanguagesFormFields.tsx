import { Form, Select } from "antd"
import { FC } from "react"
import { ILanguage } from "../../../common/constants/section-consts"

export interface ILanguagesFormFieldProps {
    field?: ILanguage,
    index?: number
}

const LanguagesFormFields: FC<ILanguagesFormFieldProps> = ({
    field,
    index
} : any) => {
    return <>
                <Form.Item 
                    label="Language"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'language']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please select a language!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.language}
                >
                    <Select
                        showSearch
                        placeholder="Select a language"
                        optionFilterProp="label"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        options={[
                        {
                            value: 'English',
                            label: 'English',
                        },
                        {
                            value: 'Konkani',
                            label: 'Konkani',
                        },
                        {
                            value: 'Hindi',
                            label: 'Hindi',
                        },
                        ]}
                    />
                </Form.Item>
                <Form.Item 
                    label="Specialisation"
                    // name={[field.name, 'title']}
                    name={['groups', index, 'proficiency']}
                    //name={`${}`}
                    rules={[{ required: true, message: 'Please select the proficiency!' }]}
                    //initialValue={fieldData ? fieldData.title : ''}
                    initialValue={field.proficiency}
                >
                    <Select
                        showSearch
                        placeholder="Select a proficiency"
                        optionFilterProp="label"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        options={[
                        {
                            value: 'Elementary proficiency',
                            label: 'Elementary proficiency',
                        },
                        {
                            value: 'Limited working proficiency',
                            label: 'Limited working proficiency',
                        },
                        {
                            value: 'Professional working proficiency',
                            label: 'Professional working proficiency',
                        },
                        {
                            value: 'Full professional proficiency',
                            label: 'Full professional proficiency',
                        },
                        {
                            value: 'Native proficiency',
                            label: 'Native proficiency',
                        },
                        ]}
                    />
                </Form.Item>
    </>
}

export default LanguagesFormFields