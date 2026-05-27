import { motion } from "framer-motion";

function Skills() {

  const hardSkills = [
    { name: "HTML", level: 100, icon: "assets/html.png" },
    { name: "CSS", level: 96, icon: "assets/CSS.png" },
    { name: "JavaScript", level: 93, icon: "assets/js.png" },
    { name: "Java", level: 95, icon: "assets/java.png" },
    { name: "JSP & Servlet", level: 92, icon: "assets/jsp.png" },
    { name: "Node.js", level: 80, icon: "assets/node.png" },
    { name: "Express.js", level: 85, icon: "assets/express.png" },
    { name: "React", level: 80, icon: "assets/react.png" },
    { name: "DSA Concepts", level: 75, icon: "assets/dsa.png" },
    { name: "MySQL", level: 90, icon: "assets/mysql.png" },
    { name: "Docker", level: 86, icon: "assets/docker.png" },
    { name: "Git & GitHub", level: 95, icon: "assets/git.png" },
    { name: "MongoDB", level: 60, icon: "assets/mongodb.png" },
    { name: "Flutter", level: 75, icon: "assets/flutter.png" },
    { name: "Dart", level: 80, icon: "assets/dart.png" },
    { name: "Hibernate", level: 90, icon: "assets/hibernate.png" },
    { name: "Python", level: 70, icon: "assets/python.png" },
    { name: "AWS", level: 60, icon: "assets/aws.png" },
  ];

  const languages = [
    {
      name: "Hindi",
      glow: 7,
    },
    {
      name: "English",
      glow: 6,
    },
    {
      name: "Marathi",
      glow: 6,
    },
  ];

  return (

    <section
      id="skills"
      className="
      min-h-screen
      bg-[#0B1026]

      pt-40
      sm:pt-36
      pb-44

      overflow-hidden
      "
    >

      {/* OUTER WRAPPER */}
      <div
        className="
        w-full
        max-w-[1500px]
        mx-auto

        px-4
        sm:px-6
        md:px-10
        lg:px-16
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
          mb-24
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




    SKILLS
`}
          </p>

          <div className="h-[20px]" />

          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            Skills & Strengths
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

            px-2
            "
          >
            Technical skills, communication abilities, and problem-solving mindset developed throughout my academic journey, projects, certifications, and internship experiences.
          </p>

        </motion.div>
        <div className="h-[20px]" />

        {/* HARD SKILLS */}

        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          text-white
          text-2xl
          sm:text-3xl
          font-semibold
          mb-14
          text-center
          "
        >
          Hard Skills
        </motion.h3>

        <div className="h-[20px]" />

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-5
          sm:gap-8

          px-2
          "
        >

          {hardSkills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 10,
                rotateY: -10,
                scale: 1.04,
              }}
              className="
              relative

              w-[140px]
              sm:w-[145px]

              h-[145px]

              rounded-[26px]
              border
              border-white/10

              overflow-hidden

              backdrop-blur-xl
              bg-white/5

              flex
              items-center
              justify-center

              text-center

              shadow-[0_0_30px_rgba(255,78,205,0.12)]
              hover:shadow-[0_0_60px_rgba(255,78,205,0.28)]

              transition-all
              duration-500
              group
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* PINK FILL */}

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="
                absolute
                bottom-0
                left-0
                w-full
                bg-[#FF4ECD]/80
                "
              />

              {/* GLOW */}

              <div
                className="
                absolute
                inset-0
                bg-[#FF4ECD]/10
                blur-2xl
                "
              />

              {/* CONTENT */}

              <div className="relative z-10 px-3 flex flex-col items-center">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="
                  w-10
                  h-10
                  mb-3
                  object-contain
                  drop-shadow-lg
                  "
                />

                <h4
                  className="
                  text-white
                  text-sm
                  sm:text-base
                  font-semibold
                  text-center
                  "
                >
                  {skill.name}
                </h4>

                <p
                  className="
                  mt-3
                  text-[#812868]
                  text-lg
                  font-bold

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-300
                  "
                >
                  {skill.level}%
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="h-[80px]" />

        {/* SOFT SKILLS */}

        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          text-white
          text-2xl
          sm:text-3xl
          font-semibold

          mt-24
          mb-16

          text-center
          "
        >
          Soft Skills
        </motion.h3>
        <div className="h-[20px]" />
        <div
          className="
          w-full
          flex
          justify-center
          "
        >

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-8

            w-full
            max-w-[1180px]

            justify-items-center
            "
          >

            {/* CARD 1 */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-[92%]
              sm:w-full
              max-w-[540px]

              rounded-[32px]

              min-h-[360px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-7
              sm:p-12

              shadow-[0_0_40px_rgba(255,78,205,0.10)]
              hover:shadow-[0_0_70px_rgba(255,78,205,0.22)]

              transition-all
              duration-500

              flex
              flex-col
              justify-center
              items-center

              text-center
              "
            >

              <div
                className="
                w-24
                h-24

                rounded-full
                border-4
                border-[#FF4ECD]

                flex
                items-center
                justify-center

                text-white
                font-semibold
                text-sm

                text-center

                mb-8

                shadow-[0_0_30px_rgba(255,78,205,0.4)]
                "
              >
                Adaptable
              </div>

              <p
                className="
                text-gray-300
                text-[14px]
                sm:text-[15px]
                leading-[2.1]
                text-center
                max-w-[420px]
                "
              >
                During my previous internship, I adapted quickly to the work
                environment, understood workflows efficiently, and completed
                assigned tasks before deadlines while maintaining quality work.
              </p>

            </motion.div>

            {/* CARD 2 */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-[92%]
              sm:w-full
              max-w-[540px]

              rounded-[32px]

              min-h-[360px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-7
              sm:p-12

              shadow-[0_0_40px_rgba(255,78,205,0.10)]
              hover:shadow-[0_0_70px_rgba(255,78,205,0.22)]

              transition-all
              duration-500

              flex
              flex-col
              justify-center
              items-center

              text-center
              "
            >

              <div
                className="
                w-24
                h-24

                rounded-full
                border-4
                border-[#FF4ECD]

                flex
                items-center
                justify-center

                text-white
                font-semibold
                text-sm

                text-center

                mb-8

                shadow-[0_0_30px_rgba(255,78,205,0.4)]
                "
              >
                Fast Learner
              </div>

              <p
                className="
                text-gray-300
                text-[14px]
                sm:text-[15px]
                leading-[2.1]
                text-center
                max-w-[420px]
                "
              >
                I first understand how things work before starting any task,
                which helps me learn quickly. If I face doubts, I first try
                solving them myself before asking for help.
              </p>

            </motion.div>

            {/* CARD 3 */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-[92%]
              sm:w-full
              max-w-[540px]

              rounded-[32px]

              min-h-[360px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-7
              sm:p-12

              shadow-[0_0_40px_rgba(255,78,205,0.10)]
              hover:shadow-[0_0_70px_rgba(255,78,205,0.22)]

              transition-all
              duration-500

              flex
              flex-col
              justify-center
              items-center

              text-center
              "
            >

              <div
                className="
                w-24
                h-24

                rounded-full
                border-4
                border-[#FF4ECD]

                flex
                items-center
                justify-center

                text-white
                font-semibold
                text-sm

                text-center

                mb-8

                shadow-[0_0_30px_rgba(255,78,205,0.4)]
                "
              >
                Organized
              </div>

              <p
                className="
                text-gray-300
                text-[14px]
                sm:text-[15px]
                leading-[2.1]
                text-center
                max-w-[420px]
                "
              >
                I organize tasks by breaking them into smaller parts,
                helping me stay productive, focused, and efficient
                throughout workflows.
              </p>

            </motion.div>

            {/* CARD 4 */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-[92%]
              sm:w-full
              max-w-[540px]

              rounded-[32px]

              min-h-[360px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-7
              sm:p-12

              shadow-[0_0_40px_rgba(255,78,205,0.10)]
              hover:shadow-[0_0_70px_rgba(255,78,205,0.22)]

              transition-all
              duration-500

              flex
              flex-col
              justify-center
              items-center

              text-center
              "
            >

              <div
                className="
                w-24
                h-24

                rounded-full
                border-4
                border-[#FF4ECD]

                flex
                items-center
                justify-center

                text-white
                font-semibold
                text-sm

                text-center

                mb-8

                shadow-[0_0_30px_rgba(255,78,205,0.4)]
                "
              >
                Weakness
              </div>

              <p
                className="
                text-gray-300
                text-[14px]
                sm:text-[15px]
                leading-[2.1]
                text-center
                max-w-[420px]
                "
              >
                I sometimes overthink in new environments, but once I become comfortable, I communicate confidently and work effectively with people and teams. I also feel that my confidence can be low at times, especially in unfamiliar professional situations, but I believe gaining real-world experience, working on projects, and interacting with professionals will help me improve my confidence and grow professionally.
              </p>

            </motion.div>

          </div>

        </div>

        <div className="h-[80px]" />

        {/* LANGUAGES */}

        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          text-white
          text-2xl
          sm:text-3xl
          font-semibold

          mt-24
          mb-16

          text-center
          "
        >
          Languages
        </motion.h3>

        <div className="w-full flex justify-center">

          <div
            className="
            w-[92%]
            sm:w-full
            max-w-[850px]

            flex
            flex-col
            gap-12
            "
          >

            {languages.map((language, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >

                <h4
                  className="
                  text-white
                  text-xl
                  font-semibold

                  text-center
                  mb-5
                  "
                >
                  {language.name}
                </h4>

                <div
                  className="
                  w-full

                  rounded-[30px]

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-xl

                  py-10
                  px-6

                  shadow-[0_0_35px_rgba(255,78,205,0.10)]
                  hover:shadow-[0_0_60px_rgba(255,78,205,0.20)]

                  transition-all
                  duration-500
                  "
                >

                  <div
                    className="
                    flex
                    justify-center
                    items-center
                    gap-5
                    flex-wrap
                    "
                  >

                    {[1,2,3,4,5,6,7].map((dot) => (

                      <div
                        key={dot}
                        className={`
                        w-6
                        h-6
                        rounded-full

                        transition-all
                        duration-500

                        ${
                          dot <= language.glow
                            ? "bg-[#FF4ECD] shadow-[0_0_22px_rgba(255,78,205,0.95)]"
                            : "bg-white/10"
                        }
                        `}
                      />

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;