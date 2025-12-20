import React, { useState } from 'react';
import { 
  Pill, Bell, Calendar, ChevronRight, Menu, X, Heart, Shield, 
  Smartphone, Activity, Clock, Users, CheckCircle, Mail,
  Facebook, Twitter, Instagram, Linkedin, MapPin, Phone
} from 'lucide-react';

import Navbar from '../Navbar/Navbar'

import "./LandingPage.css"



const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data for additional sections
  const features = [
    {
      icon: <Bell className="text-blue-600" size={32} />,
      title: "Smart Reminders",
      desc: "Never miss a dose with intelligent notifications that adapt to your schedule and time zone."
    },
    {
      icon: <Activity className="text-cyan-600" size={32} />,
      title: "Health Metrics",
      desc: "Track blood pressure, glucose levels, and heart rate for a complete overview of your vitals."
    },
    {
      icon: <Users className="text-indigo-600" size={32} />,
      title: "Family Care",
      desc: "Manage medication for children or elderly parents from a single, secure account."
    },
    {
      icon: <Smartphone className="text-purple-600" size={32} />,
      title: "Offline Access",
      desc: "Access your treatment schedule even without an internet connection, anywhere in the world."
    }
  ];

  const steps = [
    { number: "01", title: "Sign Up", desc: "Create your secure health profile in just a few seconds." },
    { number: "02", title: "Add Treatments", desc: "Input your medications, dosages, and appointment times." },
    { number: "03", title: "Stay Healthy", desc: "Receive alerts, track progress, and focus on recovery." }
  ];

  return (
     <div className="body shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500">

         <Navbar/>



        <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-white opacity-10 z-0"></div>
      
      {/* Dynamic Background Elements */}
      <div className="fixed top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-white opacity-10 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-[-100px] right-[-150px] w-[500px] h-[500px] bg-cyan-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4 z-50">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3" href="#">
            <div className="bg-white p-1 rounded-2 shadow-sm text-blue-600">
              <Pill size={32} />
            </div>
            <span>MedTrack</span>
          </a>
          
          <button 
            className="navbar-toggler border-0 shadow-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 mt-4 mt-lg-0">
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover:opacity-100 fw-medium" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover:opacity-100 fw-medium" href="#how-it-works">How It Works</a></li>
              <li className="nav-item"><a className="nav-link text-white opacity-75 hover:opacity-100 fw-medium" href="#contact">Contact</a></li>
              <li className="nav-item">
                <button className="btn btn-light rounded-pill px-4 fw-bold shadow-sm hover:scale-105 transition-all">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container flex-grow-1 d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 z-10">
        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0 pe-lg-5 animate-fade-in">
          <span className="badge bg-white bg-opacity-20 text-white rounded-pill px-3 py-2 mb-4 backdrop-blur-sm border border-white border-opacity-20">
            ✨ Your Smart Healthcare Assistant
          </span>
          <h1 className="display-3 fw-bold text-white mb-3 tracking-tight">
            Designed To <br />
            <span className="text-cyan-200">Help You</span> Stay Healthy
          </h1>
          <p className="fs-5 text-white opacity-90 mb-5 leading-relaxed max-w-xl mx-auto mx-lg-0">
            A comprehensive solution for managing medications, appointments, and vitals in one secure place.
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
            <button className="btn btn-white btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 transition-all hover:scale-105 border-0 bg-white text-blue-600">
              Get Started Free <ChevronRight size={20} />
            </button>
            <button className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600">
              Watch Demo
            </button>
          </div>

          <div className="mt-5 pt-4 d-flex justify-content-center justify-content-lg-start gap-5 opacity-75 border-top border-white border-opacity-10">
            <div><h4 className="fw-bold text-white mb-0">10k+</h4><p className="small text-white mb-0">Active Users</p></div>
            <div><h4 className="fw-bold text-white mb-0">99%</h4><p className="small text-white mb-0">Compliance</p></div>
            <div><h4 className="fw-bold text-white mb-0">4.9/5</h4><p className="small text-white mb-0">App Rating</p></div>
          </div>
        </div>

        <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative mt-5 mt-lg-0">
          <div className="relative group animate-float">
            <div className="bg-white bg-opacity-10 p-4 rounded-[3rem] backdrop-blur-md border border-white border-opacity-20 shadow-2xl">
              <img 
                className="img-fluid rounded-[2.5rem] transition-transform group-hover:scale-105 duration-700" 
                src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" 
                alt="MedTrack Dashboard" 
                style={{ maxWidth: '380px' }}
              />
            </div>

            <div className="position-absolute top-10 start-0 translate-middle-x bg-white p-3 rounded-4 shadow-xl animate-bounce-slow d-none d-md-flex align-items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-3 text-blue-600"><Bell size={20} /></div>
              <div><p className="mb-0 fw-bold small">Pill Alert</p><p className="mb-0 text-[10px] text-muted">Vitamin C at 9:00 AM</p></div>
            </div>

            <div className="position-absolute bottom-10 end-0 translate-middle-x bg-white p-3 rounded-4 shadow-xl animate-bounce-slow-delayed d-none d-md-flex align-items-center gap-3">
              <div className="bg-green-100 p-2 rounded-3 text-green-600"><Calendar size={20} /></div>
              <div><p className="mb-0 fw-bold small">Checkup</p><p className="mb-0 text-[10px] text-muted">Dr. Smith at 2:00 PM</p></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid Section */}
      <section id="features" className="py-5 bg-white bg-opacity-95 rounded-t-[4rem] mt-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-blue-900 mb-3">Everything you need</h2>
            <p className="text-muted fs-5 max-w-2xl mx-auto">Powerful tools designed to simplify your healthcare journey every single day.</p>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="p-4 rounded-4 bg-blue-50 h-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-2 group">
                  <div className="mb-4 bg-white w-16 h-16 rounded-3 shadow-sm d-flex align-items-center justify-content-center transition-transform group-hover:rotate-12">
                    {f.icon}
                  </div>
                  <h4 className="fw-bold text-blue-900 mb-3 fs-5">{f.title}</h4>
                  <p className="text-muted small mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 className="display-5 fw-bold text-blue-900 mb-4">Simple health management</h2>
              <p className="text-muted mb-4">Manage your treatment in three simple steps. MedTrack handles the complexity for you.</p>
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={i} className="d-flex gap-4 align-items-start p-3 rounded-4 hover:bg-blue-50 transition-colors">
                    <div className="fw-bold fs-2 text-blue-200">{s.number}</div>
                    <div>
                      <h5 className="fw-bold text-blue-900 mb-1">{s.title}</h5>
                      <p className="text-muted small mb-0">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
               <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-[3rem] shadow-2xl">
                  <div className="bg-white p-2 rounded-[2.5rem]">
                    <div className="p-5 text-center">
                       <Activity size={80} className="text-blue-600 mb-4 animate-pulse mx-auto" />
                       <h3 className="fw-bold text-blue-900">Real-Time Tracking</h3>
                       <p className="text-muted px-lg-5">Visualize your health trends and share detailed reports with your doctor with a single click.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <footer id="contact" className="bg-blue-900 text-white pt-5 pb-4 mt-auto">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-2 fw-bold fs-3 mb-4">
                <div className="bg-white p-1 rounded-2 text-blue-600">
                  <Pill size={24} />
                </div>
                <span>MedTrack</span>
              </div>
              <p className="text-blue-100 opacity-75 mb-4">
                Your reliable companion for medication management and appointment tracking.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white hover:bg-white hover:text-blue-900 transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white hover:bg-white hover:text-blue-900 transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white hover:bg-white hover:text-blue-900 transition-all"><Instagram size={18} /></a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="fw-bold mb-4">Product</h5>
              <ul className="list-unstyled space-y-2 opacity-75 text-sm">
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Features</a></li>
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Pricing</a></li>
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Mobile App</a></li>
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Security</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="fw-bold mb-4">Company</h5>
              <ul className="list-unstyled space-y-2 opacity-75 text-sm">
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">About Us</a></li>
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Health Blog</a></li>
                <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Partners</a></li>
                {/* <li><a href="#" className="text-white text-decoration-none hover:opacity-100">Careers</a></li> */}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold mb-4">Contact & Support</h5>
              <div className="space-y-3 opacity-75 text-sm">
                <div className="d-flex align-items-center gap-3"><MapPin size={18} />SQI College of ICT, Heritage Mall, Dugbe, Ibadan</div>
                <div className="d-flex align-items-center gap-3"><Phone size={18} /> +2347044032713</div>
                <div className="d-flex align-items-center gap-3"><Mail size={18} /> engineerogunbunmi@gmail.com</div>
              </div>
              <div className="mt-4">
                <div className="input-group">
                  <input type="text" className="form-control bg-white bg-opacity-10 border-0 text-white placeholder-blue-200" placeholder="Newsletter email" />
                  <button className="btn btn-primary bg-white text-blue-900 border-0 fw-bold">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-top border-white border-opacity-10 pt-4 text-center">
            <p className="small mb-0 opacity-50">
              © {new Date().getFullYear()} MedTrack. Built with care for your health. 
              <span className="mx-2">|</span> 
              <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
              <span className="mx-2">|</span> 
              <a href="/termsofservice" className="text-white text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-bounce-slow-delayed { animation: bounce-slow 4s ease-in-out 2s infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .backdrop-blur-md { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .backdrop-blur-sm { backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
        
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        
        .placeholder-blue-200::placeholder { color: rgba(191, 219, 254, 0.6); }

        .navbar-collapse {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(37, 99, 235, 0.95);
            backdrop-filter: blur(15px);
            padding: 2rem;
            border-radius: 2rem;
            margin-top: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
