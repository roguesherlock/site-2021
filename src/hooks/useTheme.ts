import { useCallback, useEffect, useState } from "react";

type themeType = "light" | "dark";

const lightColor = "#3ef4e8";
const darkColor = "#081d6a";

export default function useTheme() {
  const [theme, setTheme] = useState<themeType | null>(null);

  const setCurrentTheme = useCallback(
    (theme: themeType = "light") => {
      const root = document.documentElement;
      let primary = lightColor;
      let secondary = darkColor;
      if (theme === "dark") {
        primary = darkColor;
        secondary = lightColor;
      }
      root.style.setProperty("--color-primary", primary);
      root.style.setProperty("--color-secondary", secondary);
      localStorage.setItem("preferredTheme", theme);
      setTheme(theme);
    },
    [theme, setTheme]
  );

  const toggleTheme = useCallback(
    () =>
      theme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light"),
    [theme, setCurrentTheme]
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem(
      "preferredTheme"
    ) as themeType | null;
    if (currentTheme) {
      setCurrentTheme(currentTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);
  return { theme, toggleTheme, setCurrentTheme } as const;
}
