<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
        <h1 class="text-md font-semibold">Setting</h1>
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
              <input type="checkbox" value="" class="sr-only peer" checked>
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
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" color="black" />
          </a>
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Language
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" color="black" />
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
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" color="black" />
          </a>
          <a href="#" class="p-4 flex justify-between items-center">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Sync with Google Contact
            </span>
            <Icon name="material-symbols-light:arrow-forward-ios" size="20px" color="black" />
          </a>
      </div>
    </div>
    
  </div>
</template>
