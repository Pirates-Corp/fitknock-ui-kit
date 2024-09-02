import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { ThemeContextType } from './ThemeContext.types';



const ThemeContextInitialValues = {
  theme: {},
  toggleTheme: () => {},
  isDark: false,
};

//Context
export const ThemeContext = createContext<ThemeContextType>(
  ThemeContextInitialValues
);

//Provider
export const ThemeProvider = ({ themeValues, children }: any) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themeValues.dark : themeValues.light;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
