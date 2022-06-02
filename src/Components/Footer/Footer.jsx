import React from 'react'

const Footer = () => {
    return (
        <footer className='footer py-4 '>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                    <div className='col-lg-6 mb-lg-0 mb-4'>
                        <div className='copyright text-center text-sm text-muted text-lg-start'>
                            © 2022 Tempiltin
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className='nav nav-footer justify-content-center justify-content-lg-end'>
                            <li className="nav-item">
                                <a href="#!" className='nav-link text-muted'>Lorem, ipsum.</a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className='nav-link text-muted'>Lorem, ipsum.</a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className='nav-link text-muted'>Lorem, ipsum.</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer