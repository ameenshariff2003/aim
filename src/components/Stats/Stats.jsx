import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stat = [
  { number: 7, label: "Core Capabilities" },
  { number: 9, label: "Industries Served" },
  { number: 8, label: "Countries With Presence" },
  { number: 90, label: "Days Maximum Replacement Guarantee" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="
        min-h-[22vh]   /* reduced ~17% */
        pt-14 pb-10
        bg-[#071A2E] dark:bg-[#071A2E]
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-8 w-full">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="
            text-3xl md:text-4xl   /* reduced size */
            font-semibold leading-tight
            text-white
          ">
            Results That Speak <br />
            for Themselves
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="text-6xl md:text-7xl font-bold text-white">
              {inView && <CountUp end={150} duration={2} />}
              +
            </div>

            <div className="
              bg-[#0E253F]
              px-5 py-4
              border-l-4 border-yellow-400
            ">
              <p className="text-base text-gray-200">
                Years Collective <br /> Experience
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2">

            {stat.map((item, index) => (
              <div
                key={index}
                className={`
                  p-5
                  ${index % 2 === 0 ? "border-r border-white/10" : ""}
                  ${index < 2 ? "border-b border-white/10" : ""}
                `}
              >
                <h3 className="text-3xl font-semibold text-white">
                  {inView && (
                    <CountUp
                      end={item.number}
                      duration={1.5}
                      delay={index * 0.2}
                      formattingFn={(num) =>
                        num < 10 ? `0${num}` : num
                      }
                    />
                  )}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;