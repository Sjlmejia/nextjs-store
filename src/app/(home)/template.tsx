"use client"

import { Description } from 'app/components/home/Description/Description'
import Hero from 'app/components/home/Hero/Hero'
import React from 'react'

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}
