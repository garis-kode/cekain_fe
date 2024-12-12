<template>
  <div class="flex flex-col min-h-full">
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <div class="font-semibold text-md dark:text-blue-500 flex justify-center mb-5">
      <img :src="`/assets/img/icon/logo-wide.svg`" class="h-8" alt="">
    </div>
    <div>
      <div v-if="isLoading" class="animate-pulse">
        <div class="mb-3 text-center">
          <h1 class="text-xl font-bold text-blue-600 dark:text-blue-700">
            <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-3/4 h-6 inline-block rounded"></span>
          </h1>

          <div class="flex flex-col mt-3 mb-3">
            <span class="text-xs text-gray-400 dark:text-gray-400">
              <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-1/2 h-3 inline-block rounded"></span>
            </span>
            <span class="font-semibold text-xs dark:text-white">
              <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-2/3 h-3 inline-block rounded"></span>
            </span>
          </div>

          <div class="flex flex-col mt-3 mb-3">
            <span class="text-xs text-gray-400 dark:text-gray-400">
              <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-1/2 h-3 inline-block rounded"></span>
            </span>
            <span class="font-semibold text-xs dark:text-white">
              <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-2/3 h-3 inline-block rounded"></span>
            </span>
          </div>

          <h1 class="text-xl font-bold dark:text-white">
            <span class="animate-pulse bg-gray-300 dark:bg-gray-700 w-1/2 h-6 inline-block rounded"></span>
          </h1>
        </div>
      </div>

      <div v-else>
        <div class="mb-3 text-center">
          <h1 class="text-xl font-bold text-blue-600 dark:text-blue-700">{{ billDetails?.name }}</h1>
          <div class="flex flex-col mt-3 mb-3">
            <span class="text-xs text-gray-400 dark:text-gray-400">Store Name:</span>
            <span class="font-semibold text-xs dark:text-white">
              {{ billDetails?.storeName }}
              </span>
          </div>
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
          <div class="flex">
            <Avatar
                  :friendName="`${participant.name}`" 
                  customClass="text-lg border-2 border-white dark:border-gray-800" 
                  :size="'3rem'" 
                  :radius="'20%'"
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
    <div class="mt-auto pt-5 text-center">
      <p class="text-sm mb-2 text-center dark:text-white">Powered By <a class="font-bold text-blue-600" href="https://cekain.com">Cekain</a>.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBillAPI } from "~/api/bill";
import ErrorToast from '~/components/ErrorToast.vue';
import Avatar from '~/components/Avatar.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: `Cekain - Bill Shared`
});

const { shareBillAPI } = useBillAPI();
const route = useRoute();
const billId = route.params.id;

const isLoading = ref(true);
const billDetails = ref(null);
const participants = ref([]);
const error = ref(null);
const router = useRouter();

const shareBill = async () => {
  try {
    const response = await shareBillAPI(billId);
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
onMounted(shareBill);
</script>
