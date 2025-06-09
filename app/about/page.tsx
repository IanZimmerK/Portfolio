"use client"

import { motion } from 'framer-motion'
import { FaReact, FaJs } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si'

export default function AboutMe() {
  const experiencia = [
    { 
      año: "2025", 
      titulo: "Ingeniería en Sistemas de Información", 
      empresa: "Universidad de la Cuenca del Plata", 
      descripcion: "Actualmente cursando la carrera mientras desarrollo proyectos como freelance. En constante aprendizaje y aplicación de nuevas tecnologías." 
    },
    { 
      año: "2024", 
      titulo: "Desarrollador Full Stack Freelance", 
      empresa: "Independiente", 
      descripcion: "Creación de sitios web responsivos, tiendas online y aplicaciones a medida. Enfocado en la experiencia del usuario y el rendimiento." 
    },
    { 
      año: "2022", 
      titulo: "Tecnicatura Universitaria en Programación", 
      empresa: "Universidad Tecnológica Nacional (UTN)", 
      descripcion: "Formación técnica integral con foco en programación, algoritmos, estructuras de datos y desarrollo de software. Base sólida para el trabajo profesional."   
    }
  ]

  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            SOBRE <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MÍ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales increíbles
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Foto y descripción personal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/perfil.jpg"
                      alt="Foto de Ian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Ian Zimmermann Kennedy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Soy desarrollador Full-Stack con más de 2 años de experiencia creando aplicaciones web modernas. 
                  Me apasiona aprender nuevas tecnologías y resolver problemas complejos
                  con soluciones elegantes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats y datos curiosos */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { numero: "20+", label: "Proyectos" },
                { numero: "2+", label: "Años Coding" },
                { numero: "5+", label: "Tecnologías" },
                { numero: "100%", label: "Motivación" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.numero}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Mi <span className="text-purple-400">Trayectoria</span>
          </h2>

          <div className="space-y-8">
            {experiencia.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="flex gap-8 items-center"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {exp.año}
                  </div>
                </div>
                <div className="flex-1 bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-white font-bold text-lg">{exp.titulo}</h3>
                  <p className="text-purple-400 mb-2">{exp.empresa}</p>
                  <p className="text-gray-300 text-sm">{exp.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. 
            ¡Contactame!
          </p>
          <a 
            href="mailto:ianzimmermann18@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
          >
            Enviar mensaje
          </a>
        </motion.div>
      </div>
    </main>
  )
}
