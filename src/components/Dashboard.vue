<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-white p-4 rounded shadow mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">Dashboard</h2>
      <button @click="logout" class="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
    </header>
    <main class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-lg font-semibold text-blue-600">Open Tickets</h3>
          <p class="text-3xl mt-2">{{ ticketStats.open }}</p>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-lg font-semibold text-yellow-600">In Progress</h3>
          <p class="text-3xl mt-2">{{ ticketStats.inProgress }}</p>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-lg font-semibold text-green-600">Resolved</h3>
          <p class="text-3xl mt-2">{{ ticketStats.resolved }}</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded shadow">
        <h3 class="text-lg font-semibold text-gray-800">Recent Tickets</h3>
        <table class="w-full mt-4">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="p-2">ID</th>
              <th class="p-2">Title</th>
              <th class="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in recentTickets" :key="ticket.id" class="border-b">
              <td class="p-2">{{ ticket.id }}</td>
              <td class="p-2">{{ ticket.title }}</td>
              <td class="p-2">{{ ticket.status }}</td>
            </tr>
          </tbody>
        </table>
        <router-link to="/tickets" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Manage Tickets</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import { useTicketStore } from '@/store/ticket';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'Dashboard',
  setup() {
    const ticketStore = useTicketStore();
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push('/auth');
    };

    // Compute ticket statistics
    const ticketStats = {
      open: ticketStore.tickets.filter(t => t.status === 'open').length,
      inProgress: ticketStore.tickets.filter(t => t.status === 'in-progress').length,
      resolved: ticketStore.tickets.filter(t => t.status === 'resolved').length,
    };

    // Get recent tickets (last 5 for simplicity)
    const recentTickets = ticketStore.tickets.slice(0, 5);

    return { ticketStats, recentTickets, logout };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>