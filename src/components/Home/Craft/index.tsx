import { Icon } from '@iconify/react'

const Craft: React.FC = () => {
  return (
    <section>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='border border-black/10 rounded-3xl p-8 md:p-20 lg:p-30 relative z-20 overflow-hidden'>
          <div className='absolute -left-14 -bottom-40 h-full w-30p rounded-full blur-3xl bg-radial from-lightblue to-lightblue'></div>
          <div className='absolute -right-14 -bottom-40 h-full w-30p rounded-full blur-3xl bg-radial from-lightyellow to-lightyellow'></div>
          <div className='text-center '>
            <h3 className='text-5xl font-medium mb-3'>
              Innovative Solutions for Bold Brands
            </h3>
            <p className='text-base font-normal text-black/60 leading-5 mb-6'>
              Looking to elevate your brand? We craft immersive experiences that
              captivate, engage, and <br />
              make your business unforgettable in every interaction.
            </p>
            <div className='flex justify-center'>
              <button className='flex items-center gap-4 border border-black bg-black text-white font-medium py-2 pl-5 pr-2 rounded-full text-base group hover:bg-white hover:text-black hover:cursor-pointer'>
                Let’s Collaborate
                <span className='bg-white text-black rounded-full p-1.5 group-hover:bg-black group-hover:text-white'>
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
export default Craft
