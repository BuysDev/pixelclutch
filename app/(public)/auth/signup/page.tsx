"use client"

import { GameController, Eye, EyeSlash, Key, User, IdentificationCard } from '@phosphor-icons/react'
import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

// Esquema Zod com mensagens personalizadas
const registerSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, 'Username must be at most 20 characters long')
        .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers and underscores are allowed'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Must contain at least one number'),
    confirmPassword: z.string(),
    mainGame: z.string().min(1, 'Select your main game')
}).refine(data => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ["confirmPassword"]
})

type RegisterFormData = z.infer<typeof registerSchema>

const popularGames = [
    { id: 'valorant', name: 'Valorant' },
    { id: 'lol', name: 'League of Legends' },
    { id: 'cs2', name: 'CS:GO 2' },
    { id: 'other', name: 'Outro' }
]

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true)

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    mainGame: data.mainGame
                })
            })

            const result = await response.json()

            if (!response.ok) {
                setError('root', { message: result.message || 'Erro no cadastro' })
            } else {
                await signIn('credentials', {
                    redirect: true,
                    email: data.email,
                    password: data.password
                })
                redirect('/hub')
            }
        } catch (err) {
            setError('root', { message: 'Ocorreu um erro durante o cadastro' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cobalt-blue/40 to-gray-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/images/gaming-pattern.png')] bg-cover"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                    {/* Header - Mantido igual */}
                    <div className="bg-gradient-to-r from-cobalt-blue to-neon-purple p-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <GameController className="w-8 h-8" weight="fill" />
                            <h1 className="text-2xl font-bold">CREATE AN ACCOUNT</h1>
                        </div>
                        <p className="text-sm mt-1 opacity-90">
                            Join the competitive community
                        </p>
                    </div>

                    {/* Form - Com validação Zod */}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                        {errors.root && (
                            <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                                {errors.root.message}
                            </div>
                        )}

                        {/* Campo Username */}
                        <div className="space-y-2">
                            <label htmlFor="username" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <User className="w-5 h-5" />
                                Username<span className='text-electric-pink'>*</span>
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="john_doe7"
                                className={`w-full bg-gray-700 border ${errors.username ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue`}
                                {...register('username')}
                            />
                            {errors.username && (
                                <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                            )}
                        </div>

                        {/* Campo Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <IdentificationCard className="w-5 h-5" />
                                Email<span className='text-electric-pink'>*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                className={`w-full bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue`}
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Campo Jogo Principal */}
                        <div className="space-y-2">
                            <label htmlFor="mainGame" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <GameController className="w-5 h-5" />
                                Main Game<span className='text-electric-pink'>*</span>
                            </label>
                            <select
                                id="mainGame"
                                className={`w-full bg-gray-700 border ${errors.mainGame ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue appearance-none`}
                                {...register('mainGame')}
                                defaultValue=""
                            >
                                <option value="" disabled>Select your game</option>
                                {popularGames.map(game => (
                                    <option key={game.id} value={game.id}>{game.name}</option>
                                ))}
                            </select>
                            {errors.mainGame && (
                                <p className="text-red-400 text-sm mt-1">{errors.mainGame.message}</p>
                            )}
                        </div>

                        {/* Campo Senha */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <Key className="w-5 h-5" />
                                Password<span className='text-electric-pink'>*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className={`w-full bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue pr-12`}
                                    {...register('password')}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeSlash className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Campo Confirmar Senha */}
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <Key className="w-5 h-5" />
                                Confirm Password<span className='text-electric-pink'>*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className={`w-full bg-gray-700 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue pr-12`}
                                    {...register('confirmPassword')}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeSlash className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Checkbox Termos */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 rounded bg-gray-700 border-gray-600 text-neon-blue focus:ring-neon-blue"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-400">
                                I agree with the <Link href="/terms" className="text-neon-blue hover:underline">Terms</Link> and <Link href="/privacy" className="text-neon-blue hover:underline">Policy</Link>
                            </label>
                        </div>

                        {/* Botão Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-cobalt-blue to-neon-purple hover:from-cobalt-blue/90 hover:to-purple-600/90 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    <GameController className="w-5 h-5" />
                                    Start Playing
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer - Mantido igual */}
                    <div className="px-6 pb-6 pt-2 text-center">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <Link href="/auth/signin" className="text-neon-blue hover:underline font-medium">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Social Login - Mantido igual */}
                <div className="mt-6 text-center">
                    <div className="relative flex items-center py-4">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">SIGN UP WITH</span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <div className="flex justify-center gap-4">
                            <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full border border-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full border border-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full border border-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}