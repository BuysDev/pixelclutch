'use client'

import Header from "@/components/navigation/hub/desktop/Header"
import { SessionProvider } from "next-auth/react"
import { getServerSession } from 'next-auth/next'
import { redirect } from "next/navigation"

export default async function Hub() {
    const session = await getServerSession()
    return (
        <SessionProvider>
            {
                session?.user === null ? (
                    <>
                        <Header />
                    </>
                ) : (
                    redirect('/auth/signin')
                )
            }
        </SessionProvider>
    )
}