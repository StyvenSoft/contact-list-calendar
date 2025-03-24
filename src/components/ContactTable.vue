<script setup>
import { computed, watchEffect } from 'vue';
import BtnDelete from './BtnDelete.vue';
import { useListContacts } from '../composables/useListContacts';

const props = defineProps({
    title: {
        type: String,
        default: 'list',
    }
})

const { contactList, messageEmpy, showEmpy } = useListContacts()

watchEffect(() => {
    showEmpy('No se encontraron resultados')
})

const totalReward = computed(() => {
    return contactList.value.reduce(
        (accumulator, contact) => accumulator + contact.recompensa, 0
    )
})
</script>

<template>
    <div class="relative overflow-x-auto mb-8">
        <h3 class="text-xl my-3">{{ title }} - {{ totalReward }}</h3>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nombres
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Número
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Correo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Reward
                    </th>
                    <th scope="col" class="px-6 py-3">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contactList"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ contact.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ contact.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ contact.phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ contact.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ contact.recompensa }}
                    </td>
                    <td class="px-6 py-4 flex items-center">
                        <a href="#" class="py-2 px-4 mx-4 bg-purple-900 rounded-full">Editar</a>
                        <BtnDelete />
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-red-700 my-3">{{ messageEmpy }}</p>
    </div>
</template>