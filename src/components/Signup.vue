<!-- src/components/Signup.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">
        Create Account
      </h2>

      <form @submit.prevent="handleSignup">
        <!-- Name -->
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full p-3 border rounded mb-4"
          required
        />

        <!-- Email -->
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded mb-4"
          required
        />

        <!-- Password -->
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded mb-4"
          required
        />

        <!-- Confirm Password -->
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full p-3 border rounded mb-4"
          required
        />

        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-500"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center mt-4 text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline">
          Login
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

    let name = ''
    let email = ''
    let password = ''
    let confirmPassword = ''

    const handleSignup = () => {
      if (password !== confirmPassword) {
        alert("Passwords don't match!")
        return
      }

      // Fake signup success
      localStorage.setItem('ticketapp_session', 'logged-in')
      authStore.login()
      router.push('/dashboard')
    }

    return { name, email, password, confirmPassword, handleSignup }
  }
}
</script>