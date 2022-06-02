import React from 'react'
import { BsFillPrinterFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
const ClientFor = () => {
    return (
        <>
            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute'>
                            <BsFillPrinterFill />
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Today's Money</p>
                            <h4 className='mb-0'>$ 5 000</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">

                            Today's Money
                        </p>
                    </div>
                </div>
            </div>


            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute'>
                            <FaUser />
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Today's Users</p>
                            <h4 className='mb-0'>100</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">

                            Today's Users
                        </p>
                    </div>
                </div>
            </div>


            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute'>
                            <FaUser />
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>New Clients</p>
                            <h4 className='mb-0'>42</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">

                            New Clients
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute'>
                            <BsFillPrinterFill />
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Sales</p>
                            <h4 className='mb-0'>$103,430</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">

                            Sales
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ClientFor