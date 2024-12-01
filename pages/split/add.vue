<template>
  <div>
    <navigation :title="'Split The Bill'"/>
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <div class="mb-3">
          <label for="bill-name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Bill Name</label>
          <input type="text" id="bill-name" v-model="billName" @input="saveItems" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bill Name" required />
        </div>
        <div class="mb-3">
          <label for="Store" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Store</label>
          <input 
            type="text" 
            id="Store" 
            v-model="storeName" 
            @input="saveItems" 
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Store" 
            required
          /> 
        </div>
        <div class="mb-3">
          <label for="Store" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Split With</label>
          <Swiper :modules="[SwiperAutoplay, SwiperFreeMode]" :slides-per-view="5" :loop="true" :effect="'free-mode'" :autoplay="{ delay: 4000, disableOnInteraction: true }">
            <SwiperSlide class="pt-1 ps-1">
              <div class="pe-2">
                <button class="origin-top-right absolute right-0 me-2 z-10 flex items-center justify-center w-4 h-4 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-full">
                  <Icon name="heroicons:minus-16-solid" class="text-white" size="18px" color="black" />
                </button>
                <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
                <figure class="text-sm mt-3 text-center text-xs text-gray-600 dark:text-gray-400">Fajar Rivaldi Chan</figure>
              </div>
            </SwiperSlide>
            <SwiperSlide class="pt-1 ps-1">
              <div class="pe-2">
                <button class="origin-top-right absolute right-0 me-2 z-10 flex items-center justify-center w-4 h-4 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-full">
                  <Icon name="heroicons:minus-16-solid" class="text-white" size="18px" color="black" />
                </button>
                <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
                <figure class="text-sm mt-3 text-center text-xs text-gray-600 dark:text-gray-400">John Doe</figure>
              </div>
            </SwiperSlide>
            <SwiperSlide class="pt-1 ps-1">
              <div class="pe-2 text-center">
                <button class="md:w-16 md:p-5 p-3 rounded-full border border-dashed border-blue-600 flex justify-center items-center mb-2">
                  <Icon name="heroicons:plus-16-solid" class="text-blue-700" size="24px" color="black" />
                </button>
                <span class="text-sm text-center text-xs text-blue-600">Add Friend</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <div v-for="(item, index) in items" :key="index" class="border dark:border-gray-700 rounded-xl border-dashed p-3 mb-3 relative inline-block">
          <button @click="removeItem(index)" class="origin-top-right absolute right-0 mt-[-20px] me-[-10px] z-10 flex items-center justify-center w-4 h-4 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-full">
            <Icon name="heroicons:minus-16-solid" class="text-white" size="18px" color="black" />
          </button>
          <div class="mb-3">
            <div class="flex justify-between">
              <label :for="'item-' + index" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Item {{ index + 1 }}</label>
              <div class="flex -space-x-3 rtl:space-x-reverse mb-2">
                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <button class="flex items-center justify-center w-6 h-6 bg-white border border-dashed border-blue-600 rounded-full dark:bg-gray-600">
                  <Icon name="heroicons:plus-16-solid" class="text-blue-700" color="black" />
                </button>
              </div>
            </div>
            <input type="text" v-model="item.name" @input="saveItems" :id="'item-' + index" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Item" required />
          </div>
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center gap-x-4 me-4">
              <input type="number" v-model="item.quantity" @input="saveItems" class="bg-white text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
              <span class="text-sm dark:text-white">X</span>
              <span class="text-sm dark:text-white">IDR</span>
            </div>
            <input type="number" v-model="item.price" @input="saveItems" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div>
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between gap-x-4 me-4">
              <span class="text-sm font-semibold dark:text-white">Total</span>
              <span class="text-sm dark:text-white">IDR</span>
            </div>
            <input type="number" :value="item.quantity * item.price" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" readonly />
          </div>
        </div>

        <button @click="addItem" type="button" class="text-white w-full bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Add New Item
        </button>
      </div>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <div class="text-center font-bold text-3xl pb-5">
          <span class="dark:text-white">IDR {{ total }}</span>
        </div>
        <div class="mb-3 grid grid-cols-2">
          <div class="flex items-center justify-between me-4">
            <span class="text-sm font-semibold dark:text-white">Sub Total</span>
            <span class="text-sm dark:text-white">IDR</span>
          </div>
          <span class="text-sm font-semibold text-right py-3 dark:text-white">{{ subTotal }}</span>
        </div>
        <div class="mb-3 grid grid-cols-2">
          <div class="flex items-center justify-between me-4">
            <span class="text-sm font-semibold dark:text-white">Discount</span>
            <span class="text-sm dark:text-white">IDR</span>
          </div>
          <input type="number" v-model="discount" @input="saveItems" id="discount" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
        </div>
        <div class="mb-3 grid grid-cols-2">
          <div class="flex items-center justify-between me-4">
            <span class="text-sm font-semibold dark:text-white">Tax</span>
            <span class="text-sm dark:text-white">IDR</span>
          </div>
          <input type="number" v-model="tax" @input="saveItems" id="tax" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
        </div>
        <div class="font-semibold pt-5 pb-3 flex justify-between items-center">
          <span class="dark:text-white">Other</span>
          <button
            type="button"
            @click="addAdjustment"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <Icon name="heroicons:plus" size="14px" class="mt-1" color="black" />
          </button>
        </div>
        <div v-for="(adjustment, index) in adjustments" :key="index" class="mb-3 flex items-center">
          <div class="flex items-center">
            <span class="text-sm dark:text-white me-2">IDR</span>
            <input
              type="number"
              v-model="adjustment.amount"
              class="me-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
            />
          </div>
          <div class="flex items-center">
            <span class="text-sm dark:text-white me-2">Note</span>
            <input
              type="text"
              v-model="adjustment.note"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Optional Note"
            />
          </div>
          <div>
            <button
              type="button"
              @click="removeAdjustment(index)"
              class="ms-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Preview</button>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

const billName = ref('');
const storeName = ref('');
const discount = ref(0);
const tax = ref(0);
const adjustments = reactive([]);
const items = reactive([]); 

// Now you can safely use adjustments and items
const loadItems = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = localStorage.getItem('billData');
    if (data) {
      const parsedData = JSON.parse(data);
      billName.value = parsedData.name;
      storeName.value = parsedData.storeName;
      discount.value = parsedData.discount;
      tax.value = parsedData.tax;
      
      // Push the adjustments data into the reactive array
      adjustments.push(...parsedData.adjustments || []);
      
      // Return the items with default values if they are missing
      return parsedData.items.map(item => ({
        ...item,
        quantity: item.quantity || 0,
        price: item.price || 0,
      }));
    }
  }
  return [{ name: '', quantity: 0, price: 0 }];
};

// Load items on mounted lifecycle hook
onMounted(() => {
  const loadedItems = loadItems();
  items.push(...loadedItems);
});

// Computed properties for subtotal and total
const subTotal = computed(() => {
  return items.reduce((acc, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    return acc + (quantity * price);
  }, 0);
});

const total = computed(() => {
  const subTotalValue = subTotal.value;
  const discountValue = Number(discount.value) || 0;
  const taxValue = Number(tax.value) || 0;
  const adjustmentTotal = adjustments.reduce((acc, adj) => acc + (Number(adj.amount) || 0), 0);
  return subTotalValue - discountValue + taxValue + adjustmentTotal;
});

// Methods to modify the items and adjustments
const addItem = () => {
  items.push({ name: '', quantity: 0, price: 0 });
  saveItems();
};

const removeItem = (index) => {
  items.splice(index, 1);
  saveItems();
};

const addAdjustment = () => {
  adjustments.push({ type: 'addition', amount: 0, note: '' });
  saveItems();
};

const removeAdjustment = (index) => {
  adjustments.splice(index, 1);
  saveItems();
};

// Save items to localStorage
const saveItems = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = {
      name: billName.value,
      storeName: storeName.value,
      discount: discount.value,
      tax: tax.value,
      adjustments: adjustments,
      items: items,
    };
    localStorage.setItem('billData', JSON.stringify(data));
  }
};
</script>
