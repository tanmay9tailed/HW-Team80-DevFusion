import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "../store/LanguageStore";

const English = {
  creator: "Creators",
  miniGames: "MiniGames",
  news: "News",
  about: "About",
  articles: "Articles",
};

const Hindi = {
  creator: "रचनाकारों",
  miniGames: "मिनीगेम्स",
  news: "समाचार",
  about: "के बारे में",
  articles: "सामग्री",
};

const Odia = {
  creator: "ସୃଷ୍ଟିକର୍ତ୍ତା",
  miniGames: "ମିନିଗାମସ୍",
  news: "ସମ୍ବାଦ",
  about: "ବିଷୟରେ",
  articles: "ପ୍ରବନ୍ଧଗୁଡିକ",
};

const Board = () => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState("/pngwing.com.png");
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ left: "50%", top: "20%", transformX: "-50%" });

  const { language } = useContext(LanguageContext);
  let lang = English;
  if (language == "English") lang = English;
  else if (language == "Hindi") lang = Hindi;
  else if (language == "Odia") lang = Odia;

  useEffect(() => {
    const home = document.querySelector("#home");
    const player = document.querySelector("#player");
    const profile = document.querySelector("#profile");
    const quizDivs = document.querySelectorAll(".quiz-div");

    const movePlayer = (current, target, axis, onComplete) => {
      const diff = target - current;
      if (Math.abs(diff) > 1) {
        const newPosition = current + diff / 10;
        player.style[axis] = `${newPosition}px`;

        requestAnimationFrame(() => movePlayer(newPosition, target, axis, onComplete));
      } else {
        if (onComplete) onComplete();
      }
    };

    const checkOverlap = () => {
      const playerRect = player.getBoundingClientRect();

      const isOverlap = (element) => {
        const elementRect = element.getBoundingClientRect();
        return !(
          playerRect.right < elementRect.left ||
          playerRect.left > elementRect.right ||
          playerRect.bottom < elementRect.top ||
          playerRect.top > elementRect.bottom
        );
      };

      quizDivs.forEach((quizDiv) => {
        if (isOverlap(quizDiv)) {
          console.log("Entered element with id:", quizDiv.id);
          if (quizDiv.id === "mini-games") {
            setTimeout(() => {
              navigate("/game-dashboard");
            }, 500);
          }
          if (quizDiv.id === "all-languages-pdf") {
            setTimeout(() => {
              navigate("/all-languages-pdf");
            }, 500);
          }
          if (quizDiv.id === "news-bulletien") {
            setTimeout(() => {
              navigate("/news");
            }, 500);
          }
          if (quizDiv.id === "about-us") {
            setTimeout(() => {
              navigate("/about");
            }, 500);
          }
        }
      });

      if (isOverlap(profile)) {
        console.log("Entered profile area");
        setTimeout(() => {
          navigate("/about-creators");
          console.log("profile");
        }, 1000);
      }
    };

    const handleClick = (e) => {
      setImgSrc("/rocket.png");

      const targetX = e.clientX - player.clientWidth / 2;
      const targetY = e.clientY - player.clientHeight / 2;

      const playerRect = player.getBoundingClientRect();
      const currentX = playerRect.left + player.clientWidth / 2;
      const currentY = playerRect.top + player.clientHeight / 2;

      const angle = Math.atan2(targetY - currentY, targetX - currentX) * (180 / Math.PI);
      setRotation(angle + 90);

      let xComplete = false;
      let yComplete = false;

      movePlayer(currentX, targetX, "left", () => {
        xComplete = true;
        if (xComplete && yComplete) {
          setImgSrc("/pngwing.com.png");
          setRotation(0);
          setPosition({ left: `${targetX}px`, top: `${targetY}px`, transformX: "0%" });
          checkOverlap();
        }
      });

      movePlayer(currentY, targetY, "top", () => {
        yComplete = true;
        if (xComplete && yComplete) {
          setImgSrc("/pngwing.com.png");
          setRotation(0);
          setPosition({ left: `${targetX}px`, top: `${targetY}px`, transformX: "0%" });
          checkOverlap();
        }
      });
    };

    home.addEventListener("click", handleClick);

    return () => {
      home.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <>
      <div
        id="home"
        className="h-screen w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 to-100% relative overflow-hidden"
        style={{
          backgroundImage: `url("/gamebg.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
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
        <div
          id="player"
          className="absolute h-[20px] w-[20px] z-50 overflow-visible"
          style={{
            left: position.left,
            top: position.top,
            transform: `rotate(${rotation}deg)`,
            filter: "drop-shadow(0 0 0.25rem black)",
          }}
        >
          <img
            className="absolute h-[80px] min-w-[80px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={imgSrc}
            alt="player"
          />
        </div>

        <div
          id="profile"
          className="absolute bg-blue-100/80 shadow-[#ffffff39] shadow-xl h-48 w-48 rounded-full z-[1] flex justify-center items-center text-4xl font-bold cursor-pointer text-black/80"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%)`,
          }}
        >
          <FlipLink2 className="text-xs">{lang.creator}</FlipLink2>
        </div>
        <div className="h-full w-full grid grid-cols-2 gap-1 items-center">
          <div
            id="mini-games"
            className="quiz-div bg-transparent text-white shadow-black shadow-xl h-[300px] w-2/3 mx-auto rounded relative border border-black"
          >
            <img src="data:image/jpeg;base64,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" alt="" className="object-cover h-full w-full opacity-70" />
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-7xl font-extrabold text-slate-900 flex flex-col text-2xl text-center gap-[-10px] capitalize sm:normal-case sm:flex-row cursor-pointer">
              <FlipLink className="text-sm">{lang.miniGames}</FlipLink>
            </h1>
          </div>
          <div
            id="news-bulletien"
            className="quiz-div bg-transparent shadow-black shadow-xl h-[300px] w-2/3 mx-auto rounded relative"
          >
            <img src="data:image/jpeg;base64,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" alt="" className="object-cover w-full h-full opacity-70" />
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-7xl font-extrabold text-slate-900 flex flex-col text-2xl text-center gap-[-10px] capitalize sm:normal-case sm:flex-row cursor-pointer">
              <FlipLink className="text-sm">{lang.news}</FlipLink>
            </h1>
          </div>
          <div
            id="about-us"
            className="quiz-div bg-transparent shadow-black shadow-xl h-[300px] w-2/3 mx-auto rounded relative"
          >
            <img src="https://www.holidayrider.com/wp-content/uploads/2019/01/optimized-rkff.jpg" alt="" className="object-cover h-full w-full opacity-70" />
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-7xl font-extrabold text-slate-900 flex flex-col text-2xl text-center gap-[-10px] capitalize sm:normal-case sm:flex-row cursor-pointer">
              <FlipLink className="text-sm">{lang.about}</FlipLink>
            </h1>
          </div>
          <div
            id="all-languages-pdf"
            className="quiz-div bg-transparent shadow-black shadow-xl h-[300px] w-2/3 mx-auto rounded relative"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg" alt="" className="object-cover h-full w-full opacity-70" />
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-7xl font-extrabold text-slate-900 flex flex-col text-2xl text-center gap-[-10px] capitalize sm:normal-case sm:flex-row cursor-pointer">
              <FlipLink className="text-sm">{lang.articles}</FlipLink>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const segmenter = new Intl.Segmenter("hi", { granularity: "grapheme" });
  const segments = Array.from(segmenter.segment(children)).map((segment) => segment.segment);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-4xl md:text-5xl lg:text-7xl text-white/90 drop-shadow-2xl shadow-black"
      style={{
        lineHeight: 1.3,
        filter: "drop-shadow(0 0 0.45rem black)",
      }}
    >
      <div>
        {segments.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {segments.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const FlipLink2 = ({ children, href }) => {
  const segmenter = new Intl.Segmenter("hi", { granularity: "grapheme" });
  const segments = Array.from(segmenter.segment(children)).map((segment) => segment.segment);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-3xl"
      style={{
        lineHeight: 1.35,
      }}
    >
      <div>
        {segments.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {segments.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
