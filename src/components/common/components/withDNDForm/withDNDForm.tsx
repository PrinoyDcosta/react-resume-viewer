import { Button as ShadcnButton } from "../../../ui/button"
import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import { Button, Form, Input } from "antd"
import { first, pullAt } from "lodash-es"
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd"


export const withDNDForm = <P extends {}, T>(Component : React.ComponentType<P>, title: string, setViewMode: () => void, data: T[], updateData: (newData: Array<T>, title?: string) => void, isHeaderSection? : boolean) => {
    
    interface FormSubmitValues {
        groups: T[],
        title: string
    }
    const ComponentWithDNDForm= (props: P) => {
    
        const [formData, setFormData] = useState<T[]>([])
        const [form] = Form.useForm();
    
        const onCancel = () => {
            setViewMode()
        }
    
        useEffect(() => {
            setFormData([...data])
        },[data])
    
        const onSubmit = (values: FormSubmitValues) => {
            console.log(values)
            updateData(values.groups, values.title)
            setViewMode()
        };
    
        const addGroup = () => {
            setFormData(oldState => {
                return [ ...oldState, {} as T]
             })
        }
    
        const deleteGroup = (groupIndex: number) => {
            let currentFields = form.getFieldValue([`groups`])
            pullAt(currentFields, [groupIndex]);
            form.setFieldValue('groups', currentFields)
            setFormData([ ...currentFields])
        }
    
        const onDragEnd = (dropContext:  DropResult<string>) => {
            let currentFields : T[] = form.getFieldValue([`groups`])
            let itemToMove = currentFields.find((item, index) => index === dropContext.source.index)!
            let otherItems = currentFields.filter((item, index) => index !== dropContext.source.index)
            otherItems.splice(dropContext.destination!.index, 0, itemToMove)
            setFormData([ ...otherItems])
            form.setFieldValue('groups', otherItems)
        }
    
        return (
        <div className="bg-blue-50 p-5 pb-0 rounded-xl my-2 shadow-lg">
                <Form
                    className="w-full"
                    form={form}
                    name="skills-form"
                    labelCol={{ span: 8 }}
                    autoComplete="off"
                    onFinish={onSubmit}
                    rootClassName="flex flex-wrap"
                >
                    {
                        !isHeaderSection ? 
                        <div className="w-full">
                                <h2>Section Header</h2>
                                <div className="pr-38">
                                    <Form.Item 
                                        label="Title"
                                        name="title"
                                        rules={[{ required: true, message: 'Please enter the section title!' }]}
                                        initialValue={title}
                                        className=""
                                    >
                                        <Input placeholder="Enter section title"/>
                                    </Form.Item>
                                </div>
                        </div>
                        : <></>
                    }
    
                    <div className="w-full">
                        {!isHeaderSection && <h2>Section Groups</h2>}
                        <div className="w-full flex flex-wrap flex-col">
                                {
                                    isHeaderSection ?
                                        <>
                                            <div className="flex flex-wrap" >
                                                <div className='flex w-full border-2 p-5 m-2'>
                                                    <div className="w-5/6">
                                                        <Component { ...props} field={first(data)} index={0}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    :             
                                        <>
                                            <DragDropContext onDragEnd={onDragEnd} >
                                                {/* onDragEnd(params, move)} > */}
                                                <Droppable droppableId="droppable-1" type="PERSON">
                                                    {(dropppableProvided, dropppableSnapshot) => (
                                                        
                                                        <div ref={dropppableProvided.innerRef} className="flex flex-wrap" {...dropppableProvided.droppableProps}>
                                                            {
                                                                formData.map((field, index) => {
                                                                    return (
                                                                        <>
                                                                            <Draggable draggableId={`draggable-${index}`} index={index}>
                                                                                {(provided, snapshot) => (
                                                                                    <div key={index} className='flex w-full border-2 p-5 m-2' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                                        <div className="w-5/6">
                                                                                        <Component { ...props} field={field} index={index}/>
                                                                                        </div>
                                                                                        <div className="w-1/6 px-3 flex justify-end">
                                                                                            <ShadcnButton 
                                                                                                className="text-red-600 hover:text-red-600" 
                                                                                                variant="outline" 
                                                                                                size="icon" 
                                                                                                onClick={() => {
                                                                                                    deleteGroup(index)
                                                                                                    //remove(field.name)
                                                                                                }}
                                                                                                type='button'
                                                                                            >
                                                                                                <TrashIcon/>
                                                                                            </ShadcnButton>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </Draggable>
                                                                        </>
                                                                        )
                                                                })
                                                            }
                                                            {dropppableProvided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                            <div className="px-100">
                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => {
                                                        //add()
                                                        addGroup()
                                                        }} block icon={<PlusIcon />}>
                                                        Add group
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </>
                                }
                            
                            {/* }
                            </Form.List> */}
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        {/* <Form.Item className="flex flex-wrap flex-row w-full" label={null}> */}
                            <div className="flex flex-wrap justify-end gap-2">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button type="default" onClick={onCancel}>
                                    Cancel
                                </Button>
                            </div>
                        {/* </Form.Item> */}
                    </div>
                </Form>
        </div>
      )
    }
    return ComponentWithDNDForm
}
