<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-blue-1000 rounded-3xl flex-1">s</div> <!-- Ensure this takes up the full height of the screen -->
    <div class="mt-auto text-center pt-10">
      <div class="text-center px-6 mb-10">
        <h1 class="text-2xl font-semibold text-blue-700 mb-2">Cekain - Hangout jadi enak</h1>
        <p class="text-gray-600 text-sm leading-relaxed">
          Aplikasi split bill nomor 1 <br> buat kamu yang sering hangout bareng teman
        </p>
      </div>
      <button
        @click="handleGetStarted"
        class="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Get Started!
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const handleGetStarted = () => {
  router.push('/auth/sign-in'); // Navigate to the sign-in page
};
</script>
