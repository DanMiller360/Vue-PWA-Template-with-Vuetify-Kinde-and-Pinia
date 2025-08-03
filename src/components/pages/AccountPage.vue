<script setup lang="ts">
  import { onMounted } from 'vue';
  import { validateAuth } from '@/utils/authUtils';

  onMounted(async () => {
    await validateAuth()
  })

</script>

<template>
    <v-container class="py-12">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h1 mb-2">Account...</h1>
        </v-col>
      </v-row>
    </v-container>
</template>