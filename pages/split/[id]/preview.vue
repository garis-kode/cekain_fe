<template>
  <div class="flex flex-col min-h-full">
    <navigation :title="`${billDetails?.name || 'Loading...'}`" />
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />

    <!-- Loading Section -->
    <div v-if="skeletonLoading" class="animate-pulse">
      <div class="mb-3">
        <div class="h-6 bg-gray-200 rounded w-1/3 mb-2 dark:bg-gray-700"></div>
        <div class="h-3 bg-gray-200 rounded w-1/4 dark:bg-gray-700"></div>
        <div class="h-3 bg-gray-200 rounded w-1/3 dark:bg-gray-700 mt-2"></div>
        <div class="h-6 bg-gray-200 rounded w-1/3 mb-2 dark:bg-gray-700 mt-3"></div>
      </div>
    </div>

    <!-- Bill Details Section -->
    <div v-else>
      <div class="mb-3">
        <h1 class="text-xl font-bold text-blue-700 dark:text-blue-700">{{ billDetails?.storeName }}</h1>
        <div class="flex flex-col mt-3 mb-3">
          <span class="text-xs text-gray-400 dark:text-gray-400">Transaction Date:</span>
          <span class="font-semibold text-xs dark:text-white">
            {{ billDetails?.createdAt
              ? new Date(billDetails.createdAt).toLocaleString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric', 
                  hour: 'numeric', 
                  minute: 'numeric', 
                  hour12: true 
                })
              : 'Loading...' }}
          </span>
        </div>
        <h1 class="text-xl font-bold dark:text-white">
          IDR {{ new Intl.NumberFormat().format(billDetails?.total || 0) }}
        </h1>
      </div>
    </div>

    <!-- Loading Skeleton for Participants -->
    <div v-if="skeletonLoading" class="animate-pulse">
      <div
        v-for="n in 3"
        :key="n"
        class="mb-3 block bg-gray-100 border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 animate-pulse"
      >
        <div class="p-4">
          <div class="flex">
            <div class="w-12 h-12 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
            <div class="ms-3">
              <div class="h-3 bg-gray-300 rounded w-28 mb-2 dark:bg-gray-700"></div>
              <div class="h-4 bg-gray-300 rounded w-16 dark:bg-gray-700"></div> 
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed dark:border-gray-700">
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <div class="h-3 bg-gray-300 rounded w-24 dark:bg-gray-700"></div>
            <div class="h-3 bg-gray-300 rounded w-8 dark:bg-gray-700"></div>
            <div class="h-3 bg-gray-300 rounded w-16 dark:bg-gray-700"></div>
          </div>
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <div class="h-3 bg-gray-300 rounded w-24 dark:bg-gray-700"></div>
            <div class="h-3 bg-gray-300 rounded w-8 dark:bg-gray-700"></div>
            <div class="h-3 bg-gray-300 rounded w-16 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Participant Details -->
    <div v-else>
      <div 
        v-for="participant in participants"
        :key="participant.id"
        class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4">
          <div class="flex">
            <img
              class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800"
              :src="`https://api.dicebear.com/9.x/lorelei/jpg?seed=${participant.name}`"
              alt=""
            />
            <div class="ms-3">
              <span class="text-xs font-semibold dark:text-white">{{ participant.name || 'You' }}</span>
              <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                IDR {{ new Intl.NumberFormat().format(participant.total) }}
              </h5>
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          <h5 class="text-xs font-bold mb-2 dark:text-white">Items</h5>
          <div 
            v-for="item in participant.items"
            :key="item.id"
            class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <span>{{ item.name }}</span>
            <span>x {{ item.quantity }}</span>
            <span>IDR {{ new Intl.NumberFormat().format(item.price) }}</span>
          </div>
          <h5 class="text-xs font-bold mt-4 mb-2 dark:text-white" v-if="participant.others && participant.others.length > 0">Other Charges</h5>
          <div 
          
            v-for="other in participant.others"
            :key="other.name"
            class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <span>{{ other.name }}</span>
            <span>{{ other.type === 'addition' ? '+' : '-' }} IDR {{ new Intl.NumberFormat().format(other.amount) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div  v-if="!skeletonLoading" class="mt-auto flex gap-x-4">
      <button type="button"
        :disabled="isLoading"
        v-on:click="editBill"
        class="w-full flex justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span v-if="isLoadingEdit" role="status" class="flex items-center">
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
        <span>{{ isLoadingEdit ? 'Loading...' : 'Edit' }}</span>
      </button>
      <button type="button"
        :disabled="isLoading"
        v-on:click="confirmBill"
        class="w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
        <span>{{ isLoading ? 'Loading...' : 'Confirm' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});
import { ref, onMounted } from "vue";
import { useBillAPI } from "~/api/bill";
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: `Cekain - Preview`
});

const { fetchBillDetailsAPI, confirmBillsAPI, fetchBillShowAPI} = useBillAPI();
const route = useRoute();
const billId = route.params.id;

const isLoading = ref(false);
const isLoadingEdit = ref(false);
const skeletonLoading = ref(true);
const billDetails = ref(null);
const participants = ref([]);
const error = ref(null);
const success = ref(null);
const router = useRouter();

const detailBill = async () => {
  try {
    const response = await fetchBillDetailsAPI(billId);
    if (response.success) {
      if(response.data.status == 'confirmed') {
        await router.push(`/`);
      }
      billDetails.value = response.data;
      participants.value = response.data.participants;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoading.value = false;
  }
};

const editBill = async () => {
  isLoadingEdit.value = true;
  try {
    const response = await fetchBillShowAPI(billId);
    if (response.success) {
      localStorage.setItem('billData', JSON.stringify(response.data));
      localStorage.setItem('selectedFriends', JSON.stringify(response.data.splitWith));
      await router.push(`/split/${billId}/edit`);
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoadingEdit.value = false;
  }
};

const confirmBill = async () => {
  isLoading.value = true;
  try {
    const response = await confirmBillsAPI(billId);
    if (response.success) {
      await router.push(`/split/${billId}/bill`);
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(detailBill);
</script>
