import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./LandingPage.css"

const LandingPage = () => {

    return (
    <div className='body shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500'>
      <Navbar/>
      
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-white opacity-10 z-0"></div>
      <div className="absolute bottom-[-10px] right-[1px] w-[300px] h-[300px] rounded-full bg-white opacity-25 z-0"></div>

      <div className='container-body text-dark mx-auto d-flex justify-content-space-between flex-row min-vh-100'>

        <div className='container1 text-white d-flex flex-column justify-content-center align-items-start p-5 max-w-lg z-10'>
                <h1 className='fs-1 fw-bold mb-2 text-light'>Designed To</h1>
                <h1 className='fs-1 fw-bold mb-2 text-light'>Help You</h1>
                <h1 className='fs-1 fw-bold mb-2 text-light'>Track Medications and Doctor Appointments</h1>
                <p className='fs-5'>Our platform provides a comprehensive solution for managing your health needs.</p>
                <p className='fs-5'>We offer personalized reminders, easy appointment scheduling, and medication tracking.</p>
        </div>

        <div className='container2 d-flex justify-content-center align-items-center p-5 max-w-lg z-10'>
            <img id='loGo' className='img-fluid' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
        </div>

      </div>
      

      <footer>

        <p className='text-center p-4'>© 2024 MedReminder. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default LandingPage;