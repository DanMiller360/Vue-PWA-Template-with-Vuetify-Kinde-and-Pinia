<script setup lang="ts">
    import { useAuthStore } from '@/stores/authStore'

    const authStore = useAuthStore()

    async function login(): Promise<void> {
        await authStore.login()
    }

    async function signUp(): Promise<void> {
        await authStore.signUp()
    }
</script>


<template>
  <v-empty-state
    image="/Logo.png"
  >
    <!-- override the built-in headline -->
    <template #title>
      <div class="text-h3 mt-6">
        Template
      </div>
    </template>
    
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            prepend-icon="mdi-account-box-outline"
            text="Already have an account?"
            title="Login"
            min-width="200"
            color="primary"
            clickable
            @click="login"
          ></v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            prepend-icon="mdi-account-box-plus-outline"
            text="Create a new account."
            title="Sign Up"
            min-width="200"
            color="primary"
            @click="signUp"
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-empty-state>
</template>
