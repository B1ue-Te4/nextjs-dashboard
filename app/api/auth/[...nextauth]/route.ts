import { authConfig } from '@/auth.config'
import NextAuth from 'next-auth'

const handlers = NextAuth(authConfig)

export const GET = handlers.handlers.GET
export const POST = handlers.handlers.POST