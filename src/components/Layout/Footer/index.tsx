import { footerlink, SocialLinks } from '@/app/api/footerLink'
import Logo from '@/components/Home/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container mx-auto max-w-[1272px] pt-20 pb-6 px-7'>
        <div className='mb-16 py-16 border-b border-black/10 dark:border-white/10'>
          <div className='grid grid-cols-6 sm:grid-cols-12 md:gap-16 gap-12'>
            <div className='flex flex-col gap-6 md:col-span-5 sm:col-span-6 col-span-5'>
              <div>
                <Link href={'/'}>
                  <Logo />
                </Link>
              </div>
              <div>
                <p className='text-base font-normal text-black/60 dark:text-white/60 leading-5'>
                  Empowering businesses with innovative solutions. <br />{' '}
                  Let&apos;s create something amazing together.
                </p>
              </div>
              <div className='flex gap-4'>
                {SocialLinks.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Icon
                      icon={item.icon}
                      width={20}
                      height={20}
                      className='text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                    />
                  </Link>
                ))}
              </div>
            </div>
            {footerlink.map((item, index) => (
              <div
                key={index}
                className='md:col-span-2 xxs:col-span-3 col-span-5'>
                <p className='text-base font-medium mb-4'>{item.title}</p>
                <ul className='flex flex-col gap-3'>
                  {item.links?.map((linkitem, linkindex) => (
                    <li
                      key={linkindex}
                      className='text-base font-normal text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'>
                      <Link href={linkitem.href}>{linkitem.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className='md:col-span-3 xxs:col-span-6 col-span-5'>
              <p className='text-base font-medium mb-4'>Contact Details</p>
              <div className='text-base font-normal flex flex-col gap-3'>
                <p>
                  81 Rivington Street London <br />
                  EC2A 3AY
                </p>
                <p>hello@awake.agnecy</p>
                <p>0105 192 3556</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='text-sm font-normal text-black/40 dark:text-white/40 text-center'>
            ©2025 Awake. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
