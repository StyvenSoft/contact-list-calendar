<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import ContactTable from './components/ContactTable.vue'

const titlePage = 'Agenda - Lista de contactos'
</script>

<template>
  <div class="flex items-center flex-col py-5">
    <h1>{{ titlePage }}</h1>
    <Search />
  </div>
  <ContactTable />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
