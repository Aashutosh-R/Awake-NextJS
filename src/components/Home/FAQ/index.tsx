'use client'
import { faq } from '@/app/api/faq'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='mb-20'>
          <h3 className='text-4xl lg:text-5xl font-medium text-center leading-14'>
            Got questions? <br />
            We’ve got{' '}
            <span className='InstrumentS italic font-normal'>answers</span>
          </h3>
        </div>
        <div>
          <div className='flex flex-col gap-4'>
            {faq.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className='hover:cursor-pointer'>
                <div
                  className={`${
                    expandedIndex === index
                      ? 'bg-black/5 dark:bg-white/5'
                      : 'bg-transparent'
                  } border border-black/10 dark:border-white/20 rounded-2xl px-6 py-8`}>
                  <div className='flex items-center justify-between'>
                    <h6 className='text-xl text-left font-medium'>
                      {item.que}
                    </h6>
                    <span>
                      <Icon
                        icon={'ph:plus'}
                        width={20}
                        height={20}
                        className={`transition ${
                          expandedIndex === index ? 'rotate-45' : 'rotate-0'
                        }`}
                      />
                    </span>
                  </div>
                  <p
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index
                        ? 'max-h-96 opacity-100 mt-3'
                        : 'max-h-0 opacity-0'
                    } text-base text-left font-normal text-black/60 dark:text-white/60`}
                    style={{
                      transitionProperty: 'max-height, opacity, margin-top',
                    }}>
                    {item.ans}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
