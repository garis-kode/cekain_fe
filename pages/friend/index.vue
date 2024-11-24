<template>
  <div>
    <navigation :title="'Friend List'" />
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />
    <!-- Search and Add Button -->
    <div class="mb-6 flex">
      <input
        type="text"
        id="search"
        class="me-3 block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
      />
      <button
        @click="showModal = true"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Icon name="heroicons:plus" size="14px" class="mt-1" color="black" />
      </button>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    <!-- Modal Add Friend -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <div class="p-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add Friend</h3>
            <button @click="showModal = false" class="flex align-middle text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2">
              <Icon name="heroicons:x-mark" size="20px" />
            </button>
          </div>
          <Form @submit="addFriend" :validation-schema="schema">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
              <Field name="name" type="text" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
              <ErrorMessage name="name" class="text-red-500 text-sm" />
            </div> 
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
              <Field name="email" type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
              <ErrorMessage name="email" class="text-red-500 text-sm" />
            </div> 
            <div class="mb-5">
              <label for="phone" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone</label>
              <Field name="phone" type="text" id="phone" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
              <ErrorMessage name="phone" class="text-red-500 text-sm" />
            </div> 
            <div class="flex justify-end mb-5 mt-7">
              <button
              type="submit"
              :disabled="isLoading"
              class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span v-if="isLoading" role="status" class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-2"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </span>
              <span>{{ isLoading ? 'Loading...' : 'Save' }}</span>
            </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});

import { ref } from 'vue';
import * as yup from 'yup'
import ErrorToast from '~/components/ErrorToast.vue'
import SuccessToast from '~/components/SuccessToast.vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const apiURL = config.public.apiURL

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .notRequired()
    .nullable(),
    phone: yup
    .string()
    .matches(/^\+62[0-9]{9,12}$/, 'Must start with +62')
    .min(12, 'Phone number must be at least 12 characters')
    .notRequired()
    .nullable(),
});


const showModal = ref(false);
const error = ref(null)
const success = ref(null)
const isLoading = ref(false) 

const addFriend = async (values) => {
  error.value = null
  isLoading.value = true 

  try {
    const token = localStorage.getItem('accessToken');
    const response = await $fetch(`${apiURL}/friend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phone,
      },
    });

    if (response.success === true) {
      success.value = 'Friend added successfully!.';  
      showModal.value = false;
    } 
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
}

</script>
