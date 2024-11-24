<template>
  <div>
    <navigation :title="'Profile'"/>
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />
    <div class="flex justify-center relative">
      <img
        class="w-28 h-28 rounded absolute"
        :src="previewImage || user?.profilePictureUrl || defaultAvatar"
        alt="Default avatar"
      />
      <label
        class="absolute top-0 mt-[-10px] ms-[100px] bg-blue-200 text-white p-1 rounded-full cursor-pointer"
        for="file-input"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5M16.414 3.586a2 2 0 112.828 2.828L9 16l-4 1 1-4 10.414-10.414z"
          />
        </svg>
      </label>
      <input
        id="file-input"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleFileChange"
      />
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700 mt-10">
      <Form @submit="handleUpdateProfile" :validation-schema="schema">
        <div class="p-5 mt-20">
          <div class="mb-3">
            <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
            <Field
              name="name"
              type="text"
              id="name"
              v-model="formValues.name"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              required
            />
            <ErrorMessage name="name" class="text-red-500 text-sm" />
          </div>
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
            <Field
              name="email"
              type="email"
              id="email"
              v-model="formValues.email"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email Address"
              required
            />
            <ErrorMessage name="email" class="text-red-500 text-sm" />
          </div>
          <div class="mb-3">
            <label for="phone" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone</label>
            <Field
              name="phone"
              type="text"
              id="phone"
              v-model="formValues.phoneNumber"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone Number"
              required
            />
            <ErrorMessage name="phone" class="text-red-500 text-sm" />
          </div>
          <div class="flex justify-end">
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
        </div>
      </Form>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <div class="mb-3">
            <label for="old-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Old Password</label>
            <input type="password" id="old-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old Password" required />
          </div> 
          <div class="mb-3">
            <label for="new-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">New Password</label>
            <input type="password" id="new-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
          </div> 
          <div class="mb-3">
            <label for="repeat-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Repeat Password</label>
            <input type="password" id="repeat-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
          </div> 
          <div class="flex justify-end">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
        </div>
    </div>
    
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import * as yup from 'yup';
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const apiURL = config.public.apiURL;

const user = computed(() => {
  if (process.client) {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
});

const defaultAvatar = computed(() => {
  return `https://ui-avatars.com/api/?bold=true&background=00a3ff&color=fff&name=${user.value?.fullName || 'User'}`;
});

const formValues = ref({
  name: user.value?.fullName || '',
  email: user.value?.email || '',
  phoneNumber: user.value?.phoneNumber || '',
  profilePicture: null,
});

const previewImage = ref(user.value?.profilePictureUrl || null);
const isLoading = ref(false);
const error = ref(null);
const success = ref(null);

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+62[0-9]{9,12}$/, 'Must start with +62')
    .required('Phone is required'),
});

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      error.value = 'Only JPG or PNG files are allowed.';
      return;
    }

    formValues.value.profilePicture = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      previewImage.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};


const handleUpdateProfile = async (values) => {
  error.value = null;
  isLoading.value = true;

  try {
    const token = localStorage.getItem('accessToken');

    // Buat FormData
    const formData = new FormData();
    formData.append('fullName', String(values.name));
    formData.append('email', String(values.email));
    formData.append('phoneNumber', values.phone);
    if (formValues.value.profilePicture) {
      formData.append('profilePicture', formValues.value.profilePicture);
    }

    // Kirim request ke API
    const response = await $fetch(`${apiURL}/profile`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.success) {
      success.value = 'Profile updated successfully!';
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};

</script>
