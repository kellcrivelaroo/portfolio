'use client'
import { useEffect, useState } from 'react'

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="2"
    stroke="#fff"
    strokeLinecap="square"
    {...props}
  />
)

export default function MenuToggle({ toggle, isOpen }: any) {
  const [rolled, setRolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 20) {
        setRolled(true)
      } else {
        setRolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={toggle}
      className={`full fixed right-6 top-7 z-50 flex h-12 w-12 items-center justify-center before:absolute before:z-[-1] before:h-full 
      before:w-full before:-translate-x-[1px] before:scale-0 before:rounded-full before:opacity-0 before:transition-all
      lg:right-10 lg:top-8 lg:h-14 lg:w-14
      ${
        rolled &&
        !isOpen &&
        'before:scale-100 before:border before:border-azul-400 before:bg-azul-400/90 before:opacity-100 before:duration-500 before:lg:bg-azul-400/70'
      }`}
    >
      <svg className="w-8 lg:w-9" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}
