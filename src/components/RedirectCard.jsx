import React from "react";
import "./RedirectCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RedirectCard({ name, path, icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${path}`);
  };

  return (
    <div className="h-[35vh] w-[90%] md:w-[35%] bg-black/50 shadow-white/30 shadow-xl backdrop-blur-sm rounded-lg border border-white/20 flex flex-col text-white items-center justify-around hover:scale-105 transition-all duration-1000">
      <div className="flex gap-5 items-center">
        <img src={icon} alt="" width={300} className="" />
        {/* <p className="text-2xl">{name}</p> */}
      </div>
      <button
        onClick={handleClick}
        className="bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-lg border border-white/20 px-7 py-2 hover:bg-slate-400"
      >
        Start
      </button>
    </div>
  );
}

export default RedirectCard;
