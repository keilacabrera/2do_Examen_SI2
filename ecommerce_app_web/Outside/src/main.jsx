import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { SidebarProvider } from "./context/SidebarContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Router>
      <StrictMode>
        <SidebarProvider>
          <App />
        </SidebarProvider>
     </StrictMode>
  </Router>,
)
