import React from 'react'
import Navbar from '../Navbar/Navbar'

const LandingPage = () => {

    return (
    <div>

      <Navbar/>
      <div>
         <div className='landing-page d-flex justify-content-center align-items-center text-white vh-100 '>
        <div id='container'>
              <img id='loGo' className='img-fluid' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
                <h2 className='welcome-text'>Welcome To</h2>
                <h1 className='Med text-center'>MedReminder</h1>
                <p>Your personal medication reminder Site.</p>
                 <a href="/signup" className='start mt-2 mb-2'>Register and get Started</a>
                 <footer>
                   <p>© 2025 MedReminder. All rights reserved.</p>
                 </footer>
             </div>
             <div>
               <p className='text-center'>Already have an account?   <a href="/signin">Sign In</a> </p>
             </div>
             <div>
               <p className='text-center'>Forgot your password?   <a href="/reset-password">Reset Password</a> </p>
             </div>
             <div>
               <p className='text-center'>Need help?   <a href="/help">Get Support</a> </p>
             </div>
      </div>
      <div>
        <p className='text-center'>Need help?   <a href="/help">Get Support</a> </p>
      </div>
    </div>
    </div>
  )
}

export default LandingPage;