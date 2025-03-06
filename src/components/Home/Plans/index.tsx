import { plans } from '@/app/api/plans'
import Card from './Card/Card'

const Plans: React.FC = () => {
  return (
    <section>
      <div className='container mx-auto max-w-[1272px] py-20 px-7'>
        <div className='mb-20'>
          <h3 className='text-center text-5xl font-medium'>
            Pick the plan that <br /> fits your{' '}
            <span className='InstrumentS italic font-normal'>start-up</span>
          </h3>
        </div>
        <div>
          <div className='grid grid-cols-12 gap-6'>
            {plans.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
