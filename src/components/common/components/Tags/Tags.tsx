import Tag from 'antd/es/tag'
import Input from 'antd/es/input'
import { isArray, isEmpty } from "lodash-es"
import { useEffect, useState } from "react"

interface TagsProps {
    value?: string[]
    onChange?: (tags: string[]) => void
    lineId?: number
}
const Tags = ({
    value = [],
    lineId,
    onChange
} : TagsProps) => {

    const [showInput, setShowInput] = useState(false)
    const [input, setInput] = useState<string>("")

    const removeTag = (tag: string) => {
        let newValues = [ ...value]
        onChange && onChange(newValues.filter(item => item !== tag))
    }

    const onAddTag = (tag: string) => {
        if(isEmpty(tag) || value.includes(tag))
        {
            setInput("")
            setShowInput(false)
            return
        }
        let newValues = [ ...value, tag]
        onChange && onChange(newValues)
        setInput("")
        setShowInput(false)
    }

    return(<div className="flex flex-wrap w-full">{
        isArray(value) ? value.map(item => <>
            <Tag closeIcon onClose={(e) => {
                e.preventDefault()
                removeTag(item)}
            }>
            {item}
            </Tag>
        </>) : <></>
    }
    {
        showInput ?  
            <Input 
                placeholder="Add Skill" 
                onBlur={(e) => onAddTag(e.target.value)} 
                onPressEnter={(e) => onAddTag((e.target as HTMLInputElement).value)}
                className="w-48!"
                value={input}
                onChange={(value) => setInput(value.target.value)}
            /> 
            : 
            <Tag 
                className="border-2 border-dashed" 
                onClick={() => setShowInput(true)}
            >
                Add skill
            </Tag>
    }
    </div>)
}

export default Tags