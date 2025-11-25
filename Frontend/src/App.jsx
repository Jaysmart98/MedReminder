import { Route , Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'


function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
