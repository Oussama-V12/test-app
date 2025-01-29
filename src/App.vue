<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4">
        <h1 class="text-3xl font-bold text-gray-900">
          Gestionnaire de Contacts
        </h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 px-4">
      <div class="mb-4">
        <button v-if="!showForm"
                @click="showForm = true"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Nouveau Contact
        </button>
      </div>

      <ContactForm v-if="showForm"
                   @annuler="showForm = false"
                   @sauvegarde="handleSauvegarde"/>

      <ContactDetails v-if="selectedContactId"
                      :contact-id="selectedContactId"
                      @fermer="selectedContactId = null"/>

      <ContactList v-if="!showForm && !selectedContactId"
                   @voir-details="selectedContactId = $event"/>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactList from './components/ContactList.vue'
import ContactForm from './components/ContactForm.vue'
import ContactDetails from './components/ContactDetails.vue'

const showForm = ref(false)
const selectedContactId = ref(null)

const handleSauvegarde = () => {
  showForm.value = false
}
</script>