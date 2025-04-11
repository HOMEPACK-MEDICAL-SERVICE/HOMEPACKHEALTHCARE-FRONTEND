
import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './pages/user/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* routes for the user homepage */}
          <Route path='/' element={<RootLayout/>}>
            <Route index={true} element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Route>

          {/* dashboard routes */}
          <Route path='/dashboard' element={<DashboardLayout/>} >
          <Route index={true} element={<Overview/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
