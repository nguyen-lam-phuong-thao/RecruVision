import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ElementHomePage } from './screens/ElementHomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ElementHomePage />
  </StrictMode>,
)
