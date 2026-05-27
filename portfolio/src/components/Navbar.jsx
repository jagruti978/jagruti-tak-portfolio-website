import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 pt-6">

      {/* NAVBAR CONTAINER */}

      <div className="w-full max-w-[1400px] mx-auto">

        <div
          className="
          flex items-center justify-between
          px-8 py-5
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(139,92,246,0.15)]
          "
        >

          {/* LOGO */}

          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-16 md:w-20 object-contain hover:scale-105 transition duration-300"
            />

            <div className="block leading-tight">

              <h1 className="text-sm sm:text-lg md:text-xl font-semibold text-white tracking-wide">
                Jagruti Tak
              </h1>

              <p className="text-[10px] sm:text-xs text-gray-400 tracking-[2px] uppercase">
                Creative Developer
              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium font-[Poppins] text-gray-300">

            <li
              onClick={() =>
                document.getElementById("home").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() =>
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              About
            </li>

            <li
              onClick={() =>
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Projects
            </li>

            <li
              onClick={() =>
                document.getElementById("certificates").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Certificates
            </li>

            <li
              onClick={() =>
                document.getElementById("internships").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Internships
            </li>

            <li
              onClick={() =>
                document.getElementById("skills").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Skills
            </li>

            <li
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-[#FF4ECD] hover:drop-shadow-[0_0_10px_rgba(255,78,205,0.8)] transition duration-300 cursor-pointer"
            >
              Contact
            </li>

          </ul>

          {/* MOBILE MENU ICON */}

          <div
            className="md:hidden text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </div>

        </div>

        {/* MOBILE MENU */}

        {
          menuOpen && (

            <div
              className="
              md:hidden mt-4 rounded-2xl
              border border-white/10
              bg-[#111633]/90
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(139,92,246,0.2)]
              "
            >

              <ul className="flex flex-col items-center gap-7 py-8 text-sm font-medium text-gray-300">

                <li
                  onClick={() =>
                    document.getElementById("home").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Home
                </li>

                <li
                  onClick={() =>
                    document.getElementById("about").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  About
                </li>

                <li
                  onClick={() =>
                    document.getElementById("projects").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Projects
                </li>

                <li
                  onClick={() =>
                    document.getElementById("certificates").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Certificates
                </li>

                <li
                  onClick={() =>
                    document.getElementById("internships").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Internships
                </li>

                <li
                  onClick={() =>
                    document.getElementById("skills").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Skills
                </li>

                <li
                  onClick={() =>
                    document.getElementById("contact").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#FF4ECD] transition duration-300 cursor-pointer"
                >
                  Contact
                </li>

              </ul>

            </div>

          )
        }

      </div>

    </nav>
  );
}

export default Navbar;