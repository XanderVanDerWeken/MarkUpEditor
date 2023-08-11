<template>
  <header>
    <Menubar />
  </header>
  
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import Menubar from './components/Menubar.vue';

</script>

<style>
</style>
