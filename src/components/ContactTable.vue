<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'list',
    },
    listContact: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div class="relative overflow-x-auto mb-8">
        <h3 class="text-xl my-3">{{ title }}</h3>
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
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in listContact"
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
                        <a href="#" class="py-2 px-4 bg-purple-900 rounded-full">Editar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>