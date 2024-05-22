import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {PrimerComponente} from './primerComponente'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <PrimerComponente titulo= 'Esta sección es de props' subtitulo = { 1  } />
  </React.StrictMode>,
)
1.09