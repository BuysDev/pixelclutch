'use client'

import { TwitchLogo, GameController } from '@phosphor-icons/react/dist/ssr'
import esportsHero from '../../../public/gaminghero.png'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="bg-cobalt-blue/10 text-white relative overflow-hidden">
            <div>
                <Image
                    src={esportsHero}
                    alt='Esports gaming scene'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
                    <div className="space-y-6">
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                            data-aos="fade-down"
                        >
                            Master the competitive scene and connect with elite players.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right">
                            The only platform you need to track tournaments, showcase your epic plays, and find your next team.
                        </p>

                        <a
                            data-aos="fade-up"
                            data-aos-delay="500"
                            target='_blank'
                            href={`/`}
                            className="bg-electric-pink/70 font-bold px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <GameController className="w-5 h-5" />
                            Get Started
                        </a>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                            src={esportsHero}
                            alt='Esports gaming scene'
                            className='object-contain'
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}