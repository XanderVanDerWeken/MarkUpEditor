<template>
    <div class="editor-container">
        <div class="editor-content">
            <textarea 
            ref="textarea"
            cols="50" 
            rows="30" 
            placeholder="Start Typing here..." 
            v-model="htmlInput" 
            @input="updatePreview()" 
            autofocus></textarea>
        </div>
        <div class="editor-preview" v-html="renderedHtml"></div>
    </div>
    <Makrobar @insert-value="handleInsertMakro" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Makrobar from './Makrobar.vue';
import Makro from './../models/makro';
import MakroHelper from './../utils/makrohelper';

const htmlInput = ref("");
const renderedHtml = ref("");
const textarea = ref<HTMLTextAreaElement | null>(null);

function updatePreview() {
    renderedHtml.value = htmlInput.value;
}

function handleInsertMakro(value: Makro) {
    if (textarea.value) {
        const selectLength = textarea.value.selectionEnd - textarea.value.selectionStart;
        if(selectLength == 0) {
            htmlInput.value = MakroHelper.insertAtPosition(textarea.value, htmlInput.value, value);
        }
        else {
            htmlInput.value = MakroHelper.insertAroundSelected(textarea.value, htmlInput.value, value);
        }
        
    }
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
</style>../models/makro