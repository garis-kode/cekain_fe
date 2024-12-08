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
            <h5 class="text-xs font-bold mt-4 mb-2 dark:text-white" v-if="participant.others && participant.others.length > 0">Other Charges</h5>
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
        @click="downloadShared"
        :disabled="isDownloading"
        type="button"
        class="flex items-center justify-center gap-x-2 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon
          v-if="!isDownloading"
          name="heroicons:arrow-down-tray-16-solid"
          size="18px"
          color="black"
        />
        <svg
          v-else
          aria-hidden="true"
          class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08158 50.5908C9.08158 74.2975 25.7933 91.0092 49.5 91.0092C73.2067 91.0092 89.9184 74.2975 89.9184 50.5908C89.9184 26.8841 73.2067 10.1724 49.5 10.1724C25.7933 10.1724 9.08158 26.8841 9.08158 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 96.9709 33.5539C95.2334 28.8227 92.871 24.3692 89.9405 20.348C85.9406 14.4328 80.4778 9.43964 74.0422 5.81603C67.6066 2.19243 60.3928 0.0801517 53.0175 0.00583504C50.5532 -0.0247664 48.5483 1.8028 48.5177 4.26704C48.4871 6.73128 50.2727 8.77437 52.737 8.80489C58.6406 8.87106 64.3664 10.3284 69.5318 13.0386C74.6973 15.7489 79.1442 19.6502 82.5976 24.478C84.9178 27.7426 86.7992 31.3178 88.1812 35.0988C89.0837 37.4565 91.5422 38.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        {{ isDownloading ? "Loading..." : "Download" }}
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
import html2canvas from "html2canvas";

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
const isDownloading = ref(false);

const downloadShared = async () => {
  const urlToCapture = window.location.origin + `/split/${billId}/shared`;

  try {
    isDownloading.value = true; 
    const iframe = document.createElement("iframe");
    iframe.src = urlToCapture;
    iframe.style.position = "absolute";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";

    document.body.appendChild(iframe);

    iframe.onload = () => {
      setTimeout(async () => {
        try {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          const targetElement = iframeDocument.querySelector("#page");

          if (!targetElement) {
            throw new Error("Halaman tidak ditemukan!");
          }

          const canvas = await html2canvas(targetElement, {
            backgroundColor: null,
            useCORS: true,
          });

          const link = document.createElement("a");
          link.download = "bill.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        } catch (err) {
          error.value = "Gagal memuat halaman target:", err;
        } finally {
          document.body.removeChild(iframe);
          isDownloading.value = false;
        }
      }, 2000);
    };
  } catch (err) {
    error.value = "Gagal memuat halaman target:", err;
    isDownloading.value = false;
  }
};

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
