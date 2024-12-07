<template>
  <div class="flex flex-col min-h-full">
    <navigation :title="`${billDetails?.name || 'Loading...'}`" />
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />

    <div>
      <div v-if="isLoading" class="animate-pulse">
        <div class="mb-3">
          <div class="h-6 bg-gray-200 rounded w-1/3 mb-2 dark:bg-gray-700"></div>
          <div class="h-3 bg-gray-200 rounded w-1/4 dark:bg-gray-700"></div>
          <div class="h-3 bg-gray-200 rounded w-1/3 dark:bg-gray-700 mt-2"></div>
          <div class="h-6 bg-gray-200 rounded w-1/3 mb-2 dark:bg-gray-700 mt-3"></div>
        </div>
        <div class="mb-6 flex items-center gap-x-4">
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-400"></div>
          <div class="w-24 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
        </div>
      </div>

      <div v-else>
        <div class="mb-3">
          <h1 class="text-xl font-bold text-blue-700 dark:text-blue-700">{{ billDetails.storeName }}</h1>
          <div class="flex flex-col mt-3 mb-3">
            <span class="text-xs text-gray-400 dark:text-gray-400">Transaction Date:</span>
            <span class="font-semibold text-xs dark:text-white">
              {{ new Date(billDetails?.createdAt).toLocaleString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric', 
                      hour: 'numeric', 
                      minute: 'numeric', 
                      hour12: true 
                    }) }}
              </span>
          </div>
          <h1 class="text-xl font-bold dark:text-white">IDR {{ new Intl.NumberFormat().format(billDetails?.total) }}</h1>
        </div>

        <div class="mb-6 flex items-center justify-between gap-x-4">
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-400">
            <div
              class="bg-blue-900 h-1 rounded-full"
              :style="{ width: billDetails?.paidPercentage + '%' }"
            ></div>
          </div>
          <span
            class="md:w-15 w-24 bg-blue-950 text-center text-blue-900 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-950"
          >
            {{ billDetails?.paidPercentage }}% Paid
          </span>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="animate-pulse">
      <div
        v-for="n in 3"
        :key="n"
        class="mb-3 block bg-gray-100 border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 animate-pulse"
      >
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
              <div class="ms-3">
                <div class="h-3 bg-gray-300 rounded w-28 mb-2 dark:bg-gray-700"></div>
                <div class="h-5 bg-gray-300 rounded w-16 dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="w-4 h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
          <hr class="border-1 my-4 border-dashed dark:border-gray-700" />
          <div class="flex justify-between items-center">
            <div class="h-3 bg-gray-300 rounded w-20 dark:bg-gray-700"></div>
            <div class="w-6 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        v-for="participant in participants"
        :key="participant.id"
        class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4">
          <div class="flex justify-between">
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
            <input
              type="checkbox"
              v-model="participant.isPaid"
              @change="markAsPaid(participant.id, participant.isPaid)"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <hr class="border-1 my-4 border-dashed" />
          <button
            @click="toggleAccordion(participant.id)"
            class="flex items-center justify-between w-full"
          >
            <span class="text-xs font-semibold dark:text-white">Details</span>
            <Icon name="heroicons:arrow-down-circle" class="dark:text-white" size="18px" color="black" />
          </button>
          <div v-if="isOpen(participant.id)" class="mt-3">
            <h5 class="text-xs font-bold mb-2 dark:text-white">Items</h5>
            <div
              v-for="item in participant.items"
              :key="item.id"
              class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3"
            >
              <span>{{ item.name }}</span>
              <span>x {{ item.quantity }}</span>
              <span>IDR {{ new Intl.NumberFormat().format(item.price) }}</span>
            </div>
            <h5 class="text-xs font-bold mt-4 mb-2 dark:text-white">Other Charges</h5>
            <div
              v-for="other in participant.others"
              :key="other.name"
              class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3"
            >
              <span>{{ other.name }}</span>
              <span>{{ other.type === 'addition' ? '+' : '-' }} IDR {{ new Intl.NumberFormat().format(other.amount) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isLoading" class="mt-auto flex gap-x-4">
      <button
        type="button"
        class="flex items-center justify-center gap-x-2 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <Icon name="heroicons:arrow-down-tray-16-solid" size="18px" color="black" />
        Download
      </button>
      <button
        type="button"
        class="flex items-center justify-center gap-x-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="copyLink"
      >
        <Icon name="heroicons:clipboard-document-list" size="18px" color="black" />
        {{ copiedText }}
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
  title: `Cekain - Split Bill`
});

const { fetchBillDetailsAPI, markAsPaidAPI } = useBillAPI();
const route = useRoute();
const billId = route.params.id;

const isLoading = ref(true);
const billDetails = ref(null);
const participants = ref([]);
const openAccordions = ref([]);
const error = ref(null);
const success = ref(null);
const router = useRouter();
const copiedText = ref("Copy Link");

const toggleAccordion = (id) => {
  const index = openAccordions.value.indexOf(id);
  index === -1 ? openAccordions.value.push(id) : openAccordions.value.splice(index, 1);
};

const isOpen = (id) => openAccordions.value.includes(id);

const detailBill = async () => {
  try {
    const response = await fetchBillDetailsAPI(billId);
    if (response.success) {
      if(response.data.status == 'draft') {
        await router.push(`/`);
      }
      billDetails.value = response.data;
      participants.value = response.data.participants;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};

const markAsPaid = async (participantId, isPaid) => {
  try {
    const response = await markAsPaidAPI(billId, {
      participantId,
      isPaid,
    });

    if (response.success) {
      success.value = 'Payment status updated successfully!';
      updatePaidPercentage();
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  }
};

const updatePaidPercentage = () => {
  const totalParticipants = participants.value.length;
  const paidParticipants = participants.value.filter(participant => participant.isPaid).length;

  billDetails.value.paidPercentage = totalParticipants > 0 ? (paidParticipants / totalParticipants) * 100 : 0;
};
const copyLink = async () => {
  try {
    const url = window.location.origin + `/split/${billId}/shared`;
    await navigator.clipboard.writeText(url); 
    copiedText.value = "Copied!"; 
    success.value = "Copied!"; 
    
    setTimeout(() => {
      copiedText.value = "Copy Link";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy link:", err);
  }
};

onMounted(detailBill);
</script>
