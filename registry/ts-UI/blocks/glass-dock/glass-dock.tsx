"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"
import { GlassContainer } from "@/registry/ts-UI/ui/glass-container"
import { Button } from "@/registry/ts-UI/ui/button"

interface DockItem {
  label: string
  icon: LucideIcon
  onClick: () => void
}

interface GlassDockProps {
  items: DockItem[]
  className?: string
}

export const GlassDock = ({ items, className }: GlassDockProps) => {
  const mouseX = useMotionValue(Infinity)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 px-4 pointer-events-none">
      <GlassContainer 
        variant="default"
        className={cn(
          "flex flex-row items-center gap-3 p-2 rounded-[50px] w-fit h-16 border-white/10 shadow-2xl pointer-events-auto", 
          className
        )}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, index) => (
          <IconItem key={index} mouseX={mouseX} item={item} />
        ))}
      </GlassContainer>
    </div>
  )
}

function IconItem({ mouseX, item }: { mouseX: MotionValue<number>, item: DockItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = item.icon

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 }
    return val - (bounds.left + bounds.width / 2)
  })

  const sizeTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40])
  const size = useSpring(sizeTransform, { 
    mass: 0.1, 
    stiffness: 150, 
    damping: 12 
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="flex items-center justify-center relative group"
    >
      <Button
        size="icon"
        onClick={item.onClick}
        className="w-full h-full rounded-full flex items-center justify-center p-0 active:scale-90 transition-all duration-200 relative overflow-hidden border border-white/20 bg-gradient-to-b from-white/15 via-white/10 to-white/5 text-white backdrop-blur-md shadow-lg 
        hover:scale-[1.02] hover:backdrop-blur-[25px] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none hover:bg-white/10"
      >
        <Icon className="w-5 h-5 text-white/80 group-hover:text-white" />
      </Button>
      
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/90 border border-white/10 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        {item.label}
      </div>
    </motion.div>
  )
}