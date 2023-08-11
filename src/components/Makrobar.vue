<template>
    <div class="makrobar">
        <button class="makro-btn" @click="insertValue('<h1></h1>')">Title</button>
        <button class="makro-btn" @click="insertValue('<p></p>')">Paragraph</button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'insertValue', value: string): void
}>();

function insertValue(value: string) {
    emit('insertValue', value);
}
</script>

<style scoped>

</style>