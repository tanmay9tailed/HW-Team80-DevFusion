import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageTag from "./LanguageTag";
import Logout from "./Logout";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Menu = ({ setShowBoard }) => {
  const navigate = useNavigate();
  const [openSetting, setOpenSetting] = useState(false);

  const toggleMenu = () => {
    setOpenSetting(!openSetting);
  };

  return (
    <div className="relative">
      <button
        className={`fixed top-2 sm:top-5 right-2 sm:right-14 py-3 px-4  font-extrabold rounded-lg shadow  focus:outline-none focus:ring-2  z-50 transition-colors duration-500 font-bold font-mono ${
          openSetting
            ? "bg-red-600/90 hover:bg-red-700 hover:text-white font-extrabold focus:ring-red-900 "
            : "bg-white/90 text-black hover:bg-white hover:text-black focus:ring-white focus:ring-opacity-50"
        }`}
        onClick={toggleMenu}
      >
        {openSetting ? <RxCross1 className="font-extrabold" /> : <RxHamburgerMenu />}
      </button>
      <AnimatePresence>
        {openSetting && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-2 sm:right-14 bg-white/60 rounded-lg shadow-lg p-8 text-black border-white/70 border-2 z-50"
          >
            <div className="mb-4">
              <Logout setShowBoard={setShowBoard} />
            </div>
            <div
              className="py-2 px-5 bg-white/30 border cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 border-gray-300 rounded-lg mb-4 text-black/80 font-bold"
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </div>
            <div className="">
              <LanguageTag />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
