import { useState } from 'react'
import './App.css'

import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import AuthProvider from './AuthProvider'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className='min-h-screen flex flex-col justify-between'>
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
