import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Meetdev from "./Meet-devs";
=======
import AdNews from "./AdNews";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
>>>>>>> 7d178c523fa1cd25a8fa2778c5b75a138622e3ee
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
<<<<<<< HEAD
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
=======
        <Route path="/add" element={<AdNews />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
>>>>>>> 7d178c523fa1cd25a8fa2778c5b75a138622e3ee
      </Routes>
    </Router>
  );
}
export default App;

<<<<<<< HEAD
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
=======
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
>>>>>>> 7d178c523fa1cd25a8fa2778c5b75a138622e3ee
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
<<<<<<< HEAD
  else{
    return (
      <Navigate to={"/login"} />
    )
=======
};
const arr = ["iet@bitclubconnect", "ieee@bitclubconnect"];
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (arr.find(admin.user.email) !== undefined) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
>>>>>>> 7d178c523fa1cd25a8fa2778c5b75a138622e3ee
  }
};
