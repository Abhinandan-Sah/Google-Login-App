import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* If user to another path other than mention above path then it will redirect to dashboard */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
