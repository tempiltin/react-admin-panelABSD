import React  from 'react'
import {BrowserRouter  , Routes, Route , Switch  } from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Category from './Pages/Category'
import CategoryAdd from './Pages/CategoryAdd'
import Home from './Pages/Home'
import Tables from './Pages/Tables'
import Error404 from './Pages/Error404'
import Team from './Pages/Team'
import TeamGroup from './Pages/TeamGroup'

const App = () => {

  
  const NavClick = ()=>{
    document.getElementById("sidenav-main").style.left =  "-100%"
   let abs = document.getElementById("sidenav-main")
    if(abs.style.left === "-100%"){
      document.getElementById("sidenav-main").style.left =  "0%"
    }
    else if(abs.style.left === "0%"){
      document.getElementById("sidenav-main").style.left =  "-100%"
    }
  
  }

  const onCloseHandler = () => {
    document.getElementById("sidenav-main").style.left =  "-100%"

  }
  return (
    <>
    <Sidebar onCloseHandler={onCloseHandler} />
      <Routes>
         
         <Route path='/' exact  element={<Home NavClick={NavClick} />} />
        <Route path='/sign-in' exact element={<SignIn />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/tables' exact element={<Tables NavClick={NavClick} />} />
        <Route path='/category' exact element={<Category NavClick={NavClick} />} />
        <Route path='/category/category-add' element={<CategoryAdd NavClick={NavClick} />} />
        <Route path='/team' exact element={<Team NavClick={NavClick} />} />
        <Route path='/team/team-grooup-user-add'  element={<TeamGroup NavClick={NavClick} />} />
        <Route path='*' element={<Error404/>} />
       
      </Routes>

    </>
  )
}

export default App