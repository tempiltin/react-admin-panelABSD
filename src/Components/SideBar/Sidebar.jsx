import React from 'react'
import { FaReact,FaTasks } from 'react-icons/fa'
import { MdTableView } from 'react-icons/md'
import { BiCategoryAlt,BiLogOut } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <>
            <aside className='sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps' id='sidenav-main'>
                <div className="sidenav-header ">
                    <Link to='/' className='navbar-brand m-0'>
                        <FaReact className=' cursor-pointer Color navbar-brand-img h-100' />
                        <span className='ms-1 font-weight-bold text-white'>Admin panel</span>
                    </Link>
                </div>
                <hr className='horizontal light mt-0 mb-2' />
                <div className='collapse navbar-collapse w-auto max-height-vh-100 ps ps--active-y'>
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to="/tables" className='nav-link text-white '>
                                <div className='text-white text-center me-2 d-flex align-items-center justify-content-center'>
                                  <MdTableView className='aside-icons'/>
                                </div>
                                <span className='nav-link-text ms-1'>Tables</span>
                                
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/category" className='nav-link text-white '>
                                <div className='text-white text-center me-2 d-flex align-items-center justify-content-center'>
                                  <BiCategoryAlt className='aside-icons'/>
                                </div>
                                <span className='nav-link-text ms-1'>Categoryes</span>
                            </Link>
                        </li>
  
                        <li className="nav-item">
                            <Link to="/team" className='nav-link text-white '>
                                <div className='text-white text-center me-2 d-flex align-items-center justify-content-center'>
                                  <FiUsers className='aside-icons'/>
                                </div>
                                <span className='nav-link-text ms-1'>Team</span>
                            </Link>
                        </li>
  
                        <li className="nav-item">
                            <Link to="/tasks" className='nav-link text-white '>
                                <div className='text-white text-center me-2 d-flex align-items-center justify-content-center'>
                                  <FaTasks className='aside-icons'/>
                                </div>
                                <span className='nav-link-text ms-1'>Tasks</span>
                            </Link>
                        </li>
  
                        <li className="nav-item">
                            <Link to="/log-out" className='nav-link text-white '>
                                <div className='text-white text-center me-2 d-flex align-items-center justify-content-center'>
                                  <BiLogOut className='aside-icons'/>
                                </div>
                                <span className='nav-link-text ms-1'>Log-out</span>
                            </Link>
                        </li>
  
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar