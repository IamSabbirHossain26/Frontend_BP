import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Clear context
    localStorage.removeItem("loggedInUser"); // Clear localStorage
    navigate("/login"); // Redirect to login page
  }, [logout, navigate]);

  return null; // No UI needed
}
