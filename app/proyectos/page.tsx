"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiSpringboot,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiSocketdotio,
  SiRedux,
  SiMongodb,
  SiDotnet,
  SiSharp,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

function IconoTecnologia({ nombre }: { nombre: string }) {
  const size = 26;
  switch (nombre.toLowerCase()) {
    case "react":
      return <FaReact size={size} color="#61DBFB" title="React" />;
    case "vite":
      return <SiVite size={size} color="#646CFF" title="Vite" />;
    case "typescript":
      return <SiTypescript size={size} color="#3178C6" title="TypeScript" />;
    case "javascript":
      return <SiJavascript size={size} color="#F7DF1E" title="JavaScript" />;
    case "java":
      return <FaJava size={size} color="#f89820" title="Java" />;
    case "springboot":
      return <SiSpringboot size={size} color="#6DB33F" title="Spring Boot" />;
    case "postgresql":
      return <SiPostgresql size={size} color="#336791" title="PostgreSQL" />;
    case "node.js":
      return <FaNodeJs size={size} color="#3C873A" title="Node.js" />;
    case "tailwind":
      return <SiTailwindcss size={size} color="#38B2AC" title="Tailwind CSS" />;
    case "next.js":
      return <SiNextdotjs size={size} color="white" title="Next.js" />;
    case "socket.io":
      return <SiSocketdotio size={size} color="#010101" title="Socket.io" />;
    case "redux":
      return <SiRedux size={size} color="#764abc" title="Redux" />;
    case "mongoose":
    case "mongoose orm":
    case "mongodb":
      return <SiMongodb size={size} color="#47A248" title="MongoDB" />;
    case "c#":
    case "csharp":
      return <SiSharp size={size} color="#239120" title="C#" />;
    case ".net":
      return <SiDotnet size={size} color="#512BD4" title=".NET" />;
    case "sql":
      return <SiMysql size={size} color="#00758F" title="SQL" />;
    default:
      return (
        <span className="text-gray-400 text-xs px-2 py-1 rounded bg-gray-700">
          {nombre}
        </span>
      );
  }
}

export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      titulo: "Dumas Distribuciones",
      descripcion:
        "Plataforma mayorista para la venta de productos veterinarios con gestión avanzada de inventarios, pedidos y usuarios.",
      tecnologias: [
        "React",
        "Vite",
        "TypeScript",
        "Java",
        "SpringBoot",
        "PostgreSQL",
      ],
      imagen: "/proyectos/dumas.png",
      demo: "https://dumasdistribuciones.com.ar",
      github: "",
      privado: true,
      destacado: true,
      categoria: "Full Stack",
    },
    {
      id: 2,
      titulo: "Spa-SentirseBien",
      descripcion:
        "Página web para gestionar reservas y comunicación con clientes, que automatiza el agendamiento de citas, muestra servicios, promociones y permite feedback directo.",
      tecnologias: [
        "Javascript",
        "React",
        "Redux",
        "Tailwind",
        "Node.js",
        "Mongoose ORM",
      ],
      imagen: "/proyectos/spa.png",
      demo: "",
      github: "https://github.com/IanZimmerK/SPA_PROYECT",
      privado: false,
      destacado: false,
      categoria: "Full Stack",
    },
    {
      id: 3,
      titulo: "Gestion de Stock",
      descripcion:
        "Sistema backend para administrar inventarios con seguridad, permitiendo controlar productos, movimientos y reportes de forma eficiente.",
      tecnologias: ["C#", ".NET", "SQL"],
      imagen: "/proyectos/stock.jpg",
      demo: "",
      github: "https://github.com/IanZimmerK/GestionStock",
      privado: false,
      destacado: false,
      categoria: "Backend",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5">
            MIS{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PROYECTOS
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Algunos de los trabajos que realicé
          </p>
          <a
            href="https://github.com/IanZimmerK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-lg"
          >
            <FaGithub size={26} />
            Ver repositorios en GitHub
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden hover:border-purple-500/70 transition-all duration-300 shadow-lg">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    width={400}
                    height={224}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-400"
                  />
                  <div className="absolute top-4 left-4 flex gap-3">
                    {proyecto.destacado && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md select-none">
                        ⭐ Reciente
                      </span>
                    )}
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm select-none">
                      {proyecto.categoria}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-5 rounded-t-3xl">
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2 rounded-full text-base font-semibold hover:scale-105 transition-transform shadow-lg"
                    >
                      Demo
                    </a>
                    {!proyecto.privado && proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-white hover:text-black transition-all shadow-lg"
                      >
                        Código
                      </a>
                    )}
                    {proyecto.privado && (
                      <span className="border border-gray-500 text-gray-400 px-6 py-2 rounded-full text-base font-semibold cursor-not-allowed select-none">
                        Repositorio privado
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-300">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {proyecto.tecnologias.map((tech, i) => (
                      <IconoTecnologia key={i} nombre={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}