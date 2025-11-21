import React from 'react'
import {motion} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
     className='py-20 bg-dark-200' id='about'>
        <div className='container mx-auto px-6 mt-4'>
           
            <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple'>Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Get to know more about my background and passion.</p>

            
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:1/2 rounded-2xl overflow-hidden '>
                    <motion.img 
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.9}}
                    viewport={{once:false}}
                    className='w-140 h-full object-cover '
                    src={assets.profile} alt="" />
                </div>
                <motion.div
                initial={{opacity:0,y:50}}
                 whileInView={{opacity:1,y:0}}
                transition={{duration:0.9}}
                 viewport={{once:false}}
                className='md:w-1/2 '>
                    <div className='p-8'>
                        
                        <p className='text-gray-300 mb-6'>Hi, I am Abhishek Jadhav, a passionate Frontend Developer with a knack for creating responsive, user-friendly web experiences. I specialize in building modern web applications using HTML, CSS, and JavaScript frameworks like React. I love turning complex problems into intuitive interfaces and bringing designs to life with clean, maintainable code..</p>
                        <p className='text-gray-300 mb-12'>I am passionate about translating designs into seamless digital experiences and continuously learning new technologies to stay on the cutting edge. When I am not coding, you all probably find me exploring UI trends or experimenting with new web animations. </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                            {
                                aboutInfo.map((data,index)=>(
                                    <div key={index} className='bg-dark-300
                                    rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer '>
                                        <div className='text-purple text-4xl mb-4'>
                                            <data.icon/>
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400'>{data.description}</p>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                </motion.div>
            </div>

        </div>
      
    </motion.div>
  )
}

export default About
