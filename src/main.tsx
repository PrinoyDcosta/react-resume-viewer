import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from './components/wrappers/Resume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
