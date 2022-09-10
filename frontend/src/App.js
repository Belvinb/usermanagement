import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandinPage/LandingPage";
import Loginpage from "./components/LoginPage/Loginpage";
import SignupPage from "./components/SignupPage/SignupPage";
import HomePage from "./components/HomePage/HomePage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminLanding from "./components/AdminLanding/AdminLanding";
import EditUser from "./components/AdminDashboard/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<Loginpage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/admin" element={<AdminLanding />} exact />
        <Route path="/admindashboard" element={<AdminDashboard />} exact />
        <Route path="/edit/:userId" element={<EditUser />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
