import { servicedata } from '@/app/api/service'
import { Icon } from '@iconify/react'

const Services: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1272px] mx-auto py-20 px-7'>
        <div className='mb-16'>
          <h3 className='text-center text-4xl lg:text-5xl font-medium leading-12'>
            Where innovation <br />
            meets{' '}
            <span className='InstrumentS italic font-normal'>aesthetics</span>
          </h3>
        </div>
        {/* service list */}
        <div className='mb-12'>
          <div className='grid lg:grid-cols-5 xxs:grid-cols-2 grid-cols-1 gap-6'>
            {servicedata.map((item, index) => (
              <div
                key={index}
                className={`${item.textColor} ${item.BgColor} p-8 rounded-2xl flex flex-col gap-8 transition ease-in-out duration-100 delay-75 hover:cursor-pointer hover:-translate-y-3`}>
                <Icon icon={item.icon} width={40} height={40} />
                <h5 className='max-w-60p font-medium text-base lg:text-xl'>
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div>
          <div className='bg-black rounded-3xl py-8 pr-10 pl-12 flex justify-between items-center flex-col md:flex-row gap-12 md:gap-0'>
            <div className='text-center md:text-left text-white text-xl lg:text-2xl font-medium'>
              <p>See Our Work in Action.</p>
              <p>Start Your Creative Journey with Us!</p>
            </div>
            <div className='flex gap-3 items-center flex-col sm:flex-row'>
              <button className='bg-white text-black text-xm lg:text-base font-medium rounded-full py-2 pr-2 pl-5 flex items-center gap-4'>
                Let’s Collaborate{' '}
                <span className='p-1.5 bg-black text-white rounded-full'>
                  <Icon
                    icon={'solar:arrow-right-up-linear'}
                    width={20}
                    height={20}
                  />
                </span>
              </button>
              <button className='border border-white bg-transparent text-white text-xm lg:text-base font-medium rounded-full py-2 pr-2 pl-5 flex items-center gap-4'>
                View Portfolio{' '}
                <span className='p-1.5 bg-white text-black rounded-full'>
                  <Icon
                    icon={'solar:arrow-right-up-linear'}
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
