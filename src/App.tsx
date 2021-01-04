import Application from 'lodestar-app/src/Application'
import React from 'react'
import './App.scss'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Application
      appId="demo"
      extraRouteProps={{
        home: {
          path: '/',
          pageName: <HomePage />,
          authenticated: false,
        },
      }}
    />
  )
}

export default App
