import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import * as React from "react"

const GlassCardVariants=cva(
    "relative overflow-hidden flex flex-col gap-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent text-white p-6 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] after:absolute after:inset-0 after:-z-20 after:bg-black/20",
    {
        variants:{
            
        }

})
function GlassCard({className,children,...props}:React.ComponentProps<"div">){
    return (
        <div 
        data-slot="glass-card"
        className={cn(
            "relative overflow-hidden flex flex-col gap-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent text-white p-6 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_0_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] after:absolute after:inset-0 after:-z-20 after:bg-black/20",
            className
        )}{...props}>
          {children}
        </div>
    )
}

function GlassCardHeader({ className,...props}:React.ComponentProps<"div">){
    return(
        <div data-slot="glass-card-header"
        className={cn(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6 border-b border-white/10 has-data-[slot=card-action]:grid-cols-[1fr_auto] relative after:absolute after:bottom-0 after:left-6 after:right-6 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent"
            ,className
        )}
        {...props}/>
    )
}

function GlassCardTitle({className,...props}:React.ComponentProps<"div">){
    return(
        <div
        data-slot="glass-card-title"
        className={cn("text-xl font-semibold leading-none tracking-tight text-white/90 drop-shadow-sm", 
            className )}{...props}/>
    )
}
function GlassCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-description"
      className={cn("text-sm text-white/50", className)}
      {...props}
    />
  )
}

function GlassCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function GlassCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-footer"
      className={cn("flex items-center px-6 pt-0", className)}
      {...props}
    />
  )
}

export { 
  GlassCard, 
  GlassCardHeader, 
  GlassCardTitle, 
  GlassCardDescription, 
  GlassCardContent, 
  GlassCardFooter 
}