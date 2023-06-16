'use client'

import { Variants, motion } from 'framer-motion'
import React from 'react'
import foguete from '../assets/Foguete.png'
import Image from 'next/image'

export default function Rocket() {
  const variants: Variants = {
    offscreen: {
      y: 400,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  }
  return (
    <motion.div
      className="absolute -top-12 translate-x-[80%] 2xl:translate-x-[90%]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div variants={variants}>
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 1,
            type: 'tween',
          }}
        >
          <Image src={foguete} alt="foguete" height={760} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
