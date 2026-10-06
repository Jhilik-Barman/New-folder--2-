import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Login from './Login.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <Login/>

    
    <Footer/>
  </StrictMode>,
)

    

