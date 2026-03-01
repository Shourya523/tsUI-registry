"use client"

import * as React from 'react'
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/ts-UI/ui/button"
import { Input } from "@/registry/ts-UI/ui/input"
import { Label } from "@/registry/ts-UI/ui/label"
import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
    GlassCardFooter
} from "@/registry/ts-UI/ui/glass-card"

const LoginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters")
})

export const GlassLogin = () => {
    const [pending, setPending] = React.useState(false)
    const [state, setState] = React.useState({
        success: false,
        errors: {
            username: "",
            email: "",
            password: "",
        },
    })

    const handleSubmit = React.useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setPending(true)

            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData.entries())
            const result = LoginSchema.safeParse(data)

            if (!result.success) {
                const fieldErrors = result.error.flatten().fieldErrors
                setState({
                    success: false,
                    errors: {
                        username: fieldErrors.username?.[0] ?? "",
                        email: fieldErrors.email?.[0] ?? "",
                        password: fieldErrors.password?.[0] ?? "",
                    },
                })
                setPending(false)
                return
            }

            await new Promise((resolve) => setTimeout(resolve, 1500))
            setState({ success: true, errors: { username: "", email: "", password: "" } })
            setPending(false)
        },
        []
    )

    return (
            <GlassCard className="w-full max-w-md shadow-2xl">
                <GlassCardHeader>
                    <GlassCardTitle>Login</GlassCardTitle>
                    <GlassCardDescription>
                        Enter your credentials to access your account.
                    </GlassCardDescription>
                </GlassCardHeader>
                
                <form onSubmit={handleSubmit}>
                    <GlassCardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-white/70">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="johndoe"
                                disabled={pending}
                            />
                            {state.errors.username && (
                                <p className="text-xs text-red-400/80">{state.errors.username}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/70">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                disabled={pending}
                            />
                            {state.errors.email && (
                                <p className="text-xs text-red-400/80">{state.errors.email}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-white/70">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                disabled={pending}
                            />
                            {state.errors.password && (
                                <p className="text-xs text-red-400/80">{state.errors.password}</p>
                            )}
                        </div>
                    </GlassCardContent>
                    
                    <GlassCardFooter className="mt-6">
                        <Button
                            type="submit"
                            disabled={pending}
                            className="w-full h-full rounded-lg flex items-center justify-center py-3 active:scale-95 transition-all duration-200 relative overflow-hidden border border-white/20 bg-gradient-to-b from-white/15 via-white/10 to-white/5 text-white backdrop-blur-md shadow-lg hover:scale-[1.02] hover:bg-white/10 hover:backdrop-blur-[25px] active:scale-[0.98] active:bg-white/5 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none"
                        >
                            {pending ? "Signing in..." : "Sign In"}
                        </Button>
                    </GlassCardFooter>
                </form>
            </GlassCard>
    )
}