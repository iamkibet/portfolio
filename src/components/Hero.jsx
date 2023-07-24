
import { motion } from 'framer-motion'
import { styles } from '../styles'
import SectionWrapper from '../hoc'
import Techstack from './Techstack'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex items-center justify-center'> 
      <div className='absolute'>
        <h1 className={`${styles.heroHeadText}`}>
          Hello My name is Dennis Kibet
        </h1>
        <p className={`${styles.heroSubText}`}>
          I am a Full Stack Developer
        </p>
        < Techstack />
      </div>
      

      <div className='absolute xs:bottom-30 bottom-32 w-full flex justify-center items-center' >
        <a href='#about'>
          <div className='w-[25px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.dev 
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper (Hero, "hero");