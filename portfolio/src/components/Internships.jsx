import { motion } from "framer-motion";
import internships from "../data/internshipsData";

function Internships() {
  return (
    <section
      id="internships"
      className="
      min-h-screen
      pt-40 sm:pt-36
      pb-28

      px-4
      sm:px-8
      md:px-12
      lg:px-20

      bg-[#0B1026]
      overflow-hidden
      "
    >

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          flex
          flex-col
          items-center
          text-center
          mb-20
        "
      >

        <p
          className="
          whitespace-pre-wrap
          text-[#FF4ECD]
          tracking-[6px]
          text-[11px]
          sm:text-xs
          mb-6
          "
        >
{`
   
   
EXPERIENCE

`}
        </p>

        <h2 className="text-white text-3xl sm:text-5xl font-bold">
          Internships
        </h2>

        <p
          className="
          mt-6
          text-gray-400
          max-w-[760px]
          mx-auto
          text-center
          leading-[1.9]
          text-sm sm:text-base
          px-4
          "
        >
          Hands-on internship experience in web development, UI testing, APP testing, JSON handling, Generation of images using AI tools for ED-Tech APPs and real-world application workflows.
        </p>

      </motion.div>

      <div className="h-[20px]" />

      {/* GRID CENTER WRAPPER */}
      <div className="w-full flex justify-center">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10

          w-full
          max-w-[1100px]

          justify-items-center
          "
        >

          {internships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                w-[92%]
                sm:w-full
                max-w-[520px]

                min-h-[420px]

                p-6
                sm:p-10

                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl

                shadow-[0_0_40px_rgba(255,78,205,0.10)]
                hover:shadow-[0_0_60px_rgba(255,78,205,0.25)]

                transition-all duration-500
                flex flex-col justify-between
              "
            >

              {/* LOGO + HEADER */}
              <div className="flex items-start gap-4">

                {/* LOGO */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex justify-between items-start flex-wrap gap-3">

                  <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold">
                      {item.company}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.location}
                    </p>
                  </div>

                  <span className="text-xs px-4 py-2 rounded-full bg-[#FF4ECD]/10 text-[#FF4ECD] whitespace-nowrap">
                    {item.type}
                  </span>

                </div>

              </div>

              {/* DURATION */}
              <div className="flex items-center gap-2 mt-4 text-gray-300 text-sm">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#FF4ECD"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                  />
                </svg>

                <span>{item.duration}</span>

              </div>

              {/* DESCRIPTION */}
              <div className="mt-5">

                <span className="text-[#FF4ECD] font-medium text-sm block mb-2">
                  Description:
                </span>

                <p
                  className="
                  text-gray-300
                  leading-[1.9]
                  text-sm
                  sm:text-[15px]
                  break-words
                  "
                >
                  {item.description}
                </p>

              </div>

              {/* BUTTON */}
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  w-full
                  text-center

                  h-[58px]

                  flex
                  items-center
                  justify-center

                  rounded-lg

                  bg-[#FF4ECD]
                  hover:bg-[#ff2dbb]

                  transition-all duration-300

                  font-semibold
                  text-white
                "
              >
                View Certificate
              </a>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Internships;