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
        backdrop-blur-lg
        bg-gradient-to-r from-white/70 to-gray-100/60
        dark:from-[#0c1b2e]/90 dark:to-[#0f243d]/90
        border-b border-gray-200 dark:border-white/10
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-widest text-gray-800 dark:text-white">
          AIM
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="
                text-sm font-medium
                text-gray-700 dark:text-gray-200
                transition-all duration-200
                hover:text-blue-600 dark:hover:text-teal-400
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-5">

          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span className="opacity-80">EN</span>

            <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer transition-colors">
              <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 shadow-md transition-all"></div>
            </div>

            <span className="opacity-80">AR</span>
          </div>

          {/* Phone Button */}
          <button
            className="
              w-9 h-9 flex items-center justify-center
              rounded-full
              bg-blue-500
              text-white
              transition-transform duration-200
              hover:scale-105
            "
          >
            <Phone size={16} />
          </button>

          {/* Theme Toggle */}
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700 text-white">
            <Toggle />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;