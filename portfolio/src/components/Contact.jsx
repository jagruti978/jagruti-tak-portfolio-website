import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";


import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {

const form = useRef();
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const [toast, setToast] = useState({
  show: false,
  type: "", 
  message: "",
});
const showToast = (type, message) => {
  setToast({
    show: true,
    type,
    message,
  });

  setTimeout(() => {
    setToast({ show: false, type: "", message: "" });
  }, 3500);
};

const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);
  setError(false);

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then((result) => {
  console.log("SUCCESS:", result.text);

  setLoading(false);
  form.current.reset();

  showToast("success", "Message sent successfully ");
})
.catch((error) => {
  console.log("FAILED:", error);

  setLoading(false);

  showToast("error", "Failed to send message ");
});
};
  return (
   <section
  id="contact"
  className="
  relative
  bg-[#0B1026]
  mt-40
  pt-24

  "
>
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-[#FF4ECD]/10
        blur-[140px]
        pointer-events-none
        "
      />

      {/* HEADING */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        text-center
        px-6
        sm:px-8
        md:px-12
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





CONTACT

`}
</p>

        <h2
          className="
          text-white
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          "
        >
          Let’s Work Together
        </h2>

        <p
          className="
          mt-8
          text-gray-400
          max-w-[760px]
          leading-[2]
          text-sm
          sm:text-base
          "
        >
          I’m currently improving my skills and looking for opportunities
          to gain real-world industry experience. If you think I can
          contribute, help your team, or provide meaningful value,
          feel free to contact me or send any query.
        </p>
      </motion.div>

      {/* MAIN SECTION */}

<div
  className="
  relative
  z-10
  w-full
  max-w-[1400px]
  mx-auto

  

  px-4
  sm:px-8
  md:px-10
  lg:px-16
  xl:px-24

  grid
  grid-cols-1
  lg:grid-cols-2

  gap-14
  lg:gap-20
  xl:gap-28

  items-center
  justify-items-center
  "
>

  {/* LEFT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="
    w-full
    max-w-[560px]

    flex
    flex-col

    items-center
    lg:items-start

    text-center
    lg:text-left
    "
  >

    <h3
      className="
      text-white

      text-3xl
      sm:text-[42px]

      font-semibold

      leading-[1.6]

      max-w-[520px]
      "
    >
      Open to internships,
      <br />
      entry-level roles,
      <br />
      and growth opportunities.
    </h3>

    {/* CONTACT INFO */}

    <div
      className="
      mt-16

      w-full
      max-w-[420px]

      flex
      flex-col

      gap-8
      "
    >

      {/* EMAIL */}

      <div
        className="
        w-full

        flex
        items-center

        gap-5

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        rounded-[22px]

        px-5
        py-5

        shadow-[0_0_25px_rgba(255,78,205,0.08)]
        "
      >

        <div
          className="
          min-w-[58px]
          h-[58px]

          rounded-2xl

          border
          border-white/10

          bg-[#FF4ECD]/10

          flex
          items-center
          justify-center
          "
        >
          <Mail className="text-[#FF4ECD]" size={22} />
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">
            Email
          </p>

          <p className="text-white text-[15px] sm:text-base">
            jagrutitak154730@gmail.com
          </p>
        </div>

      </div>

      {/* PHONE */}

      <div
        className="
        w-full

        flex
        items-center

        gap-5

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        rounded-[22px]

        px-5
        py-5

        shadow-[0_0_25px_rgba(255,78,205,0.08)]
        "
      >

        <div
          className="
          min-w-[58px]
          h-[58px]

          rounded-2xl

          border
          border-white/10

          bg-[#FF4ECD]/10

          flex
          items-center
          justify-center
          "
        >
          <Phone className="text-[#FF4ECD]" size={22} />
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">
            Phone
          </p>

          <p className="text-white text-[15px] sm:text-base">
            +91 8356913914
          </p>
        </div>

      </div>

      {/* LOCATION */}

      <div
        className="
        w-full

        flex
        items-center

        gap-5

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        rounded-[22px]

        px-5
        py-5

        shadow-[0_0_25px_rgba(255,78,205,0.08)]
        "
      >

        <div
          className="
          min-w-[58px]
          h-[58px]

          rounded-2xl

          border
          border-white/10

          bg-[#FF4ECD]/10

          flex
          items-center
          justify-center
          "
        >
          <MapPin className="text-[#FF4ECD]" size={22} />
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-1">
            Location
          </p>

          <p className="text-white text-[15px] sm:text-base">
            Navi-Mumbai Maharashtra, India
          </p>
        </div>

      </div>

    </div>

  </motion.div>

  {/* RIGHT FORM */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
  w-full
  max-w-[92%] sm:max-w-[540px]

  mx-auto

  mt-6
  lg:mt-0

  px-3 sm:px-0

  border
  border-white/10

  bg-white/5
  backdrop-blur-2xl

  rounded-[14px]

  p-4
  sm:p-7
  md:p-8

  shadow-[0_0_25px_rgba(255,78,205,0.05)]

  hover:shadow-[0_0_70px_rgba(255,78,205,0.18)]
  hover:border-[#FF4ECD]/20

  transition-all
  duration-500
"
>

  <form
  ref={form}
  onSubmit={sendEmail}
  className="
  flex
  flex-col
  gap-6
  sm:gap-7
  "
>

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    <input
      type="hidden"
      name="_subject"
      value="Portfolio Contact Message"
    />

    {/* NAME */}

    <div>

      <label className="text-white text-sm">
        Full Name
      </label>

      <input
        type="text"
        name="name"
        required
        placeholder="Enter your name"
        className="
        mt-3

        w-full

        bg-transparent

        border
        border-white/10

        rounded-[10px]

        px-4
        sm:px-5

        h-[54px]
        sm:h-[58px]

        text-white

        placeholder:text-gray-600

        outline-none

        focus:border-[#FF4ECD]

        transition-all
        duration-300
        "
      />

    </div>

    {/* EMAIL */}

    <div>

      <label className="text-white text-sm">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="
        mt-3

        w-full

        bg-transparent

        border
        border-white/10

        rounded-[10px]

        px-4
        sm:px-5

        h-[54px]
        sm:h-[58px]

        text-white

        placeholder:text-gray-600

        outline-none

        focus:border-[#FF4ECD]

        transition-all
        duration-300
        "
      />

    </div>

    {/* MESSAGE */}

    <div>

      <label className="text-white text-sm">
        Message
      </label>

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Write your message..."
        className="
        mt-3

        w-full

        bg-transparent

        border
        border-white/10

        rounded-[10px]

        px-4
        sm:px-5

        py-4
        sm:py-5

        text-white

        placeholder:text-gray-600

        outline-none
        resize-none

        focus:border-[#FF4ECD]

        transition-all
        duration-300
        "
      />

    </div>

    {/* BUTTON + STATUS */}


<button
  type="submit"
  disabled={loading}
  className="
  mt-2
  w-full
  h-[60px]
  sm:h-[66px]
  rounded-[10px]
  bg-[#FF4ECD]
  hover:bg-[#ff63d4]
  disabled:opacity-60
  disabled:cursor-not-allowed
  text-black
  text-[15px]
  sm:text-[16px]
  font-semibold
  flex
  items-center
  justify-center
  gap-3
  transition-all
  duration-300
  "
>
  {loading ? (
    <span className="animate-pulse">Sending...</span>
  ) : (
    <>
      Send Message
      <ArrowUpRight size={20} />
    </>
  )}
</button>

  </form>

</motion.div>

</div>
{toast.show && (
  <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="
        w-[90%]
        sm:w-[520px]
        md:w-[600px]

        h-[100px]   
  px-6

  rounded-2xl

        shadow-[0_0_40px_rgba(255,78,205,0.25)]
        backdrop-blur-2xl
        border
        border-[#FF4ECD]/30
        bg-[#0B1026]/85

        text-white

        flex
        items-center
        justify-center
        gap-4
      "
    >
      {/* CONTENT WRAPPER (IMPORTANT FIX) */}
      <div className="flex items-center gap-4 w-full justify-center">

     

        {/* TEXT BLOCK (CENTER FIX) */}
        <div className="flex flex-col items-center text-center leading-tight">
          <p className="text-base font-semibold text-white">
            {toast.type === "success" ? "Message Sent" : "Message Failed"}
          </p>

          <p className="text-sm text-gray-300 mt-1">
            {toast.message}
          </p>
        </div>

      </div>
    </motion.div>
  </div>
)} {/* SPACE */}

<div className="h-[60px]" />

{/* IMAGE QUOTE SECTION */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
  relative
  h-[500px]
  sm:h-[520px]
  "
>
        <img
          src="/assets/quotes.jpg"
          alt="motivation"
          className="
          w-full
          h-full
          object-cover
          "
        />

        {/* OVERLAY */}

        <div
          className="
          absolute
          inset-0
          bg-black/60
          "
        />

        {/* TEXT */}

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-6
          text-center
          "
        >
          <h2
            className="
            text-white
            text-3xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            leading-[1.4]
            max-w-[900px]
            "
          >
            Ambition without action
            <br />
            becomes Anxiety.
          </h2>
        </div>
      </motion.div>

      <div className="h-[40px]" />

     {/* FOOTER */}
{/* FOOTER */}
<footer className="w-full bg-[#0B1026] py-24 flex justify-center items-center">

  {/* MAIN CONTAINER */}
  <div
  className="
  w-full
  max-w-[92%] sm:max-w-6xl

  mx-auto

  min-h-[250px]

  bg-white/5
  backdrop-blur-xl
  border border-white/10
  rounded-3xl

  px-5 sm:px-10 lg:px-20
  py-16

  flex flex-col justify-between
  "
>

    {/* TOP GRID (FIXED CENTER ALIGNMENT) */}
    <div
      className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-14

      items-center
      text-center
      "
    >

      {/* LOGO */}
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-24"
        />
        <p className="text-sm text-gray-400">
          Creative Developer
        </p>
      </div>

     {/* INFO */}
<div className="flex flex-col items-center">
  <h3 className="text-white font-semibold mb-5">Info</h3>

  <ul className="space-y-3 text-sm text-gray-400">

    <li>
      <a
        href="#home"
        className="hover:text-[#FF4ECD] transition"
      >
        Home
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="hover:text-[#FF4ECD] transition"
      >
        About Me
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="hover:text-[#FF4ECD] transition"
      >
        Projects
      </a>
    </li>

  </ul>
</div>

{/* RESOURCE */}
<div className="flex flex-col items-center">

  <h3 className="text-white font-semibold mb-5">
    Resource
  </h3>

  <ul className="space-y-3 text-sm text-gray-400">

    <li>
      <a
        href="#certificates"
        className="hover:text-[#FF4ECD] transition"
      >
        Certificates
      </a>
    </li>

    <li>
      <a
        href="#skills"
        className="hover:text-[#FF4ECD] transition"
      >
        Skills
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-[#FF4ECD] transition"
      >
        Contact
      </a>
    </li>

  </ul>

</div>

{/* SOCIAL */}
<div className="flex flex-col items-center">

  <h3 className="text-white font-semibold mb-5">
    Social
  </h3>

  <ul className="space-y-3 text-sm text-gray-400">

    <li>
      <a
        href="https://github.com/jagruti978"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#FF4ECD] transition"
      >
        GitHub
      </a>
    </li>

    <li>
      <a
        href="https://instagram.com/_.jagu.19_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#FF4ECD] transition"
      >
        Instagram
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/in/jagrutitak19/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#FF4ECD] transition"
      >
        LinkedIn
      </a>
    </li>

  </ul>

</div>

</div>

{/* DIVIDER */}
<div className="border-t border-white/10 my-10" />

{/* ICONS */}
<div className="flex justify-center items-center gap-6">

  <a
    href="https://github.com/jagruti978"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub
      className="text-gray-400 hover:text-[#FF4ECD] transition"
      size={22}
    />
  </a>

  <a
    href="https://www.linkedin.com/in/jagrutitak19/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin
      className="text-gray-400 hover:text-[#FF4ECD] transition"
      size={22}
    />
  </a>

  <a
    href="mailto:jagrutitak154730@gmail.com"
  >
    <FaEnvelope
      className="text-gray-400 hover:text-[#FF4ECD] transition"
      size={22}
    />
  </a>


</div>

{/* COPYRIGHT */}
<p className="text-center text-xs text-gray-500 mt-8">
  © 2026 All rights reserved
</p>

  </div>
</footer>

<div className="h-[40px]" />
    </section>
  );
}

export default Contact;