'use client'

import { MouseEvent } from "react"

import { IconType } from "react-icons"

interface ButtonProps {
  label: string
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function Button({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'p-1' : 'p-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className='absolute left-4 top-3'
        />
      )}
      {label}
    </button>
  )
}

export default Button