import React from 'react';
import { Pill, BookOpen, Clock, AlertTriangle } from 'lucide-react';
import "tailwindcss";

const TermsOfServicePage = () => {

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans antialiased">
            
            <header className="max-w-5xl mx-auto py-8 text-center border-b-2 border-indigo-100 mb-10">
                <div className="flex items-center justify-center space-x-3 text-emerald-600">
                    <Pill className="w-9 h-9 sm:w-10 sm:h-10 text-indigo-500" />

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">MedTrack</h1>
                </div>
                
                <h2 className="text-2xl font-semibold mt-4 text-slate-800 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 mr-2 text-emerald-500"/> 
                    Terms of Service
                </h2>
                <p className="text-sm text-slate-500 mt-2 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1 text-slate-400" /> 
                    Last Updated: December 16, 2025
                </p>
            </header>

            <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100">

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">1. Acceptance of Terms</h3>
                    <p className="text-slate-600 leading-relaxed">
                        By accessing or using the MedTrack service, you signify that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">2. Use of the Service</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        MedTrack is a health tracking and reminder service. It is designed to assist you in managing your medication schedule and health metrics.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">2.1. Medical Disclaimer</h4>
                    <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg flex items-start space-x-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-amber-700 font-medium leading-normal">
                            The information provided by MedTrack is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this Service.
                        </p>
                    </div>

                    <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-3">2.2. User Responsibilities</h4>
                    <ul className="list-inside space-y-3 text-slate-600">
                        <li className="flex items-start">
                            <span className="text-emerald-500 mr-2">&#10003;</span>
                            You are responsible for maintaining the confidentiality of your account password.
                        </li>
                        <li className="flex items-start">
                             <span className="text-emerald-500 mr-2">&#10003;</span>
                            You agree to provide accurate and complete information when registering.
                        </li>
                        <li className="flex items-start">
                             <span className="text-emerald-500 mr-2">&#10003;</span>
                            You must be at least 18 years old to use the Service, or have permission from a guardian.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">3. Intellectual Property</h3>
                    <p className="text-slate-600 leading-relaxed">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of MedTrack and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MedTrack.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">4. Termination</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">5. Governing Law</h3>
                    <p className="text-slate-600 leading-relaxed">
                        These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-emerald-100 pb-2">6. Changes to Terms</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>
            </div>
            
            <footer className="max-w-5xl mx-auto mt-12 py-6 text-center text-sm text-slate-400">
                <p>For questions regarding these terms, please contact us at <a href="mailto:support@medtrackapp.com" className="text-indigo-400 hover:text-indigo-600 transition duration-150">support@medtrackapp.com</a></p>
                <p className='mt-2'>&copy; 2025 MedTrack. All rights reserved.</p>
            </footer>
        </div>
    );
};

const TermsOfService = () => {
    return <TermsOfServicePage />;
};

export default TermsOfService;