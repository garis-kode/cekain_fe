<template>
  <div class="flex flex-col min-h-full">

    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />

    <div class="mb-10">
      <NuxtLink to="./" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </NuxtLink>
    </div>

    <div class="mb-6">
      <h1 class="text-3xl font-bold mb-2 dark:text-white">Sign In</h1>
      <p class="text-gray-400 text-md dark:text-gray-400">Welcome back! Please enter your details.</p>
    </div>

    <Form @submit="handleLogin" :validation-schema="schema">
      <div class="my-6">
        <div class="mb-3">
          <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
          <Field name="email" type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" />
          <ErrorMessage name="email" class="text-red-500 text-sm" />
        </div>

        <div class="mb-3">
          <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
          <Field name="password" type="password" id="password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
          <ErrorMessage name="password" class="text-red-500 text-sm" />
        </div>

        <div class="flex justify-end mb-3">
          <NuxtLink to="/auth/forgot-password" class="text-blue-600 font-medium hover:underline dark:text-blue-500 text-sm">Forgot Password?</NuxtLink>
        </div>
      </div>

      <button type="submit"
        :disabled="isLoading"
        class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <span>{{ isLoading ? 'Loading...' : 'Sign In' }}</span>
      </button>
    <div class="flex items-center justify-center w-full my-4">
        <hr class="border-gray-300 flex-grow">
        <span class="mx-2 text-gray-400 text-xs text-gray-500">Or sign In with</span>
        <hr class="border-gray-300 flex-grow">
      </div>
      <button type="button" class="flex items-center justify-center text-black w-full bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <img src="/assets/img/icon/google.svg" alt="">
        <span class="ml-2">Google</span>
      </button>
    </Form>

    <div class="mt-auto text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">Don’t have an account? <NuxtLink to="/auth/sign-up" class="text-blue-600 hover:underline dark:text-blue-500">Sign Up</NuxtLink></p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'guest',
});

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import { useAuthAPI } from '~/api/auth';

const { loginAPI } = useAuthAPI();

const schema = yup.object({
  email: yup.string().email('Please enter a valid email address.').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters long.').required('Password is required'),
});

const error = ref(null);
const success = ref(null);
const isLoading = ref(false);
const router = useRouter();

const handleLogin = async (values) => {
  error.value = null;
  isLoading.value = true;

  try {
    const response = await loginAPI(values.email, values.password);

    if (response.success) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      await router.push('/');
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};
</script>

