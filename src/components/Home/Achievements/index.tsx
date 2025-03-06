import { achievement } from '@/app/api/achievement'
import Image from 'next/image'

const Achievements: React.FC = () => {
  return (
    <section>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='mb-20'>
          <h3 className='text-5xl font-medium leading-14 text-center'>
            Accolades and{' '}
            <span className='font-instrumentS font-normal'>achievements</span>{' '}
            <br />
            celebration our design excellence
          </h3>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {achievement.map((item, index) => (
              <div
                key={index}
                className='border border-black/10 rounded-2xl p-10 flex flex-col gap-16 grow'>
                <div>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p className='text-base font-normal text-black/60 mb-3'>
                    {item.title}
                  </p>
                  <h5 className='text-2xl font-medium leading-7'>
                    {item.desc}
                  </h5>
                </div>
                <div>
                  <p className='text-base font-normal text-black/60'>
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
