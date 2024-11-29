<template>
  <div>
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <div class="md:mx-[-24px] mx-[-15px] mt-[-40px] bg-blue-1000 dark:bg-gray-700 p-5 rounded-b-[50px] bg-center bg-no-repeat bg-[url('/assets/img/shape/hero.svg')] dark:bg-[url('/assets/img/shape/hero-dark.svg')] bg-cover">
      <div class="flex items-center	justify-between ">
        <span class="font-semibold text-md dark:text-blue-500">
          <img :src="`/assets/img/icon/logo-bg-white.png`" class="h-20" alt="">
        </span>
        <div class="flex items-center	gap-x-4">
          <Icon name="heroicons:bell-alert" size="22px" class="text-sm text-gray-400 dark:text-gray-400" color="black" />
          
          <div class="relative inline-block text-left" ref="dropdownRef">
            <div>
              <button @click="toggleDropdown" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="user?.profilePictureUrl ||  defaultAvatar" alt="user photo">
              </button>
            </div>

            <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 z-10" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="z-10 bg-white divide-y divide-gray-100 rounded-xl w-44 dark:bg-gray-700 dark:divide-gray-600 w-[280px]">
                <div class="px-6 py-5 text-sm text-gray-900 dark:text-white">
                  <div class="flex">
                    <img class="h-10 rounded" :src="user?.profilePictureUrl || defaultAvatar" alt="Default avatar">
                    <div class="ms-2">
                      <div class="font-semibold truncate">{{ user?.fullName}}</div>
                      <div>{{ user?.email }}</div>
                    </div>
                  </div>
                </div>
                <ul class="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                  <li>
                    <NuxtLink to="/profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/setting" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Setting</NuxtLink>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Privacy Policy</a>
                  </li>
                </ul>
                <div class="py-2 px-2">
                  <a href="#" @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="text-center mb-10 mt-3">
        <span class="text-sm text-gray-400 dark:text-gray-400">7 Friend are owing you</span>
        <h1 class="font-bold text-4xl dark:text-white">IDR. 700,000</h1>
        <div class="mt-8 flex justify-center gap-x-2">
          <NuxtLink to="split/add" class="flex gap-x-1 px-4 py-2.5 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Icon name="mingcute:bill-2-line" size="20px" color="black" />
            Add Manually
          </NuxtLink>
          <NuxtLink to="split/scan" class="flex gap-x-1 px-7 py-2.5 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <Icon name="mingcute:scan-fill" size="18px" color="black" />
            Quick Scan
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-5 flex justify-between">
      <span class="font-semibold text-md dark:text-white">Friend List</span>
      <NuxtLink to="./friend" class="text-sm text-gray-400 dark:text-gray-400 hover:text-blue-700">See More</NuxtLink>
    </div>
    <div class="mt-5">
    <div v-if="skeletonLoadingFriend" class="flex gap-4 overflow-x-auto pb-2">
      <div
        v-for="n in 5"
        :key="n"
        class="w-20 h-28 p-2 flex-shrink-0 animate-pulse"
      >
        <div class="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
        <div class="w-20 h-4 bg-gray-300 rounded-md mx-auto"></div>
      </div>
    </div>

    <Swiper
      v-else
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      :slides-per-view="5"
      :loop="true"
      :effect="'free-mode'"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="friend in friends"
        :key="friend.id"
        class="pt-1 ps-1"
      >
        <div class="pe-2">
          <img
            class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            :src="`https://api.dicebear.com/9.x/lorelei/jpg?seed=${friend.name}`"
            alt="Bordered avatar"
          />
          <figure class="text-sm mt-3 text-center text-xs text-gray-600 dark:text-gray-400">
            {{ friend.name }}
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide class="pt-1 ps-1" v-if="friends.length === 0">
        <div class="pe-2 text-center leading-3">
          <NuxtLink to="./friend" class="md:w-16 md:p-5 p-3 ms-1 lg:ms-1.5 rounded-full border border-dashed border-blue-600 flex justify-center items-center mb-2">
            <Icon name="heroicons:plus-16-solid" class="text-blue-700" size="22px" color="black" />
          </NuxtLink>
          <span class="text-sm text-center text-xs text-blue-600">Add Friend</span>
        </div>
      </SwiperSlide>
      
    </Swiper>
  </div>
    <div class="mt-5 flex justify-between">
      <span class="font-semibold text-md dark:text-white">Split History</span>
      <NuxtLink to="./split/history" class="text-sm text-gray-400 dark:text-gray-400 hover:text-blue-700">See More</NuxtLink>
    </div>
    <div class="mt-6">  

      <div v-if="skeletonLoadingBill">
        <a
          v-for="index in 3"
          :key="'skeleton-' + index"
          class="mb-3 block bg-white border border-gray-100 rounded-xl animate-pulse dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div class="p-4">
            <div class="flex justify-between">
              <div class="flex align-middle">
                <span class="flex items-center justify-center w-12 h-12 text-xs font-medium bg-gray-300 rounded-lg dark:bg-gray-700"></span>
                <div class="ms-3">
                  <div class="h-6 bg-gray-300 rounded w-36 mb-2"></div>
                  <div class="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                <div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                <div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                <div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <hr class="border-1 my-4 border-dashed">
            <div class="flex justify-between">
              <div class="h-4 bg-gray-300 rounded w-28"></div>
              <div class="w-24 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-800">
            <div class="bg-gray-300 h-1 rounded-full"></div>
          </div>
        </a>
      </div>
      <div v-else>
        <NuxtLink 
          v-for="bill in bills"
          :key="bill.id"
          :to="`/split/${bill.id}/bill`"
          class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="flex align-middle">
                <span class="flex items-center justify-center w-12 h-12 text-xs font-medium bg-blue-950 rounded-lg dark:bg-gray-700">
                  <img src="/assets/img/icon/bill.png" alt="">
                </span>
                <div class="ms-3">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ bill.name }}</h5>
                  <p class="text-xs text-gray-400 dark:text-gray-400">
                    {{ new Date(bill.createdAt).toLocaleString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric', 
                      hour: 'numeric', 
                      minute: 'numeric', 
                      hour12: true 
                    }) }}
                  </p>
                </div>
              </div>
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <img
                  v-for="(participant,) in bill.participants.slice(0, 3)"
                  :key="participant.id"
                  class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" 
                  :src="`https://api.dicebear.com/9.x/lorelei/jpg?seed=${participant.name}`"
                  :alt="`${participant.name}`"
                >
                <span
                  v-if="bill.participants.length > 3"
                  class="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-400 bg-gray-100 border-2 border-white rounded-full"
                >
                  +{{ bill.participants.length - 3 }}
                </span>
              </div>
            </div>
            <hr class="border-1 my-4 border-dashed">
            <div class="flex justify-between">
              <span class="text-sm font-medium text-gray-400"><span class="font-semibold text-black dark:text-white">Total:</span> IDR. {{ new Intl.NumberFormat().format(bill.total) }}</span>
              <span 
                v-if="bill.status === 'draft'" 
                class="bg-yellow-100 text-yellow-400 text-xs font-medium px-2 py-1 rounded dark:bg-yellow-400 dark:text-yellow-400">
                draft
              </span>

              <span 
                v-else-if="bill.status === 'confirmed'" 
                class="bg-blue-950 text-blue-900 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-950">
                {{ bill.paidPercentage }}% Paid
              </span>         
            </div>
          </div>
          
          <div v-if="bill.status === 'confirmed'"  class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-800">
            <div class="bg-blue-900 h-1 rounded-full" :style="{ width: bill.paidPercentage + '%' }"></div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  middleware: 'auth',
});

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useFriendAPI } from '~/api/friend';
import { useBillAPI } from '~/api/bill';

const { fetchFriendsAPI } = useFriendAPI();
const { fetchBillsAPI } = useBillAPI();

const isOpen = ref(false);
const dropdownRef = ref(null);
const friends = ref([]);
const bills = ref([]);
const skeletonLoadingFriend = ref(true);
const skeletonLoadingBill = ref(true);
const error = ref(null);

const user = computed(() => {
  if (process.client) {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (e) {
      console.error('Error parsing user data from localStorage:', e);
      return null;
    }
  }
  return null;
  
});

const defaultAvatar = computed(() => {
  return `https://ui-avatars.com/api/?bold=true&background=00a3ff&color=fff&name=${user.value?.fullName || 'User'}`;
});

const fetchFriends = async () => {
  skeletonLoadingFriend.value = true;
  try {
    const response = await fetchFriendsAPI();
    if (response.success) {
      friends.value = response.data;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoadingFriend.value = false;
  }
};

const fetchBills = async () => {
  skeletonLoadingBill.value = true;
  try {
    const response = await fetchBillsAPI(null, 1, 5);
    if (response.success) {
      bills.value = response.data;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoadingBill.value = false;
  }
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const handleDocumentClick = (event) => {
  closeDropdown(event);
};

onMounted(async () => {
  try {
    await fetchFriends();
    document.addEventListener('click', handleDocumentClick);
  } catch (err) {
    console.error('Error during component mount:', err);
  }

  try {
    await fetchBills();
    document.addEventListener('click', handleDocumentClick);
  } catch (err) {
    console.error('Error during component mount:', err);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick);
});

const logout = () => {
  if (process.client) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/auth/sign-in';
  }
};
</script>

