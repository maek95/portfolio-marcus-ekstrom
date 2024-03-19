"use client"
import { useEffect } from "react";
import { useTheme } from "@/ThemeContext";


export default function ThemeState() {
  const { state } = useTheme();
  /* const dispatch = useThemeDispatch(); */

  console.log(state);
  console.log(state.userPreferences.theme);

  useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
    
    const rootEl = document.documentElement;
    //rootEl.classList.toggle('dark'); //

    if (state.userPreferences.theme === "light") {
      rootEl.classList.add("dark");
    } else if (state.userPreferences.theme === "dark") { 
      rootEl.classList.remove("dark");
    } else {
      console.log("Unknown Theme for Dark/Light mode");
    }
    
    //document.body.classList.add('dark');
   
  }, [state.userPreferences.theme]); // toggle theme med en knapp, då togglas 'dark' ovanför!

  // dont have to return anything?
}