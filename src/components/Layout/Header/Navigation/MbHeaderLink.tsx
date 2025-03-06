import { HeaderItem } from '@/types/menu'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

const MbHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const path = usePathname()
  const router = useRouter()

  const btnclassname = clsx(
    'flex items-center justify-between rounded-md w-full p-2 px-4 text-black dark:text-gray-200/90 focus:outline-none',
    {
      'bg-black dark:bg-white/20 text-white dark:text-white':
        item.href === path,
    }
  )

  return (
    <div className='relative w-full' onClick={() => router.push(item.href)}>
      <button className={btnclassname}>{item.label}</button>
    </div>
  )
}

export default MbHeaderLink
