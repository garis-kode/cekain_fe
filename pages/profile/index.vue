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
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        accept="image/jpeg, image/png"
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
              :disabled="isLoadingProfile"
              class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span v-if="isLoadingProfile" role="status" class="flex items-center">
                <!-- Spinner Icon -->
                <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </span>
              <span>{{ isLoadingProfile ? 'Loading...' : 'Save' }}</span>
            </button>
          </div>
        </div>
      </Form>
    </div>

    <!-- Change Password Form -->
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <Form @submit="handleChangePassword" :validation-schema="passwordSchema">
          <div class="mb-3">
            <label for="oldPassword" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Old Password</label>
            <Field
              name="oldPassword"
              type="password"
              id="oldPassword"
              v-model="passwordForm.oldPassword"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Old Password"
              required
            />
            <ErrorMessage name="oldPassword" class="text-red-500 text-sm" />
          </div>
          <div class="mb-3">
            <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">New Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              v-model="passwordForm.password"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New Password"
              required
            />
            <ErrorMessage name="password" class="text-red-500 text-sm" />
          </div>

          <div class="mb-3">
            <label for="passwordConfirmation" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Confirm New Password</label>
            <Field
              name="passwordConfirmation"
              type="password"
              id="passwordConfirmation"
              v-model="passwordForm.passwordConfirmation"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
              required
            />
            <ErrorMessage name="passwordConfirmation" class="text-red-500 text-sm" />
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="isLoadingChangePassword"
              class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span v-if="isLoadingChangePassword" role="status" class="flex items-center">
                <!-- Spinner Icon -->
                <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </span>
              <span>{{ isLoadingChangePassword ? 'Loading...' : 'Save' }}</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});

import { ref, computed } from 'vue';
import * as yup from 'yup';
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import { useProfileAPI } from '~/api/profile';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Cekain - My Profile'
});

const { updateProfileAPI, changePasswordAPI } = useProfileAPI();

const user = computed(() => {
  if (process.client) {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
});

const defaultAvatar = computed(() => {
  return `https://ui-avatars.com/api/?bold=true&background=00a3ff&color=fff&name=${user.value?.fullName}`;
});

const formValues = ref({
  name: user.value?.fullName || '',
  email: user.value?.email || '',
  phoneNumber: user.value?.phoneNumber || '',
  profilePicture: null,
});

const passwordForm = ref({
  oldPassword: '',
  password: '',
  passwordConfirmation: '',
});

const previewImage = ref(user.value?.profilePictureUrl || null);
const isLoadingProfile = ref(false);
const isLoadingChangePassword = ref(false);
const error = ref(null);
const success = ref(null);

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+62[0-9]{9,12}$/, 'Must start with +62')
    .min(12, 'Phone number must be at least 12 characters')
    .required('Phone is required'),
});

const passwordSchema = yup.object({
  oldPassword: yup.string().required('Old password is required'),
  password: yup.string()
    .min(8, 'New password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[0-9]/, 'Password must contain at least one number.')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character.')
    .required('New password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
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
  isLoadingProfile.value = true;

  try {
    const formData = new FormData();
    formData.append('fullName', String(values.name));
    formData.append('email', String(values.email));
    formData.append('phoneNumber', values.phone);
    if (formValues.value.profilePicture) {
      formData.append('profilePicture', formValues.value.profilePicture);
    }

    const response = await updateProfileAPI(formData);

    if (response?.success) {
      success.value = 'Profile updated successfully!';
    } else {
      error.value = response?.message || 'An unexpected error occurred.';
    }
  } catch (err) {
    error.value = err?.response?.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoadingProfile.value = false;
  }
};

const handleChangePassword = async () => {
  isLoadingChangePassword.value = true;

  try {
    await passwordSchema.validate(passwordForm.value, { abortEarly: false });
    const formData = {
      oldPassword: passwordForm.value.oldPassword,
      password: passwordForm.value.password,
      passwordConfirmation: passwordForm.value.passwordConfirmation, // Ensure the correct field name
    };

    const response = await changePasswordAPI(formData);

    if (response?.success) {
      success.value = 'Password changed successfully!';
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoadingChangePassword.value = false;
  }
};
</script>
