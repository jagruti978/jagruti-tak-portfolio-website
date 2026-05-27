import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 pt-[180px]">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            max-w-xl
            relative
            top-32
            left-2
            sm:left-6
            md:left-14
            lg:left-16
            pr-4
          "
        >
          <p className="text-[#FF4ECD] font-medium tracking-[5px] mb-4 text-xs md:text-sm">
            PORTFOLIO
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] font-[Orbitron] tracking-wide text-white drop-shadow-[0_0_20px_rgba(255,78,205,0.45)]">
            Hi, I'm

            <div className="flex items-center gap-4 mt-2">
              <span className="text-[#FF4ECD]">
                Jagruti Tak
              </span>

              <div className="flex gap-3 text-lg translate-y-3">
                <a
                  href="mailto:jagrutitak154730@gmail.com"
                  className="hover:text-[#FF4ECD] transition"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://www.linkedin.com/in/jagrutitak19/"
                  target="_blank"
                  className="hover:text-[#FF4ECD] transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/jagruti978"
                  target="_blank"
                  className="hover:text-[#FF4ECD] transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://wa.me/8356913914"
                  target="_blank"
                  className="hover:text-[#FF4ECD] transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </h1>

          <h2 className="mt-6 text-lg sm:text-2xl md:text-3xl font-semibold text-[#8B5CF6] leading-[1.5] font-[Poppins] drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]">
            B.Sc Computer Science Graduate
            <br />
            & Creative FullStack Web Developer
          </h2>

          <p className="mt-7 text-gray-400 text-sm md:text-base leading-[2] break-words pr-4 max-w-[95%] sm:max-w-full">
            Passionate about building responsive websites, mobile applications,
            and web applications. I enjoy exploring modern technologies,
            learning how real-world systems work, and improving my skills in
            deployment and software testing. I’m currently focused on growing as
            a developer and excited to contribute to real projects and future
            opportunities.
          </p>

          <div className="mt-20 flex flex-col sm:flex-row items-start gap-6">

            {/* PROJECT BUTTON */}

            <a href="#projects">
              <button
                className="
                  min-w-[220px]
                  h-[62px]
                  px-8
                  rounded-2xl
                  bg-[#FF4ECD]
                  text-white
                  text-base
                  font-semibold
                  font-[Poppins]
                  tracking-wide
                  hover:scale-105
                  hover:bg-[#ff38c4]
                  transition-all duration-300
                "
              >
                View Projects
              </button>
            </a>

            {/* RESUME BUTTON */}

            <a
           href="https://drive.google.com/file/d/1usZbZ7tImuyT3FSN8CbOL6UOKwOkfJP3/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
            >
          <button
          className="
          min-w-[220px]
          h-[62px]
          px-8
          rounded-2xl
          border border-[#FF4ECD]
          bg-white/5
          backdrop-blur-lg
          text-[#FF4ECD]
          text-base
          font-semibold
          font-[Poppins]
          tracking-wide
          hover:bg-[#FF4ECD]
          hover:text-white
          hover:scale-105
          transition-all duration-300
    "
  >
    View Resume
  </button>
</a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end relative top-20"
        >

          {/* GLOW BACKGROUND */}

          <div className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FF4ECD] blur-[120px] opacity-25 rounded-full"></div>

          {/* PROFILE IMAGE */}

          <motion.img
            src="/assets/profile.PNG"
            alt="profile"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            className="relative w-[240px] md:w-[330px] lg:w-[380px] object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.6)] cursor-pointer transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;