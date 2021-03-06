import React from 'react'
import ReactDOM from 'react-dom/client'
import 'water.css/out/water.css'

import App from './App'

import { HashRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </React.StrictMode>,
)
