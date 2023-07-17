import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

  // <React.StrictMode> este es el motivo por el cual siempre se loggea doble mis console logs, modo de seguridad de desarrollo
  //   <App />
  // </React.StrictMode>,
)
