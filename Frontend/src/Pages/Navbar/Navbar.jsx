import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div id='container'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >

            <div class="display-flex flex-direction-">
                <img className="logo w-25 m-3" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="MedReminder Logo"/> 
                <span>MedReminder</span>
            </div>

            <div id='content'>
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active fs-5 text-primary" aria-current="page" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active fs-5 text-primary" href="#">About</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active fs-5 text-primary" aria-disabled="false" href="#">Contact</a>
                    </li>
              </ul>
            </div>

        <div>
           <form class="d-flex">
            <Link class="btn btn-outline-primary m-1" to="/signin">Login</Link>
            <Link class="btn btn-outline-primary m-1" to="/signup">Register</Link>
           </form>
        </div>

         </nav>
    </div>
  )
}

export default Navbar
