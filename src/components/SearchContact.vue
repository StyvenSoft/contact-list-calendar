<script setup>
import { reactive, ref } from 'vue';
import { useListContacts } from '../composables/useListContacts';

const emit = defineEmits(['filterContact'])

const bgButton = ref('#3737d2')

const styleButton = reactive({
  'border-radius': '9px',
  'color': 'black'
})

const kword = ref('')

const { messageEmpy, showEmpy } = useListContacts()

const isFocus = () => {
  // bgButton = 'blue'
  styleButton['border-radius'] = '10px',
  styleButton.color = '#7373ff'
}

const filterData = () => {
  showEmpy('(Pruebe con otra palabra)')
  emit('filterContact', kword.value)
}

</script>

<template>
  <div class="w-full max-w-sm min-w-[200px] relative mt-4">
    <div class="relative">
      <input type="text"
        class="w-full bg-transparent placeholder:text-slate-300 text-slate-400 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Buscar..." @focus="isFocus" @input="filterData" v-model="kword" :style="styleButton" />
      <button
        class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" :style="{ background: bgButton }" @click="$emit('searchContact')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  <p class="text-red-500 my-3">{{ messageEmpy }}</p>
</template>