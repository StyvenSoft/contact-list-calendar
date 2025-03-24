<script setup>
import SearchContact from './components/SearchContact.vue'
import ContactTable from './components/ContactTable.vue'
import { getAllContacts } from './services/ContactAPISimulation'
import { useListContacts } from './composables/useListContacts'

const { contactList } = useListContacts()
const titlePage = 'Agenda - Lista de contactos'
const clearList = () => {
  contactList.value = []
}

const filterListContact = (kword) => {
  if (kword.trim() === '') {
    contactList.value = getAllContacts()
  }
  contactList.value = contactList.value.filter(
    (contact) => {
      return contact.name.toLowerCase().includes(kword.toLowerCase())
    }
  )
}

</script>

<template>
  <div class="flex items-center flex-col py-5">
    <h1>{{ titlePage }}</h1>
    <search-contact @filterContact="filterListContact" />
  </div>
  <contact-table title="Lista de resultados" />
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
