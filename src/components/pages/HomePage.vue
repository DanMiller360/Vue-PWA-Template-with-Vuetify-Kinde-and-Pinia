<script setup lang="ts">
  import { getOrCreateAccount } from '@/services/accountService';
  import { onMounted, ref } from 'vue';
  import type { Account } from '@/models/Account';
  import { validateAuth } from '@/utils/authUtils';
  import { useAuthStore } from '@/stores/authStore';
  import LoadingState from '../shared/LoadingState.vue';
  import ErrorState from '../shared/ErrorState.vue';

  const account = ref<Account | null>(null);
  const accountResult = ref<boolean | null>(null);
  const authStore = useAuthStore()
  const loading = ref(true)
  const error = ref<string | null>(null)
  
  const initialMap = ref(null);
  
  onMounted(async () => {
    await validateAuth()
    accountResult.value = await initAccount()
  })

  async function initAccount(): Promise<boolean> 
  {
    await authStore.setIdTokenForAuth()
    try {
      account.value = await getOrCreateAccount()
    } catch (err: any) {
      console.error('Failed to load account.', err)
      error.value = 'Failed to load account.'
    } finally {
      loading.value = false
    }
    return account.value != null
  }

</script>

<template>
  <v-container class="py-12">
    <v-row>
    <LoadingState :loading="loading">
      <ErrorState :error="error">
          Welcome to my fronted template!
      </ErrorState>
    </LoadingState>
    </v-row>
  </v-container>
</template>