'use client'
import { aboutdata } from '@/app/api/about'
import { Icon } from '@iconify/react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section ref={ref}>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='mb-16'>
          <h4 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-center leading-14'>
            We fuse{' '}
            <span className='InstrumentS italic font-normal inline-flex items-center justify-center gap-2 py-1.5 px-6 text-purple-400 bg-purple-300/20 rounded-full'>
              <Icon
                icon={'solar:magic-stick-3-linear'}
                width={40}
                height={40}
              />
              Creativity
            </span>{' '}
            <span className='InstrumentS italic font-normal inline-flex items-center justify-center gap-2 py-1.5 px-6 text-blue-400 bg-blue-300/20 rounded-full'>
              <Icon
                icon={'solar:lightbulb-bolt-linear'}
                width={40}
                height={40}
              />
              Innovation
            </span>{' '}
            &{' '}
            <span className='InstrumentS italic font-normal inline-flex items-center justify-center gap-2 py-1.5 px-6 text-orange-400 bg-orange-300/20 rounded-full'>
              <Icon icon={'solar:command-linear'} width={40} height={40} />
              Strategy
            </span>{' '}
            <br className='xl:block hidden' />
            to craft exceptional, digital experiences strategy, and technology
            to drive exceptional, impactful results.
          </h4>
        </div>
        {/* records */}
        <div className='flex flex-wrap flex-col sm:flex-row justify-evenly md:justify-around gap-12'>
          {aboutdata.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-3'>
              <h3 className='text-8xl lg:text-9xl'>
                <sup className='mr-3'>+</sup>
                {/* {item.number} */}
                {inView && (
                  <CountUp start={0} end={item.number} duration={2.5} />
                )}
              </h3>
              <p className='text-xs lg:text-base uppercase font-normal text-black/60 dark:text-white/60 max-w-60p'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
