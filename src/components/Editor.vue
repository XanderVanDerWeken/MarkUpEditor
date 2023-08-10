<template>
    <div class="editor-container">
        <div class="editor-content">
            <textarea cols="50" rows="30" placeholder="Start Typing here..." v-model="htmlInput" @input="updatePreview()" autofocus></textarea>
        </div>
        <div class="editor-preview" v-html="renderedHtml"></div>
    </div>
    <Makrobar />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Makrobar from './Makrobar.vue';

const htmlInput = ref("");
const renderedHtml = ref("");

function updatePreview() {
    renderedHtml.value = htmlInput.value;
}
</script>

<style scoped>
.editor-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

textarea {
    flex: 1;
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid #ccc;
}

.editor-preview {
    padding: 10px;
    width: 100%;
    flex: 1;
    border: 1px solid #ccc;
    overflow: auto;
}
</style>