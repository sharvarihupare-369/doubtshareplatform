import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import DoubtForm from "../components/DoubtForm";
import ChatInterface from "./ChatInterface";
import Profile from "../components/Profile";
import PrivateRoute from "../components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/doubtform" element={<DoubtForm />} />
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <ChatInterface />
          </PrivateRoute>
        }
      />
      <Route path="/profile" element={
      <PrivateRoute>
      <Profile />
      </PrivateRoute>
      } />
    </Routes>
  );
};

export default MainRoutes;
