import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if ((userTheme && userTheme === "dark") || (!userTheme && systemTheme)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="absolute top-6 right-6 md:top-10 md:right-10"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FaSun className="h-6 w-6 text-custom-gray" />
      ) : (
        <FaMoon className="h-6 w-6 text-custom-gray" />
      )}
    </button>
  );
};

export default ToggleThemeButton;
