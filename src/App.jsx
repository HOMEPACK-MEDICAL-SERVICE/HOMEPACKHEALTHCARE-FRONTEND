
import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './pages/user/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Profile from './pages/dashboard/Profile'
import Doctors from './pages/dashboard/Doctors'
import Appointments from './pages/dashboard/Appointments'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#4caf50", // Green for success
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#4caf50",
            },
          },
          error: {
            style: {
              background: "#f44336", // Red for error
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#f44336",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          {/* routes for the user homepage */}
          <Route path="/" element={<RootLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Overview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="appointments" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
