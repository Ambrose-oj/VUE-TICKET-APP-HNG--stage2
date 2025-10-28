<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 flex justify-between items-center">
      <h1 class="text-xl text-blue-600 font-bold">
        HNG Tickets</h1>
      <router-link
        to="/signup"
        class="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login / Sign Up
      </router-link>
    </header>



    <main class="flex-grow">
      <section class="relative bg-blue-600 text-white text-center py-20 overflow-hidden" style="clip-path: url(#wave)">
        <img src="../assets/shared-assets/wave.svg" class="absolute bottom-0 w-full pointer-events-none" alt="Wave background">
        <h2 class="relative z-10 text-3xl font-bold">Welcome to TicketApp</h2>
        <p class="relative z-10 mt-4 text-md text-white-300">Your one-stop solution for managing support tickets efficiently.</p>
        <div class="relative mt-6 z-10">

          <router-link
          to="/signup"
          class="bg-blue-700 text-white px-6 py-2 mr-4 rounded"
        >
          Get Started
        </router-link>

        <router-link
          to="/login"
          class="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Login
        </router-link>

        </div>
      </section>
      <section class="py-10 px-4 max-w-6xl mx-auto">
        <h3 class="text-2xl text-center mb-8">Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-50 p-6 rounded shadow">
            <h4 class="text-lg font-semibold">Track Everything</h4>
            <p class="mt-2">Keep a clear view of all open, in-progress, and resolved tickets.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded shadow">
            <h4 class="text-lg font-semibold">Collaborate</h4>
            <p class="mt-2">Work with your team to solve customer issues faster.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded shadow">
            <h4 class="text-lg font-semibold">Stay Organized</h4>
            <p class="mt-2">Easy-to-use interface to create, update, and manage your workflow.</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>© 2025 Multi-Framework Ticket App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>