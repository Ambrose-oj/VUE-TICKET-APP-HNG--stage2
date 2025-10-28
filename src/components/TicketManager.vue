<!-- src/components/TicketManager.vue -->
<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Ticket Manager</h1>

    <!-- Create New Ticket -->
    <div class="bg-white p-6 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Create New Ticket</h2>
      <form @submit.prevent="createTicket" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="newTicket.title"
          placeholder="Title"
          class="border p-2 rounded"
          required
        />
        <select v-model="newTicket.status" class="border p-2 rounded">
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
          Add Ticket
        </button>
      </form>
    </div>

    <!-- Ticket List -->
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-xl font-semibold mb-4">All Tickets</h2>
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="p-3">ID</th>
            <th class="p-3">Title</th>
            <th class="p-3">Status</th>
            <th class="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id" class="border-b">
            <td class="p-3">{{ ticket.id }}</td>
            <td class="p-3">{{ ticket.title }}</td>
            <td class="p-3">
              <span
                :class="{
                  'text-blue-600': ticket.status === 'open',
                  'text-yellow-600': ticket.status === 'in-progress',
                  'text-green-600': ticket.status === 'resolved'
                }"
              >
                {{ ticket.status }}
              </span>
            </td>
            <td class="p-3">
              <button
                @click="editTicket(ticket)"
                class="text-blue-600 mr-2 hover:underline"
              >
                Edit
              </button>
              <button
                @click="deleteTicket(ticket.id)"
                class="text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div
      v-if="editingTicket"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h3 class="text-xl font-bold mb-4">Edit Ticket</h3>
        <input
          v-model="editingTicket.title"
          class="border p-2 w-full mb-3 rounded"
        />
        <select v-model="editingTicket.status" class="border p-2 w-full mb-3 rounded">
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
        <div class="flex justify-end gap-2">
          <button @click="saveEdit" class biologically="bg-green-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <button @click="cancelEdit" class="bg-gray-600 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketStore } from '@/store/ticket'

export default {
  setup() {
    const ticketStore = useTicketStore()

    const newTicket = {
      title: '',
      status: 'open'
    }

    let editingTicket = null

    const createTicket = () => {
      if (!newTicket.title.trim()) return
      const id = Date.now()
      ticketStore.tickets.push({ id, ...newTicket })
      newTicket.title = ''
    }

    const editTicket = (ticket) => {
      editingTicket = { ...ticket }
    }

    const saveEdit = () => {
      const index = ticketStore.tickets.findIndex(t => t.id === editingTicket.id)
      if (index !== -1) {
        ticketStore.tickets[index] = { ...editingTicket }
      }
      editingTicket = null
    }

    const cancelEdit = () => {
      editingTicket = null
    }

    const deleteTicket = (id) => {
      const index = ticketStore.tickets.findIndex(t => t.id === id)
      if (index !== -1) ticketStore.tickets.splice(index, 1)
    }

    return {
      tickets: ticketStore.tickets,
      newTicket,
      editingTicket,
      createTicket,
      editTicket,
      saveEdit,
      cancelEdit,
      deleteTicket
    }
  }
}
</script>