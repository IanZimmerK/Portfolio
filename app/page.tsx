"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  FaReact,
  FaJs,
  FaJava
} from "react-icons/fa"
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiNodedotjs,
  SiPostgresql,
  SiVite,
  SiGithub,
  SiPostman,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiPhp,
  SiLaravel,
  SiCplusplus
} from "react-icons/si"

const techVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.15 * custom,
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  }),
}

export default function Home() {
  const tecnologias = {
    principales: [
      { name: "React", icon: FaReact, color: "text-[#61dafb]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#e34c26]" },
      { name: "CSS3", icon: SiCss3, color: "text-[#2965f1]" },
      { name: "Java", icon: FaJava, color: "text-[#b07219]" },
      { name: "Spring Boot", icon: SiSpring, color: "text-green-600" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ],
    experiencia: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
      { name: "PHP", icon: SiPhp, color: "text-purple-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 flex flex-col items-center">
        
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-5xl mb-16 sm:mb-20 lg:mb-24 select-none"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">
            HOLA, SOY
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              IAN ZIMMERMANN
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 font-medium text-gray-300 px-2 sm:px-4 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Full Stack apasionado por crear experiencias digitales
            modernas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              href="/proyectos"
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-sm sm:text-base text-black bg-white rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Ver mis proyectos
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Sobre mí
            </Link>
          </div>
        </motion.section>

        {/* Tecnologías que domino */}
        <section className="max-w-6xl w-full mb-16 sm:mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 sm:mb-12 lg:mb-14 tracking-wide"
          >
            Tecnologías que domino 🚀
          </motion.h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {tecnologias.principales.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center cursor-pointer group"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={techVariants}
                >
                  <div
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-white/20 shadow-lg"
                    aria-label={tech.name}
                    title={tech.name}
                  >
                    <Icon className={`text-3xl sm:text-4xl lg:text-5xl ${tech.color} drop-shadow-md`} />
                  </div>
                  <span className="mt-2 sm:mt-3 text-white font-medium text-xs sm:text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity select-none">
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Experiencia con */}
        <section className="max-w-6xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 tracking-wide"
          >
            💡 Experiencia con:
          </motion.h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {tecnologias.experiencia.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center cursor-pointer group"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={techVariants}
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:bg-white/10 shadow-inner"
                    aria-label={tech.name}
                    title={tech.name}
                  >
                    <Icon
                      className={`text-2xl sm:text-3xl lg:text-4xl ${tech.color} opacity-80 group-hover:opacity-100 drop-shadow-sm`}
                    />
                  </div>
                  <span className="mt-2 text-gray-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity select-none">
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}