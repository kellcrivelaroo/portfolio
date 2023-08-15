'use client'
import { Element } from 'react-scroll'
import { ReactNode } from 'react'

export default function ScrollWrapper({
  children,
  name,
  className,
}: {
  children: ReactNode
  name: string
  className: string
}) {
  return (
    <Element name={name} className={`${className}`}>
      {children}
    </Element>
  )
}
