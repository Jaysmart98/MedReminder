import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Input from "../../PrimaryComponents/Input/Input.jsx"
import Button from "../../PrimaryComponents/Button/Button.jsx"
import { Pill, HeartPulse, Users, Calendar, CheckCircle } from 'lucide-react';
import "tailwindcss";
import './SignIn.css'



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


//   const Login = () => {
//     setloading(true);
    
//     // Use the VITE_ prefix variable from your .env
//     const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8008";

//     axios.post(`${baseUrl}/signin`, userdetail)
//       .then((res) => {
//         toast.success(res.data?.message || "Login Successful");
//         localStorage.setItem("auth_token", res.data.token);
//         navigate("/dashboard");
//       }).catch((err) => {
//         // Optional Chaining (?.) prevents crashes if the server is unreachable
//         let errormessage = err.response?.data?.message || "Login failed. Check your connection.";
//         toast.error(errormessage);
//       }).finally(() => {
//         setloading(false);
//       });
// };

    const Login = async () => {
      setloading(true);
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8008";

      try {
        const res = await axios.post(`${baseUrl}/signin`, {
          email: userdetail.email.trim(),
          password: userdetail.password.trim()
        });

        toast.success(res.data?.message || "Login Successful");
        localStorage.setItem("auth_token", res.data.token);
        navigate("/dashboard");

      } catch (err) {
        const msg = err.response?.data?.message || "Login failed. Check your connection.";
        toast.error(msg);
      } finally {
        setloading(false);
      }
    };

    const coreFeatures = [
    { icon: Pill, text: "Medication Schedule & Reminders" },
    { icon: HeartPulse, text: "Health Metrics (BP, Sugar, Weight)" },
    { icon: Users, text: "Family Member Profiles" },
    { icon: Calendar, text: "Doctor Appointment Reminders" },
    { icon: CheckCircle, text: "Adherence Reports & Insights" },
];

  return (
    <div id='SignUpPage' className="min-h-screen w-full flex flex-col lg:flex-row font-inter ">
      
      <div className='landing-page d-flex justify-content-center align-items-center vh-100 relative w-full lg:w-2/5 flex flex-col justify-center items-center text-center p-8 overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl shadow-2xl bg-linear-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white selection:bg-cyan-500/30'>
    
      <div className="absolute -top-25 -left-37.5 w-100 h-100 rounded-full bg-white opacity-10 z-0"></div>
      <div className="absolute -bottom-12.5 -right-25 w-62.5 h-62.5 rounded-full bg-white opacity-15 z-0"></div>
     
      <div id='container' className="z-10 sm:p-6 backdrop-blur-sm bg-white/20 rounded-xl max-w-sm w-full transition-all duration-300">
         <img id='loGo' className='img-fluid mb-3' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
          <h2 className='welcome-text'>Your Personal Health Manager</h2>
         <h1 className='Med text-center fs-2 bold'>MedTrack</h1>
         <p>Manage medication Schedules, track vital health metrics, and never miss a beat on your health journey.</p>

            <ul className="text-left mt-4 space-y-3" >
              {coreFeatures.map((feature, index) => (
                <li key={index} className="list flex items-center">
                  <feature.icon className="w-6 h-6 text-white" />
                  <span className='font-medium text-white text-opacity-95'>{feature.text}</span>
                </li>
              ))}

            </ul>

             <div>
               <p className='text-center'>Need help?   <a href="/help">Get Support</a> </p>
             </div>

          <footer>
            <p>© 2025 MedReminder. All rights reserved.</p>
          </footer>
      </div>
      </div>


      <div id='body' className='container-fluid w-100'>
      <div className='body2'>
          <h1 className='text-center'>Welcome Back!</h1>
          <p className='text-center'>Sign in to continue to MedTrack</p>
          <div>
            <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
          </div>

            <div>
              <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={"Email"} />
              <Input name={"password"} placeholder={"Enter your Password"} type={"password"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={"Password"} />
              <Button loading={loading} text={"Login"} style={"btn btn-light bg-secondary mt-2 mb-2"} onClick={Login} /> <br />
               <div>
               <p className='text-center'>Forgot your password?   <Link to="/reset-password">Reset Password</Link> </p>
             </div>
            </div>

           <p className='d-flex justify-content-center'>  <Link to="/termsofservice">Terms of Service</Link> </p>
           <p id='createText'>Or create an account using</p>
           <Button src={"https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760658494/google_dmivpl.png"} text={" Continue with Google"} style={"btn btn-light bg-secondary mt-2 mb-2"}/>
        </div>
      </div>
    </div>
  )
}

export default SignIn
