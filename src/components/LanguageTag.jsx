import React, { useContext } from 'react'
import { LanguageContext } from "../store/LanguageStore";

function LanguageTag() {

  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange} className="cursor-pointer hover:bg-zinc-900/50 z-50 bg-zinc-600/50 text-white border-none outline-none px-4 py-2 font-semibold rounded-md">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Odia">Odia</option>
        </select>
    </div>
  )
}

export default LanguageTag
