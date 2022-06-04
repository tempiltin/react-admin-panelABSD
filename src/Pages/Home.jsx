import React from 'react'
import ClientFor from '../Components/ClientFor/ClientFor'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const Home = ({NavClick,onCloseHandler}) => {
    return (
        <main className='main-content position-relative  h-100 border-radius-lg ps ps--active-y '>
            <NavBar tablename="Dashboard" NavClick={NavClick} />
            <div className="container-fluid  py-4 ">
                <div className="row">
                    <ClientFor />
                </div>
                <div className="row mt-4">
                    <div className='col-lg-4 col-md-6 mt-4 mb-4'>
                        <div className="card z-index-2 ">
                            <div className="card-body">
                                <h6 className="mb-0">lorem</h6>
                                <p className="text-sm">Lorem, ipsum dolor.</p>
                                <hr className='dark horizontal'/>
                                <div className="d-flex">
                                    <p className="mb-0  text-sm"> Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className='col-lg-4 col-md-6 mt-4 mb-4'>
                        <div className="card z-index-2 ">
                            <div className="card-body">
                                <h6 className="mb-0">lorem</h6>
                                <p className="text-sm">Lorem, ipsum dolor.</p>
                                <hr className='dark horizontal'/>
                                <div className="d-flex">
                                    <p className="mb-0  text-sm"> Lorem ipsum dolor sit amet.</p>
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

export default Home