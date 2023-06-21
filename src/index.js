import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App'
import './i18n'
import { PostProvider } from './context/postContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
)
