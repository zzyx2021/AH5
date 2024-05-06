import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      redirectUrl: '',
    }
  },
  actions: {
    setRedirectUrl(url: string) {
      this.redirectUrl = url
    },
  },
})
