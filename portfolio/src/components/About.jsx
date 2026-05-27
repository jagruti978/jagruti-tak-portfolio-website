import { useState } from "react";
import { motion } from "framer-motion";

function About() {

  const [active, setActive] = useState(1);

  const timeline = [
    {
      id: 1,
      title: "B.Sc Computer Science",
      year: "2023 - 2026",
      college: "Pillai College of Arts, Commerce & Science",
      score: "SGPA: sem1-9.73 | sem2-10.00 | sem3-9.32 | sem4-9.45 | sem5-9.73 | sem6-9.55",
      desc: "Throughout my academic journey, I developed strong technical and problem-solving skills by building multiple academic and personal projects. I also completed a 3-month internship as a Technical Content Management Intern, where I worked with JSON data and ensured proper content display for mobile applications. During college, I led a group project as team leader and secured 3rd prize in an IKS project competition. This journey helped me strengthen my knowledge in full stack development, databases, teamwork, leadership, and modern software development practices."
    },

    {
      id: 2,
      title: "Diploma in Pharmacy",
      year: "2021 - 2023",
      college: "Bharati Vidyapeeth College of Pharmacy",
      score: "Percentage: 82.3%",
      desc: "During my diploma, I learned about various pharmaceutical formulations, their preparation methods, chemical constituents, and the effects of drugs on the human body. I also gained practical knowledge in reading prescriptions, dispensing medications, and understanding pharmaceutical calculations and laboratory practices. This course improved my analytical thinking, discipline, attention to detail, and healthcare knowledge."
    },

    {
      id: 3,
      title: "Higher Secondary (HSC)",
      year: "2019 - 2021",
      college: "ICLES Motilal Jhunjhunwala College",
      score: "Percentage: 83.83%",
      desc: "I pursued the PCMB stream (Physics, Chemistry, Mathematics, and Biology), which helped me build a strong academic foundation in both science and analytical subjects. Along with academics, I actively participated in extracurricular activities and consistently maintained good academic performance throughout my higher secondary education."
    },

    {
      id: 4,
      title: "10th (SSC)",
      year: "2018 - 2019",
      college: "Jijamata Convent School",
      score: "Percentage: 71.83%",
      desc: "During my school years, I developed discipline, communication skills, and a strong learning mindset through academics and practical activities. I also got the opportunity to serve as the Head Monitor of my class, which helped me improve my leadership, responsibility, and teamwork skills while maintaining good academic performance."
    },
  ];

  return (

    <section
      id="about"
      className="
      min-h-screen
      px-6
      sm:px-10
      md:px-14
      lg:px-20
      py-24
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1280px]
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        xl:gap-20
        items-start
        "
      >

        {/* ================= LEFT INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
          w-full
          max-w-[520px]
          mx-auto
          lg:mx-0
          text-center
          lg:text-justify
          lg:relative
          lg:left-6
          "
        >

          <div className="h-[50px]" />

          <p
            className="
            text-[#FF4ECD]
            tracking-[5px]
            text-xs
            sm:text-sm
            mb-5
            "
          >
            ABOUT ME
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            leading-[1.2]
            text-white
            drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
            "
          >

            Who am I ?

          </h2>

          <p
            className="
            mt-7
            text-gray-300
            text-sm
            md:text-[20px]
            leading-[1.9]
            "
          >

            I am a
            <span className="text-[#FF4ECD] font-semibold">
              {" "}B.Sc Computer Science Graduate
            </span>
            {" "}who enjoys building responsive websites,
            full stack applications, and interactive user experiences.

            I continuously explore new technologies,
            frameworks, and development practices
            to improve my technical skills.

          </p>

          <p
            className="
            mt-5
            text-gray-400
            text-sm
            md:text-[20px]
            leading-[1.9]
            "
          >

            Since most of my projects and learning
            have been built through academics and self-learning,
            I am excited to gain real-world experience through
            internships and new opportunities where I can understand
            industry workflows and professional development practices.

          </p>

          <p
            className="
            mt-5
            text-gray-400
            text-sm
            md:text-[20px]
            leading-[1.9]
            "
          >

            My goal is to continuously grow as a developer,
            work on meaningful projects,
            and strengthen my practical knowledge
            to become a confident software professional.

          </p>

        </motion.div>

        {/* ================= RIGHT TIMELINE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          relative
          w-full
          max-w-[700px]
          mx-auto
          px-2
          sm:px-4
          md:px-0
          lg:relative
          lg:right-4
          "
        >

          {/* TITLE */}

          <div className="text-center mb-16">

            <p className="text-[#FF4ECD] tracking-[4px] text-xs sm:text-sm mb-3">
              MY JOURNEY
            </p>

            <h2
              className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              text-white
              "
            >
              Education Timeline
            </h2>

          </div>

          {/* TIMELINE LINE */}

          <div
            className="
            absolute
            left-1/2
            top-[120px]
            bottom-[40px]
            -translate-x-1/2
            w-[4px]
            bg-[#FF4ECD]/25
            rounded-full
            hidden
            md:block
            "
          >

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="
              absolute
              top-0
              left-0
              w-full
              bg-[#FF4ECD]
              rounded-full
              "
            />

          </div>

          {/* ITEMS */}

          <div className="space-y-28 md:space-y-16 relative">

            {timeline.map((item, index) => (

              <div
                key={item.id}
                className={`
                relative
                flex
                flex-col
                md:flex-row
                items-center
                gap-8
                ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }
                `}
              >

                {/* CARD */}

                <motion.div
                  onClick={() => setActive(item.id)}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                  relative
                  cursor-pointer
                  w-[95%]
                  sm:w-full
                  md:w-[41%]
                  lg:w-[43%]
                  rounded-[10px]
                  p-6 sm:p-7
                  border
                  text-center
                  md:text-left
                  transition-all
                  duration-300
                  backdrop-blur-xl

                  ${
                    active === item.id
                      ? "bg-white/10 border-[#FF4ECD] shadow-[0_0_25px_rgba(255,78,205,0.35)]"
                      : "bg-white/5 border-white/10"
                  }
                  `}
                >

                  <p className="text-[#FF4ECD] text-xs sm:text-sm font-semibold tracking-wide">
                    {item.year}
                  </p>

                  <h3
                    className="
                    text-[17px]
                    sm:text-[19px]
                    font-bold
                    text-white
                    mt-2
                    leading-snug
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-gray-300
                    mt-2
                    text-[13px]
                    sm:text-[14px]
                    leading-[1.6]
                    "
                  >
                    {item.college}
                  </p>

                  <p
                    className="
                    text-[#8B5CF6]
                    mt-3
                    font-semibold
                    text-[13px]
                    sm:text-[14px]
                    leading-[1.5]
                    break-words
                    "
                  >
                    {item.score}
                  </p>

                  {/* DESCRIPTION ONLY WHEN ACTIVE */}

                  {active === item.id && (

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                    >

                      <p
                        className="
                        mt-4
                        text-gray-400
                        leading-[1.8]
                        text-[13px]
                        sm:text-[14px]
                        "
                      >
                        {item.desc}
                      </p>

                    </motion.div>

                  )}

                </motion.div>

                {/* DOT */}

                <div
                  className="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  items-center
                  justify-center
                  "
                >

                  <button
                    onClick={() => setActive(item.id)}
                    className={`
                    w-7
                    h-7
                    rounded-full
                    border-[5px]
                    transition-all
                    duration-300
                    z-20

                    ${
                      active === item.id
                        ? "bg-white/10 border-[#FF4ECD] shadow-[0_0_25px_rgba(255,78,205,0.35)] md:scale-[1.02]"
                        : "bg-white/5 border-white/10"
                    }
                    `}
                  />

                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;