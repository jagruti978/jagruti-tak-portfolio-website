import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projectsData";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="text-white flex items-center justify-center min-h-screen">
        Project not found
      </div>
    );
  }

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section
      className="
      min-h-screen
      w-full
      bg-[#070B1A]
      text-white
      flex
      items-center
      justify-center
      px-5 sm:px-10 lg:px-24
      py-10
      "
    >
      {/* CONTAINER */}
      <div
        className="
        w-full
        max-w-[1450px]
        "
      >
        {/* PREMIUM CARD */}
        <div
          className="
          w-full
          bg-white/[0.04]
          border
          border-white/10
          rounded-[30px]
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(255,78,205,0.12)]
          p-6 sm:p-10 lg:p-14
          
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
          "
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              max-w-[600px]
              h-[220px]
              sm:h-[350px]
              lg:h-[500px]
              object-cover
              rounded-2xl
              border
              border-white/10
              shadow-[0_0_40px_rgba(139,92,246,0.2)]
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
            flex
            flex-col
            justify-center
            "
          >
            <p className="text-[#FF4ECD] tracking-[6px] text-sm mb-3">
              {project.date}
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {project.title}
            </h1>

            <div className="w-[80px] h-[3px] bg-[#FF4ECD] mt-6 rounded-full" />

            <p className="mt-6 text-gray-300 leading-[1.9] text-sm sm:text-base">
              {project.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                w-full sm:w-auto
                min-w-[160px]
                h-[56px]
                px-8
                flex
                items-center
                justify-center
                rounded-2xl
                bg-[#FF4ECD]
                hover:bg-[#ff2dbd]
                transition
                font-semibold
                shadow-[0_0_30px_rgba(255,78,205,0.35)]
                hover:scale-105
                "
              >
                GitHub
              </a>

              <a
                href={project.readmore}
                target="_blank"
                rel="noreferrer"
                className="
                w-full sm:w-auto
                min-w-[160px]
                h-[56px]
                px-8
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/5
                hover:bg-white/10
                transition
                font-semibold
                hover:scale-105
                "
              >
                Read More
              </a>

              <button
                onClick={handleBack}
                className="
                w-full sm:w-auto
                min-w-[160px]
                h-[56px]
                px-8
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-[#FF4ECD]
                text-[#FF4ECD]
                hover:bg-[#FF4ECD]
                hover:text-white
                transition
                font-semibold
                hover:scale-105
                "
              >
                Back
              </button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;