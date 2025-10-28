import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('ticketapp_session')
  }),
  actions: {
    login() {
      localStorage.setItem('ticketapp_session', 'token');
      this.isAuthenticated = true;
    },
    logout() {
      localStorage.removeItem('ticketapp_session');
      this.isAuthenticated = false;
    }
  }
});