"use client"
import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext(null);
const ThemeDispatchContext = createContext(null);

// > Build optimization failed: found page without a React Component as default export in pages/ThemeContext...
// I got this error when Vercel tried to deploy the website and do 'npm run build'...? 

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);

const initialState = {
  //theme: "light",
  userPreferences: {
    theme: "light", // TODO: we can set initial state to "dark" but we'll see a small flash of white before it runs its useEffect. Need server-side pre-rendering?
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case 'change_theme': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        theme: action.theme,
        }
      }
    };
    case 'change_fontSize': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        fontSize: action.fontSize,
        } 
      }
    }
    case 'change_reduceAnimations': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        reduceAnimations: action.reduceAnimations
        } 
      } 
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const ThemeProvider = ({ children }) => {
  // your code here
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{state}}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
};

