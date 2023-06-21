import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App'
import './i18n'
import { PostProvider } from './context/postContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostProvider>
  </React.StrictMode>
)
