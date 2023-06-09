'use client'

import { useCallback, useState } from 'react'

import MenuItem from './MenuItem'

import { Avatar } from '../Avatar'
import { AiOutlineMenu } from 'react-icons/ai'
import { useRegisterModal } from '@/app/hooks/useRegisterModal'

export function UserMenu() {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  return (
    <div className='relative'>
      <div className='flex items-center gap-3'>
        <div
          onClick={() => {}}
          className='
            hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer
          '
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className='
            p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md
            transition
          '
        >
          <AiOutlineMenu size={18} />

          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      { isOpen && (
        <div
          className='
            absolute rounded-xl shadow-md w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm bg-neutral-50
          '
        >
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem
                onClick={() => {}}
                label='Login'
              />
              <MenuItem
                onClick={registerModal.onOpen}
                label='Sign up'
              />
            </>
          </div>
        </div>
      ) }

    </div>
  )
}