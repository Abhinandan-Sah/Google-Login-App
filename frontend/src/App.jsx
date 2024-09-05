import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper= (()=>{
    return(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} >
      <GoogleLogin />
    </GoogleOAuthProvider>
    )
  })

  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <div className='bg-black h-screen text-white flex items-center justify-center'>
      <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        {/* If user to another path other than mention above path then it will redirect to dashboard */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
