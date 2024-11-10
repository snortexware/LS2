// ProtectedRoute component
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token && token !== "null" && token !== "undefined";
};

const ProtectedRoute = ({ children }) => {
  // If not authenticated, redirect to login
  if (!isAuthenticated()) {
    return <Navigate to="/entrar" replace />;
  }
  
  return children; 
};

export default ProtectedRoute;
