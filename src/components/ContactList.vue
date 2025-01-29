<template>
  <div class="p-6">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="contact in contacts"
           :key="contact.id"
           class="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="flex items-center gap-4">
          <div class="text-4xl">{{ contact.avatar }}</div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-800">{{ contact.nom }}</h3>
            <p class="text-gray-500">{{ contact.email }}</p>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button @click="$emit('voir-details', contact.id)"
                    class="p-2 text-blue-500 hover:text-blue-700 transition-colors">
              <span class="text-xl">👁️</span>
            </button>
            <button @click="confirmerSuppression(contact.id)"
                    class="p-2 text-red-500 hover:text-red-700 transition-colors">
              <span class="text-xl">🗑️</span>
            </button>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-100">
          <p class="flex items-center gap-2 text-gray-600">
            <span class="text-lg">📞</span>
            {{ contact.telephone }}
          </p>
          <p class="flex items-center gap-2 text-gray-600 mt-2">
            <span class="text-lg">📍</span>
            {{ contact.adresse }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useContactsStore} from '../stores/contacts'

const store = useContactsStore()
const {contacts} = storeToRefs(store)

const confirmerSuppression = (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
    store.supprimerContact(id)
  }
}
</script>