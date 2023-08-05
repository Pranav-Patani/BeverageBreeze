import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
