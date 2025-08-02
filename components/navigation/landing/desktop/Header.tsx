'use client';

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

import React from "react";

export default function Header() {
    return (
        <header className="h-20 flex sticky z-1 top-0 items-center justify-between px-4 border-b border-gray-800 bg-cyber-black">
            <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold">Pixel<span className="text-electric-pink">Clutch</span></h1>
            </div>
            <div>
                <Button variant="outline" className="text-electric-pink cursor-pointer hover:text-white hover:bg-electric-pink/70 hover:border-electric-pink/70 font-bold" onClick={() => redirect('/auth/signin')}>
                    Sign In
                </Button>
            </div>
        </header>
    );
}