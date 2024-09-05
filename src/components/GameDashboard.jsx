import React from 'react';
import RedirectCard from './RedirectCard';
import { faCircleQuestion,faSpellCheck } from '@fortawesome/free-solid-svg-icons'; 

function GameDashboard() {
  const values = [
    { name: "QUIZ", path: "/levels", icon: "./quizz.gif"}, 
    // { name: "CROSSWORD", path: "/quiz", icon:faSpellCheck  },
    // { name: "SNVI", path: "/quiz",icon:faSpellCheck },
    { name: "SCRAMBLE", path: "/word-scramble" , icon: "./Scramble.gif"}
  ];

  return (
    <div className="bg-[url('/back2.png')] bg-cover h-screen bg-center font-medium text-xl">
      {/* <Navbar /> */}
      <div className="h-[84vh] flex flex-wrap justify-center gap-8 items-center p-10">
        {values.map((item, i) => (
          <RedirectCard key={i} name={item.name} path={item.path} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default GameDashboard;
