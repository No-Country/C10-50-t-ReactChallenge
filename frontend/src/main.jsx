import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
)
