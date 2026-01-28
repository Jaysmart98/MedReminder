import React, { useState } from 'react';
import { 
  Pill, Bell, Calendar, ChevronRight, Menu, X, Heart, Shield, 
  Smartphone, Activity, Clock, Users, CheckCircle, Mail, 
  Facebook, Twitter, Instagram, MapPin, Phone,
  Star, Quote, Send 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-50 w-full">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <a className="flex items-center gap-2 font-bold text-2xl" href="#">
          <div className="bg-white p-1.5 rounded-xl shadow-sm text-blue-600">
            <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" className="w-10 h-10" />
            {/* <Pill size={28} /> */}
          </div>
          <span className="text-white">MedTrack</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Success Stories</a>

          <a href="https://med-track-frontend.vercel.app/signin" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform text-decoration-none">
            Sign In
          </a>

        </div>

        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-blue-600/95 backdrop-blur-xl border border-white/20 p-8 rounded-3xl flex flex-col gap-6 items-center shadow-2xl animate-fade-in">
          <a href="#features" className="text-white" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-white" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-white" onClick={() => setIsMenuOpen(false)}>Success Stories</a>
          <button className="bg-white text-blue-600 w-full py-3 rounded-full font-bold">Sign In</button>
        </div>
      )}
    </nav>
  );
};

const LandingPage = () => {
  const features = [
    { icon: <Clock className="text-blue-600" size={32} />, title: "Smart Reminders", desc: "Never miss a dose with personalized, intelligent notifications." },
    { icon: <Shield className="text-blue-600" size={32} />, title: "Secure Records", desc: "Your health data is encrypted and protected with industry standards." },
    { icon: <Activity className="text-blue-600" size={32} />, title: "Vital Tracking", desc: "Monitor blood pressure, glucose, and heart rate in one place." },
    { icon: <Smartphone className="text-blue-600" size={32} />, title: "Family Sync", desc: "Keep track of your loved ones' health and medication adherence." }
  ];

  const steps = [
    { number: "01", title: "Add Your Meds", desc: "Simply scan your prescription or type in your medication details." },
    { number: "02", title: "Set Schedule", desc: "Choose your frequency and let us handle the reminder logic." },
    { number: "03", title: "Track Progress", desc: "Get insights into your consistency and share reports with doctors." }
  ];

  const testimonials = [
    { name: "Joshua Kayode", role: "Chronic Patient", text: "MedTrack changed my life. I used to forget my blood pressure meds constantly, but now I'm 100% consistent.", stars: 5 },
    { name: "Dr. Adekunle Ogunbunmi", role: "Cardiologist", text: "I recommend this to all my patients. The reporting feature makes our consultations so much more productive.", stars: 5 },
    { name: "Engr. Grace Adigun", role: "Family Caregiver", text: "Managing my elderly father's 8 different pills was a nightmare until we found this app. Truly a lifesaver.", stars: 5 }
  ];

  const socialLinks = {
    LinkedIn: "https://www.linkedin.com/in/joshua-ogunbunmi-63123a228",
    Twitter: "https://x.com/jaysmart98",
    Instagram: "https://www.instagram.com/king__jhay111",
    Mail: "mailto:engineerogunbunmi@gmail.com"
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      <div className="fixed -bottom-25 -right-37.5 w-125 h-125 bg-cyan-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 grow flex flex-col lg:flex-row items-center justify-center py-12 lg:py-24 z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12 animate-fade-in">
          <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-cyan-500/20 text-sm font-medium">
            ✨ Your Smart Healthcare Assistant
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Designed To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Help You</span> Stay Healthy
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A comprehensive solution for managing medications, appointments, and vitals in one secure place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
            <a href="https://med-track-frontend.vercel.app/signup" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 text-decoration-none">
              Get Started Free <ChevronRight size={20} />
            </a>
            <a href="https://med-track-frontend.vercel.app/demo" className="border-5 border-slate-700 hover:border-slate-500 px-8 py-4 rounded-full font-bold backdrop-blur-sm transition-all hover:bg-white/5 text-slate-200 text-decoration-none flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
              Watch Demo
            </a>
          </div>

          <div className="mt-12 pt-8 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 border-t border-slate-800">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-white mb-0">10k+</h4>
              <p className="text-sm text-slate-400 mb-0">Active Users</p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-white mb-0">99%</h4>
              <p className="text-sm text-slate-400 mb-0">Compliance</p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-white mb-0">4.9/5</h4>
              <p className="text-sm text-slate-400 mb-0">App Rating</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative bg-slate-800/40 p-4 rounded-[3rem] backdrop-blur-xl border border-slate-700/50 shadow-2xl">
              <img 
                className="rounded-[2.5rem] w-full max-w-[320px] md:max-w-[400px] transition-transform duration-700 hover:scale-105" 
                src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" 
                alt="MedTrack Dashboard" 
              />
            </div>

            <div className="absolute top-10 -left-10 bg-slate-900/90 border border-slate-700 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 backdrop-blur-md">
              <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400"><Bell size={20} /></div>
              <div><p className="m-0 font-bold text-sm text-white text-[12px]">Pill Alert</p><p className="m-0 text-[10px] text-slate-400">Vitamin C at 9:00 AM</p></div>
            </div>

            <div className="absolute bottom-10 -right-10 bg-slate-900/90 border border-slate-700 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 backdrop-blur-md">
              <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400"><Calendar size={20} /></div>
              <div><p className="m-0 font-bold text-sm text-white text-[12px]">Checkup</p><p className="m-0 text-[10px] text-slate-400">Dr. Smith at 2:00 PM</p></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/95 rounded-t-[4rem] mt-12 text-slate-900 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Everything you need</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Powerful tools designed to simplify your healthcare journey every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-blue-50/50 h-full transition-all hover:bg-white hover:shadow-xl hover:-translate-y-2 group border border-blue-100/50">
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center transition-transform group-hover:rotate-12 border border-blue-50">
                  {f.icon}
                </div>
                <h4 className="font-bold text-blue-900 mb-4 text-xl">{f.title}</h4>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white text-slate-900 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row align-items-center gap-16">
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Simple health management</h2>
              <p className="text-slate-600 mb-12 text-lg">Manage your treatment in three simple steps. MedTrack handles the complexity for you.</p>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-3xl hover:bg-blue-50 transition-colors">
                    <div className="font-bold text-4xl text-blue-200">{s.number}</div>
                    <div>
                      <h5 className="font-bold text-blue-900 mb-2 text-lg">{s.title}</h5>
                      <p className="text-slate-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-[3rem] shadow-2xl">
                <div className="bg-white p-2 rounded-[2.5rem]">
                  <div className="p-12 text-center">
                    <Activity size={80} className="text-blue-600 mb-6 animate-pulse mx-auto" />
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Real-Time Tracking</h3>
                    <p className="text-slate-600 max-w-md mx-auto">Visualize your health trends and share detailed reports with your doctor with a single click.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-50 text-slate-900 z-10 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">Loved by patients & doctors</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Join thousands of people who have transformed their healthcare routine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.stars)].map((_, starIdx) => <Star key={starIdx} size={18} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <Quote className="text-blue-100 mb-4" size={40} />
                  <p className="text-slate-700 italic leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-900 leading-none mb-1">{t.name}</h5>
                    <p className="text-slate-500 text-sm m-0">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Newsletter */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white selection:bg-cyan-500/300 rounded-[3rem] p-12 md:p-20 text-center relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to take control of your health?</h2>
                <p className="text-blue-100 text-lg mb-10">Join our newsletter to receive the latest health tips and early access to new features.</p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex-grow relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" size={20} />
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
                        />
                    </div>
                    <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                        Subscribe <Send size={18} />
                    </button>
                </form>
                <p className="mt-4 text-blue-200 text-sm">Don't worry, we never spam your inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white selection:bg-cyan-500/30 pt-24 pb-12 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white p-3 rounded-2xl mb-6 shadow-xl">
              {/* <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1760653241/pill_j4t94m.png" alt="" className="text-blue-700" size={15} /> */}
              <Pill className="text-blue-700" size={36} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">MedTrack</h2>
            <p className="text-blue-100 opacity-80 max-w-sm text-center text-lg">
              Your reliable companion for medication management and appointment tracking.
            </p>
          </div>

          <div className="flex flex-row justify-center items-center gap-6 mb-16">
              <a 
                href={socialLinks.Facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
              >
                <Facebook size={24} className="text-white" />
              </a>

              <a
                href={socialLinks.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
              >
                <Instagram size={24} className="text-white" />
              </a>

              <a
                href={socialLinks.Twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
              >
                <Twitter size={24} className="text-white" />
              </a>

              <a
                href={socialLinks.Mail}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
              >
                <Mail size={24} className="text-white" />
              </a>

          </div>

           {/* className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110" */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h5 className="font-bold text-xl mb-6 text-white border-b-2 border-blue-400/30 pb-2">Product</h5>
              <ul className="space-y-4 text-blue-100/80 m-0 p-0 list-none">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h5 className="font-bold text-xl mb-6 text-white border-b-2 border-blue-400/30 pb-2">Company</h5>
              <ul className="space-y-4 text-blue-100/80 m-0 p-0 list-none">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h5 className="font-bold text-xl mb-6 text-white border-b-2 border-blue-400/30 pb-2">Contact Us</h5>
              <div className="space-y-6">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <MapPin size={22} className="text-cyan-400 mb-1" />
                  <span className="text-sm">SQI College of ICT, Heritage Mall, Dugbe, Ibadan</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <Phone size={22} className="text-cyan-400 mb-1" />
                  <a href="tel:+2347044032713" className="hover:text-white">+234 704 403 2713</a>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <Mail size={22} className="text-cyan-400 mb-1" />
                  <a href="mailto:engineerogunbunmi@gmail.com" className="hover:text-white">engineerogunbunmi@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-white/10 pt-8 text-center text-xs text-blue-200/50">
            <p>© {new Date().getFullYear()} MedTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .backdrop-blur-md { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .backdrop-blur-sm { backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
      `}</style>
    </div>
  );
};

export default LandingPage;