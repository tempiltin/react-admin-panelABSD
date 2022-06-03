import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import TeamTD from './TeamTD'

const TeamFor = ({ NavClick }) => {
    return (
        <main className='main-content position-relative  h-100 border-radius-lg ps ps--active-y '>
            <NavBar tablename="Team" NavClick={NavClick} />
            <div className='container-fluid py-4'>
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className='card-header p-0 position-relative mt-n4 mx-3 z-index-2'>
                                <div className='bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3'>
                                    <h6 className='text-white text-capitalize ps-3'>Team Group</h6>

                                </div>
                            </div>
                            <div className='card-body px-0 pb-2'>
                                <div className='table-responsive p-0'>
                                    <table className='table align-items-center mb-0'>
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">position</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tell</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <TeamTD />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default TeamFor