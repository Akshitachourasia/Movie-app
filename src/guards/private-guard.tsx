import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "true") {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateGuard;
