import './globals.css'

import { PrismaClient } from '@repo/db/client'

const client = new PrismaClient()

export default function Home() {
  return <h1 className="text-3xl font-bold">Hi From Home Page</h1>
}
