import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import "tailwindcss";



const Navbar = () => {
  return (
    <div id='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >

            <div className="display-flex flex-direction-">
                <img className="logo w-25 m-3" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="MedReminder Logo"/> 
                <span>MedReminder</span>
            </div>

            <div id='content'>
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active fs-5 text-primary" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active fs-5 text-primary" href="#">About</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active fs-5 text-primary" aria-disabled="false" href="#">Contact</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active fs-5 text-primary" href="#">Blog</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active fs-5 text-primary" href="#">Partners</a>
                    </li>


              </ul>
            </div>

        <div>
           <form className="d-flex">
            <Link className="btn btn-outline-primary m-1" to="/signin">Login</Link>
            <Link className="btn btn-outline-primary m-1" to="/signup">Register</Link>
           </form>
        </div>

         </nav>
    </div>
  )
}

export default Navbar
