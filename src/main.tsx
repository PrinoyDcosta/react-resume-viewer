import { SetStateAction, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from './components/wrappers/Resume'
import { ISection } from './components/common/constants/section-consts'
import { dataSource } from './lib/data'

function App() {
  const [data, setData] = useState<Array<ISection>>(dataSource)

  return (
  <StrictMode>
    <Resume data={data} setData={setData} />
  </StrictMode>
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);