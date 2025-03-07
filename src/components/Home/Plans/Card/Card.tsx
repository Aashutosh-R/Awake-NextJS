import { Plans } from '@/types/plan'
import { Icon } from '@iconify/react'

export const Card: React.FC<{ item: Plans }> = ({ item }) => {
  return (
    <div
      className={`${item.cardColor} ${item.textColor} p-10 rounded-2xl col-span-12 justify-center xl:col-span-6`}>
      <div className='grid grid-cols-11 gap-6'>
        <div className='flex flex-col gap-12 col-span-11 sm:col-span-5'>
          <div>
            <button className='rounded-full px-4 py-1.5 bg-black text-white text-xs lg:text-base font-medium mb-3'>
              {item.type}
            </button>
            <p className={`text-xs lg:text-xm font-normal ${item.textLightColor}`}>
              {item.title}
            </p>
          </div>
          <div>
            <div className='flex items-baseline gap-1 mb-3'>
              <h3 className={`${item.textColor} text-4xl lg:text-5xl font-medium`}>
                ${item.amount}
              </h3>
              <p className={`text-xm lg:text-base font-normal ${item.textLightColor}`}>
                /month
              </p>
            </div>
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
          </div>
        </div>
        <div
          className={`hidden sm:block col-span-1 border-r ${item.borderColor}`}></div>
        <div className='col-span-11 sm:col-span-5'>
          <p className={`${item.textColor} text-xm lg:text-base font-medium mb-4`}>
            Features
          </p>
          <ul className='flex flex-wrap sm:flex-col gap-4'>
            {item.features.map((feature, findex) => (
              <li key={findex} className='flex items-center gap-3 text-xm lg:text-base'>
                {' '}
                <span>
                  <Icon icon={'tabler:check'} width={20} height={20} />
                </span>{' '}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
