import { Phone } from "lucide-react";
import Toggle from "./Toggle";

const Nav = () => {
  const navItems = [
    "Home",
    "Services",
    "Industries",
    "Careers",
    "About Us",
    "Contact Us",
  ];

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl
        bg-white/30 dark:bg-black/40
        border-b border-white/20 dark:border-white/10
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-22">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white dark:text-white">
          AIM
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`
                px-5 py-2 rounded-md text-sm font-medium
                text-white dark:text-white
                transition-all duration-300
                hover:bg-white/25 dark:hover:bg-white/10
                hover:scale-105
                ${
                  item === "Careers"
                    ? "bg-white/25 dark:bg-white/10 shadow-lg shadow-blue-500/30"
                    : ""
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* Language Toggle UI */}
          <div className="hidden sm:flex items-center gap-2 text-white text-sm">
            <span>EN</span>
            <div className="w-10 h-5 bg-gray-700 dark:bg-gray-600 rounded-full relative cursor-pointer">
              <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5"></div>
            </div>
            <span>AR</span>
          </div>

          {/* Phone Button */}
          <button
            className="
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-teal-400 text-white
              hover:scale-110
              transition-transform duration-300
              shadow-md
            "
          >
            <Phone size={18} />
          </button>

          {/* Theme Toggle */}
          <Toggle />

        </div>
      </div>
    </nav>
  );
};

export default Nav;