export type ThemeContextType = {
  theme: { [key: string]: any };
  toggleTheme: () => void;
  isDark: boolean;
};
