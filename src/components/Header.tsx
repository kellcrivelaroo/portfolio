'use client'
import { useEffect, useState } from 'react'
import MenuList from './MenuList'
import MenuToggle from './MenuToggle'
import { useAnimate, stagger } from 'framer-motion'
import Logo from './Logo'

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const menuAnimations: any[] = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: 'linear', duration: 0.4 },
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
    <header
      className="z-50 flex w-full items-center justify-between p-6 lg:py-8 lg:pl-16 lg:pr-8"
      id="home"
    >
      <Logo />

      <div ref={scope}>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuList isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  )
}
