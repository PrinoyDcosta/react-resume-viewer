import { Button } from "../../../ui/button"
import { ArrowDownIcon, ArrowUpIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"


export const withToolbar = <P extends {},>(Component : React.ComponentType<P>, title: string, setEditMode: () => void, index: number, totalSections: number, moveSection?: (currentPosition: number, newPosition: number) => void, readonly?: boolean, isHeader?: boolean) => {
    
    const ComponentWithToolBar = (props: P) => {

        return(<div className="group space-y-1 bg-white">
                    <div className={`border-3 p-2 ${isHeader ? "" : "px-10 "}rounded-md border-transparent ${readonly ? "" : "group-hover:border-gray-200 group-hover:duration-200 group-hover:ease-in-out"} `}>
                            {
                                !isHeader && <h1 className="font-bold section-underline">{title}</h1>
                            }
                            {
                                readonly ? <></>
                                :
                                    <div className="pr-2 flex justify-end invisible relative -top-5 -mb-10 group-hover:visible group-hover:duration-200 group-hover:ease-in-out">
                                        <div className="flex relative gap-1 top-1">
                                            <Button className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" variant="outline" size="icon" onClick={setEditMode}>
                                                <PencilSquareIcon/>
                                            </Button>
                                            {
                                                !isHeader ?
                                                <>
                                                    {
                                                        index !== 1 &&
                                                        <Button 
                                                            className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" 
                                                            variant="outline" 
                                                            size="icon" 
                                                            onClick={() => moveSection && moveSection(index, index-1)}
                                                        >
                                                            <ArrowUpIcon/>
                                                        </Button>
                                                    }
                                                    {
                                                        index !== (totalSections - 1) &&
                                                        <Button 
                                                            className=" hover:dark:text-neutral-600 dark:bg-white dark:border-neutral-400" 
                                                            variant="outline" 
                                                            size="icon" 
                                                            onClick={() => moveSection && moveSection(index, index+1)}
                                                        >
                                                            <ArrowDownIcon/>
                                                        </Button>
                                                    }
                                                    <Button 
                                                        className="text-red-600 hover:text-red-600 hover:dark:text-red-400 dark:bg-white dark:border-neutral-400" 
                                                        variant="outline" 
                                                        size="icon" 
                                                        onClick={() => moveSection && moveSection(index, -1)}
                                                    >
                                                        <TrashIcon/>
                                                    </Button>
                                                </>
                                                : <></>
                                            }
                                            
                                        </div>
                                    </div>
                            }
                            <div className="p-4 pb-0">
                                <Component {...props}/>
                            </div>
                    </div> 
                </div>)
    }
    
    return ComponentWithToolBar
}
