"use client"
import { useEffect } from "react";
import { useTheme } from "@/ThemeContext";


export default function ThemeState() {
  const { state } = useTheme();
  /* const dispatch = useThemeDispatch(); */

  console.log(state.userPreferences.theme);

  useEffect(() => {
    
    const rootEl = document.documentElement;
    //rootEl.classList.toggle('dark'); //

    if (state.userPreferences.theme === "dark") {
      rootEl.classList.add("dark");
    } else if (state.userPreferences.theme === "light") { 
      rootEl.classList.remove("dark");
    } else {
      console.log("Unknown Theme for Dark/Light mode");
    }
    
    //document.body.classList.add('dark');
   
  }, [state.userPreferences.theme]); // toggle theme med en knapp, då togglas 'dark' ovanför!

  return null; // void, dont return anything
}