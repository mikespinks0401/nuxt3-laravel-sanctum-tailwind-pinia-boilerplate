import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    user: 'test',
  }),
  actions: {
    async getUser() {
      const { name } = await $fetch('http://localhost:8000')
      this.user = name
    },
  },
})
