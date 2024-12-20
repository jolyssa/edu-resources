import { StrictMode } from 'react' //React
import { createRoot } from 'react-dom/client' //React DOM
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
