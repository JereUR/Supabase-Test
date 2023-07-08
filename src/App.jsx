import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'

import Login from './pages/Login'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { client } from './services/client'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
