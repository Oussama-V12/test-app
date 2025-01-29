<template>
  <div class="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
    <form @submit.prevent="sauvegarderContact" class="space-y-6">
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">{{ formData.avatar || '👤' }}</div>
        <div class="flex justify-center gap-2">
          <button
              v-for="emoji in avatars"
              :key="emoji"
              type="button"
              @click="formData.avatar = emoji"
              class="text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors">
            {{ emoji }}
          </button>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-lg font-medium text-gray-700 mb-2">Nom</label>
          <input
              v-model="formData.nom"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 text-lg outline-none transition-all focus:border-blue-500 focus:bg-white"
              placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label class="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 text-lg outline-none transition-all focus:border-blue-500 focus:bg-white"
              placeholder="jean.dupont@email.com"
          />
        </div>

        <div>
          <label class="block text-lg font-medium text-gray-700 mb-2">Téléphone</label>
          <input
              v-model="formData.telephone"
              type="tel"
              required
              class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 text-lg outline-none transition-all focus:border-blue-500 focus:bg-white"
              placeholder="0123456789"
          />
        </div>

        <div>
          <label class="block text-lg font-medium text-gray-700 mb-2">Adresse</label>
          <textarea
              v-model="formData.adresse"
              rows="3"
              class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 text-lg outline-none transition-all focus:border-blue-500 focus:bg-white"
              placeholder="Paris, France"
          />
        </div>
      </div>

      <div class="flex justify-end gap-4 pt-6">
        <button
            type="button"
            @click="$emit('annuler')"
            class="px-6 py-3 text-lg font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
          Annuler
        </button>
        <button
            type="submit"
            class="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors">
          Sauvegarder
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useContactsStore} from '../stores/contacts'

const avatars = ['👤', '👨', '👩', '🧑‍💼', '👨‍💼', '👩‍💼', '🧑‍🦰', '👨‍🦰', '👩‍🦰']

const props = defineProps({
  mode: {
    type: String,
    default: 'ajout'
  },
  contactId: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['annuler', 'sauvegarde'])
const store = useContactsStore()

const formData = ref({
  nom: '',
  email: '',
  telephone: '',
  adresse: '',
  avatar: '👤'
})

const sauvegarderContact = () => {
  store.ajouterContact(formData.value)
  emit('sauvegarde')
}
</script>