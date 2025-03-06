import { teamdata } from '@/app/api/team'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Team: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1272px] mx-auto py-20 px-7'>
        <div className='text-center mb-20'>
          <h3 className='text-4xl lg:text-5xl font-medium'>
            Meet the{' '}
            <span className='font-instrumentS font-normal'>creative minds</span>
            <br /> behind our success
          </h3>
        </div>
        {/* team profile */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10'>
            {teamdata.map((item, index) => (
              <div key={index} className='flex flex-col items-center group'>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={300}
                  height={373}
                  className='grayscale-50 group-hover:grayscale-0'
                />
                <p className='text-base font-medium mt-6 mb-1'>{item.name}</p>
                <p className='text-xm font-normal text-black/60 mb-4'>
                  {item.role}
                </p>
                <div className='flex items-center justify-center gap-4'>
                  <Link href='#'>
                    <Icon
                      icon={'ph:x-logo'}
                      width={20}
                      height={20}
                      className='hover:text-primary text-black/60'
                    />
                  </Link>

                  <Link href='#'>
                    <Icon
                      icon={'ion:logo-linkedin'}
                      width={20}
                      height={20}
                      className='hover:text-primary text-black/60'
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
