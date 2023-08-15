<template>
    <h1>Einstellungen</h1>
    <h2>Makros</h2>
    <div class="makrosContainer">
        <div class="makrosTable">
            <table>
                <thead>
                    <td>Name</td>
                    <td>Makro</td>
                    <td>Details</td>
                </thead>
                <tr v-for="makro in config?.getMakros()">
                    <td>{{ makro.getName() }}</td>
                    <td>{{ makro.getTag() }}</td>
                    <td>{{ makro.getConfig() }}</td>
                    <td><button @click="removeMakro( makro.getName() )">Löschen</button></td>
                </tr>
            </table>
        </div>
        <div class="newMakro">
            <form>
                <h3>Neuer Makro</h3>
                <label for="newMakroName">Makro Name:</label><br>
                <input
                    type="text"
                    id="newMakroName"
                    v-model="newMakro.name"
                ><br>
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
                <button @click="addNewMakro()">Hinzufügen</button>
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
const newMakro = ref({ name: '', tag: '', config: '' });

function addNewMakro() {
    const makroToAdd = new Makro(
        newMakro.value.name,
        newMakro.value.tag, 
        newMakro.value.config
    );
    if(config.value) {
        config.value.addMakro(makroToAdd);
        filesystem.saveConfig( config.value );
    }
}

function removeMakro(name: string) {
    if(config.value) {
        config.value.removeMakro(name);
        filesystem.saveConfig( config.value );
    }
}

onMounted( async () => {
    config.value = await filesystem.loadConfig();
})
</script>

<style scoped>

</style>
