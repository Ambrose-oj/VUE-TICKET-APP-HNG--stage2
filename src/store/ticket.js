import { defineStore } from 'pinia';

export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem('tickets') || '[]')
  }),
  actions: {
    addTicket(ticket) {
      this.tickets.push(ticket);
      localStorage.setItem('tickets', JSON.stringify(this.tickets));
    },
    updateTicket(updatedTicket) {
      const index = this.tickets.findIndex(t => t.id === updatedTicket.id);
      if (index !== -1) this.tickets[index] = updatedTicket;
      localStorage.setItem('tickets', JSON.stringify(this.tickets));
    },
    deleteTicket(id) {
      this.tickets = this.tickets.filter(t => t.id !== id);
      localStorage.setItem('tickets', JSON.stringify(this.tickets));
    }
  }
});