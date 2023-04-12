'use client'

interface MenuItemProps {
  label: string
  onClick: () => void
}

export function MenuItem({ label, onClick }: MenuItemProps) {
  return (
    <div 
      onClick={onClick}
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    >
      {label}
    </div>
  )
}