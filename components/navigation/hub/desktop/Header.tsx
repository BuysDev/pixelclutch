'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { BellDotIcon, Menu, User, X } from "lucide-react";
import React from "react";
import Sidebar from "./Sidebar";
import { signOut } from "next-auth/react";

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const handleMenuClick = () => {
        setOpen(!open);
    }
    return (
        <>
            <header className="h-20 flex sticky top-0 items-center justify-between px-4 border-b border-gray-800">
                <div className="flex items-center space-x-4">
                    <div className="md:block hidden">
                        {
                            open ? (
                                <X className="cursor-pointer hover:text-electric-pink" onClick={handleMenuClick} />
                            ) : (
                                <Menu className="cursor-pointer hover:text-electric-pink" onClick={handleMenuClick} />
                            )
                        }
                    </div>
                    <h1 className="text-3xl font-bold">Pixel<span className="text-electric-pink">Clutch</span></h1>
                </div>
                <div className="hidden md:flex space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 rounded-full cursor-pointer hover:text-electric-pink">
                            <BellDotIcon className="h-6 w-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-cyber-black">
                            <DropdownMenuItem className="cursor-pointer flex flex-col border-b border-gray-200">
                                <p><strong>{'{user}'}</strong> te desafiou para um duelo em <strong>Valorant</strong></p>
                                <div className="flex flex-row justify-between mt-2 gap-2">
                                    <Button className="cursor-pointer bg-red-800 font-bold">Recusar</Button>
                                    <Button className="cursor-pointer bg-green-800 font-bold">Aceitar</Button>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Notification 2
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Notification 3
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 rounded-full cursor-pointer hover:text-electric-pink">
                            <User className="h-6 w-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem className="cursor-pointer">
                                Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Configurações
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut} className="cursor-pointer">
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <div className="hidden md:block">
                <Sidebar open={open} />
            </div>
        </>
    );
}