import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 const token = localStorage.getItem("doubt-token") || "";
 return  (
  token ?  children  : <Navigate to="/login" />
 )
};

export default PrivateRoute;
