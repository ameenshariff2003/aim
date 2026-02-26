import { Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Form() {
  return (
    <section className="w-full py-24 px-6 md:px-16 
      bg-[#0B223D] dark:bg-[#071C33] 
      text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            Ready to Get <br /> Started?
          </h2>

          <p className="mt-6 text-gray-300 max-w-md text-sm leading-relaxed">
            Let’s discuss how AIM IT Services can support your
            IT and workforce needs.
          </p>

          {/* Info Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Email */}
            <div className="bg-white/5 dark:bg-white/5 
              backdrop-blur-md 
              p-6 rounded-xl border border-white/10
              hover:border-blue-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <Mail size={18} />
                <span className="font-medium">Email</span>
              </div>
              <p className="text-sm text-gray-300">
                contact@aimitworld.com
              </p>
            </div>

            {/* Website */}
            <div className="bg-white/5 backdrop-blur-md 
              p-6 rounded-xl border border-white/10
              hover:border-blue-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <Globe size={18} />
                <span className="font-medium">Website</span>
              </div>
              <p className="text-sm text-gray-300">
                www.aimitworld.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-md 
              p-6 rounded-xl border border-white/10
              hover:border-blue-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <Phone size={18} />
                <span className="font-medium">Phone</span>
              </div>
              <p className="text-sm text-gray-300">
                +91 1234567890
              </p>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-md 
              p-6 rounded-xl border border-white/10
              hover:border-blue-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <MapPin size={18} />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-sm text-gray-300">
                Kingdom of Saudi Arabia
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 
                border border-white/20 
                rounded-lg px-4 py-3 
                text-sm text-white 
                placeholder-gray-400
                focus:outline-none 
                focus:border-blue-400 
                transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/10 
                border border-white/20 
                rounded-lg px-4 py-3 
                text-sm text-white 
                placeholder-gray-400
                focus:outline-none 
                focus:border-blue-400 
                transition"
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full bg-white/10 
                border border-white/20 
                rounded-lg px-4 py-3 
                text-sm text-white 
                placeholder-gray-400
                focus:outline-none 
                focus:border-blue-400 
                transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-white/10 
                border border-white/20 
                rounded-lg px-4 py-3 
                text-sm text-white 
                placeholder-gray-400
                focus:outline-none 
                focus:border-blue-400 
                transition resize-none"
            />

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full 
                bg-gradient-to-r from-blue-500 to-teal-400
                hover:scale-105 transition 
                font-medium"
            >
              Get in Touch
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}