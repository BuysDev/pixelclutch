'use client'

import { GameController, Warning, ArrowUUpLeft, Trophy } from '@phosphor-icons/react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-dark-blue-900 text-white flex flex-col">
            {/* Glitch effect background */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[url('/images/esports-pattern.png')] bg-cover animate-glitch"></div>
            </div>

            <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-16 text-center">
                {/* Animated 404 text */}
                <div className="mb-8 relative">
                    <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cobalt-blue/60 to-neon-purple/60 animate-pulse">
                        404
                    </h1>
                </div>

                {/* Error message */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="flex items-center justify-center gap-3 text-neon-blue">
                        <Warning className="w-8 h-8" />
                        <h2 className="text-2xl md:text-3xl font-bold">Page not found!</h2>
                    </div>

                    <p className="text-gray-400 text-lg">
                        It seems you tried to access a path that does not exist on our server.
                        <br />Maybe it was a bug in the system or the link is outdated.
                    </p>

                    {/* Game-inspired buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 bg-neon-blue hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                            <ArrowUUpLeft className="w-5 h-5" />
                            Return to Home
                        </Link>

                        <Link
                            href="/tournaments"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                            <Trophy className="w-5 h-5" />
                            Show Tournaments
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-6 text-center text-gray-500 text-sm">
                <p>PIXELCLUTCH © {new Date().getFullYear()} - Todos os direitos reservados</p>
            </footer>

            {/* Custom styles for animations */}
            <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.5s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    )
}