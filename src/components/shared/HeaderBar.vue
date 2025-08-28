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

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-icon-btn 
                        color="primary"
                        icon-size="30"
                        icon="mdi-account-circle" 
                        variant="text" 
                        v-bind="props"/>
                </template>

                <v-list>
                    <v-list-item @click="logout">
                        <v-btn 
                            variant="elevated"
                            color="primary"
                            rounded="lg"
                            prepend-icon="mdi-logout"
                        >
                            Logout
                        </v-btn>
                    </v-list-item>

                    <v-list-item @click="toggleTheme">
                        <v-btn 
                            variant="elevated"
                            color="primary"
                            rounded="lg"
                            prepend-icon="mdi-brightness-6"
                        >
                            Toggle Theme
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-container>
    </v-app-bar>
</template>
