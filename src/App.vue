<script setup>
import SearchContact from './components/SearchContact.vue'
import ContactTable from './components/ContactTable.vue'
import { getAllContacts } from './services/ContactAPISimulation'
import { ref } from 'vue'

const listContacts = ref(getAllContacts())
const titlePage = 'Agenda - Lista de contactos'
const clearList = () => {
  listContacts.value = []
}

const filterListContact = (kword) => {
  if (kword.trim() === '') {
    listContacts.value = getAllContacts()
  }
  listContacts.value = listContacts.value.filter(
    (contact) => {
      return contact.name.toLowerCase().includes(kword.toLowerCase())
    }
  )
}

</script>

<template>
  <div class="flex items-center flex-col py-5">
    <h1>{{ titlePage }}</h1>
    <search-contact :listContact="listContacts" @filterContact="filterListContact" />
  </div>
  <contact-table title="Lista de resultados" :list-contact="listContacts" />
  <div class="pb-5 flex justify-center">
    <button class="bg-blue-500 py-1.5 px-5" @click="clearList()">Limpiar lista</button>
  </div>
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
