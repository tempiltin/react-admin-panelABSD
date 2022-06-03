import React from 'react'
import { BsFillPrinterFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const CategoryFor = () => {
    return (
        <>
            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute'>
                            <Link to="/category/category-add">
                                <BsFillPrinterFill />

                            </Link>
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Group 1</p>
                            <h4 className='mb-0'>09 : 00</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">Lorem, ipsum.</p>
                    </div>
                </div>
            </div>

            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute'>
                            <Link to="/category/category-add">
                                <BsFillPrinterFill />
                            </Link>
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Group 1</p>
                            <h4 className='mb-0'>09 : 00</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">Lorem, ipsum.</p>
                    </div>
                </div>
            </div>

            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute'>
                            <Link to="/category/category-add">
                                <BsFillPrinterFill />
                            </Link>
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Group 1</p>
                            <h4 className='mb-0'>09 : 00</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">Lorem, ipsum.</p>
                    </div>
                </div>
            </div>

            <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
                <div className="card">
                    <div className='card-header p-3 pt-2'>
                        <div className='icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute'>
                            <Link to="/category/category-add">
                                <BsFillPrinterFill />
                            </Link>
                        </div>
                        <div className='text-end pt-1'>
                            <p className='text-sm mb-0 text-capitalize'>Group 1</p>
                            <h4 className='mb-0'>09 : 00</h4>
                        </div>
                    </div>
                    <hr className='dark horizontal my-0' />
                    <div className='card-footer p-3'>
                        <p className="mb-0 text-success text-sm font-weight-bolder">Lorem, ipsum.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CategoryFor