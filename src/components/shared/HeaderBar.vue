<script setup lang="ts">
    import { useTheme } from 'vuetify'
    import { useAuthStore } from '@/stores/authStore'

    const theme = useTheme()
    const authStore = useAuthStore()

    async function logout(): Promise<void> {
        await authStore.logout()
    }

    function toggleTheme(): void {
        theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
    }
</script>


<template>
    <v-app-bar
        :height="150"
        color="secondary-darken-1"
    >
        <v-container 
            class="d-flex align-center justify-space-between"
        >
            <v-img 
                src="/Header-Logo.png"
                max-width="300"
                max-height="300"
                class="mr-4"
                cover
            />

            <v-btn 
                v-if="authStore.isAuthenticated"
                variant="elevated"
                color="primary"
                rounded="lg"
                prepend-icon="mdi-account-circle"
                @click="logout"
            >
                Logout
            </v-btn>
                
            <v-icon-btn 
                color="primary"
                icon="mdi-brightness-6"
                @click="toggleTheme"
            />
        </v-container>
    </v-app-bar>
</template>
