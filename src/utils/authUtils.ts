import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "vue-router"

export async function validateAuth(): Promise<void>{
    const router = useRouter()
    const authStore = useAuthStore()

    const isAuthenticated = await authStore.checkAuth()

    if (!isAuthenticated)
        router.push({ name: 'LandingPage'})
}