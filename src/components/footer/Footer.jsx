import {
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C466B] text-white pt-16 pb-10 px-8 md:px-20">

      <div className="max-w-7xl mx-auto">

        {/* AIM Title */}
        <div className="flex justify-center mb-14">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-[0.4em]">
            AIM
          </h1>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold">
              AIM IT Services Co.
            </h3>

            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              KSA-based IT services and manpower consulting
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              {[Youtube, Facebook, Twitter, Instagram, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center
                      border border-white/40 rounded-full
                      hover:bg-white hover:text-[#2C466B]
                      transition duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">IT Services</a></li>
              <li><a href="#" className="hover:text-white transition">Manpower Consulting</a></li>
              <li><a href="#" className="hover:text-white transition">Cloud & Managed Services</a></li>
              <li><a href="#" className="hover:text-white transition">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition">AI & Automation</a></li>
              <li><a href="#" className="hover:text-white transition">Industry 4.0</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Why AIM</a></li>
              <li><a href="#" className="hover:text-white transition">Vision 2030</a></li>
              <li><a href="#" className="hover:text-white transition">Industries</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-14 mb-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">

          <p>
            Copyright © {new Date().getFullYear()} AIM IT Services Co. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}