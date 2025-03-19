<script setup>
import SearchContact from './components/SearchContact.vue'
import ContactTable from './components/ContactTable.vue'
import { getAllContacts } from './services/ContactAPISimulation'

const titlePage = 'Agenda - Lista de contactos'
const listContacts = getAllContacts()

</script>

<template>
  <div class="flex items-center flex-col py-5">
    <h1>{{ titlePage }}</h1>
    <search-contact />
  </div>
  <contact-table
    title="Lista de resultados"
    :list-contact="listContacts"  
  />
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
