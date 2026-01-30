import { Routes, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp/SignUp.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import TermsOfService from './Pages/TermsAndServices/TermsOfService.jsx';
import EmailVerified from './Pages/EmailVerified/EmailVerified.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/email-verified" element={<EmailVerified />} />
      </Routes>
    </>
  );
}

export default App;
