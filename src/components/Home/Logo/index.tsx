import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src='/images/header/logo.svg'
        alt='brand'
        width={117}
        height={34}
        className='block dark:hidden'
      />
      <Image
        src='/images/header/white-logo.svg'
        alt='brand'
        width={117}
        height={34}
        className='dark:block hidden'
      />
    </div>
  )
}

export default Logo
