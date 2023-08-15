<template>
    <h1>Einstellungen</h1>
    <h2>Makros</h2>
    <div class="makrosContainer">
        <div class="makrosTable">
            <table>
                <thead>
                    <td>Makro</td>
                    <td>Details</td>
                </thead>
                <tr v-for="makro in config?.getMakros()">
                    <td>{{ makro.getTag() }}</td>
                    <td>{{ makro.getConfig() }}</td>
                </tr>
            </table>
        </div>
        <div class="newMakro">
            <form>
                <h3>Neuer Makro</h3>
                <label for="newMakroTag">Makro Tag:</label><br>
                <input 
                    type="text"
                    id="newMakroTag"
                    v-model="newMakro.tag"
                ><br>
                <label for="newMakroConfig">Makro Details:</label><br>
                <input
                    type="text"
                    id="newMakroConfig"
                    v-model="newMakro.config"
                ><br>
                <button @click="addNewMakro()">hinzufügen</button>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Filesystem from '../utils/filesystem';
import Config from '../models/config';
import Makro from '../models/makro';

const filesystem = new Filesystem();

const config = ref<Config | null>();
const newMakro = ref({ tag: '', config: '' });

function addNewMakro() {
    const makroToAdd = new Makro(newMakro.value.tag, newMakro.value.config);
    config.value?.getMakros().push(makroToAdd);
    if(config.value) {
        filesystem.saveConfig( config.value );
    }
}

onMounted( async () => {
    config.value = await filesystem.loadConfig();
})
</script>

<style scoped>

</style>
