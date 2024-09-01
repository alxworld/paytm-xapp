'use client'
import './globals.css'
import { Appbar } from '@repo/ui/Appbar'
import { signIn, signOut, useSession } from 'next-auth/react'

//import { PrismaClient } from '@repo/db/client'
// const client = new PrismaClient()

export default function Home() {
  const session = useSession()
  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <h1 className="text-3xl font-bold">Hi From Home Page</h1>
    </div>
  )
}
