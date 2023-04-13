'use client'

import { Container } from '../Container'
import { Search } from './Search'
import { UserMenu } from './UserMenu'

import { Logo } from './Logo'

export function NavBar() {
  return (
    <div className='fixed top-0 w-full z-10 shadow-sm bg-white'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}