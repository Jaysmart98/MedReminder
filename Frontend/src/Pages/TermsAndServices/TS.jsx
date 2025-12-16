import React from 'react';
import { Pill, BookOpen, Clock } from 'lucide-react';

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-inter">
            {/* Header Section */}
            <header className="max-w-4xl mx-auto py-8 text-center border-b border-gray-200">
                <div className="flex items-center justify-center space-x-3 text-blue-600">
                    <Pill className="w-8 h-8" />
                    <h1 className="text-4xl font-extrabold tracking-tight">MedTrack</h1>
                </div>
                <h2 className="text-xl font-semibold mt-4 text-gray-800 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 mr-2 text-cyan-600" />
                    Terms of Service
                </h2>
                <p className="text-sm text-gray-500 mt-2 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Last Updated: December 16, 2025
                </p>
            </header>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto mt-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-gray-100">

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">1. Acceptance of Terms</h3>
                    <p className="text-gray-600 leading-relaxed">
                        By accessing or using the MedTrack service, you signify that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">2. Use of the Service</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        MedTrack is a health tracking and reminder service. It is designed to assist you in managing your medication schedule and health metrics.
                    </p>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">2.1. Medical Disclaimer</h4>
                    <p className="text-red-600 font-medium p-3 bg-red-50 rounded-lg border border-red-200">
                        The information provided by MedTrack is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this Service.
                    </p>
                    <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">2.2. User Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>You are responsible for maintaining the confidentiality of your account password.</li>
                        <li>You agree to provide accurate and complete information when registering.</li>
                        <li>You must be at least 18 years old to use the Service, or have permission from a guardian.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">3. Intellectual Property</h3>
                    <p className="text-gray-600 leading-relaxed">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of MedTrack and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MedTrack.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">4. Termination</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">5. Governing Law</h3>
                    <p className="text-gray-600 leading-relaxed">
                        These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-gray-700 mb-3 border-b pb-2">6. Changes to Terms</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>
            </div>
            
            <footer className="max-w-4xl mx-auto mt-10 py-4 text-center text-xs text-gray-400">
                <p>For questions regarding these terms, please contact us at support@medtrackapp.com</p>
                <p className='mt-1'>© 2025 MedTrack. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TermsOfServicePage;