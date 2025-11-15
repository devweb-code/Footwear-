import React from 'react'
import { createContext, useContext,useState } from "react";

const ThemeContext = createContext();

// création du contenaire provider
export const ThemeProvider = ({ children }) => {

  const light ="bg-cyan-600";
  const dark ="bg-gray-800";
  const yellow ="bg-yellow-700";  

  const [themeA, setThemeA] = useState(light);
  const [themeB, setThemeB] = useState(dark);
  const [themeC, setThemeC] = useState(yellow);

  const [ShoesA, setShoesA] = useState(false);
  const [ShoesB, setShoesB] = useState(false);
  const [ShoesC, setShoesC] = useState(false);



  return(

    <ThemeContext.Provider value={{ themeA,themeB,themeC,ShoesA,ShoesB,ShoesC,setShoesA,setShoesB,setShoesC }}>
      {children}
    </ThemeContext.Provider>

  );
}
  

export const useTheme = () => useContext(ThemeContext);
