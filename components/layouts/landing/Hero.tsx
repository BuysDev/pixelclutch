'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImg from '@/public/gaminghero.png'

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-b from-black to-cobalt-blue/15 text-white">
            <div className="">
                <Image src={HeroImg} alt="" className="object-cover opacity-60 lg:hidden" priority sizes="100vw" fill />
                <div className="absolut inset-0 bg-black opacity-35"></div>
            </div>
            <div className="container mx-auto py-16 px-4 relative">
                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full justify-center">
                    <div className="flex flex-col items-center text-center">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold leading-10">Welcome to Our Website</h1>
                            <p className="lg:text-lg">Your journey to excellence starts here.</p>
                        </div>
                        <Button className="w-80 mt-4 cursor-pointer bg-neon-purple/80 text-white font-bold hover:bg-neon-purple/70">
                            Get Started
                        </Button>
                    </div>
                    <div className="hidden md:flex md:justify-center">
                        <Image height={400} src={HeroImg} alt="" className="object-contain" sizes="(max-width: 768px) 0vw, 50vw" />
                    </div>
                </article>
            </div>
        </section>
    );
}