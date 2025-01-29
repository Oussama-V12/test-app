import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', {
    state: () => ({
        contacts: [
            {
                id: 1,
                nom: 'Jean Dupont',
                email: 'jean.dupont@email.com',
                telephone: '0123456789',
                adresse: 'Paris, France',
                avatar: '🧑‍💼'
            }
        ]
    }),

    actions: {
        ajouterContact(contact) {
            const newId = this.contacts.length > 0
                ? Math.max(...this.contacts.map(c => c.id)) + 1
                : 1
            this.contacts.push({
                ...contact,
                id: newId,
                avatar: contact.avatar || '👤'
            })
        },

        supprimerContact(id) {
            const index = this.contacts.findIndex(c => c.id === id)
            if (index !== -1) {
                this.contacts.splice(index, 1)
            }
        },

        getContactById(id) {
            return this.contacts.find(c => c.id === id)
        }
    }
})