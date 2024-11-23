<template>
  <div class="flex flex-col min-h-full">
    <div class="mt-auto text-center">
      <div class="text-center px-6 mb-10">
        <h1 class="text-2xl font-semibold text-blue-700 mb-2">Cekain - Teman Seru Hangout</h1>
        <p class="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laudantium ex necessitatibus quasi tenetur itaque architecto sed omnis, autem eum inventore sequi blanditiis corrupti aliquid velit nemo harum ipsam expedita!
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