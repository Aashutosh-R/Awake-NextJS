import { projectsdata } from '@/app/api/projects'
import Image from 'next/image'

const Projects: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1272px] mx-auto py-20 px-7'>
        <div className='text-center mb-20'>
          <h3 className='text-4xl lg:text-5xl font-medium text-black'>
            How we{' '}
            <span className='font-normal font-instrumentS'>transformed</span> a
            small <br /> business’s online presence
          </h3>
        </div>
        {/* projects details */}
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8'>
            {projectsdata.map((item, index) => (
              <div key={index} className='group'>
                <div className='overflow-hidden rounded-2xl'>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={624}
                    height={410}
                    className='rounded-2xl transition duration-100 delay-150 ease-in-out group-hover:scale-110 group-hover:cursor-pointer'
                  />
                </div>
                <h5 className='text-xl lg:text-2xl font-medium mt-6 mb-4 group-hover:text-primary group-hover:cursor-pointer'>
                  {item.title}
                </h5>
                <div className='flex gap-3'>
                  {item.tags.map((tags, index) => (
                    <button
                      key={index}
                      className='text-xs lg:text-xm font-normal px-4 py-1.5 border border-black/10 rounded-full hover:bg-black hover:text-white'>
                      {tags}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
