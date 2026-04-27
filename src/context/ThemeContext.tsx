import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeMode } from '../theme';

interface ThemeContextType { theme: ThemeMode; toggleTheme: () => void; setTheme: (theme: ThemeMode) => void; isTransitioning: boolean; }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_KEY = "@audiox_theme";

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  useEffect(() => { AsyncStorage.getItem(THEME_KEY).then(t => t==="light"&&setThemeState("light")).catch(()=>{}); }, []);
  const setTheme = (newTheme: ThemeMode) => { setThemeState(newTheme); AsyncStorage.setItem(THEME_KEY, newTheme).catch(()=>{}); };
  const toggleTheme = () => setTheme(theme==="dark"?"light":"dark");
  return <ThemeContext.Provider value={{theme, toggleTheme, setTheme, isTransitioning:false}}>{{children}}</ThemeContext.Provider>;
};
export const useTheme = () => { const c = useContext(ThemeContext); if(!c) throw new Error("useTheme must be used within ThemeProvider"); return c; };
