<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/authStore'
  import { onMounted } from 'vue';

  const router = useRouter();
  const authStore  = useAuthStore();

  onMounted(async () => {
      await authStore.checkAuth()
      if (authStore.isAuthenticated) {
          router.push({ name: 'WelcomePage'})
      } else if (!authStore.isAuthenticated) {
          router.push({ name: 'LandingPage'})
      }
  })
    
</script>

<template>
  <v-container class="py-12">
    <v-row>
      <LoadingState :loading="true"/>
    </v-row>
  </v-container>
</template>
