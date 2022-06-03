import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import Category from './Pages/Category'
import CategoryAdd from './Pages/CategoryAdd'
import Home from './Pages/Home'
import Tables from './Pages/Tables'
import Tasck from './Pages/Tasck'
import Team from './Pages/Team'
import TeamGroup from './Pages/TeamGroup'

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
        <Route path='/tables' element={<Tables NavClick={NavClick} />} />
        <Route path='/category' element={<Category NavClick={NavClick} />} />
        <Route path='/category/category-add' element={<CategoryAdd NavClick={NavClick} />} />
        <Route path='/team' element={<Team NavClick={NavClick} />} />
        <Route path='/team/team-grooup-user-add' element={<TeamGroup NavClick={NavClick} />} />
        <Route path='/tasks' element={<Tasck NavClick={NavClick} />} />
      </Routes>

    </>
  )
}

export default App