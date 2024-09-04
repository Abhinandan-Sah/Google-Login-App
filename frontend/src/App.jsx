import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const GoogleAuthWrapper= (()=>{
    return(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} >
      <GoogleLogin />
    </GoogleOAuthProvider>
    )
  })

  return (
    <div className='bg-black h-screen text-white flex items-center justify-center'>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* If user to another path other than mention above path then it will redirect to dashboard */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
