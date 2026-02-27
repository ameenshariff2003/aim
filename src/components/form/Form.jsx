import { Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Form() {
  return (
    <section
      className="
        w-full py-24 px-6 md:px-16
        bg-[#F3F5F7] dark:bg-[#071C33]
        text-[#1F3552] dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            Ready to Get <br /> Started?
          </h2>

          <p className="
            mt-6 max-w-md text-sm leading-relaxed
            text-gray-600 dark:text-gray-300
          ">
            Let’s discuss how AIM IT Services can support your
            IT and workforce needs.
          </p>

          {/* Info Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* CARD COMPONENT */}
            {[
              {
                icon: Mail,
                title: "Email",
                value: "contact@aimitworld.com",
              },
              {
                icon: Globe,
                title: "Website",
                value: "www.aimitworld.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 1234567890",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Kingdom of Saudi Arabia",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    p-6 rounded-xl border transition

                    /* LIGHT THEME */
                    bg-[#E6EBF1] border-transparent

                    /* DARK THEME (UNCHANGED) */
                    dark:bg-white/5
                    dark:border-white/10
                    dark:backdrop-blur-md

                    hover:border-blue-400/40
                  "
                >
                  <div className="flex items-center gap-3 mb-3 text-blue-500 dark:text-blue-400">
                    <Icon size={18} />
                    <span className="font-medium">{item.title}</span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="
            p-8 rounded-xl

            /* LIGHT PANEL */
            bg-[#EDEFF2]

            /* DARK PANEL (same as before visually) */
            dark:bg-transparent
          "
        >
          <form className="space-y-5">

            {/* INPUT STYLE */}
            {["Full Name", "Email", "Company"].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="
                  w-full rounded-lg px-4 py-3 text-sm transition

                  /* LIGHT */
                  bg-[#C9CDD2]
                  text-[#1F3552]
                  placeholder-gray-600
                  border border-transparent

                  /* DARK (UNCHANGED) */
                  dark:bg-white/10
                  dark:text-white
                  dark:placeholder-gray-400
                  dark:border-white/20

                  focus:outline-none
                  focus:border-blue-400
                "
              />
            ))}

            <textarea
              rows="4"
              placeholder="Your Message"
              className="
                w-full rounded-lg px-4 py-3 text-sm resize-none transition

                bg-[#C9CDD2]
                text-[#1F3552]
                placeholder-gray-600
                border border-transparent

                dark:bg-white/10
                dark:text-white
                dark:placeholder-gray-400
                dark:border-white/20

                focus:outline-none
                focus:border-blue-400
              "
            />

            <button
              type="submit"
              className="
                mt-4 px-8 py-3 rounded-full font-medium
                bg-[#1F3552] text-white
                hover:scale-105 transition
                dark:bg-gradient-to-r
                dark:from-blue-500
                dark:to-teal-400
              "
            >
              Get in Touch
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}