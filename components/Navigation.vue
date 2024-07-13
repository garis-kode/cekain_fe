<template>
  <div class="mb-6 flex justify-between items-center">
    <button
      type="button"
      @click="hasHistory() 
      ? $router.go(-1) 
      : $router.push('/')"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
    </button>
    <h1 class="text-md font-semibold dark:text-white">{{ title }}</h1>
    <button
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
    </button>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    hasHistory () { return window.history.length > 2 }
  }
}
</script>