'use client'
import { brands } from '@/app/api/brands'
import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

export default function Brands() {
  return (
    <section>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-16 h-0.5 bg-linear-to-r from-black/0 to-black/10'></div>
          <p className='text-center text-xs sm:text-xm md:text-base font-normal text-black/60 mx-4'>
            Loved by 1000+ big and small brands around the worlds
          </p>
          <div className='w-16 h-0.5 bg-linear-to-l from-black/0 to-black/10'></div>
        </div>
        <div className='relative pt-7'>
          <Slider
            width='250px'
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}>
            {brands.map((item, index) => (
              <Slider.Slide key={index}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={140}
                  height={40}
                  style={{ height: '40px' }}
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
