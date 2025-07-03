import { Input } from "antd"
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Button as ShadcnButton } from "../../../ui/button"

export interface InputListProps {
    value?: string[]
    onChange?: (list: string[]) => void
}

const InputList = ({
    value = [],
    onChange
} : InputListProps) => {

    const onChangeList = (input: string, index: number) => {
        value.splice(index, 1, input)
        onChange && onChange([...value])
    }

    const onAdd = () => {
        onChange && onChange([ ...value, ""])
    }

    const onRemove = (index: number) => {
        value.splice(index, 1)
        onChange && onChange([...value])
    }

    const onPositionChange = (source: number, destination: number) => {
        if(destination < 0 || destination === value.length)
            return
        let temp = value[source]
        value[source] = value[destination]
        value[destination] = temp
        onChange && onChange([...value])
    }

    return(<div className="">
        <div className="flex flex-col">
            {
                value.map((item, index) => 
                    <div className="flex gap-2 py-1">
                        <div className="w-2/3">
                            <Input.TextArea 
                                className="w-full"
                                value={item}
                                onChange={(input) => onChangeList(input.target.value, index)}
                                autoSize
                            />
                        </div>
                        <div className="flex gap-2 w-1/3">
                            <ShadcnButton type='button' className="text-red-600 hover:text-red-600 hover:dark:text-red-400 dark:bg-white dark:border-neutral-400" variant="outline" size="icon" onClick={() => onRemove(index)}><TrashIcon/></ShadcnButton>
                            {index !== 0 && <ShadcnButton className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" type='button' variant="outline" size="icon" onClick={() => onPositionChange(index, index - 1)}><ArrowUpIcon/></ShadcnButton> }
                            {index < value.length - 1 && <ShadcnButton className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" type='button' variant="outline" size="icon" onClick={() => onPositionChange(index, index + 1)}><ArrowDownIcon/></ShadcnButton>}
                        </div>
                    </div>)
            }
        </div>
        <div className="flex justify-center pt-2">
            <ShadcnButton className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" type='button' variant="outline" onClick={onAdd}><PlusIcon/>Add line</ShadcnButton>
        </div>
    </div>)
}

export default InputList