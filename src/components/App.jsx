import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import AdNews from "./AdNews";
import NewsR from "./NewsRoom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add" element={<AdNews />} />
        <Route path="/news" element={<NewsR />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
const arr = ["iet@bitclubconnect", "ieee@bitclubconnect"];
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (arr.find(admin.user.email) !== undefined) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
