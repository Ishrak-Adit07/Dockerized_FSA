import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'
import UserProvider from './contexts/UserContext.js'
import PostProvider from './contexts/PostContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PostProvider>
      
      <UserProvider>
        <App />
      </UserProvider>

    </PostProvider>

  </React.StrictMode>,
)