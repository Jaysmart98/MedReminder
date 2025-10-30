import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  
  

  return (
    <div className='landing-page d-flex justify-content-center align-items-center bg-dark text-white vh-100 '>
      <div id='container'>
         <img id='loGo' className='img-fluid' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
         <h2 className='welcome-text'>Welcome To</h2>
         <h1 className='Med text-center'>MedReminder</h1>
         <p>Your personal medication reminder Site.</p>
          <button href="/SignUp" className='start mt-2 mb-2'>Get Started</button>
           <p className='text-center mt-4'>Already have an account?   <a href="https://pe-frontend-chi.vercel.app/signin">Sign In</a> </p>
          <footer>
            <p>© 2025 MedReminder. All rights reserved.</p>
          </footer>
      </div>
      </div>
  )
}

export default LandingPage