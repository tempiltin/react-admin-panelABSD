import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {IoMdNotifications} from 'react-icons/io'
import {AiOutlineBars} from 'react-icons/ai'
const NavBar = () => {
  return (
    <>
    <nav className='navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl'>
        <div className='container-fluid py-1 px-3'>
            <nav aria-label="breadcrumb">
                <ol className='breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5'>
                    <li className='breadcrumb-item text-sm'>
                        <Link to="/" className="opacity-5 text-dark">Pages</Link>
                        
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active'> Dashboard</li>
                </ol>
                    <h6 className='font-weight-bolder mb-0'>Dashboard</h6>
            </nav>
            <div id='navbar' className='collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4'>
                <div className='ms-md-auto pe-md-3 d-flex align-items-center'>
                    <div className='input-group input-group-outline'>
                        <input type="text" className='form-control' name='search' placeholder='Type here...'/>
                    </div>
                </div>
                <ul className='navbar-nav  justify-content-end'>
                    <li className='nav-item d-flex align-items-center'>
                        <Link to="/my-profile" className='nav-link text-body font-weight-bold px-0 '>
                              <FaUserAlt className='nav-icon'/>
                              <span className='d-sm-inline d-none'>Your Name</span>
                        </Link>
                    </li>

                    <li className='nav-item d-xl-none ps-3 d-flex align-items-center'>
                        <a href='#!' className='nav-link text-body p-0'>
                            <div className='sidenav-toggler-inner'></div>
                              <AiOutlineBars className='NavBars nav-icon'/>
                        </a>
                    </li>

                    <li className='nav-item dropdown pe-2 d-flex align-items-center'>
                        <a href="#!" className='nav-link text-body p-0'>
                            <IoMdNotifications aria-hidden="true" className='nav-icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar