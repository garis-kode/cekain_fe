<template>
  <div>
    <navigation :title="'Split The Bill'"/>
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />
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
          <Swiper :modules="[SwiperAutoplay, SwiperFreeMode]" :slides-per-view="5" :loop="false" :autoplay="false" :effect="'slide'">
            <SwiperSlide v-for="(friend) in selectedFriends" :key="friend.id" class="pt-1 ps-1">
              <div class="pe-2">
                <button 
                  @click="removeFriend(friend)"
                  class="origin-top-right absolute right-0 me-2 z-10 flex items-center justify-center w-4 h-4 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-full">
                  <Icon name="heroicons:minus-16-solid" class="text-white" size="18px" color="black" />
                </button>
                  <Avatar :friendName="`${friend.name || 'You'}`" customClass="text-3xl p-2 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" :size="'3.8rem'" />
                <figure class="text-sm mt-3 text-center text-xs text-gray-600 dark:text-gray-400">
                  {{ friend.name || 'You'}}
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide @click="inviteFriendModal = true" class="pt-1 ps-1">
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
                <span v-for="(participant, pIndex) in item.participants" :key="pIndex" class="border rounded-full">
                  <Avatar 
                    :friendName="`${participant.name || 'You'}`" 
                    customClass="text-xs border-2 border-white rounded-full dark:border-gray-800" 
                    :size="'1.5rem'" 
                  />
                </span>
                <button @click="openFriendSplitModal(item)"  class="flex items-center justify-center w-6 h-6 bg-white border border-dashed border-blue-600 rounded-full dark:bg-gray-600">
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
          <div v-if="isQuantityMismatch(item)" class="text-xs text-red-500 flex items-center">
            <span class="flex items-center justify-center me-2 w-4 h-4 bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded-full">
             <span class="text-white font-bold">!</span>
            </span>
            Total quantity of participants does not match the item quantity.
          </div>
          <div v-if="item.participants && item.participants.length > 0" class="mt-4">
            <h4 class="text-sm font-semibold dark:text-white mb-2">Participants</h4>
            <ul class="list-none p-0">
              <li v-for="(participant, pIndex) in item.participants" :key="pIndex" class="flex justify-between items-center border-b pb-2">
                <span class="text-sm font-light dark:text-white">{{ participant.name || 'You' }} ({{ participant.quantity }})</span>
                <div>
                  <button @click="removeParticipant(item, pIndex)" class="text-red-500 ml-2">
                    <Icon name="heroicons:trash" size="16px" class="mt-1" color="black" />
                  </button>
                </div>
              </li>
            </ul>
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
          <div class="flex-grow mt-3">
            <div class="flex items-center mb-3">
              <span class="text-sm dark:text-white me-2">Type</span>
              <select
                v-model="adjustment.type"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
                @change="saveItems"
              >
                <option value="deduction">deduction</option>
                <option value="addition">addition</option>
              </select>
            </div>
            <div class="flex items-center mb-3">
              <span class="text-sm dark:text-white me-5">IDR</span>
              <input
                type="number"
                v-model="adjustment.amount"
                @input="saveItems"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
              />
            </div>
            <div class="flex items-center mb-3">
              <span class="text-sm dark:text-white me-3">Note</span>
              <textarea
                type="text"
                v-model="adjustment.note"
                @input="saveItems"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Optional Note"
              >\
              </textarea>
            </div>
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

    <button v-if="!isPreviewDisabled" type="button"
      :disabled="isLoadingConfirm"
      v-on:click="updateBill"
      class="w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <span v-if="isLoadingConfirm" role="status" class="flex items-center">
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
      <span>{{ isLoadingConfirm ? 'Loading...' : 'Confirm' }}</span>
    </button>
    <button 
      type="button" 
      class="text-white bg-blue-1000 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      v-if="isPreviewDisabled"
      disabled
    >
      Confirm
    </button>

    <div v-if="inviteFriendModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <div class="p-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Split With
            </h3>
            <button @click="closeModal" class="flex align-middle text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2">
              <Icon name="heroicons:x-mark" size="20px" />
            </button>
          </div>
          
          <div class="mb-6 flex items-center">
            <input
              type="text"
              id="search"
              v-model="search"
              @input="searchFriends"
              class="me-3 block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
            <button
              @click="openAddModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Icon name="heroicons:plus" size="14px" class="mt-1" color="black" />
            </button>
          </div>
          
          <div v-if="skeletonLoading">
            <div v-for="i in 5" :key="i" class="flex justify-between mb-2 border border-dashed p-3 animate-pulse">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div class="ml-3 w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>

          <div v-else
            ref="friendsListContainer"
            @scroll="onScroll"
            class="overflow-auto max-h-64"
          >
            <div v-for="friend in friends" :key="friend.id" class="py-1">
              <div class="flex justify-between items-center ">
                <div class="flex items-center">
                  <Avatar
                    :friendName="`${friend.name || 'You'}`" 
                    customClass="text-xs border-2 border-white dark:border-gray-800" 
                    :size="'2rem'" 
                  />
                <span class="text-xs ps-3 font-semibold dark:text-white">{{ friend.name || 'You'}}</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  v-model="friend.isChecked"
                  class="w-4 h-4 text-blue-600 me-2 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  @change="updateCheckedStatus(friend)"
                />
              </div>
              </div>
              <div class="border-b border-dashed border-gray-200 dark:border-gray-700 py-1"></div>
            </div>
          </div>
          <div class="flex justify-between mt-4" v-if="!skeletonLoading">
            <button @click="closeModal" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save
            </button>
          </div>

          <div v-if="isLoadingMore" class="text-center py-3 text-gray-500">
            Loading more...
          </div>
        </div>
      </div>
    </div>

    <div v-if="friendSplitModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <div class="p-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Item: {{ selectedItem.name }}
            </h3>
            <button @click="closeModal" class="flex align-middle text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2">
              <Icon name="heroicons:x-mark" size="20px" />
            </button>
          </div>

          <div v-for="(friend, index) in selectedFriends" :key="index" class="py-3">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <Avatar
                    :friendName="`${friend.name || 'You'}`" 
                    customClass="text-xs border-2 border-white dark:border-gray-800" 
                    :size="'2rem'" 
                  />
                <span class="text-sm ps-3 font-semibold dark:text-white">{{ friend.name || 'You' }}</span>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  @click="decreaseQuantity(friend)"
                  class="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Icon name="heroicons:minus" size="14px" class="mt-1" color="black" />
                </button>
                <input
                  readonly
                  v-model="friend.quantity"
                  :placeholder="'Quantity for ' + friend.name"
                  class="w-10 h-8 border border-gray-300 rounded-md mx-1 text-center"
                  min="0"
                />
                <button
                  type="button"
                  @click="increaseQuantity(friend)"
                  class="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Icon name="heroicons:plus" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
            <div class="border-b border-dashed border-gray-200 dark:border-gray-700 py-1"></div>

          </div>

          <div class="flex justify-between mt-4">
            <button @click="addOrUpdateParticipants" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add/Update Participants
            </button>
          </div>
        </div>
      </div>
    </div>

    <FriendModal
      :isOpen="showModalAdd"
      :isEdit="isEdit"
      :formData="formData"
      :validationSchema="schema"
      :isLoading="isLoading"
      :onSubmit="submitForm"
      :onClose="closeModalAdd"
    />

  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
});
import { ref, reactive, computed, onMounted, watch } from 'vue';
import * as yup from 'yup';
import { useFriendAPI } from '~/api/friend';
import { useBillAPI } from "~/api/bill";
import FriendModal from '~/components/FriendModal.vue';
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import Avatar from '~/components/Avatar.vue';

// State variables
const billName = ref('');
const storeName = ref('');
const discount = ref(0);
const tax = ref(0);
const adjustments = reactive([]);
const items = reactive([]);

const inviteFriendModal = ref(false);
const search = ref('');
const skeletonLoading = ref(true);
const isLoadingMore = ref(false);
const friends = ref([]);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const selectedItem = ref(null);
const selectedFriends = ref([]);
const friendSplitModal = ref(false);
const isLoadingConfirm = ref(false);
const showModal = ref(false);
const isEdit = ref(false);
const formData = reactive({ id: null, name: '', email: '', phoneNumber: '' });
const isLoading = ref(false);
const success = ref(null);
const router = useRouter();
const showModalAdd = ref(false);

const { fetchFriendsAPI, saveFriendAPI, } = useFriendAPI();
const { updateBillsAPI } = useBillAPI();
const route = useRoute();
const billId = route.params.id;

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').nullable(),
  phone: yup.string().nullable(),
});


const resetForm = () => {
  Object.assign(formData, { id: null, name: '', email: '', phoneNumber: '' });
};

const openAddModal = () => {
  resetForm();
  isEdit.value = false;
  showModalAdd.value = true;
};

const closeModalAdd = () => {
  resetForm();
  showModalAdd.value = false;
};

const submitForm = async () => {
  try {
    isLoading.value = true;
    const response = await saveFriendAPI(formData, isEdit.value);
    if (response.success) {
      success.value = isEdit.value
        ? 'Friend updated successfully!'
        : 'Friend added successfully!';
      search.value = '';
      currentPage.value = 1;
      await fetchFriends();
      closeModalAdd();
    }
  } catch (err) {
    error.value = err.data?.message || 'An error occurred.';
  } finally {
    isLoading.value = false;
  }
};

const updateBill = async () => {
  isLoadingConfirm.value = true;
  try {
    if (process.client) {
      const data = localStorage.getItem('billData');
      const response = await updateBillsAPI(billId, data);
      if (response.success) {
        localStorage.removeItem('selectedFriends');
        localStorage.removeItem('billData');
        await router.push(`/split/${response.data.id}/preview`);
      }
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    isLoadingConfirm.value = false;
  }
};

const decreaseQuantity = (friend) => {
  if (friend.quantity > 0) {
    friend.quantity -= 1;
  }
};

const increaseQuantity = (friend) => {
  friend.quantity += 1;
};

const removeParticipant = (item, pIndex) => {
  item.participants.splice(pIndex, 1);  
  saveItems();
};

const isPreviewDisabled = computed(() => {
  return items.some(item => {
    if (!item.participants || item.participants.length === 0) {
      return true;
    }
    
    const totalParticipantQuantity = item.participants.reduce((acc, participant) => acc + participant.quantity, 0);
    return totalParticipantQuantity !== item.quantity;
  });
});

const isQuantityMismatch = (item) => {
  const totalParticipantsQuantity = item.participants ? item.participants.reduce((sum, participant) => sum + participant.quantity, 0) : 0;
  return totalParticipantsQuantity !== item.quantity;
};

const removeFriend = (friend) => {
  selectedFriends.value = selectedFriends.value.filter(f => f.id !== friend.id);
  items.forEach(item => {
    if (item.participants && Array.isArray(item.participants)) {
      item.participants = item.participants.filter(participant => participant.id !== friend.id);
    }
  });
  saveItems();

  // Update localStorage
  let savedFriends = JSON.parse(localStorage.getItem('selectedFriends')) || [];
  savedFriends = savedFriends.filter(f => f.id !== friend.id);
  localStorage.setItem('selectedFriends', JSON.stringify(savedFriends));
};

const openFriendSplitModal = (item) => {
  selectedItem.value = item;
  selectedFriends.value.forEach(friend => friend.quantity = 0);
  friendSplitModal.value = true;
};

const closeModal = () => {
  inviteFriendModal.value = false;
  friendSplitModal.value = false;
  loadSelectedFriends();
  resetForm();
  showModal.value = false;
};

const addOrUpdateParticipants = () => {
  const participants = selectedFriends.value
    .filter(friend => friend.quantity > 0)
    .map(friend => ({
      id: friend.id,
      name: friend.name,
      quantity: friend.quantity,
    }));

  if (participants.length > 0 && selectedItem.value) {
    if (!selectedItem.value.participants) {
      selectedItem.value.participants = [];
    }
    selectedItem.value.participants = updateParticipants(selectedItem.value.participants, participants);
    saveItems();
    closeModal();
  }
};

const updateParticipants = (existingParticipants, newParticipants) => {
  newParticipants.forEach(newParticipant => {
    const existingParticipantIndex = existingParticipants.findIndex(participant => participant.id === newParticipant.id);
    if (existingParticipantIndex !== -1) {
      existingParticipants[existingParticipantIndex].quantity = newParticipant.quantity;
    } else {
      existingParticipants.push(newParticipant);
    }
  });
  return existingParticipants;
};

const fetchFriends = async (query = '', page = 1) => {
  try {
    skeletonLoading.value = page === 1;
    isLoadingMore.value = false;

    const response = await fetchFriendsAPI(query, page, true);
    if (response.success) {
      friends.value = page === 1 ? response.data : [...friends.value, ...response.data];
      totalPages.value = response.meta.pagination.totalPages;
      loadSelectedFriends();
    }
  } catch (err) {
    console.error('Error fetching friends:', err);
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoading.value = false;
    isLoadingMore.value = false;
  }
};

const searchFriends = () => {
  currentPage.value = 1;
  fetchFriends(search.value, currentPage.value);
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
    fetchFriends(search.value, currentPage.value);
  }
};

// Local Storage Management
const loadItems = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = localStorage.getItem('billData');
    if (data) {
      const parsedData = JSON.parse(data);
      billName.value = parsedData.name;
      storeName.value = parsedData.storeName;
      discount.value = parsedData.discount;
      tax.value = parsedData.tax;
      
      adjustments.push(...parsedData.adjustments || []);
      
      return parsedData.items.map(item => ({
        ...item,
        quantity: item.quantity || 0,
        price: item.price || 0,
      }));
    }
  }
  return [{ name: '', quantity: 0, price: 0 }];
};

watch(inviteFriendModal, (newValue) => {
  if (newValue) {
    fetchFriends(search.value, currentPage.value);
  } else {
    friends.value = [];
  }
});

onMounted(() => {
  loadSelectedFriends();
  const loadedItems = loadItems();
  items.push(...loadedItems);
});

watch(search, (newSearch) => {
  if (newSearch === '') {
    fetchFriends('', 1);
  } else {
    searchFriends();
  }
});

const updateCheckedStatus = (friend) => {
  if (friend.isChecked) {
    saveFriendToLocalStorage(friend);
  } else {
    removeFriendFromLocalStorage(friend);
  }
};

const saveFriendToLocalStorage = (friend) => {
  let savedFriends = JSON.parse(localStorage.getItem('selectedFriends')) || [];
  if (!savedFriends.some(f => f.id === friend.id)) {
    savedFriends.push(friend);
  }
  localStorage.setItem('selectedFriends', JSON.stringify(savedFriends));
};

const removeFriendFromLocalStorage = (friend) => {
  let savedFriends = JSON.parse(localStorage.getItem('selectedFriends')) || [];
  savedFriends = savedFriends.filter(f => f.id !== friend.id);
  localStorage.setItem('selectedFriends', JSON.stringify(savedFriends));
};

const loadSelectedFriends = () => {
  const savedFriends = JSON.parse(localStorage.getItem('selectedFriends')) || [];
  selectedFriends.value = savedFriends;
  savedFriends.forEach(savedFriend => {
    const friend = friends.value.find(f => f.id === savedFriend.id);
    if (friend) {
      friend.isChecked = true;
    }
  });
};

// Computed properties
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
  
  const adjustmentTotal = adjustments.reduce((acc, adj) => {
    const amount = Number(adj.amount) || 0;
    if (adj.type === 'deduction') {
      return acc - amount;
    } else if (adj.type === 'addition') {
      return acc + amount;
    }
    return acc;
  }, 0);
  return subTotalValue - discountValue + taxValue + adjustmentTotal;
});

// Item and adjustment management
const addItem = () => {
  items.push({ name: '', quantity: 0, price: 0 });
  saveItems();
};

const removeItem = (index) => {
  items.splice(index, 1);
  saveItems();
};

const addAdjustment = () => {
  adjustments.push({ type: '', amount: 0, note: '' });
  saveItems();
};

const removeAdjustment = (index) => {
  adjustments.splice(index, 1);
  saveItems();
};

const saveItems = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = {
      name: billName.value,
      storeName: storeName.value,
      discount: discount.value,
      tax: tax.value,
      adjustments: adjustments,
      items: items.map(item => {
        if (item.name === selectedItem.value?.name) {
          return selectedItem.value;
        }
        return item;
      }),
    };
    localStorage.setItem('billData', JSON.stringify(data));
  }
};
</script>
