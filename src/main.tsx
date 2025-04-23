import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import LayoutConfigProvider from './provider/theme-config-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <LayoutConfigProvider>
    {/* <React.StrictMode> */}  
    <StrictMode>
      <App />
    </StrictMode>
    </LayoutConfigProvider>
  </BrowserRouter>
  
)
