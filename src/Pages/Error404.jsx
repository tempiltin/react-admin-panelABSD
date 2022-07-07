import React from 'react'
import { Link } from 'react-router-dom';

 const sim = '<'
const Error404 = () => {
    return (
        <main className='e_R_R_o_r' >
            <div className="container">
                <div className="card align-center">
                    <h2>
                        <span>N</span>
                        <span>o</span>
                        <span>t</span>   <span>f</span>
                                         <span>o</span>
                                         <span>u</span>
                                         <span>n</span>
                                         <span>d</span>
                    </h2>
                    <h1>4 <span>0</span> 4</h1>
                    <Link className='navA' to="/">Go back <span>{sim}</span></Link>
                </div>
            </div>
        </main>
    )
}

export default Error404