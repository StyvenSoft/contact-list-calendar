import { ref } from "vue";
import { getAllContacts } from "../services/ContactAPISimulation";

const contactList = ref(getAllContacts())

export function useListContacts() {
    const messageEmpy = ref('')
    const showEmpy = (message) => {
        if (contactList.value.length < 1) {
            messageEmpy.value = message
        } else {
            messageEmpy.value = ''
        }
    }

    return {
        contactList,
        messageEmpy,
        showEmpy
    }
}
