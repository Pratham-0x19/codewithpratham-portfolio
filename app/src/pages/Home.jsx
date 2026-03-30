import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { Sun, Moon, MoveRight } from "lucide-react";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(ViewContext);
  const Nav_Links = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const STATS = [
    { id: 1, value: "2", suffix: "+", label: "Live Projects" },
    { id: 2, value: "1", suffix: "st", label: "Year BTech" },
    { id: 3, value: "12", suffix: "+", label: "Tech Stack Items" },
    { id: 4, value: "∞", suffix: "", label: "Lines Ahead" },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const dm = darkMode;

  return (
    <div
      className={`min-h-screen ${dm ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full h-20 flex items-center justify-between px-18 border-b ${dm ? "border-white/10 bg-black/80" : "border-black/10 bg-white/80"} backdrop-blur-sm transition-colors duration-500`}
      >
        <h1
          className="text-3xl font-black playfair-font tracking-tight cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          MP.
        </h1>

        <div className="flex items-center gap-12">
          {Nav_Links.map((link) => (
            <React.Fragment key={link}>
              <span
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-bold jetbrains-mono-font cursor-pointer pb-0.5"
                style={{
                  borderBottom: "1px solid transparent",
                  transition: "border-color 400ms",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = dm
                    ? "white"
                    : "black")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "transparent")
                }
              >
                {link}
              </span>
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`h-11 w-11 flex items-center justify-center border-2 ${dm ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"} transition-colors duration-500 cursor-pointer`}
        >
          {dm ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className={`min-h-screen pt-40 pb-25 px-50 flex flex-col justify-center border-b-8 ${darkMode ? "border-white" : "border-black"}`}
      >
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-10 h-px ${dm ? "bg-white/60" : "bg-black/60"}`} />
          <p className="text-sm jetbrains-mono-font tracking-widest opacity-60">
            BTECH · COMPUTER ENGINEERING (AI) · VIT PUNE · 2028
          </p>
        </div>
        <div className="flex flex-col leading-none mb-12 gap-2">
          <h1 className="text-[9rem] font-black playfair-font tracking-tight">
            Mangnale
          </h1>
          <h1 className="text-[9rem] font-black playfair-font-italic tracking-tight">
            Prathamesh
          </h1>
        </div>
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-55 h-px ${dm ? "bg-white/60" : "bg-black/60"}`} />
          <div
            className={`w-3 h-3 rotate-45 border-2 ${dm ? "border-white/60" : "border-black/60"}`}
          />
        </div>
        <p className="text-5xl playfair-font-italic tracking-wide w-[70%] leading-tight mb-12 opacity-90">
          Full-stack engineer in the making.
          <br />
          Building for the web, one commit at a time.
        </p>
        <div className="flex gap-6 mb-14">
          <button
            onClick={() => scrollTo("projects")}
            className={`px-8 py-4 text-sm jetbrains-mono-font border-2 flex items-center gap-3 transition-colors duration-400 cursor-pointer
              ${dm ? "border-white bg-white text-black hover:bg-black hover:text-white" : "border-black bg-black text-white hover:bg-white hover:text-black"}`}
          >
            VIEW PROJECTS <MoveRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`px-8 py-4 text-sm jetbrains-mono-font border-2 flex items-center gap-3 transition-colors duration-400 cursor-pointer
              ${dm ? "border-white/40 text-white hover:border-white hover:bg-white hover:text-black" : "border-black/40 text-black hover:border-black hover:bg-black hover:text-white"}`}
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-4 border-t-2 ${dm ? "border-white/50" : "border-black/50"}`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className={`flex flex-col gap-3 py-10 px-10 ${i !== STATS.length - 1 ? `border-r-2 ${dm ? "border-white/50" : "border-black/50"}` : ""}`}
            >
              <div className="flex items-end gap-1">
                <span className="text-5xl font-black playfair-font">
                  {stat.value}
                </span>
                <span className="text-2xl font-bold playfair-font mb-1">
                  {stat.suffix}
                </span>
              </div>
              <p
                className={`text-xs tracking-[0.2em] uppercase ${dm ? "text-white/40" : "text-black/40"}`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={`h-auto w-full pb-25 pt-20 px-50 flex justify-between items-start border-b-8 ${darkMode ? "border-white" : "border-black"}`}
      >
        <div className="flex flex-col gap-6">
          <h1 className="jetbrains-mono-font">§ 001</h1>
          <div className="flex flex-col tracking-wider">
            <h1 className="text-5xl playfair-font font-black">About</h1>
            <h1 className="text-5xl playfair-font-italic font-black">Me.</h1>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="flex gap-2 items-center">
            <div
              className={`px-4 py-3 text-6xl border-2 ${darkMode ? "border-white" : "border-black"} playfair-font font-bold`}
            >
              I
            </div>
            <p className="source-serif-font text-xl font-semibold leading-9">
              'm a first-year B.Tech Computer Engineering student at Vishwakarma
              Institute of Technology, Pune — driven by a deep fascination with
              building things that live on the web. I write code that solves
              real
            </p>
          </div>
          <p className="source-serif-font text-xl font-semibold leading-9 mb-6">
            problems, and I obsess over clean architecture and purposeful
            design.
          </p>
          <p className={`source-serif-font text-xl font-semibold leading-9 ${darkMode ? 'text-neutral-500' : 'text-neutral-600'} mb-9`}>
            From crafting team websites to architecting full-stack railway
            platforms, I engage with every layer of the stack — frontend
            aesthetics, backend logic, database design, and deployment
            pipelines. I believe engineering is not just about making things
            work, but making them work <span className={`${darkMode ? 'text-white' : 'text-black'} playfair-font-italic font-semibold`}>beautifully.</span>
          </p>
          <div className="w-full h-0.5 bg-neutral-600"></div>
          <div className="mt-8 flex gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">LOCATION</h1>
              <h1 className="source-serif-font font-semibold">Pune, Maharashtra</h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">INSTITUTION</h1>
              <h1 className="source-serif-font font-semibold">Vishwakarma Institute of Technology</h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">BATCH</h1>
              <h1 className="source-serif-font font-semibold">2025 - 2029</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
