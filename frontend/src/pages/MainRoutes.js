import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import DoubtForm from "../components/DoubtForm";
import ChatInterface from "./ChatInterface";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doubtform" element={<DoubtForm />} />
      <Route path="/chat" element={<ChatInterface />} />
    </Routes>
  );
};

export default MainRoutes;
