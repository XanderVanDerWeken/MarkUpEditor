<template>
    <h2>Alle Dateien</h2>
    <div class="fileshelf">
        <FileCard v-bind:title="'Hinzufügen'" 
            @click="navigateToNote('newNote.html')"
        />
        <FileCard v-for="file in files" 
            v-bind:title="file" 
            @click="navigateToNote(file)"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FileCard from './FileCard.vue';
import Filesystem from './../utils/filesystem';
import router from '../router/router';

const files = ref<string[]>([]);

const filesystem = new Filesystem();

function navigateToNote(filename: string) {
    router.push(`/editor/${filename}`);
}

onMounted(async () => {
    files.value = await filesystem.getFilenames();
})
</script>

<style scoped>
.fileshelf {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
}
</style>
