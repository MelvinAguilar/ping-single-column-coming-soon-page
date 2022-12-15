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
    <label className="absolute top-6 right-6 h-6 w-6 md:top-10 md:right-10">
      <input
        type="checkbox"
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
        checked={darkMode}
        aria-label="Dark mode"
        onChange={() => setDarkMode(!darkMode)}
      />

      {darkMode ? (
        <FaSun
          className="h-6 w-6 text-custom-gray"
          aria-hidden="true"
          focusable="false"
        />
      ) : (
        <FaMoon
          className="h-6 w-6 text-custom-gray"
          aria-hidden="true"
          focusable="false"
        />
      )}
    </label>
  );
};

export default ToggleThemeButton;
