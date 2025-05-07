import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../../const/projects'
import styles from '../../styles/Projects.module.css'

export const Projects = () => {
  const [info, setInfo] = useState(3)

  const fetchdata = (() => {
    return projects.filter(pro => pro.id === info)
  })()

  const selected = fetchdata[0]

  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-white font-bold text-center lg:text-[1.7rem] text-[1rem] pt-[100px] mb-6'
      >
        Mis Proyectos
      </motion.h3>

      <section id='proyectos' className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`${styles.buttons} flex md:flex-row flex-wrap fit md:px-4 gap-2 text-white justify-center lg:text-[.8rem] text-[0.8rem]`}
        >
          {projects.map((pro, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`md:w-60 md:py-2 py-0.5 px-2 rounded-2xl border border-gray-700 bg-auto hover:cursor-pointer ${
                pro.id === info ? 'bg-blue-700' : ''
              }`}
              key={index}
              onClick={() => setInfo(pro.id)}
            >
              {pro.title}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={selected.img}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`flex p-6 xl:w-[500px] xl:h-[400px] lg:w-[450px] lg:h-[350px] md:w-[350px] md:h-[200px] w-[80%] m-auto`}

          >
            <img src={selected.img} alt='' className='w-full aspect-auto object-contain' />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`${styles.desp} flex flex-col text-white md:mt-6 px-4`}
        >
          <h2 className='text-md font-bold xl:text-[2rem] md:text-[1.5rem] md:mb-8 mb-2'>
            {selected.title}
          </h2>
          <p className='text-sm xl:text-[1rem] md:text-[0.8rem] text-[.7rem] mb-4 text-gray-200'>
            {selected.description}
          </p>

          <motion.ul
            initial='hidden'
            animate='visible'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className='flex flex-row lg:gap-4 gap-1 flex-wrap items-center text-white font-semibold lg:text-[1rem] text-[.8rem]'
          >
            {selected.technologies.map((tech, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className='bg-blue-700 lg:px-6 md:px-3 px-2 py-1 rounded-2xl'
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className='flex flex-row gap-2 flex-wrap items-center justify-end lg:py-6 py-4 text-[.9rem]'
          >
            <a
              href={selected.url}
              target='_blank'
              rel='noreferrer'
              className='bg-neutral-800 px-6 py-1 rounded-[8px] hover:cursor-pointer'
            >
              Visitar
            </a>
            <a
              href={selected.gitHub}
              target='_blank'
              rel='noreferrer'
              className='bg-neutral-800 px-6 py-1 rounded-[8px] hover:cursor-pointer'
            >
              Git Hub
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
