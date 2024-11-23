<template>
  <div>
    <navigation :title="'Profile'"/>
    <div class="flex justify-center relative">
      <img class="w-28 h-28 rounded absolute" :src="user?.profilePicturePath ||  defaultAvatar" alt="Default avatar">
    </div>
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700 mt-20">
        <div class="p-5 mt-20">
          <div class="mb-3">
            <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
            <Field type="text" id="name" :value="user?.fullName" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
          </div> 
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
          </div> 
          <div class="mb-3">
            <label for="phone" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone</label>
            <input type="number" id="phone" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
          </div> 
          <div class="flex justify-end">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
        </div>
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
definePageMeta({
  middleware: 'auth',
});

import { computed} from 'vue';

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


const logout = () => {
  if (process.client) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/auth/sign-in';
  }
};
</script>