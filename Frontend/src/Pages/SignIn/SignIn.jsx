import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Input from "../../PrimaryComponents/Input/Input.jsx"
import Button from "../../PrimaryComponents/Button/Button.jsx"




const SignIn = () => {

  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const [userdetail, setUserdetail] = useState({ email: "", password: "" })


  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.name);
    const name = e.target.name;
    const value = e.target.value
    setUserdetail({ ...userdetail, [name]: value })
  }


  const Login = () => {
    setloading(true)
    axios.post("https://pe-backend-liard.vercel.app/login", userdetail)
      .then((res) => {
        console.log(res);
        toast.success(res.data?.message);
        localStorage.setItem("auth_token", res.data.token)
        navigate("/dashboard");
      }).catch((err) => {
        console.log(err);
        let errormessage = err.response.data?.message
        toast.error(errormessage)
      }).finally(() => {
        setloading(false)
      })
  };



  return (
    <div id='body'>
      <div className='w-5 mx-auto py-3 px-3'>
        <h1 className='text-center mt-3'>Login</h1>
        <p className='text-center mt-3'>Don't have an account? <a href="https://pe-frontend-chi.vercel.app/signup">Sign Up</a> </p>
        <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange} />
        <Input name={"password"} placeholder={"Enter your Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={"Password"} />
        <Button loading={loading} text={"Login"} style={"btn btn-primary mt-3"} onClick={Login} /> <br />
        <p><Link href="">Forget Password</Link> </p>
        <hr />
        <p id='createText'>Or sign in using:</p>
        <p style={{ marginTop: '20px' }}> </p>
        <Button src={"https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760658494/google_dmivpl.png"} id="GoogleSignInButton" text={" Continue with Google"} style={"btn btn-light bg-secondary mt-4 mb-2"} />
      </div>
    </div>
  )
}

export default SignIn
