'use client'

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div
      className='
        max-w-[2520px]
        xl:px-20
        md:px-10
        sm-px-2
        px-4
      '
    >
      {children}
    </div>
  )
}