<script setup lang="ts">
  import { getOrCreateAccount } from '@/services/accountService';
  import { onMounted, ref } from 'vue';
  import type { Account } from '@/models/Account';
  import { validateAuth } from '@/utils/authUtils';
  import { useAuthStore } from '@/stores/authStore';
  import LoadingState from '../shared/LoadingState.vue';
  import ErrorState from '../shared/ErrorState.vue';

  const account = ref<Account | null>(null);
  const authStore = useAuthStore()
  const loading = ref(true)
  const error = ref<string | null>(null)
  
  onMounted(async () => {
    await validateAuth()
    await authStore.setIdTokenForAuth()

    try {
      account.value = await getOrCreateAccount()
    } catch (err) {
      console.error('Failed to load account.', err)
      error.value = 'Failed to load account.'
    } finally {
      loading.value = false
    }
  })

</script>

<template>
  <v-container class="py-12">
    <v-row>
    <LoadingState :loading="loading">
      <ErrorState :error="error">
        <v-col cols="12">
          <h1 class="text-h1 mb-2">Welcome {{ account?.firstName }}</h1>
        </v-col>
      </ErrorState>
    </LoadingState>
    </v-row>
  </v-container>
</template>