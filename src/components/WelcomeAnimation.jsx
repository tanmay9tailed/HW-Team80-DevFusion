import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

gsap.registerPlugin(useGSAP);

const WelcomeAnimation = () => {
  const container = useRef();
  const windowWidth = window.innerWidth;

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data().name);
        } else {
          console.log("User document does not exist");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
    
  }, []);

  useGSAP(() => {
    const x = window.innerWidth/2
    const t2 = gsap.timeline();
    t2.from(".loading span", {
      duration: 2,
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      ease: "bounce.out",
    }).to(".loading #middle", {
      delay: 0.5,
      duration: 4,
      x: windowWidth > 600 ? 3900 : x+1200,
      scale: 300,
    });
  });

  return (
    <div
      id="loading"
      ref={container}
      className="h-screen w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 text-white relative overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      >
        <source src="/flag.mp4" type="video/mp4" />
      </video>

      <div className="loading h-full w-full absolute z-10 flex items-center justify-center sm:text-9xl text-5xl font-rubikIso scale-150 font-extrabold text-white">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span id="middle">C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>

      {userDetails && (
        <h1 className="absolute bottom-[20%] text-center w-full sm:text-6xl text-3xl font-rubikIso scale-150 font-extrabold uppercase z-10 text-white">
          {userDetails.name}
        </h1>
      )}
    </div>
  );
};

export default WelcomeAnimation;
