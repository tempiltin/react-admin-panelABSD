import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'

const Tasck = ({NavClick}) => {
    const [board , setBoard] = useState(
    )
  return (
    <main className='main-content position-relative  h-100 border-radius-lg ps ps--active-y '>
    <NavBar tablename="Task" NavClick={NavClick} />
    <div className='container-fluid py-4'>
        <div className="row">
            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4 card'>
              
                    <div className="card-body">
                        <div className='alert alert-info alert-dismissible text-white'>
                            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor!</span>
                        </div>
                    </div>
               
            </div>
            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4 card'>
              
                    <div className="card-body">
                        <div className='alert alert-info alert-dismissible text-white'>
                            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor!</span>
                        </div>
                    </div>
               
            </div>
            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4 card'>
              
                    <div className="card-body">
                        <div className='alert alert-info alert-dismissible text-white'>
                            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor!</span>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
</main>
  )
}

export default Tasck