import { motion } from "framer-motion";
import projects from "../data/projectsData";
import { useNavigate } from "react-router-dom";

function Project() {

  const navigate = useNavigate();

  return (

    <section
      id="projects"
      className="
      min-h-screen
      pt-72
      sm:pt-48
      pb-28
      px-5
      sm:px-8
      md:px-10
      lg:px-16
      overflow-x-hidden
      "
    >

      {/* MAIN CONTAINER */}

      <div
        className="
        w-full
        max-w-[1450px]
        mx-auto

        px-4 sm:px-6 md:px-10 lg:px-16
        "
      >

        {/* HEADING */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          flex
          flex-col
          items-center
          text-center
          mb-16
          "
        >

          <p
            className="
            whitespace-pre-wrap
            text-[#FF4ECD]
            tracking-[6px]
            text-[11px]
            sm:text-xs
            mb-5
            "
          >
{`

    MY WORK
`}
          </p>

          <h2
            className="
            text-[34px]
            sm:text-[46px]
            md:text-[56px]
            font-bold
            leading-tight
            text-white
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-6
            text-gray-400
            max-w-[760px]
            text-center
            leading-[1.9]
            text-sm
            sm:text-base
            px-4
            "
          >

            A collection of academic and personal projects developed throughout my academic journey, focused on responsive design, frontend development, and full stack web applications.

          </p>

        </motion.div>

        <div className="h-[30px]" />

        {/* PROJECT GRID */}

        <div
          className="
          w-full
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-4 sm:gap-5 md:gap-6
          place-items-center
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="
              group
              relative
              w-full
              max-w-[285px]
              overflow-hidden
              rounded-[16px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              cursor-pointer
              transition-all
              duration-500
              shadow-[0_0_25px_rgba(139,92,246,0.10)]
              hover:shadow-[0_0_40px_rgba(255,78,205,0.22)]
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-[160px]
                  sm:h-[200px]
                  md:h-[220px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

              </div>

              {/* OVERLAY */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B1026]
                via-[#0B1026]/20
                to-transparent
                opacity-90
                "
              />

              {/* CONTENT */}

              <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                p-5
                flex
                flex-col
                items-center
                justify-center
                text-center
                "
              >

                <p
                  className="
                  text-[#FF4ECD]
                  text-[11px]
                  sm:text-xs
                  tracking-[5px]
                  mb-2
                  "
                >
                  {project.date}
                </p>

                <h3
                  className="
                  text-white
                  text-[14px]
                  sm:text-[18px]
                  font-semibold
                  leading-snug
                  "
                >
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Project;