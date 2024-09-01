import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const CardWrapper = ({children, className }: {
    className?: string,
    children: ReactNode
}) => {
  return (
      <div className={cn("w-full border border-white/10 rounded-[2rem] bg-gradient-to-br from-[#202020] to-[#161616] cursor-pointer", className)}>
          {children}

    </div>
  )
}

export default CardWrapper
