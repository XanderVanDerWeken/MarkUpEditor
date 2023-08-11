<template>
    <div class="filecard">
        <p>{{ props.title }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title']);
</script>

<style scoped>
.filecard {
    width: 100px;
    height: 100px;
    border: solid #ccc 2px
}
</style>
