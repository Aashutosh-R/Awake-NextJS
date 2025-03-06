'use client'
import { clients } from '@/app/api/clients'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Hero() {
  const upAnimation = {
    initial: { y: '30%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { ease: 'easeInOut', duration: 1, delay: 0.8, type: 'spring' },
  }

  return (
    <section className='relative dark:text-white text-black'>
      <div className='absolute h-full w-full bg-gradient-to-r from-lightblue via-white to-lightyellow dark:from-lightgreen/50 dark:via-black dark:to-lightred/50 blur-2xl z-0'></div>
      <div className='container relative max-w-[1163px] mx-auto py-12 sm:py-16 lg:py-20 px-7 lg:px-0 z-10 mt-24'>
        <motion.div {...upAnimation}>
          <div className='text-center'>
            <h1 className='text-6xl sm:text-8xl lg:text-9xl font-medium leading-16 sm:leading-30 lg:leading-xl text-inherit'>
              Building bold brands with{' '}
              <span className='font-instrumentS'>thoughtful design</span>
            </h1>
          </div>
        </motion.div>
        <div className='pt-4'>
          <p className='text-black/60 text-xs sm:text-xm md:text-base font-normal text-center leading-5.5 '>
            At Awake, we help small startups tackle the world’s biggest
            challenges with tailored <br /> solutions, guiding you from strategy
            to success in a competitive market.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 pt-8'>
          <div>
            <button className=' bg-primary border border-primary py-2 md:py-3 pl-6 pr-3 flex items-center gap-20 md:gap-24 rounded-full group hover:bg-transparent  hover:cursor-pointer transition delay-150 duration-400 ease-in-out'>
              <span className='text-xm md:text-base text-white font-medium group-hover:text-primary group-hover:translate-x-30 transition delay-150 duration-400 ease-in-out'>
                Get Started
              </span>
              <span className='bg-white text-black group-hover:bg-primary group-hover:text-white group-hover:rotate-45 group-hover:-translate-x-48 transition delay-150 duration-400 ease-in-out rounded-full p-2.5'>
                <Icon
                  icon={'solar:arrow-right-up-linear'}
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='flex -space-x-2'>
              {clients.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <div>
              <div>
                <Image
                  src='./images/hero/rating.svg'
                  alt='rating'
                  width={108}
                  height={20}
                />
              </div>
              <div className='pt-1'>
                <p className='text-xs sm:text-sm font-normal text-inherit/60'>
                  Trusted by 1000+ clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
