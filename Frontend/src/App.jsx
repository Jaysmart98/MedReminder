import { Route , Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import LandingPage from '../src/Pages/LandingPage/LandingPage.jsx'
import TermsOfServicePage from './Pages/TermsAndServices/TS.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
         <Route path='/signup' element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/terms-of-service" element={<TermsOfServicePage/>}/>
      </Routes>
    </>
  )
}

export default App
