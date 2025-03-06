import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    _id?: string
    isVerified?: boolean
    isAcceptingMessages?: boolean
    username?: string
  }
  interface Session {
    user: {
      _id?: string
      isVerified?: boolean
      isAcceptingMessages?: boolean
      username?: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string
    isVerified?: boolean
    isAcceptingMessages?: boolean
    username?: string
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_GOOGLE_ID: string
      AUTH_GOOGLE_SECRET: string
      AUTH_GITHUB_ID: string
      AUTH_GITHUB_SECRET: string
    }
  }
}
