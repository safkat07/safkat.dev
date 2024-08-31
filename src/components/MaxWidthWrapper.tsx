import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({ children, className }: {
    children: ReactNode,
    className?: string
} ) => {
  return (
      <div className={cn("h-full mx-auto w-full lg:max-w-screen-2xl px-2.5 md:px-10", className)}>
{children}
    </div>
  )
}

export default MaxWidthWrapper
