import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Meetdev from "./Meet-devs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRouteForAdmin>
            <Meetdev />
          </ProtectedRouteForAdmin>
        } />
      </Routes>
    </Router>
  );
}
export default App;

const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user');
  if(user){
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}
const arr = [
  "iet@bitclubconnect.com", "ieee@bitclubconnect.com" 
];
const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'));
  if(arr.includes(admin.user.email)){
    return children;
  }
  else{
    return (
      <Navigate to={"/login"} />
    )
  }
}