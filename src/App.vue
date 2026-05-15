<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div id="app">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>