import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import './SignUp.css'
import Input from "../../PrimaryComponents/Input/Input.jsx"
import Button from "../../PrimaryComponents/Button/Button.jsx"
import { useNavigate, Router } from 'react-router-dom';
import { Link } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
   const [loading, setloading] = useState(false)
    
   const [userdetail, setUserdetail] = useState({
            email: "",
            password: ""
        })

        const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        const name = e.target.name;
        const value = e.target.value
        setUserdetail({...userdetail,[name]:value})
    }


      const Register = () => {
      setloading(true)
      console.log(userdetail)
          axios.post("https://pe-backend-liard.vercel.app/signup", userdetail)
        .then((res)=>{
            console.log(res);
             toast.success(res.data?.message),
              navigate("/signin");
        }) .catch ((err) => {
            console.log(err);
            let errormessage = err.response.data?.message
            toast.error(errormessage)
        }) .finally(()=>{
          setloading(false)
        })
    }

  return (
    <div id='SignUpPage'>
      
       <div className='landing-page d-flex justify-content-center align-items-center text-white vh-100 '>
      <div id='container'>
         <img id='loGo' className='img-fluid' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
         <h2 className='welcome-text'>Welcome To</h2>
         <h1 className='Med text-center'>MedReminder</h1>
         <p>Your personal medication reminder Site.</p>
          <button href="/SignUp" className='start mt-2 mb-2'>Register and get Started</button>
          <footer>
            <p>© 2025 MedReminder. All rights reserved.</p>
          </footer>
      </div>
      </div>

      <div id='body' className='container-fluid text-light w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='body2 w-5 mx-auto py-3 px-5'>
        <h1 className='text-center mt-3'>Create an Account</h1>
        <p className='text-center mt-1'>Start your health track journey with us today!</p>
        <p className='text-center'>Already have an account?   <a href="https://pe-frontend-chi.vercel.app/signin">Sign In</a> </p>
        <Input name={"username"} placeholder={"Enter Username"} type={"text"} style={"form-control mt-3"} onChange={handleInputChange} label={"Username"}/>
        <Input name={"email"} placeholder={"Enter Email Address"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange} label={"Email"}/>
        <Input name={"password"} placeholder={"Enter Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={'Password'}/>
        <Input name={"password"} placeholder={"Confirm Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={'Confirm Password'}/> 
        <br />
        <Button loading={loading} text={"Create Account"} style={"btn btn-light bg-secondary mt-2 mb-2"} onClick={Register}/>
        <p>By creating account, you agree to our -<Link href=""> - Terms of Service</Link> </p>
        <hr />
        <p id='createText'>Or create an account using</p>
        {/* <GoogleSignInButton id='GoogleBtn' className='btn btn-white mt-4 mb-2 border-dark'/> */}
        <Button src={"https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760658494/google_dmivpl.png"} id="GoogleSignInButton" text={" Continue with Google"} style={"btn btn-light bg-secondary mt-2 mb-2"}/>
      </div>
    </div>
    </div>
  )
}

export default SignUp
