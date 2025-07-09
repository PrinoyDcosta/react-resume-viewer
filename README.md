
# React Resume Viewer/Builder

React Resume Viewer/Builder is for users that want to embed their resumes/CV's in their portfolio websites or any other pages. This is not only a viewer but can be used as a resume builder too.
This component is built on TailwindCSS and ShadCN.  

## Installation

Install with npm

```bash
  npm install react-resume-viewer
```
    
## Props Definition

| prop | Type     | Description                | optional? |
| :-------- | :------- | :------------------------- | :------- |
| `data` | `Array<ISection>` | This prop is used to pass the initial sections to the component | No |
| `setData` | `Funtion` | This prop should be the setState function of the data prop | No |
| `printableContentRef` | `React.RefObject<HTMLDivElement>` | Parent prop of the component. This can be used to use the default browser print function to convert the component to a PDF. | Yes |
| `readonly` | `boolean` | This prop if set to true will hide of edit options | Yes |


## Usage/Examples

```javascript
import { useRef, useState } from "react";
import { dataSource, Resume } from "react-resume-viewer"
import { ISection } from "node_modules/react-resume-viewer/dist/types/components/common/constants/section-consts";

const Main = () => {
    const printableContentRef = useRef<HTMLDivElement>(null);
    const [data, setData] = useState<Array<ISection>>(dataSource)

    return(<>
    <div className='flex flex-row px-24'>
            <div className="p-40 pt-10">
                <Resume data={data} setData={setData} printableContentRef={printableContentRef} />
            </div>
    </div>
    </>)
}
```


## Future Roadmap

- Replace Antd Components with ShadCN components

- Give an option to remove mobile responsive version and use a scale down version instead.

- Section to add other sections 

- Themes

- Ability to download equivalent pdf versions ( may do something on the backend to do this instead )

