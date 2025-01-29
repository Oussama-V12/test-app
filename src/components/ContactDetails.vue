<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl w-full max-w-2xl transform transition-all">
      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <div class="flex items-center gap-4">
            <div class="text-6xl">{{ contact.avatar }}</div>
            <div>
              <h2 class="text-3xl font-bold text-gray-800">{{ contact.nom }}</h2>
              <p class="text-gray-500 text-lg">Contact Details</p>
            </div>
          </div>
          <button
              @click="$emit('fermer')"
              class="text-2xl text-gray-400 hover:text-gray-600 transition-colors">
            ❌
          </button>
        </div>

        <div class="space-y-6">
          <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span class="text-2xl">📧</span>
            <div>
              <p class="text-sm text-gray-500">Email</p>
              <p class="text-lg">{{ contact.email }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span class="text-2xl">📞</span>
            <div>
              <p class="text-sm text-gray-500">Téléphone</p>
              <p class="text-lg">{{ contact.telephone }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span class="text-2xl">📍</span>
            <div>
              <p class="text-sm text-gray-500">Adresse</p>
              <p class="text-lg">{{ contact.adresse }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useContactsStore } from '../stores/contacts'

const props = defineProps({
  contactId: {
    type: Number,
    required: true
  }
})

const store = useContactsStore()
const contact = computed(() => store.getContactById(props.contactId))
</script>
