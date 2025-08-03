<script setup lang="ts">
    import { useTheme } from 'vuetify'
    import { useAuthStore } from '@/stores/authStore'
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'

    const theme = useTheme()
    const authStore = useAuthStore()
    const router = useRouter()

    const tabs = [
        { title: 'Account',  value: 'AccountPage'  },
        { title: 'Notes',  value: 'NotesPage'  },
        { title: 'Flash Cards',  value: 'FlashCardGradesPage'  },
    ]

    const drawer = ref(false)

    async function login(): Promise<void> {
        await authStore.login()
    }

    async function signUp(): Promise<void> {
        await authStore.signUp()
    }

    async function logout(): Promise<void> {
        await authStore.logout()
    }

    function toggleTheme(): void {
        theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
    }
    
    function switchTab(selectedValue: any) : void {
        router.push({ name: selectedValue.id})
    }
</script>


<template>
    <v-app-bar
        :height="150"
        color="primary-darken-1"
    >
        <v-app-bar-nav-icon 
            v-if="authStore.isAuthenticated"
            variant="text" 
            @click.stop="drawer = !drawer"
        />
        <v-container 
            class="d-flex align-center justify-space-between"
        >
            <v-img 
                src="/Template-Web.png"
                max-width="300"
                max-height="300"
                class="mr-4"
                cover
            />

            <v-btn 
                v-if="authStore.isAuthenticated"
                variant="elevated"
                color="secondary-darken-1"
                rounded="lg"
                prepend-icon="mdi-account-circle"
                @click="logout"
            >
                Logout
            </v-btn>
                
            <v-icon-btn 
                color="secondary-darken-1"
                icon="mdi-brightness-6"
                @click="toggleTheme"
            />
        </v-container>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
    >
        <v-list
            :items="tabs"
            @click:select="switchTab"
        />
    </v-navigation-drawer>
</template>
