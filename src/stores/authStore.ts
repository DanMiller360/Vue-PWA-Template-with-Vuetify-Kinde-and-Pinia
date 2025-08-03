import { defineStore } from 'pinia'
import { initKindeClient } from '@/api/kindeClient'
import type { KindeUser } from '@kinde-oss/kinde-auth-pkce-js'
import { setAuthToken } from '@/api/bffClient'

interface AuthState {
  isAuthenticated: boolean
  user: KindeUser | undefined
  accessToken: string | undefined
  idToken: string | undefined
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        isAuthenticated: false,
        user: undefined,
        accessToken: undefined,
        idToken: undefined,
    }),
    actions: {
        async checkAuth(): Promise<boolean> {
            const kinde = await initKindeClient()
            this.isAuthenticated = await kinde.isAuthenticated()

            if (this.isAuthenticated) {
                this.user = await kinde.getUserProfile()
                this.accessToken = await kinde.getToken()
                this.idToken = await kinde.getIdToken()
                setAuthToken(this.accessToken)
            }

            return this.isAuthenticated
        },
        async login(): Promise<void> {
            const kinde = await initKindeClient()
            await kinde.login()
        },
        async signUp(): Promise<void> {
            const kinde = await initKindeClient()
            await kinde.register()
        },
        async logout(): Promise<void> {
            const kinde = await initKindeClient()
            await kinde.logout()
            this.reset()
        },
        async setIdTokenForAuth(): Promise<void> {
            const kinde = await initKindeClient()
            this.isAuthenticated = await kinde.isAuthenticated()

            if (this.isAuthenticated)
                setAuthToken(this.idToken)
        },
        reset(): void {
            this.isAuthenticated = false
            this.user = undefined
            this.accessToken = undefined
            this.idToken = undefined
            setAuthToken(undefined);
        }
    }
})
