<script setup>
import { ref } from 'vue';

const showConfirm = ref(false);

const openDeleteConfirm = () => {
    showConfirm.value = true
}


</script>

<template>
    <div v-if="!showConfirm">
        <a href="#" class="py-2 px-4 bg-red-500 rounded-full" @click="openDeleteConfirm()">Eliminar</a>
    </div>
    <div v-else>
        <a href="#" class="py-2 px-4 mx-1 bg-red-500 rounded-full">Si</a>
        <a 
            href="#" 
            class="py-2 px-4 mx-1 bg-gray-500 rounded-full"
            @click="showConfirm = false"    
        >No</a>
    </div>
</template>

<style lang="scss" scoped></style>