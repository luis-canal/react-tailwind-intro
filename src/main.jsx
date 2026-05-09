import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import App from './App.jsx'
import Hello from './Hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello />
    <Hello name="Luis"/>
    <Hello name="Pedro"/>
  </StrictMode>,
)
