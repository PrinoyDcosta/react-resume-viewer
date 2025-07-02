// import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd"
// import { Button as ShadcnButton } from "@/components/ui/button"
// import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from "@heroicons/react/16/solid"
// import { InputProps } from "antd"

// const withDND = <P extends { value: T[], onChange: (values: T[]) => void }, T>(Component : React.ComponentType<InputProps>) => {
//     const ComponentWithDND = (props: P) => {
//         const { value, onChange } = props

//         const onChangeList = (input: T, index: number) => {
//             value.splice(index, 1, input)
//             onChange && onChange([...value])
//         }
    
//         // const onAdd = () => {
//         //     onChange && onChange([ ...value, ""])
//         // }
    
//         const onRemove = (index: number) => {
//             value.splice(index, 1)
//             onChange && onChange([...value])
//         }
            
//         const onDragEnd = (dropContext:  DropResult<string>) => {
//             let itemToMove = value.find((_, index: number) => index === dropContext.source.index)!
//             let otherItems = value.filter((_, index: number) => index !== dropContext.source.index)
//             otherItems.splice(dropContext.destination!.index, 0, itemToMove)
//             onChange && onChange([...otherItems])
//         }
    
    
//         return (
//             <>
//                 <DragDropContext onDragEnd={onDragEnd} >
//                                         {/* onDragEnd(params, move)} > */}
//                                         <Droppable droppableId="droppable-2" type="as">
//                                             {(dropppableProvided, dropppableSnapshot) => (
                                                
//                                                 <div ref={dropppableProvided.innerRef} className="flex flex-wrap" {...dropppableProvided.droppableProps}>
//                                                     {
//                                                         props.value.map((item, index) => {
//                                                             return (
//                                                                 <>
//                                                                     <Draggable draggableId={`draggable-${index}`} index={index}>
//                                                                         {(provided, snapshot) => (
//                                                                             <div key={index} className='flex w-full border-2 p-5 m-2' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                                                                 <div className="w-5/6">
//                                                                                     <Component { ...props} value={item} onChange={(value: T) => onChangeList(value, index)}/><ShadcnButton type='button' className="text-red-600 hover:text-red-600" variant="outline" size="icon" onClick={() => onRemove(index)}><TrashIcon/></ShadcnButton>
//                                                                                     <ShadcnButton type='button' variant="outline" size="icon" onClick={() => {}}><ArrowUpIcon/></ShadcnButton>
//                                                                                     <ShadcnButton type='button' variant="outline" size="icon" onClick={() => {}}><ArrowDownIcon/></ShadcnButton>
//                                                                                 </div>
//                                                                             </div>
//                                                                         )}
//                                                                     </Draggable>
//                                                                 </>
//                                                                 )
//                                                         })
//                                                     }
//                                                     {dropppableProvided.placeholder}
//                                                 </div>
//                                             )}
//                                         </Droppable>
//                                     </DragDropContext>
//             </>

//         )
//     }
//     return ComponentWithDND
// }

// export default withDND