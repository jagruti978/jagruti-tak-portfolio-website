import { motion } from "framer-motion";
import certificates from "../data/certificatesData";

function Certificates() {
  return (
    <section
      id="certificates"
      className="
      min-h-screen
      pt-40 sm:pt-36
      pb-28
      px-5 sm:px-8 md:px-12 lg:px-20
      bg-[#0B1026]
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
          mb-16
        "
      >

        {/* TITLE TAG */}
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

    

    ACHIEVEMENTS

`}
        </p>

        {/* TITLE */}
        <h2 className="text-white text-3xl sm:text-5xl font-bold">
          Certificates & Awards
        </h2>

        {/* DESCRIPTION (FIXED CENTER ISSUE) */}
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
          My certifications, achievements, and learning milestones.
        </p>

      </motion.div>

      <div className="h-[30px]" />

      {/* GRID WRAPPER (IMPORTANT FIX) */}
      <div className="w-full flex justify-center">

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8

          w-full
          max-w-[1100px]
          justify-items-center
          "
        >

          {certificates.map((cert, index) => (

            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                w-full
                max-w-[320px]

                bg-white/5
                border
                border-white/10
                rounded-[18px]
                overflow-hidden
                backdrop-blur-xl

                shadow-[0_0_25px_rgba(255,78,205,0.10)]
                cursor-pointer

                flex
                flex-col
              "
            >

              {/* IMAGE */}
              <div
                className="
                  w-full
                  h-[190px]

                  bg-[#111936]

                  overflow-hidden

                  flex
                  items-center
                  justify-center

                  p-2
                "
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-full

                    object-fill
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center flex flex-col flex-1">

                <h3 className="text-white text-lg font-semibold">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {cert.issuer} • {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto

                    w-full

                    inline-flex
                    items-center
                    justify-center

                    py-3

                    rounded-[2px]

                    bg-gradient-to-r
                    from-[#FF4ECD]
                    to-[#ff2dbd]

                    text-white
                    font-semibold

                    shadow-[0_0_25px_rgba(255,78,205,0.35)]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:shadow-[0_0_45px_rgba(255,78,205,0.55)]
                    hover:brightness-110

                    active:scale-95
                  "
                >
                  View Certificate
                </a>

              </div>

            </motion.div>

          ))}

        </div>
      </div>

    </section>
  );
}

export default Certificates;