<template>
    <div class="editor-container">
        <div class="editor-content">
            <textarea cols="50" rows="30" autofocus></textarea>
        </div>
        <div class="editor-preview">
            <textarea cols="50" rows="30" disabled></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.editor-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>