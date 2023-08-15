<template>
    <nav>
        <h3>MarkUp Editor</h3>
        <button @click="navigate('/')">Home</button>
    </nav>
</template>

<script setup lang="ts">
import router from '../router/router';

function navigate(path: string) {
    router.push( path );
}
</script>

<style scoped>
nav {
    display: inline;
    background-color: #ddd;
    padding: 10px;
}

h3 {
    display: inline;
}

button {
    margin: 5px;
}
</style>
