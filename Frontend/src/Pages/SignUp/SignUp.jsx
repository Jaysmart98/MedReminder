// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import {toast} from 'react-toastify'
// import './SignUp.css'
// import Input from "../../PrimaryComponents/Input/Input.jsx"
// import Button from "../../PrimaryComponents/Button/Button.jsx"
// import { useNavigate, Router } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import { Pill, HeartPulse, Users, Calendar, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';

// const SignUp = () => {
//   const navigate = useNavigate();
//    const [loading, setloading] = useState(false)
    
//    const [userdetail, setUserdetail] = useState({
//             email: "",
//             password: ""
//         })

//         const handleInputChange = (e) => {
//         console.log(e.target.value, e.target.name);
//         const name = e.target.name;
//         const value = e.target.value
//         setUserdetail({...userdetail,[name]:value})
//     }


//       const Register = () => {
//       setloading(true)
//       console.log(userdetail)
//           axios.post("https://pe-backend-liard.vercel.app/signup", userdetail)
//         .then((res)=>{
//             console.log(res);
//              toast.success(res.data?.message),
//               navigate("/signin");
//         }) .catch ((err) => {
//             console.log(err);
//             let errormessage = err.response.data?.message
//             toast.error(errormessage)
//         }) .finally(()=>{
//           setloading(false)
//         })
//     }

//       const coreFeatures = [
//         { icon: Pill, text: "Medication Schedule & Reminders" },
//         { icon: HeartPulse, text: "Health Metrics (BP, Sugar, Weight)" },
//         { icon: Users, text: "Family Member Profiles" },
//         { icon: Calendar, text: "Doctor Appointment Reminders" },
//     ];

//   return (
//     <div id='SignUpPage'>

//        <div className='landing-page d-flex justify-content-center align-items-center text-white vh-100 '>
//       <div id='container'>
//          <img id='loGo' className='img-fluid' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" />
//          <h2 className='welcome-text'>Welcome To</h2>
//          <h1 className='Med text-center'>MedReminder</h1>
//          <p>Your personal medication reminder Site.</p>
//           <button href="/SignUp" className='start mt-2 mb-2'>Register and get Started</button>
//           <footer>
//             <p>© 2025 MedReminder. All rights reserved.</p>
//           </footer>
//       </div>
//       </div>

//       <div id='body' className='container-fluid w-100'>
//       <div className='body2'>
//         <h1 className='text-center'>Create an Account</h1>
//         {/* <p className='text-center'>Start your health track journey with us today!</p> */}
//         <p className='text-center'>Already have an account?   <a href="/signin">Sign In</a> </p>
//         <Input name={"username"} placeholder={"Enter Username"} type={"text"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={"Username"}/>
//         <Input name={"email"} placeholder={"Enter Email Address"} type={"email"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={"Email"}/>
//         <Input name={"password"} placeholder={"Enter Password"} type={"password"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={'Password'}/>
//         <Input name={"password"} placeholder={"Confirm Password"} type={"password"} style={"form-control w-100 mt-3"} onChange={handleInputChange} label={'Confirm Password'}/> 
      
//         <Button loading={loading} text={"Create Account"} style={"btn btn-light bg-secondary mt-2 mb-2"} onClick={Register}/>
//         <p><Link className='d-flex justify-content-center' href="#">Terms of Service</Link> </p>
//         <p id='createText'>Or create an account using</p>
//         <Button src={"https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760658494/google_dmivpl.png"} id="GoogleSignInButton" text={" Continue with Google"} style={"btn btn-light bg-secondary mt-2 mb-2"}/>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default SignUp



import React, { useState, useEffect } from 'react';
import { Pill, HeartPulse, Users, Calendar, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const MessageBar = ({ message }) => {
    if (!message) return null;

    const baseClasses = "flex items-center p-3 my-4 rounded-xl border";
    const successClasses = "bg-teal-50 text-teal-800 border-teal-200";
    const errorClasses = "bg-red-50 text-red-800 border-red-200";
    
    return (
        <div className={`${baseClasses} ${message.type === 'success' ? successClasses : errorClasses}`}>
            {message.type === 'success' 
                ? <CheckCircle className="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" /> 
                : <AlertTriangle className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />}
            <p className="font-medium text-sm">{message.text}</p>
        </div>
    );
};


const SignUp = () => {
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null); 

    useEffect(() => {
        let unsubscribe = () => {};
        try {
            const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
            const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
            const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

            if (Object.keys(firebaseConfig).length === 0) {
                 setIsAuthReady(true);
                 return;
            }

            const app = initializeApp(firebaseConfig);
            const firestore = getFirestore(app);
            const authService = getAuth(app);

            setDb(firestore);
            setAuth(authService);

            const authenticate = async () => {
                try {
                    if (initialAuthToken) {
                        await signInWithCustomToken(authService, initialAuthToken);
                    } else {
                        await signInAnonymously(authService);
                    }
                } catch (error) {
                    console.error("Authentication failed:", error);
                }
            };

            authenticate();

            unsubscribe = onAuthStateChanged(authService, (user) => {
                if (user) {
                    setUserId(user.uid);
                } else {
                    setUserId(null);
                }
                setIsAuthReady(true);
            });
            
        } catch (error) {
            console.error("Firebase initialization failed:", error);
            setIsAuthReady(true);
        }

        return () => unsubscribe();
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (!email.includes('@') || password.length < 6 || !username) {
             setMessage({ type: 'error', text: 'Please ensure all fields are valid and the password is at least 6 characters long.' });
            return;
        }
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        setIsLoading(true);

        const maxRetries = 3;
        let attempt = 0;

        while (attempt < maxRetries) {
            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || `Sign-up failed with status: ${response.status}`);
                }

                setMessage({ type: 'success', text: data.message || 'Registration successful! Proceeding to Sign In.' });

                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setUsername('');
                
                return;

            } catch (error) {
                attempt++;
                if (attempt >= maxRetries) {
                    console.error("Sign-up Error:", error.message);
                    setMessage({ 
                        type: 'error', 
                        text: error.message.includes('Network') 
                            ? 'Sign up failed: Could not connect to the server or maximum retries reached.' 
                            : error.message.replace('Error: ', '')
                    });
                    break;
                }
                const delay = Math.pow(2, attempt) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        setIsLoading(false);
    };


    const coreFeatures = [
        { icon: Pill, text: "Medication Schedule & Reminders" },
        { icon: HeartPulse, text: "Health Metrics (BP, Sugar, Weight)" },
        { icon: Users, text: "Family Member Profiles" },
        { icon: Calendar, text: "Doctor Appointment Reminders" },
    ];


    return (
        <div id="SignUpPage" className="min-h-screen w-full flex flex-col lg:flex-row font-inter">
            
            <div className="landing-page relative w-full lg:w-2/5 flex flex-col justify-center items-center text-center text-white p-8 overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
                
                <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-white opacity-10 z-0"></div>
                <div className="absolute bottom-[-50px] right-[-100px] w-[250px] h-[250px] rounded-full bg-white opacity-15 z-0"></div>
                
                <div id="container" className="z-10 p-4 sm:p-6 backdrop-blur-sm bg-white/20 rounded-xl max-w-sm w-full transition-all duration-300">
                    
                    <div className="flex justify-center items-center mb-4">
                        <Pill className="w-12 h-12 text-white animate-pulse" />
                    </div>

                    <h2 className="text-xl font-light m-0">Your Personal Health Manager</h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mt-1 mb-6 text-shadow-md tracking-tight">
                        MedTrack
                    </h1>

                    <p className="text-sm font-light mb-8 max-w-xs mx-auto opacity-90">
                        Manage medication schedules, track vital health metrics, and never miss a beat in your health journey.
                    </p>

                    <ul className="text-left space-y-3 list-none p-0 inline-block text-base list-icon transition-all duration-300">
                        {coreFeatures.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 mr-3 text-cyan-200 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-white text-opacity-95">{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <button 
                        className="mt-10 px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                        onClick={() => setMessage({type: 'success', text: 'You clicked Start Trial! (Demo action)'})}
                    >
                        Start Your Free Trial
                    </button>
                </div>

                <footer className="z-10 mt-6 lg:mt-8 relative hidden sm:block">
                    <p className="text-xs opacity-70">
                        © 2025 MedTrack. Protected by reCAPTCHA and subject to Privacy Policy and Terms of Service.
                    </p>
                    {isAuthReady && userId && (
                        <p className="text-xs opacity-50 mt-2">
                            User ID: {userId}
                        </p>
                    )}
                </footer>
            </div>

            <div id="body" className="w-full lg:w-3/5 bg-gray-50 flex justify-center items-center p-6 sm:p-8 lg:p-12 overflow-y-auto">
                <div className="body2 max-w-lg w-full p-8 sm:p-10 bg-white rounded-2xl shadow-xl transition-all duration-300">
                    
                    <h1 className="text-3xl font-bold text-blue-600 mb-2">Create an Account</h1>
                    <div className="text-gray-500 text-base mb-4">
                        Already have an account? 
                        <a href="#" className="text-cyan-600 hover:text-blue-600 font-medium ml-1 transition duration-150">Sign In</a>
                    </div>

                    <MessageBar message={message} />
                    
                    <form onSubmit={handleSignUp} className="space-y-4">
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input 
                                type="text" 
                                name="username"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                placeholder="Enter Username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                placeholder="Enter Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                name="password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                placeholder="Enter Password (min 6 chars)" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmPassword"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                placeholder="Confirm Password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {password && confirmPassword && password !== confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
                            )}
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 disabled:opacity-50 flex items-center justify-center"
                            disabled={isLoading || !username || !email || password.length < 6 || password !== confirmPassword}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        <a href="#" className='hover:text-cyan-600 transition duration-150'>Terms of Service</a>
                    </p>

                    <div className="relative flex justify-center my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative bg-white px-4 text-sm text-gray-500">
                            Or create an account using
                        </div>
                    </div>

                    <button 
                        onClick={() => setMessage({type: 'error', text: 'Google Sign-In is not implemented in this demo.'})}
                        className="w-full py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition duration-200 flex items-center justify-center"
                    >
                        <img 
                            src="https://placehold.co/20x20/4285F4/ffffff?text=G" 
                            alt="Google Icon" 
                            className="w-5 h-5 mr-3 rounded-full"
                        />
                         Continue with Google
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;