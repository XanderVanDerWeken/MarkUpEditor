<template>
    <div class="makrobar">
        <button class="makro-btn" @click="insertValue(new Makro('h1', ''))">Title</button>
        <button class="makro-btn" @click="insertValue(new Makro('p', ''))">Paragraph</button>
    </div>
</template>

<script setup lang="ts">
import Makro from './../models/makro';

const emit = defineEmits<{
    (e: 'insertValue', value: Makro): void
}>();

function insertValue(value: Makro) {
    emit('insertValue', value);
}
</script>

<style scoped>

</style>../models/makro