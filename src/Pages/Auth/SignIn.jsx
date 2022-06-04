import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <main className='main-login'>
      <div className="container">
         <div className="row justify-content-center">
           <div className="col-lg-6 col-md-6">
             <form action="" className="card row">
               <div className="col-12 card-body">
                 <label htmlFor="email">Your Email</label>
                 <input type="email" name='email' className='form-control' id='email' placeholder='Your Email'/>
               </div>
               <div className="col-12 card-body">
                 <label htmlFor="password">Your Password</label>
                 <input type="password" name='password' className='form-control' id='password' placeholder='Your Password'/>
               </div>
               <div className="col-12 card-body">
                <button className='category-btn' type='button'>Sign-In</button>
                
             <Link to="/sign-up"> Sign-Up</Link>
               </div>
              
             </form>
            
           </div>
         </div>
      </div>
    </main>
  )
}

export default SignIn