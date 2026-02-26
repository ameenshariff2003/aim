import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Toggle = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="
        w-10 h-10 flex items-center justify-center
        rounded-full
        bg-white/20 dark:bg-gray-700/40
        backdrop-blur-md
        text-white
        hover:scale-110
        transition-all duration-300
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default Toggle;