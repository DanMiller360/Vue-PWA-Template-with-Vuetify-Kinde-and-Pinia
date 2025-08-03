<script setup lang="ts">
  defineProps<{ error: string | null }>()
</script>

<template>
  <v-col cols="12" v-if="error">
    <v-empty-state
      headline="Whoops..."
      :title=error
      image="/error.png"
    />
  </v-col>
  <slot v-else />
</template>
