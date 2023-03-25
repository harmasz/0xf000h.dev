import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const body = document.documentElement;
    body.setAttribute("class", theme);
  }, [theme]);

  return (
    <div
      className="pr-4 cursor-pointer dark:text-gray-300"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
    </div>
  );
};

export default ThemeSwitcher;
