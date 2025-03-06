'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { headerData } from './Navigation/menuData'
import Logo from '@/components/Home/Logo'
import HeaderLink from './Navigation/HeaderLink'
import MbHeaderLink from './Navigation/MbHeaderLink'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerclass = clsx('bg-transparent fixed top-0 w-full z-30', {
    'bg-white dark:bg-black/80 dark:shadow-white/10 shadow-lg': sticky,
  })

  return (
    <header className={headerclass}>
      <nav className='container max-w-[1272px] mx-auto py-6 px-7 '>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='./'>
              <Logo />
            </Link>
          </div>
          <div>
            <ul className='hidden lg:flex gap-2 items-center bg-black/5 dark:bg-white/10 dark:text-white rounded-full px-1.5 py-2.5'>
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className='lg:flex items-center gap-8 hidden'>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Icon
                icon={'solar:sun-bold'}
                width={30}
                height={30}
                className='block dark:hidden'
              />
              <Icon
                icon={'solar:moon-bold'}
                width={30}
                height={30}
                className='dark:block hidden'
              />
            </button>
            <div>
              <UserProfile />
            </div>
          </div>
          <div className='block lg:hidden'>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
      </nav>
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transition-transform duration-300 max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}>
        <div className='flex items-center justify-between p-4'>
          <h2 className='text-lg font-bold'>Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label='Close mobile menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-start p-4'>
          {headerData.map((item, index) => (
            <MbHeaderLink key={index} item={item} />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
