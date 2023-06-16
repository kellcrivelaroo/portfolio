'use client'
import { useEffect, useState } from 'react'
import MenuList from './MenuList'
import MenuToggle from './MenuToggle'
import { useAnimate, stagger } from 'framer-motion'

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const menuAnimations: any[] = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          ['nav', { transform: 'translateX(100%)' }, { at: '-0.1' }],
        ]

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ])
  }, [animate, isOpen])

  return scope
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const scope = useMenuAnimation(isOpen)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <header className="z-50 flex w-full items-center justify-between py-8 pl-16 pr-8">
      <a
        href=""
        className="logo group block font-alt text-[2.5em] font-bold transition-colors duration-500"
      >
        {`< Kell`}
        <span className="mx-1 text-rosa duration-500 group-hover:text-rosa/60">
          .
        </span>
        {` />`}
      </a>

      <div ref={scope}>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuList isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  )
}
