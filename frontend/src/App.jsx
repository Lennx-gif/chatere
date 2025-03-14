// Desc: Main App component
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import { useAuthStore } from './atore/useAuthStore.js'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'
import { Navigate } from 'react-router-dom'

const App = () => {
  const {checkAuth,authUser,} = useAuthStore();
  useEffect (()=>{
    checkAuth;
  },[checkAuth]);

  console.log(authUser);

  //if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen '>

      <Loader className='size-10 animate-spin'></Loader> 
    </div>
 // )



  return (
    
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ? <HomePage />:<Navigate to = "/login"/>} />
        <Route path="/signup" element={authUser ? <SignUpPage /> :<Navigate to = ''/>} />
        <Route path="/login" element={authUser ? <LoginPage />:<Navigate to = "/"/>} />
        <Route path="/settings" element={ <SettingsPage /> } />
        <Route path="/profile" element={authUser ? <ProfilePage />:<Navigate to = "/login"/>} />

      </Routes>
        
    </div>
  )
};

export default App;