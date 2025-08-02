"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Gamepad, Trophy, Users, Monitor, Headphones, Shuffle } from 'lucide-react'
import { TbBrandKickFilled } from 'react-icons/tb'
import { FaDiscord } from 'react-icons/fa'

const services = [
    {
        title: "Organized Matches",
        description: "Competitive matches versus another teams in your level.",
        duration: "30-60min",
        price: "Free",
        icon: <Gamepad className="text-electric-pink" />,
        platform: "kick"
    },
    {
        title: "Premium Tournaments",
        description: "Competições com premiação em cash e patrocínios. Transmissão ao vivo na plataforma.",
        duration: "2-4h",
        price: "$20-50",
        icon: <Trophy className="text-electric-pink" />,
        platform: "kick"
    },
    {
        title: "Recruitment Pro",
        description: "Find players or teams with our performance analysis system.",
        duration: "24/7",
        price: "Free",
        icon: <Users className="text-electric-pink" />,
        platform: "discord"
    },
    {
        title: "Tactical Analysis",
        description: "Coaches analyze your matches and provide personalized feedback.",
        duration: "45min",
        price: "$40",
        icon: <Monitor className="text-electric-pink" />,
        platform: "kick"
    },
    {
        title: "AI Team Balancer",
        description: "Balance teams for a just match.",
        duration: "Automatic",
        price: "Free",
        icon: <Shuffle className="text-electric-pink" />,
        platform: "discord"
    },
    {
        title: "Discord Community",
        description: "Enter in our official Discord Server.",
        duration: "24/7",
        price: "Free",
        icon: <Headphones className="text-electric-pink" />,
        platform: "discord"
    },
]

export default function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <section className="bg-cobalt-blue/10 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3">Competitive Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        All the tools you need to level up in the competitive scene
                    </p>
                </div>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2.5)] lg:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 space-y-4 h-full flex flex-col border border-gray-700 hover:border-neon-blue">
                                        <div className='flex-1'>
                                            <div className='flex gap-4 items-start'>
                                                <div className="p-3 bg-gray-900 rounded-lg">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className='font-bold text-xl mb-2'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <span className='text-xs bg-gray-900 px-2 py-1 rounded'>{item.duration}</span>
                                                <span className='text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded'>{item.price}</span>
                                            </div>

                                            <a
                                                href="#"
                                                className={`flex items-center justify-center gap-2 px-3 py-1 rounded-md text-sm 
                          ${item.platform === 'kick'
                                                        ? 'bg-green-700 font-bold hover:bg-green-800'
                                                        : 'bg-indigo-600 font-bold hover:bg-indigo-700'}`}
                                            >
                                                {item.platform === 'kick' ? (
                                                    <>
                                                        <TbBrandKickFilled className='w-4 h-4' />
                                                        <span className="hidden sm:inline">Watch on Kick</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaDiscord className='w-4 h-4' />
                                                        <span className="hidden sm:inline">Join</span>
                                                    </>
                                                )}
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-gray-800 hover:bg-neon-blue transition-all flex items-center justify-center rounded-full w-10 h-10 absolute left-0 -translate-y-1/2 top-1/2 z-10 border border-gray-700 shadow-lg cursor-pointer'
                        onClick={scrollPrev}
                        aria-label="Previous service"
                    >
                        <ChevronLeft className='w-6 h-6 text-white' />
                    </button>

                    <button
                        className='bg-gray-800 hover:bg-neon-blue transition-all flex items-center justify-center rounded-full w-10 h-10 absolute right-0 -translate-y-1/2 top-1/2 z-10 border border-gray-700 shadow-lg cursor-pointer'
                        onClick={scrollNext}
                        aria-label="Next service"
                    >
                        <ChevronRight className='w-6 h-6 text-white' />
                    </button>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#all-services"
                        className="inline-flex items-center gap-2 border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-lg transition-colors"
                    >
                        Ver todos os serviços
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    )
}