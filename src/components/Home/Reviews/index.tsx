import Image from 'next/image'

const Reviews: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1272px] mx-auto py-20 px-7'>
        <div className='text-center mb-20'>
          <h3 className='text-4xl lg:text-5xl font-medium'>
            What our{' '}
            <span className='font-instrumentS font-normal'>satisfied</span>{' '}
            customers <br />
            are saying about us
          </h3>
        </div>
        <div>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 sm:col-span-6 xl:col-span-8'>
              <div className='h-full w-full p-8 rounded-2xl text-white bg-[url(/images/reviews/customerReview.jpg)] bg-no-repeat'>
                <p className='text-xs lg:text-xm font-medium text-white/60 uppercase tracking-widest mb-30 lg:mb-60'>
                  Customer stories
                </p>
                <h4 className='text-xl lg:text-3xl font-medium text-white mb-6'>
                  “Awake’s expertise transformed my vision into success!”
                </h4>
                <p className='text-xm lg:text-base font-medium text-white'>
                  Kabir Shah
                </p>
                <p className='text-xs lg:text-xm font-normal text-white/60'>
                  Founder of Chipsland
                </p>
              </div>
            </div>
            <div className='col-span-12 sm:col-span-6 xl:col-span-4'>
              <div className='h-full w-full bg-yellow-200 rounded-2xl p-8'>
                <p className='text-xs lg:text-xm font-medium text-black/60 uppercase tracking-widest mb-40 lg:mb-[14.625rem]'>
                  Facts & numbers
                </p>
                <h2 className='text-5xl lg:text-7xl font-medium'>91%</h2>
                <p className='text-xl lg:text-3xl font-medium'>
                  clients recommend our design services.”
                </p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 xl:col-span-4'>
              <div className='h-full w-full bg-black rounded-2xl p-8 flex flex-col justify-between'>
                <p className='text-xs lg:text-xm font-medium text-white/60 uppercase tracking-widest mb-6'>
                  Customer stories
                </p>
                <h4 className='text-2xl lg:text-[2rem] font-medium text-white leading-9 mb-6'>
                  Their creativity and attention to detail transformed our brand
                  completely!
                </h4>
                <Image
                  src={'/images/reviews/customerReview2.jpg'}
                  alt='img'
                  width={344}
                  height={220}
                  // layout= 'responsive'
                  className='rounded-xm w-full'
                />
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 xl:col-span-8'>
              <div className='h-full w-full bg-black/5 rounded-2xl p-8'>
                <p className='text-xs lg:text-xm font-medium text-black/60 uppercase tracking-widest mb-6'>
                  Customer stories
                </p>
                <h3 className='text-4xl lg:text-5xl font-medium lg:leading-14 mb-[7.375rem]'>
                  “Awake Design Agency brought our ideas to life with
                  exceptional creativity and precision, exceeding expectations.”
                </h3>
                <p className='text-xm lg:text-base font-medium text-black'>
                  Sarah Mitchell
                </p>
                <p className='text-xs lg:text-xm font-normal text-black/60'>
                  Marketing Head at TalentConnect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
