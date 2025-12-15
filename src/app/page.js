import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[160px]">

        {/* ==================== ROW 1 & 2 ==================== */}

        {/* --- Card: About Me --- */}
        <div className="col-span-2 md:col-span-2 md:row-span-2 bg-[#1c1c1c] rounded-[2rem] p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-sm mb-9 shadow-lg shadow-orange-900/20">
              About
            </span>
            <h1 className="text-xl md:text-3xl font-medium leading-relaxed text-gray-200">
              A Software developer with expertise in <span className="text-white font-bold">ReactJS & Java</span>, complemented by strong <span className="text-white font-bold">Python</span> skills. Specialized in crafting intuitive UI/UX designs.
            </h1>
          </div>
        </div>

        {/* --- Card: Avatar (Modern Glow) --- */}
        <div className="col-span-2 md:col-span-1 md:row-span-2 bg-[#1c1c1c] rounded-[2rem] p-6 flex flex-col items-center justify-center gap-6 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="relative mb">
            <div className="w-32 h-40 md:w-60 md:h-55 rounded-[1.4rem] overflow-hidden transition-transform duration-500 relative">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://akshatjalan.github.io/devfolio/images/MyPic.png')" }}></div>
            </div>
          </div>

          {/* Text Info */}
          <div className="text-center z-10">
            <h2 className="text-3xl font-bold text-white mb-1 ">Akshat Jalan</h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-400 text-m font-medium tracking-wide uppercase">SOFTWARE ENGINEER</span>
            </div>
          </div>
        </div>

        {/* --- ACTIONS (Side-by-Side on Mobile) --- */}

        {/* 1. Resume Card */}
        <a
          href="https://drive.google.com/file/d/13smGoOQxRIg9wPk0xLoo6QbQ2jIO3Erb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 md:row-span-1 bg-[#1c1c1c] rounded-[2rem] p-6 flex items-center justify-between border border-white/5 hover:bg-[#1a1a1a] hover:scale-[1.02] transition-transform cursor-pointer group relative overflow-hidden"
        >
          <div className="flex flex-col justify-center">
            <p className="text-s text-gray-400 font-bold uppercase tracking-wider mb-1">Resume</p>
            <h3 className="text-xl font-bold text-white group-hover:text-[#ff6522] transition-colors">Download</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff6522] group-hover:text-white transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </div>
        </a>

        {/* 2. LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/akshat-jalan/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 md:col-span-1 md:row-span-1 bg-[#0077b5] rounded-[2rem] flex items-center justify-center relative group cursor-pointer border border-white/5 hover:scale-[1.02] transition-transform"
        >
          <span className="text-6xl md:text-8xl font-bold text-white">in</span>
          <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </a>


        {/* ==================== ROW 3, 4, 5 ==================== */}

        {/* --- Card: Experience (Compact Layout) --- */}
        <div className="col-span-2 md:col-span-2 md:row-span-3 bg-[#1c1c1c] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-sm shadow-lg shadow-orange-900/20">
              Experience
            </span>
          </div>

          {/* Reduced spacing from space-y-8 to space-y-4 to fit content better */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            {/* Job 1 */}
            <div className="group/item transition-all duration-300 hover:translate-x-2 group-hover/list:opacity-40 group-hover/list:hover:opacity-100">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover/item:text-[#ff6522] transition-colors">Software Engineer 2</h3>
                  <p className="text-gray-400 font-bold text-m">Lloyds Banking Group</p>
                </div>
                <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded border border-white/5">2025 - Present</span>
              </div>
              <p className="text-gray-500 text-sm  max-w-md">Leading backend architecture migration and optimizing database queries for high-scale transactions.</p>
            </div>
            <div className="w-full h-px bg-white/5"></div>

            {/* Job 2 */}
            <div className="group/item transition-all duration-300 hover:translate-x-2 group-hover/list:opacity-40 group-hover/list:hover:opacity-100">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover/item:text-[#ff6522] transition-colors">Software Engineer</h3>
                  <p className="text-gray-400 font-bold text-m">Bank of America</p>
                </div>
                <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded border border-white/5">2022 - 2025</span>
              </div>
              <p className="text-gray-500 text-sm max-w-md">Developed React-based dashboard components and integrated REST APIs for real-time data visualization.</p>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            {/* Job 3 */}
            <div className="group/item transition-all duration-300 hover:translate-x-2 group-hover/list:opacity-40 group-hover/list:hover:opacity-100">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover/item:text-[#ff6522] transition-colors">FullStack Developer Intern</h3>
                  <p className="text-gray-400 font-bold text-m">Virtusa</p>
                </div>
                <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded border border-white/5">2022</span>
              </div>
              <p className="text-gray-500 text-sm max-w-md">Developed React-based dashboard components and integrated REST APIs for real-time data visualization.</p>
            </div>
          </div>
        </div>

        {/* --- Card: Email --- */}
        <div className="col-span-2 md:col-span-2 md:row-span-2 bg-[#1c1c1c] rounded-[2rem] p-8 flex flex-col justify-between border border-white/5 group hover:border-[#ff6522]/50 transition-colors cursor-pointer relative overflow-hidden">
          <Link href="mailto:akshatjalanmain@gmail.com" className="absolute inset-0 z-20"></Link>
          <div className="relative z-10 flex justify-between items-start">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-sm shadow-lg shadow-orange-900/20">
              Contact
            </span>
          </div>
          <svg className="absolute -bottom-4 -right-4 w-48 h-48 text-white/5 group-hover:text-[#ff6522]/10 transition-colors transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
          <div className="relative z-10 mt-2">
            <h3 className="text-3xl md:text-5xl font-bold mb-2 text-white">Get in touch</h3>
            <p className="text-gray-400 font-bold group-hover:text-[#ff6522] transition-colors flex items-center gap-2 text-sm md:text-xl">
              akshatjalanmain@gmail.com
              <span className="text-xl font-normal group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">➔</span>
            </p>
          </div>
        </div>

        {/* --- Card: Tech Stack --- */}
        <div className="col-span-2 md:col-span-2 md:row-span-1 bg-[#1c1c1c] rounded-[2rem] p-6 flex flex-col justify-center border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Expertise</span>
            {['React.js', 'Next.js', 'JavaScript', 'Java', 'Spring Boot', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'Copilot', 'Azure'].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 text-xs md:text-sm font-medium border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>


        {/* ==================== ROW 4+: PROJECTS (Floating Cards Style) ==================== */}

        {/* --- Project 1: Amazon Redesign (Vertical Tilted Card) --- */}
        <Link href="/projects/desserts" className="col-span-2 md:col-span-1 md:row-span-3 bg-[#1c1c1c] rounded-[2rem] p-6 flex flex-col border border-white/5 group overflow-hidden hover:border-white/10 transition-colors relative">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-xs shadow-lg shadow-orange-900/20">
              Projects
            </span>
          </div>
          {/* Floating Card Image (Local) */}
          <div className="flex-1 relative mt-2 flex items-center justify-center">
            <div className="w-full h-[120%] overflow-hidden transform rotate-3 translate-y-10 group-hover:rotate-0 group-hover:translate-y-6 transition-all duration-500 ease-out relative">
              <Image
                src="/project_amazon1.png"
                alt="Amazon Redesign"
                fill
                className="object-cover object-top absolute inset-0"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center relative z-10">
            <p className="text-lg font-bold group-hover:text-[#ff6522] transition-colors">Amazon Redesign</p>
            <span className="text-[#ff6522] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </div>
        </Link>

        {/* --- Project 2: CodeLance (Wide Floating Card) --- */}
        <Link href="/projects/codelance" className="col-span-2 md:col-span-2 md:row-span-2 bg-[#1c1c1c] rounded-[2rem] p-6 flex flex-col border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-xs shadow-lg shadow-orange-900/20">
              Projects
            </span>
          </div>
          {/* Floating Card Image */}
          <div className="mt-12 flex-1 relative flex items-end justify-center perspective-1000">
            <div className="w-[90%] h-[120%] bg-gray-800 rounded-t-xl shadow-2xl overflow-hidden transform translate-y-8 group-hover:translate-y-2 transition-all duration-500 ease-out border-t-2 border-x-2 border-white/5">
              <div className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url('https://github.com/Akshatjalan/DevFreelance/raw/master/frontend/src/assets/mockup.png')" }}>
              </div>
            </div>
          </div>
          <h3 className="absolute bottom-6 left-6 text-xl font-bold z-10 group-hover:text-[#ff6522] transition-colors bg-black/40 px-3 py-1 rounded-lg backdrop-blur-md">CodeLance</h3>
        </Link>

        {/* --- Project 3: Harry Potter (Vertical Tilted Card - Opposite Tilt) --- */}
        <Link href="/projects/jobgate" className="col-span-2 md:col-span-1 md:row-span-3 bg-[#1c1c1c] rounded-[2rem] p-6 flex flex-col border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#ff6522] text-white font-semibold text-xs shadow-lg shadow-orange-900/20">
              Projects
            </span>
          </div>
          {/* Floating Card Image */}
          <div className="flex-1 mt-12 relative flex items-center justify-center">
            <div className="w-full h-[120%] rounded-xl erflow-hidden transform -rotate-3 translate-y-11 group-hover:rotate-0 group-hover:translate-y-8 transition-all duration-500 ease-out">
              <Image
                src="/project_amazon1.png"
                alt="Amazon Redesign"
                fill
                className="object-cover object-top absolute inset-0"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center relative z-10">
            <h3 className="text-xl font-bold group-hover:text-[#ff6522] transition-colors">Harry Potter</h3>
            <span className="text-[#ff6522] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </div>
        </Link>

        {/* --- Social Footer (Email, LinkedIn, GitHub) --- */}
        <div className="col-span-2 md:col-span-2 md:row-span-1 bg-[#1c1c1c] rounded-[2rem] p-6 flex items-center justify-around border border-white/5">
          {/* Email */}
          <a href="mailto:akshatjalanmain@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-[#ff6522] group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-sm font-bold hidden md:block group-hover:text-[#ff6522] transition-colors">Email</span>
          </a>

          <div className="w-px h-8 bg-white/10"></div>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/akshat-jalan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-[#0077b5] group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
            <span className="text-sm font-bold hidden md:block group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
          </a>

          <div className="w-px h-8 bg-white/10"></div>

          {/* GitHub */}
          <a href="https://github.com/Akshatjalan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
            <span className="text-sm font-bold hidden md:block group-hover:text-white transition-colors">GitHub</span>
          </a>
        </div>

      </div>
    </main>
  );
}