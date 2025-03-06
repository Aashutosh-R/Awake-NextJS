import Logo from '@/components/Home/Logo'
import { Icon } from '@iconify/react'
import AuthLinks from '@/components/Auth/SignIn'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const UserProfile: React.FC = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className='flex items-center gap-3'>
          <div>
            <h2>{session.user.name}</h2>
            <button
              onClick={() => signOut()}
              className='text-xs border rounded-2xl px-2 py-0.5 hover:cursor-pointer'>
              Sign out
            </button>
          </div>
          <div>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt='userimg'
                width={40}
                height={40}
                className='rounded-full'
              />
            )}
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className='border border-black bg-black text-white text-xm lg:text-base font-medium rounded-full py-2 pr-2 pl-5 flex items-center gap-4 group hover:bg-transparent hover:cursor-pointer transition delay-150 duration-400 ease-in-out'>
          <span className='group-hover:text-black group-hover:translate-x-10 transition delay-150 duration-400 ease-in-out'>
            Let&apos;s Collaborate
          </span>
          <span className='p-1.5 bg-white text-black rounded-full group-hover:bg-black group-hover:text-white group-hover:rotate-45 group-hover:-translate-x-36 transition delay-150 duration-400 ease-in-out'>
            <Icon icon={'solar:arrow-right-up-linear'} width={20} height={20} />
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Logo />
            </DialogTitle>
            <AuthLinks />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UserProfile
