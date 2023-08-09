<template>
    <div class="menubar">
        <button class="menu-btn" @click="newFile">New File</button>
        <button class="menu-btn" @click="openFile">Open File</button>
        <button class="menu-btn" @click="saveFile">Save File</button>
    </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron';

function newFile() {
    ipcRenderer.send('menu-action', 'create-new-file');
}

function openFile() {
    ipcRenderer.send('menu-action', 'open-file');
}

function saveFile() {
    ipcRenderer.send('menu-action', 'save-file');
}
</script>

<style scoped>

</style>