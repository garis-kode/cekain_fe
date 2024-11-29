<template>
  <div>
    <navigation :title="'Split History'"/>
    <div class="mb-6 flex">
      <input 
        type="text" 
        id="search"
        v-model="search"
        @input="searchBills"
        class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search">
    </div>
    <div v-if="skeletonLoading">
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
      <div
        id="scroll-container"
        @scroll="onScroll"
        class="overflow-auto max-h-screen"
        v-else
      >
        <NuxtLink
          v-for="bill in bills"
          :key="bill.id"
          :to="`/split/${bill.id}/bill`"
          class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
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
              <span class="text-sm font-medium text-gray-400">
                <span class="font-semibold text-black dark:text-white">Total:</span> IDR. 
                {{ new Intl.NumberFormat().format(bill.total) }}
              </span>
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
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useBillAPI } from '~/api/bill';

const { fetchBillsAPI } = useBillAPI();

const search = ref('');
const bills = ref([]);
const skeletonLoading = ref(true);
const currentPage = ref(1);
const totalPages = ref(1);
const isLoadingMore = ref(false);
const error = ref(null);


const fetchBills = async (query = '', page = 1) => {
  skeletonLoading.value = true;
  try {
    skeletonLoading.value = page === 1;
    const response = await fetchBillsAPI(query, page, null);
    if (response.success) {
      bills.value =  page === 1 ? response.data : [...bills.value, ...response.data];
      totalPages.value = response.meta.pagination.totalPages;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoading.value = false;
  }
};

const searchBills = () => {
  currentPage.value = 1;
  fetchBills(search.value);
};

const onScroll = (event) => {
  const container = event.target;
  if (
    container.scrollHeight - container.scrollTop === container.clientHeight &&
    currentPage.value < totalPages.value &&
    !isLoadingMore.value
  ) {
    isLoadingMore.value = true;
    currentPage.value += 1;
    fetchBills(search.value, currentPage.value);
  }
};

onMounted(() => fetchBills());

</script>