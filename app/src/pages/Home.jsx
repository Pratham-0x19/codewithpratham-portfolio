import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { Sun, Moon, MoveRight } from "lucide-react";

const Home = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const { darkMode, setDarkMode } = useContext(ViewContext);
  const Nav_Links = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const STATS = [
    { id: 1, value: "2", suffix: "+", label: "Live Projects" },
    { id: 2, value: "1", suffix: "st", label: "Year BTech" },
    { id: 3, value: "12", suffix: "+", label: "Tech Stack Items" },
    { id: 4, value: "∞", suffix: "", label: "Lines Ahead" },
  ];
  const TECH_STACK = [
    {
      id: 1,
      title: "FRONTEND",
      stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "ShadCN"],
    },
    { id: 2, title: "BACKEND", stack: ["Node.js", "Express.js", "MongoDB"] },
    { id: 3, title: "LANGUAGES", stack: ["Java", "C++", "Python"] },
    {
      id: 4,
      title: "DEVOPS & TOOLS",
      stack: ["Git", "GitHub", "Linux", "Cloudfare Pages", "Render"],
    },
  ];

  const PROJECTS = [
    {
      id: 1,
      title: "Team Griffin India — Website",
      domain: "Full Stack - Web Dev",
      desc: "Designed and developed the complete web presence for Team Griffin India, a competitive engineering team at VIT Pune. Built a responsive, performance-first site showcasing the team's achievements, members, and technical excellence.",
      stack: ["REACT", "TAILWIND CSS", "RESPONSIVE", "NODEJS", "EXPRESSJS"],
      year: 2025,
      visit: "https://teamgriffin.codewithpratham.me",
    },
    {
      id: 2,
      title: "IndRail — Railway Information Portal",
      domain: "Full Stack - Web Dev",
      desc: "A comprehensive railway information platform providing real-time train data, route maps, and schedule queries. Built with a full-stack architecture prioritising speed and usability for Indian Railways passengers.",
      stack: ["REACT", "TAILWIND CSS", "MONGODB", "SHADCN", "EXPRESSJS"],
      year: 2025,
      visit: "https://indrail.codewithpratham.me",
    },
  ];

  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });

  const dm = darkMode;

  return (
    <div
      className={`min-h-screen ${dm ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 unselectable-text`}
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
          <p
            className={`source-serif-font text-xl font-semibold leading-9 ${darkMode ? "text-neutral-500" : "text-neutral-600"} mb-9`}
          >
            From crafting team websites to architecting full-stack railway
            platforms, I engage with every layer of the stack — frontend
            aesthetics, backend logic, database design, and deployment
            pipelines. I believe engineering is not just about making things
            work, but making them work{" "}
            <span
              className={`${darkMode ? "text-white" : "text-black"} playfair-font-italic font-semibold`}
            >
              beautifully.
            </span>
          </p>
          <div className="w-full h-0.5 bg-neutral-600"></div>
          <div className="mt-8 flex gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">LOCATION</h1>
              <h1 className="source-serif-font font-semibold">
                Pune, Maharashtra
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">
                INSTITUTION
              </h1>
              <h1 className="source-serif-font font-semibold">
                Vishwakarma Institute of Technology
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="jetbrains-mono-font text-neutral-600">BATCH</h1>
              <h1 className="source-serif-font font-semibold">2025 - 2029</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`h-auto w-full pb-25 pt-20 px-50 flex flex-col items-start border-b-8 ${darkMode ? "border-white" : "border-black"}`}
      >
        <div className="flex flex-col gap-4 w-full">
          <h1 className="jetbrains-mono-font">§ 002</h1>
          <div className="flex justify-between w-full mb-10">
            <div className="flex flex-col tracking-wider">
              <h1 className="text-5xl playfair-font font-black">Selected</h1>
              <h1 className="text-5xl playfair-font-italic font-black">
                Projects.
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="text-sm text-neutral-500 jetbrains-mono-font">
                02 Projects
              </h1>
              <h1 className="text-sm text-neutral-500 jetbrains-mono-font">
                2025
              </h1>
            </div>
          </div>
          <div
            className={`flex flex-col divide-y border-t border-b ${darkMode ? "divide-neutral-400 border-neutral-400" : "divide-neutral-600 border-neutral-600"} cursor-pointer`}
          >
            {PROJECTS.map((project, i) => (
              <>
                <div
                  key={i}
                  className={`grid grid-cols-[80px_1fr] gap-6 py-10 px-8 items-center group ${darkMode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}  transition-colors duration-500`}
                >
                  <span
                    className={`text-6xl font-black playfair-font select-none ${darkMode ? "text-neutral-600" : "text-neutral-700"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <h1 className="text-3xl font-bold playfair-font">
                        {project.title}
                      </h1>
                      <span
                        className={`border source-serif-font ${darkMode ? "border-white group-hover:border-black" : "border-black group-hover:border-white"} text-xs px-3 py-1 tracking-widest mr-3 transition-colors duration-500`}
                      >
                        {project.domain}
                      </span>
                    </div>
                    <p
                      className={`text-lg source-serif-font font-bold ${darkMode ? "border-white group-hover:border-black" : "border-black group-hover:border-white"} leading-relaxed max-w-2xl`}
                    >
                      {project.desc}
                    </p>
                    <hr className="border-neutral-700" />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 flex-wrap">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className={`border source-serif-font ${darkMode ? "border-white group-hover:border-black" : "border-black group-hover:border-white"} text-xs px-3 py-1 tracking-widest transition-colors duration-500`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm jetbrains-mono-font text-neutral-400 mr-3">
                        {project.year}
                      </span>
                      <button
                        className={`text-xs border px-3 py-1  ${darkMode ? "border-white group-hover:border-black" : "border-black group-hover:border-white"} transition-colors duration-500 tracking-widest source-serif-font mr-3 cursor-pointer`}
                        onClick={() => openInNewTab(project.visit)}
                      >
                        VISIT
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="skills"
        className={`h-auto w-full pb-25 pt-20 px-50 flex flex-col items-start border-b-8 ${darkMode ? "border-black bg-white text-black" : "border-white bg-black text-white"}`}
      >
        <div className="flex flex-col gap-4 w-full">
          <h1 className="jetbrains-mono-font">§ 003</h1>
          <div className="flex justify-between w-full mb-10">
            <div className="flex flex-col tracking-wider">
              <h1 className="text-7xl playfair-font font-black">Tech</h1>
              <h1 className="text-7xl playfair-font-italic font-black">
                Stack.
              </h1>
            </div>
          </div>
          <div
            className={`grid grid-cols-4 border-t-2 ${dm ? "border-black/50" : "border-white/50"}`}
          >
            {TECH_STACK.map((stack, i) => (
              <div
                key={stack.id}
                className={`flex flex-col gap-3 py-10 px-10 ${i !== STATS.length - 1 ? `border-r-2 ${dm ? "border-black/50" : "border-white/50"}` : ""}`}
              >
                <p className="text-lg text-neutral-600 jetbrains-mono-font font-bold">
                  {stack.title}
                </p>
                <ul className="flex flex-col gap-5 list-disc px-6">
                  {stack.stack.map((item) => (
                    <>
                      <li className="playfair-font font-bold text-xl">
                        {item}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
