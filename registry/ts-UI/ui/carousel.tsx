import { cn } from "@/lib/utils"
import { motion } from "motion/react";
import * as React from "react"

function Carousel({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="carousel"
            className={cn("relative w-full overflow-hidden py-4")}{...props} />
    )

}

interface CarouselRowProps extends React.ComponentProps<typeof motion.div> {
    direction?: "left" | "right";
    duration?: number;
}

function CarouselRow({
    className,
    direction = "left",
    duration = 40,
    children,
    ...props
}: CarouselRowProps) {
    const isLeft = direction === "left";

    return (
        <motion.div
            data-slot="carousel-row"
            initial={{ x: isLeft ? 0 : "-50%" }}
            animate={{ x: isLeft ? "-50%" : 0 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{ willChange: "transform" }}
            className={cn("flex w-max gap-5", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="carousel-item"
            className={cn(
                
                "flex justify-center items-center gap-2.5 rounded-full py-2 px-5",
                "relative overflow-hidden shrink-0",

                
                "bg-gradient-to-b from-white/15 via-white/10 to-white/5",
                "backdrop-blur-md hover:backdrop-blur-[25px]",

                
                "border border-white/20 shadow-lg",

                
                "transition-all duration-200 cursor-pointer",
                "hover:scale-[1.02] hover:bg-white/10",
                "active:scale-[0.98]",


                "before:absolute before:inset-0 before:pointer-events-none",
                "before:bg-gradient-to-tr before:from-transparent before:via-white/5 before:to-transparent",

                className
            )}
            {...props}
        />
    );
}

export {
    Carousel,
    CarouselRow,
    CarouselItem
}