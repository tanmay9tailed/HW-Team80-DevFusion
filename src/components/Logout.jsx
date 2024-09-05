import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({setShowBoard}) => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
      setShowBoard(false);
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <button
      className=" z-50 bg-red-600/80 hover:bg-red-800/90 transition-all duration-200 py-2 px-6 rounded-lg font-bold text-white shadow-xl"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
