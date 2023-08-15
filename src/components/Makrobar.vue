<template>
    <div class="makrobar">
        <button 
            class="makro-btn" 
            v-for="(makro, index) in makros"
            :key="index"
            @click="insertValue( makro )"
        >
            {{ makro.getName() }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Makro from './../models/makro';
import Filesystem from './../utils/filesystem';

const makros = ref<Makro[]>();

const emit = defineEmits<{
    (e: 'insertValue', value: Makro): void
}>();

function insertValue(value: Makro) {
    emit('insertValue', value);
}

onMounted( async () => {
    const filesystem = new Filesystem();
    const config = await filesystem.loadConfig();
    makros.value = config?.getMakros();
});
</script>

<style scoped>

</style>../models/makro