<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-sm">
      <div class="p-6 text-center">
        <svg
          class="mx-auto mb-4 text-gray-400 w-10 h-10 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h2 class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this friend?
        </h2>
        <div class="flex justify-center gap-2">
          <button
            @click="onCancel"
            type="button"
            class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            @click="onConfirm"
            type="button"
            class="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: { type: Boolean, required: true },
  onConfirm: { type: Function, required: true },
  onCancel: { type: Function, required: true },
});
</script>
