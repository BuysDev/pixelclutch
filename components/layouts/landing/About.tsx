import { Check, Trophy, Users } from "lucide-react";
import { TbBrandKickFilled } from "react-icons/tb";

export function About() {
    return (
        <section className="py-16 bg-dark-blue text-white">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold">About PixelClutch</h2>

                        <p>
                            Esports is not just about playing - it's about community, competition, and epic moments. Our platform connects passionate players, providing tools for you to shine in the competitive scene.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-electric-pink" />
                                Regional and global tournaments updated
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-electric-pink" />
                                Network with thousands of competitive players
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-electric-pink" />
                                Creation and management of teams feature
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-electric-pink" />
                                1v1 challenges and team matches
                            </li>
                        </ul>

                        <div className="flex gap-2 flex-wrap">
                            <a
                                target='_blank'
                                href={`https://twitch.tv`}
                                className="bg-green-400 text-black font-bold flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <TbBrandKickFilled className="w-5 h-5 text-black" />
                                Watch on Kick
                            </a>

                            <a
                                href="#tournaments"
                                className="bg-neon-blue flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <Trophy className="w-5 h-5 text-white" />
                                Active Tournaments
                            </a>

                            <a
                                href="#teams"
                                className="bg-electric-pink/40 font-bold flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <Users className="w-5 h-5 text-white" />
                                Find Teams
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}