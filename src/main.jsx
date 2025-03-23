import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/poppins'; // Defaults to weight 400 (regular)
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/700.css'; // Bold
//import SignUp from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
