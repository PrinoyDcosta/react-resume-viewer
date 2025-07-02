import { useState } from "react"
import Skills from "../resume-sections/sections/skills/Skills"
import { IAwards, IEducation, IHeader, ILanguage, IProject, ISection, ISkills, IWorkExperience, SectionType, SectionTypes } from "../common/constants/section-consts"
import { isUndefined } from "lodash-es"
import Awards from "../resume-sections/sections/awards/Awards"
import Education from "../resume-sections/sections/education/Education"
import Languages from "../resume-sections/sections/languages/Languages"
import WorkExperience from "../resume-sections/sections/experience/WorkExperience"
import Project from "../resume-sections/sections/projects/Projects"
import Header from "../resume-sections/sections/header/Header"
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd"
import { dataSource } from "../../lib/data"
import '@ant-design/v5-patch-for-react-19';

interface ResumeWrapperProps {
    printableContentRef: React.RefObject<HTMLDivElement | null>,
    readonly?: boolean
}

const Resume = ({ printableContentRef, readonly = false } : ResumeWrapperProps) => { 
    
    const [data, setData] = useState<Array<ISection>>(dataSource)

    const updateData = (type: SectionType, newData?: Array<SectionTypes>, title?: string) => {
        let sectionToUpdate = data.find(item => item.type === type)
        if(isUndefined(sectionToUpdate))
            return
          
        setData((oldState) => {
            return oldState.map(item => {
                if(item.type === type)
                {  
                    if(!isUndefined(title))
                        item.title = title
                    if(!isUndefined(newData))
                        item.items = newData
                }
                return item
            })
        })
    }

    const getSection = (item: ISection) => {
            if(item.type === SectionType.SKILLS)
                return <Skills 
                            data={item.items as ISkills[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.EXPERIENCE)
                return <WorkExperience 
                            data={item.items as IWorkExperience[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.AWARDS)
                return <Awards 
                            data={item.items as IAwards[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.EDUCATION)
                return <Education 
                            data={item.items as IEducation[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.LANGUAGES)
                return <Languages 
                            data={item.items as ILanguage[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.PROJECTS)
                return <Project 
                            data={item.items as IProject[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            if(item.type === SectionType.HEADER)
                return <Header 
                            data={item.items as IHeader[]} 
                            title={item.title} 
                            updateData={(newData?: SectionTypes[], title?: string) => updateData(item.type, newData, title)}
                            readonly={readonly}
                        />
            return <></>
    }
    
    const onDragEnd = (dropContext:  DropResult<string>) => {
        if(dropContext.destination?.index! !== 0)
        {
            let itemToMove = data.find((item, index) => index === dropContext.source.index)!
            let otherItems = data.filter((item, index) => index !== dropContext.source.index)
            otherItems.splice(dropContext.destination!.index, 0, itemToMove)
            setData([ ...otherItems])
        }
    }

    return <div className="shadow-xl pb-15 bg-white">
        <div ref={printableContentRef}>
            {
                readonly ?
                    data.map((item) => {
                            return getSection(item)
                    })
                :
                    <DragDropContext onDragEnd={onDragEnd} >
                        <Droppable droppableId="droppable-main-1" type="main">
                            {(dropppableProvided, dropppableSnapshot) => (
                                
                                <div ref={dropppableProvided.innerRef} {...dropppableProvided.droppableProps}>
                                    <>
                                        {
                                            data.map((item,index) => {
                                                return  <Draggable draggableId={`draggable-main-${index}`} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div key={index}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            {getSection(item)}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            })
                                        }
                                    </>
                        
                                    {dropppableProvided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
            }

        </div>
    </div>
}

export default Resume
 