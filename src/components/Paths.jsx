import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Board from "./Board";
import Login from "./Login";
import { auth } from "./firebase";
import Banner from "./Banner";
import GameDashboard from "./GameDashboard";
import ChatBot from "./ChatBot";
import NewLevels from "./NewLevels";
import levels from "../json/levels.json";
import Level from "./Level";
import Articles from "./Articles";
import WordSramble from "./WordSramble";
import News from "./News/News";
import About from "./About/About";
import WelcomeAnimation from "./WelcomeAnimation";
import Menu from "./Menu";
import Feedback from "./Feedback/Feedback";

const AppRoutes = ({ user }) => {
  const [showBoard, setShowBoard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/board") {
      const timer = setTimeout(() => {
        setShowBoard(true);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/board" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={showBoard ? <Board /> : <WelcomeAnimation />} />
        <Route path="/about-creators" element={<Banner />} />
        <Route path="/game-dashboard" element={<GameDashboard />} />
        <Route path="/levels" element={<NewLevels />} />
        <Route path="/levels/:level" element={<LevelWithParams />} />
        <Route path="/all-languages-pdf" element={<Articles />} />
        <Route path="/word-scramble" element={<WordSramble />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      {user && <ChatBot />}
      {user && <Menu setShowBoard={setShowBoard}/>}
    </>
  );
};

const LevelWithParams = () => {
  const { level } = useParams();
  const levelData = levels.levels.find((data) => data.level === parseInt(level));

  return levelData ? <Level data={levelData} /> : <div className="text-white">Level coming soon...</div>;
};

const Paths = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <AppRoutes user={user} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Paths;
