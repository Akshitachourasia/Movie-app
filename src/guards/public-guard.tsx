import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PublicGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "true") {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default PublicGuard;
