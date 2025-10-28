<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

      <form @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded mb-4"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded mb-4"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p class="text-center mt-4 text-sm">
        Don't have an account?
        <router-link to="/signup" class="text-purple-600 hover:underline">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    let email = ''
    let password = ''

    const handleLogin = () => {
      // Fake login
      localStorage.setItem('ticketapp_session', 'logged-in')
      authStore.login()
      router.push('/dashboard')
    }

    return { email, password, handleLogin }
  }
}
</script>