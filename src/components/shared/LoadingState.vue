<script setup lang="ts">
  defineProps<{ loading: boolean }>()
</script>

<template>
  <v-col cols="12" class="text-center" v-if="loading">
    <v-progress-circular indeterminate color="primary" />
    <v-container class="mt-2">Loading...</v-container>
  </v-col>
  <slot v-else />
</template>