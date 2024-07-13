<template>
  <div class="flex flex-col min-h-full">
    <div class="mb-6 flex justify-between items-center">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
      <h1 class="text-md font-semibold dark:text-white">Setting</h1>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
      </button>
    </div>

    <div class="mb-6">
      <span class="text-sm font-bold text-gray-900 dark:text-white">
        Appearance
      </span>
      <div class="mb-3 bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Dark Theme
            </span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" @change="toggleDarkMode" :checked="isDarkMode">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
      </div>
    </div>

    <div class="mb-6">
      <span class="text-sm font-bold text-gray-900 dark:text-white">
        Application
      </span>
      <div class="mb-3 bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Timezone
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" class="dark:text-white" color="black" />
          </a>
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Language
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" class="dark:text-white" color="black" />
          </a>
      </div>
    </div>

    <div class="mb-6">
      <span class="text-sm font-bold text-gray-900 dark:text-white">
        Account
      </span>
      <div class="mb-3 bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Profile
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" class="dark:text-white" color="black" />
          </a>
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Sync with Google Contact
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" class="dark:text-white" color="black" />
          </a>
      </div>
    </div>
    
    <button type="button" class="mt-auto w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
      <div class="flex item-center justify-center gap-x-2">
        <Icon name="heroicons:arrow-left-on-rectangle" size="20px" class="dark:text-white" color="black" />
        Log Out
      </div>
    </button>

  </div>
</template>


<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  mounted() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.setDarkMode(this.isDarkMode);
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.setDarkMode(this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode);
    },
    setDarkMode(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>
