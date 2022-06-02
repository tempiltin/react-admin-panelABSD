import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default App