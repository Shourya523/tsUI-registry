"use client"

import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import {
  Home as HomeIcon, Settings, User, MessageSquare, Terminal, Chrome,
  Wind,
  Cpu,
  Layers,
  Framer,
  Box,
  Code2,
  Zap,
  Github
} from "lucide-react"
import { GlassDock } from "@/registry/ts-UI/blocks/glass-dock/glass-dock"
import { GlassLogin } from "@/registry/ts-UI/blocks/glass-login/glass-login"
import {
  Carousel,
  CarouselRow,
  CarouselItem
} from "@/registry/ts-UI/ui/carousel"
import { motion } from "motion/react"
import UnderlineText from "@/registry/ts-UI/blocks/underlined-heading/underlined-heading"

export default function Home() {
  const dockItems = [
    { label: "Home", icon: HomeIcon, onClick: () => console.log("home") },
    { label: "Profile", icon: User, onClick: () => console.log("profile") },
    { label: "Messages", icon: MessageSquare, onClick: () => console.log("messages") },
    { label: "Console", icon: Terminal, onClick: () => console.log("console") },
    { label: "Settings", icon: Settings, onClick: () => console.log("settings") },
  ]
  const CAROUSEL_DATA = [
    {
      name: "Google",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" />
          <path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" />
          <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
          <path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="#44a8b3" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="15.974" r="2.5" fill="#007acc" />
          <path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" fill="#007acc" />
          <path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" fill="#007acc" />
          <path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" fill="#007acc" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Framer",
      icon: (
        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5.5H12.5V0.5H2.5L7.5 5.5ZM7.5 5.5H2.5V9.5L7.5 14.5V10.5H12.5L7.5 5.5Z" stroke="white" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Three.js",
      icon: (
        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Lucide",
      icon: (
        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z" fill="white" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" fillRule="evenodd"><title>file_type_typescript_official</title><rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6" /><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" /></svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 22.525H0l12-21.05 12 21.05z" fill="white" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ]
  const row1 = [...CAROUSEL_DATA, ...CAROUSEL_DATA]
  const row2 = [...CAROUSEL_DATA, ...CAROUSEL_DATA]
  const lines = [
    "Human Beings in a Mob",
    "What's a Mob to a King",
  ];

  return (
    <div className="dark min-h-svh bg-background text-foreground transition-colors duration-300">
      <div className="max-w-3xl mx-auto flex flex-col px-4 py-8 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground">
            Premium components for high-end interfaces.
          </p>
        </header>

        <main className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col gap-4 border border-white/10 rounded-lg p-4 min-h-[400px] relative overflow-hidden bg-card">
            <div className="flex items-center justify-between z-20">
              <h2 className="text-sm text-white/70 sm:pl-3">
                Underlined Heading
              </h2>
              <OpenInV0Button name="glass-dock" className="w-fit" />
            </div>
            <div className="flex-1 flex items-center justify-center relative rounded-md overflow-hidden bg-gradient-to-t from-neutral-950 to-neutral-800">
              <div className="relative w-full py-20 flex items-center justify-center">
                <UnderlineText
                  content={lines}
                  highlightContent={["King"]}
                  className="bg-linear-to-b from-neutral-50 to-neutral-950 bg-clip-text text-transparent z-[100]"
                  highlightClassName="bg-amber-500 rotate-[-2deg] z-[0] bottom-[-10]"
                  behind
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-white/10 rounded-lg p-4 min-h-[400px] relative overflow-hidden bg-card">
            <div className="flex items-center justify-between z-20">
              <h2 className="text-sm text-white/70 sm:pl-3">
                Liquid Glass Dock (Fisheye Magnification)
              </h2>
              <OpenInV0Button name="glass-dock" className="w-fit" />
            </div>
            <div className="flex-1 flex items-center justify-center relative rounded-md overflow-hidden bg-gradient-to-t from-neutral-950 to-neutral-800">
              <div className="relative w-full flex items-center justify-center">
                <GlassDock items={dockItems} className="relative -bottom-10" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-white/10 rounded-lg p-4 min-h-[400px] relative overflow-hidden bg-card">
            <div className="flex items-center justify-between z-20">
              <h2 className="text-sm text-white/70 sm:pl-3">
                Liquid Login
              </h2>
              <OpenInV0Button name="glass-dock" className="w-fit" />
            </div>
            <div className="flex-1 flex items-center justify-center relative rounded-md overflow-hidden bg-gradient-to-t from-neutral-950 to-neutral-800">
              <div className="relative w-full py-20 flex items-center justify-center">
                <GlassLogin />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-white/10 rounded-lg p-4 min-h-[400px] relative overflow-hidden bg-card">
            <div className="flex items-center justify-between z-20">
              <h2 className="text-sm text-white/70 sm:pl-3">
                Carousel
              </h2>
              <OpenInV0Button name="glass-dock" className="w-fit" />
            </div>
            <div className="flex-1 flex items-center justify-center relative rounded-md overflow-hidden bg-gradient-to-t from-neutral-950 to-neutral-800">
              <div className="relative w-full py-20 flex items-center justify-center">

                {/*Carousel component -> prop : 
                  -> title
                  -> svg
                
                */}
                {/* Row 1 */}
                <Carousel>
                  <div className="flex flex-col gap-8">
                    {/* Just specify the direction and items */}
                    <CarouselRow direction="left" duration={40}>
                      {row1.map((item, idx) => (
                        <CarouselItem key={`row1-${idx}`}>
                          {item.icon}
                          <span className="text-sm font-medium text-white">{item.name}</span>
                        </CarouselItem>
                      ))}
                    </CarouselRow>

                    <CarouselRow direction="right" duration={45}>
                      {row2.map((item, idx) => (
                        <CarouselItem key={`row2-${idx}`}>
                          {item.icon}
                          <span className="text-sm font-medium text-white">{item.name}</span>
                        </CarouselItem>
                      ))}
                    </CarouselRow>
                    <CarouselRow direction="left" duration={45}>
                      {row2.map((item, idx) => (
                        <CarouselItem key={`row2-${idx}`}>
                          {item.icon}
                          <span className="text-sm font-medium text-white">{item.name}</span>
                        </CarouselItem>
                      ))}
                    </CarouselRow>
                  </div>
                </Carousel>

              </div>
            </div>
          </div>



        </main>
      </div>
    </div>
  )
}