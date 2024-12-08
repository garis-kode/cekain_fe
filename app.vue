<template>
  <div class="max-w-100 min-h-screen bg-slate-100 flex justify-center dark:bg-gray-900 font-inter">
    <div class="md:min-w-[480px] md:max-w-[480px] max-w-full min-w-full bg-slate-50 dark:bg-gray-800 md:p-6 p-4" id="page">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }
}
</script>

