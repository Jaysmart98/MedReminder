
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Pill, 
  Calendar, 
  Clock, 
  Activity, 
  AlertCircle, 
  Plus, 
  User, 
  X,
  Trash2,
  CalendarDays,
  HeartPulse,
  TrendingUp,
  Package,
  ChevronRight,
  Stethoscope,
  Droplet,
  Loader2,
  Edit3,
  Settings,
  LogOut,
  Camera,
  Lightbulb,
  RefreshCcw,
  CheckCircle2
} from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

Sign Out
const Dashboard = () => {

const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [showModal, setShowModal] = useState({ type: null, data: null }); // {type: 'editMed' | 'addMed' | 'editAppt' | 'addAppt', data: any}
  
  useEffect(() => {
        const token = localStorage.getItem("auth_token");
        
        // If there is no token, kick them out to the login page
        if (!token) {
            toast.error("Please login to access the dashboard");
            navigate("/signin");
        }
    }, [navigate]);

  const [userData, setUserData] = useState({ 
    firstName: 'Joshua', 
    lastName: 'Ogunbunmi',
    username: 'Smart_health',
    email: 'engineerogunbunmi@gmail.com',
    profilePic: null,
    memberSince: '2026'
  });
  
  const [healthTip, setHealthTip] = useState({ text: 'Stay hydrated for better focus.', source: 'HealthAI' });
  const [isTipLoading, setIsTipLoading] = useState(false);

  const [meds, setMeds] = useState([
    { id: 1, name: 'Lisinopril', dosage: '10mg', time: '08:00', status: 'Pending', type: 'Daily', inventory: 12 },
    { id: 2, name: 'Metformin', dosage: '500mg', time: '12:30', status: 'Taken', type: 'Daily', inventory: 3 },
    { id: 3, name: 'Atorvastatin', dosage: '20mg', time: '21:00', status: 'Pending', type: 'Supplement', inventory: 25 },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, doctor: 'Dr. Sarah Wilson', specialty: 'Cardiologist', date: '2026-12-22', time: '10:30', location: 'Medical Center Room 402' },
    { id: 2, doctor: 'Dr. James Lee', specialty: 'General Practitioner', date: '2026-12-28', time: '09:00', location: 'City Clinic' },
  ]);

  // --- API SIMULATIONS ---

  const fetchHealthTip = async () => {
    setIsTipLoading(true);
    try {
      // Simulating external health API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const tips = [
            "Walking for 30 minutes a day can significantly improve cardiovascular health.",
            "Magnesium-rich foods like spinach and almonds can help improve sleep quality.",
            "Drinking water before meals can aid digestion and weight management.",
            "Reducing sodium intake helps lower blood pressure naturally.",
            "Regular stretching prevents joint stiffness and improves mobility as we age."
          ];
          resolve({ text: tips[Math.floor(Math.random() * tips.length)], source: "World Health Data" });
        }, 800);
      });
      setHealthTip(response);
    } catch (error) {
      console.error("Failed to fetch tip");
    } finally {
      setIsTipLoading(false);
    }
  };

  useEffect(() => {
    const initApp = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      await fetchHealthTip();
      setIsLoading(false);
    };
    initApp();
  }, []);

  // --- ACTIONS ---

  const handleDeleteMed = (id) => {
    if(window.confirm("Delete this medication record?")) {
        setMeds(meds.filter(m => m.id !== id));
    }
  };

  const handleDeleteAppt = (id) => {
    if(window.confirm("Cancel this appointment?")) {
        setAppointments(appointments.filter(a => a.id !== id));
    }
  };

  const handleSaveMed = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        id: showModal.data?.id || Date.now(),
        name: formData.get('name'),
        dosage: formData.get('dosage'),
        time: formData.get('time'),
        type: formData.get('type'),
        inventory: parseInt(formData.get('inventory')),
        status: showModal.data?.status || 'Pending'
    };

    if (showModal.type === 'editMed') {
        setMeds(meds.map(m => m.id === data.id ? data : m));
    } else {
        setMeds([...meds, data]);
    }
    setShowModal({ type: null, data: null });
  };

  const handleSaveAppt = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        id: showModal.data?.id || Date.now(),
        doctor: formData.get('doctor'),
        specialty: formData.get('specialty'),
        date: formData.get('date'),
        time: formData.get('time'),
        location: formData.get('location')
    };

    if (showModal.type === 'editAppt') {
        setAppointments(appointments.map(a => a.id === data.id ? data : a));
    } else {
        setAppointments([...appointments, data]);
    }
    setShowModal({ type: null, data: null });
  };

  const toggleMedStatus = (id) => {
    setMeds(prev => prev.map(m => {
      if (m.id === id) {
        const newStatus = m.status === 'Taken' ? 'Pending' : 'Taken';
        return { ...m, status: newStatus };
      }
      return m;
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsActionLoading(true);
    const formData = new FormData(e.target);
    setTimeout(() => {
        setUserData({
            ...userData,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            username: formData.get('username'),
            email: formData.get('email')
        });
        setIsActionLoading(false);
        setActiveTab('overview');
    }, 1000);
  };


  const handleLogout = () => {
    // Remove the token
    localStorage.removeItem("auth_token");
    
    // Notify the user
    toast.info("Logged out successfully");
    
    // Redirect to Sign In
    navigate("/signin");
};

  // --- UI COMPONENTS ---

  const OverviewView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-linear-to-br from-indigo-500 to-indigo-700 p-6 rounded-4xl text-white shadow-xl shadow-indigo-200">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md"><Activity size={20} /></div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full">DAILY GOAL</span>
            </div>
            <div className="text-4xl font-black mb-1">{Math.round((meds.filter(m => m.status === 'Taken').length / meds.length) * 100)}%</div>
            <p className="text-indigo-100 text-sm font-medium">Medication adherence</p>
        </div>

        <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><CalendarDays size={20} /></div>
                <span className="text-[10px] font-bold text-slate-400">UPCOMING</span>
            </div>
            <div className="text-2xl font-black text-slate-800 mb-1">{appointments[0]?.doctor.split(' ').pop() || 'None'}</div>
            <p className="text-slate-500 text-sm font-medium">Next appointment in 3 days</p>
        </div>

        <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-tight">
                        <Lightbulb size={14}/> Daily Health Tip
                    </span>
                    <button onClick={fetchHealthTip} className={`text-slate-400 hover:text-indigo-600 ${isTipLoading ? 'animate-spin' : ''}`}>
                        <RefreshCcw size={14}/>
                    </button>
                </div>
                <p className="text-slate-700 text-sm font-semibold leading-snug italic">"{healthTip.text}"</p>
                <p className="text-[10px] text-slate-400 mt-2">— {healthTip.source}</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2"><Clock size={18} className="text-indigo-600"/> Priority Tasks</h3>
                    <button onClick={() => setActiveTab('meds')} className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors">View Cabinet</button>
                </div>
                <div className="p-2 divide-y divide-slate-50">
                    {meds.map(med => (
                        <div key={med.id} className="flex items-center p-4 hover:bg-slate-50 transition-all rounded-2xl group">
                            <button 
                                onClick={() => toggleMedStatus(med.id)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${med.status === 'Taken' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-100 text-slate-400 hover:bg-indigo-50 hover:text-indigo-500'}`}
                            >
                                {med.status === 'Taken' ? <CheckCircle2 size={20}/> : <Plus size={20}/>}
                            </button>
                            <div className="ml-4 flex-1">
                                <p className={`font-bold text-sm ${med.status === 'Taken' ? 'text-slate-300 line-through' : 'text-slate-800'}`}>{med.name}</p>
                                <p className="text-xs text-slate-500 font-medium">{med.time} • {med.dosage}</p>
                            </div>
                            <div className="hidden group-hover:flex items-center gap-1">
                                <button onClick={() => setShowModal({type: 'editMed', data: med})} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit3 size={16}/></button>
                                <button onClick={() => handleDeleteMed(med.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={16}/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-indigo-900 rounded-4xl p-6 text-white relative overflow-hidden h-full flex flex-col shadow-xl">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold mb-2">Weekly Summary</h3>
                <p className="text-indigo-200 text-xs mb-6">You've hit 92% of your goals this week. Excellent consistency!</p>
                <div className="mt-auto flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <div>
                        <p className="text-[10px] font-bold text-indigo-300 uppercase">Active Prescriptions</p>
                        <p className="text-xl font-black">{meds.length}</p>
                    </div>
                    <div className="h-10 w-px bg-white/10"></div>
                    <div>
                        <p className="text-[10px] font-bold text-indigo-300 uppercase">Refills Needed</p>
                        <p className="text-xl font-black text-orange-400">{meds.filter(m => m.inventory < 5).length}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  const MedsView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Pharmacy Cabinet</h3>
            <p className="text-slate-500 font-medium">Manage doses and track supply inventory.</p>
        </div>
        <button onClick={() => setShowModal({type: 'addMed', data: null})} className="bg-indigo-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
            <Plus size={20} /> Add Medication
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meds.map(med => (
            <div key={med.id} className="bg-white border border-slate-100 rounded-4xl p-6 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl ${med.inventory < 5 ? 'bg-red-50 text-red-500' : 'bg-indigo-50 text-indigo-500'}`}>
                        <Pill size={24} />
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setShowModal({type: 'editMed', data: med})} className="p-2 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-xl"><Edit3 size={18}/></button>
                        <button onClick={() => handleDeleteMed(med.id)} className="p-2 bg-slate-50 text-slate-400 hover:text-red-500 rounded-xl"><Trash2 size={18}/></button>
                    </div>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">{med.name}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-lg font-bold text-[10px] uppercase">{med.type}</span>
                    <span>•</span>
                    <span>{med.dosage}</span>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400 uppercase tracking-wider">Inventory</span>
                        <span className={med.inventory < 5 ? 'text-red-500' : 'text-slate-600'}>{med.inventory} units left</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full transition-all duration-1000 ${med.inventory < 5 ? 'bg-red-500' : 'bg-indigo-500'}`} 
                            style={{width: `${Math.min((med.inventory / 30) * 100, 100)}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );

  const AppointmentsView = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Consultations</h3>
            <p className="text-slate-500 font-medium">Keep track of your medical visits and follow-ups.</p>
        </div>
        <button onClick={() => setShowModal({type: 'addAppt', data: null})} className="bg-purple-600 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
            <Calendar size={20} /> New Appointment
        </button>
      </div>

      <div className="bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-50">
            {appointments.map(appt => (
                <div key={appt.id} className="p-8 flex flex-col md:flex-row md:items-center gap-8 group hover:bg-slate-50/50 transition-colors">
                    <div className="bg-purple-50 text-purple-600 p-6 rounded-3xl flex flex-col items-center justify-center min-w-25 shadow-sm">
                        <span className="text-xs font-black uppercase tracking-widest">{new Date(appt.date).toLocaleString('default', { month: 'short' })}</span>
                        <span className="text-3xl font-black">{appt.date.split('-')[2]}</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-bold text-xl text-slate-800">{appt.doctor}</h4>
                            <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-black uppercase tracking-wider">{appt.specialty}</span>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-2"><Clock size={16} className="text-slate-400"/> {appt.time}</span>
                            <span className="flex items-center gap-2"><Stethoscope size={16} className="text-slate-400"/> {appt.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setShowModal({type: 'editAppt', data: appt})} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl text-slate-600 font-bold text-xs hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm">
                            <Edit3 size={14}/> Edit
                        </button>
                        <button onClick={() => handleDeleteAppt(appt.id)} className="p-2 bg-white border border-slate-100 text-slate-400 hover:text-red-500 rounded-xl transition-colors shadow-sm">
                            <Trash2 size={16}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center">
            <h3 className="text-3xl font-black text-slate-800">Account Settings</h3>
            <p className="text-slate-500 font-medium">Personalize your MedTrack experience</p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
            <div className="h-32 bg-indigo-600 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-xl bg-white p-1 shadow-xl">
                            <div className="w-full h-full rounded-[1.8rem] bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden">
                                {userData.profilePic ? <img src={userData.profilePic} className="w-full h-full object-cover" /> : <User size={40} />}
                            </div>
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-xl shadow-lg border-2 border-white hover:bg-indigo-700 transition-colors">
                            <Camera size={14} />
                        </button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleProfileUpdate} className="pt-20 p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase ml-2">First Name</label>
                        <input name="firstName" defaultValue={userData.firstName} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 focus:ring-2 ring-indigo-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase ml-2">Last Name</label>
                        <input name="lastName" defaultValue={userData.lastName} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 focus:ring-2 ring-indigo-500 transition-all outline-none" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Username</label>
                    <input name="username" defaultValue={userData.username} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 focus:ring-2 ring-indigo-500 transition-all outline-none" />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Email Address</label>
                    <input name="email" type="email" defaultValue={userData.email} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 focus:ring-2 ring-indigo-500 transition-all outline-none" />
                </div>

                <div className="pt-4 flex gap-4">
                    <button type="submit" disabled={isActionLoading} className="flex-1 bg-indigo-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                        {isActionLoading ? <Loader2 size={20} className="animate-spin"/> : "Save Changes"}
                    </button>
                    <button type="button" onClick={() => setActiveTab('overview')} className="px-8 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-all">Cancel</button>
                </div>
            </form>
        </div>
    </div>
  );

  // --- MODAL RENDERER ---
  const renderModal = () => {
    if (!showModal.type) return null;
    const isEdit = showModal.type.startsWith('edit');
    const isMed = showModal.type.includes('Med');
    
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <h3 className="text-2xl font-black text-slate-800">{isEdit ? 'Update' : 'Add New'} {isMed ? 'Medication' : 'Appointment'}</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{isEdit ? 'Modifying existing record' : 'Creating new entry'}</p>
                    </div>
                    <button onClick={() => setShowModal({type: null, data: null})} className="p-3 hover:bg-white rounded-2xl transition-colors shadow-sm"><X size={20}/></button>
                </div>
                <div className="p-8">
                    <form onSubmit={isMed ? handleSaveMed : handleSaveAppt} className="space-y-5">
                        {isMed ? (
                            <>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Medication Name</label>
                                    <input name="name" required defaultValue={showModal.data?.name} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none ring-indigo-500 focus:ring-2" placeholder="e.g. Lisinopril" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Dosage</label>
                                        <input name="dosage" required defaultValue={showModal.data?.dosage} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" placeholder="10mg" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Intake Time</label>
                                        <input name="time" type="time" required defaultValue={showModal.data?.time} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Type</label>
                                        <select name="type" defaultValue={showModal.data?.type || 'Daily'} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none appearance-none">
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Supplement</option>
                                            <option>As Needed</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Inventory Count</label>
                                        <input name="inventory" type="number" required defaultValue={showModal.data?.inventory || 30} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Doctor Name</label>
                                    <input name="doctor" required defaultValue={showModal.data?.doctor} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" placeholder="Dr. Smith" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Specialty</label>
                                    <input name="specialty" required defaultValue={showModal.data?.specialty} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" placeholder="Cardiology" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Date</label>
                                        <input name="date" type="date" required defaultValue={showModal.data?.date} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Time</label>
                                        <input name="time" type="time" required defaultValue={showModal.data?.time} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Location</label>
                                    <input name="location" required defaultValue={showModal.data?.location} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-slate-800 outline-none" placeholder="Main Hospital" />
                                </div>
                            </>
                        )}
                        <button type="submit" className={`w-full ${isMed ? 'bg-indigo-600' : 'bg-purple-600'} text-white font-black py-4 rounded-2xl shadow-xl transition-all active:scale-[0.98] mt-4`}>
                            {isEdit ? 'Update Record' : 'Save Entry'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  };

  // --- MAIN APP RENDER ---

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white gap-6">
        <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-100 rounded-full animate-spin border-t-indigo-600"></div>
            <HeartPulse className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600" size={28} />
        </div>
        <div className="text-center space-y-1">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">MedTrack Pro</h1>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest animate-pulse">Initializing health dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50/50 font-sans text-slate-900 overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 hidden xl:flex flex-col sticky top-0 h-screen">
        <div className="flex items-center space-x-3 mb-12 group">
          <div className="p-2 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
            <HeartPulse size={28} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">MedTrack</span>
        </div>

        <nav className="flex-1 space-y-3">
          {[
            { id: 'overview', icon: Activity, label: 'Dashboard' },
            { id: 'meds', icon: Pill, label: 'Cabinet' },
            { id: 'appointments', icon: Calendar, label: 'Visits' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 relative group ${
                activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 font-black' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-indigo-600 font-bold'
              }`}
            >
              <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span>{item.label}</span>
              {activeTab === item.id && <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white shadow-sm"></div>}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-6">
            <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full p-4 rounded-4xl border transition-all flex items-center gap-4 text-left group ${activeTab === 'profile' ? 'bg-indigo-50 border-indigo-100 ring-2 ring-indigo-500/10' : 'bg-white border-slate-100 hover:border-indigo-200 shadow-sm'}`}
            >
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm overflow-hidden">
                    {userData.profilePic ? <img src={userData.profilePic} /> : <User size={24}/>}
                </div>
                <div className="overflow-hidden">
                    <p className="text-xs font-black text-slate-800 truncate">{userData.firstName} {userData.lastName}</p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-tight">VIEW PROFILE</p>
                </div>
                <Settings size={14} className="ml-auto text-slate-300 group-hover:rotate-90 transition-transform" />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 px-4 transition-colors">
                <LogOut size={14}/> Sign Out
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50 px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4 xl:hidden">
             <div className="p-1.5 bg-indigo-600 rounded-xl text-white"><HeartPulse size={20} /></div>
             <h2 className="font-black text-slate-800">MedTrack</h2>
          </div>
          
          <h2 className="hidden xl:block text-2xl font-black text-slate-800 tracking-tight">
            {activeTab === 'overview' && `Hello, ${userData.firstName}`}
            {activeTab === 'meds' && "My Cabinet"}
            {activeTab === 'appointments' && "My Appointments"}
            {activeTab === 'profile' && "Profile Settings"}
          </h2>

          <div className="flex items-center gap-6">
             <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Today</span>
                <span className="text-xs font-bold text-slate-700">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
             </div>
             <button 
                onClick={() => setActiveTab('profile')}
                className="h-11 w-11 bg-white rounded-2xl flex items-center justify-center text-indigo-600 border border-slate-100 shadow-sm hover:border-indigo-500 hover:scale-105 transition-all group"
             >
                <User size={22} className="group-hover:scale-110 transition-transform"/>
             </button>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full flex-1">
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'meds' && <MedsView />}
          {activeTab === 'appointments' && <AppointmentsView />}
          {activeTab === 'profile' && <ProfileView />}
        </div>
      </main>

      {renderModal()}

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
            animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;