import {
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        pt-16 pb-10 px-8 md:px-20
        transition-colors duration-300

        /* LIGHT THEME */
        bg-[#EEF2F6] text-[#1F3552]

        /* DARK THEME (UNCHANGED) */
        dark:bg-[#2C466B] dark:text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* AIM Title */}
        <div className="flex justify-center mb-14">
          <h1
            className="
              text-6xl md:text-7xl font-semibold tracking-[0.4em]
              text-[#1F3552]
              dark:text-white
            "
          >
            AIM
          </h1>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LEFT COLUMN */}
          <div>
            <h3 className="text-xl font-semibold">
              AIM IT Services Co.
            </h3>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              KSA-based IT services and manpower consulting
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              {[Youtube, Facebook, Twitter, Instagram, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-10 h-10 flex items-center justify-center
                      rounded-full transition duration-300

                      /* LIGHT */
                      border border-[#1F3552]/30
                      hover:bg-[#1F3552]
                      hover:text-white

                      /* DARK (UNCHANGED) */
                      dark:border-white/40
                      dark:hover:bg-white
                      dark:hover:text-[#2C466B]
                    "
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold mb-6">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {[
                "IT Services",
                "Manpower Consulting",
                "Cloud & Managed Services",
                "Cybersecurity",
                "AI & Automation",
                "Industry 4.0",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="
                      transition
                      hover:text-[#1F3552]
                      dark:hover:text-white
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {[
                "About Us",
                "Why AIM",
                "Vision 2030",
                "Industries",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="
                      transition
                      hover:text-[#1F3552]
                      dark:hover:text-white
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1F3552]/20 dark:border-white/20 mt-14 mb-6"></div>

        {/* Bottom Row */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between items-center
            text-sm gap-4
            text-gray-600 dark:text-gray-300
          "
        >
          <p>
            Copyright © {new Date().getFullYear()} AIM IT Services Co.
            All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-[#1F3552] dark:hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#1F3552] dark:hover:text-white transition"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}