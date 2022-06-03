import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import Home from './Pages/Home'
import Tables from './Pages/Tables'

const App = () => {
  const NavClick = ()=>{
   let abs = document.getElementById("sidenav-main")
    if(abs.style.transform === "translateX(-17.125rem)"){
      document.getElementById("sidenav-main").style.transform =  "translateX(0rem)"
    }else{
      document.getElementById("sidenav-main").style.transform = "translateX(-17.125rem)"
    }
  
  }
  return (
    <>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Home NavClick={NavClick} />} />
        <Route path='/tables' element={<Tables />} />
      </Routes>

    </>
  )
}

export default App