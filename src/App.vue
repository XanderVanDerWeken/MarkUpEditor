<template>
  <header>
    <h1>MarkUp Editor</h1>
    <a href="/editor">ed</a>
  </header>
  
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">

</script>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
