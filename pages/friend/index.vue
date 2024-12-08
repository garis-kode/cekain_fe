<template>
  <div>
    <navigation :title="'Friend List'" />
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />

    <div class="mb-6 flex">
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
      <div
        v-for="n in 5"
        :key="n"
        class="mb-3 block bg-gray-200 animate-pulse border border-gray-200 rounded-xl dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <div class="w-12 h-12 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
              <div class="ms-3">
                <div class="w-32 h-4 bg-gray-300 rounded-md dark:bg-gray-600 mb-2"></div>
                <div class="w-24 h-3 bg-gray-300 rounded-md dark:bg-gray-600"></div>
              </div>
            </div>
            <div class="flex gap-1">
              <div class="w-10 h-8 bg-gray-300 rounded-md dark:bg-gray-600"></div>
              <div class="w-10 h-8 bg-gray-300 rounded-md dark:bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="scroll-container"
      @scroll="onScroll"
      class="overflow-y-auto max-h-screen"
      v-else
    >
      <div
        v-for="friend in friends"
        :key="friend.id"
        class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img
                class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800"
                :src="`https://api.dicebear.com/9.x/lorelei/jpg?seed=${friend.name}`"
                alt="Friend Avatar"
              />
              <div class="ms-3">
                <h5
                  class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ friend.name }}
                </h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">
                  {{ friend.phoneNumber || '-' }}
                </p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button
                  @click="openEditModal(friend.id)"
                  type="button"
                  class="me-2 text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text
                    white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <Icon
                    name="heroicons:pencil-square"
                    size="14px"
                    class="mt-1"
                    color="black"
                  />
                </button>
                <button
                  @click="openDeleteModal(friend)"
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <Icon
                    name="heroicons:trash"
                    size="14px"
                    class="mt-1"
                    color="black"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLoadingMore" class="text-center py-4">
        <p>Loading...</p>
      </div>
    </div>

    <DeleteModal
      :isOpen="isDeleteModalOpen"
      :onConfirm="deleteFriend"
      :onCancel="closeDeleteModal"
    />

    <FriendModal
      :isOpen="showModal"
      :isEdit="isEdit"
      :formData="formData"
      :validationSchema="schema"
      :isLoading="isLoading"
      :onSubmit="submitForm"
      :onClose="closeModal"
    />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});
import { ref, reactive, computed, onMounted } from 'vue';
import * as yup from 'yup';
import DeleteModal from '~/components/DeleteModal.vue';
import FriendModal from '~/components/FriendModal.vue';
import ErrorToast from '~/components/ErrorToast.vue';
import SuccessToast from '~/components/SuccessToast.vue';
import { useFriendAPI } from '~/api/friend';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Cekain - Friend List'
});

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').nullable(),
  phone: yup.string().nullable(),
});

const friends = ref([]);
const search = ref('');
const showModal = ref(false);
const isEdit = ref(false);
const formData = reactive({ id: null, name: '', email: '', phoneNumber: '' });
const isLoading = ref(false);
const skeletonLoading = ref(true);
const isDeleteModalOpen = ref(false);
const friendToDelete = ref(null);
const error = ref(null);
const success = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const isLoadingMore = ref(false);

const { fetchFriendsAPI, fetchFriendDetailsAPI, saveFriendAPI, deleteFriendAPI } = useFriendAPI();

const resetForm = () => {
  Object.assign(formData, { id: null, name: '', email: '', phoneNumber: '' });
};

const closeModal = () => {
  resetForm();
  showModal.value = false;
};

const openAddModal = () => {
  resetForm();
  isEdit.value = false;
  showModal.value = true;
};

const openEditModal = async (id) => {
  try {
    isEdit.value = true;
    const response = await fetchFriendDetailsAPI(id);
    if (response.success) {
      Object.assign(formData, response.data);
      showModal.value = true;
    }
  } catch (err) {
    error.value = err.data?.message || 'Failed to fetch friend details.';
  }
};

const openDeleteModal = (friend) => {
  friendToDelete.value = friend;
  isDeleteModalOpen.value = true;
};

const closeDeleteModal = () => {
  friendToDelete.value = null;
  isDeleteModalOpen.value = false;
};

// Fetch Friends
const fetchFriends = async (query = '', page = 1) => {
  try {
    skeletonLoading.value = page === 1;
    const response = await fetchFriendsAPI(query, page);
    if (response.success) {
      friends.value = page === 1 ? response.data : [...friends.value, ...response.data];
      totalPages.value = response.meta.pagination.totalPages;
    }
  } catch (err) {
    error.value = err.data?.message || 'An unexpected error occurred.';
  } finally {
    skeletonLoading.value = false;
    isLoadingMore.value = false;
  }
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
      closeModal();
    }
  } catch (err) {
    error.value = err.data?.message || 'An error occurred.';
  } finally {
    isLoading.value = false;
  }
};

const deleteFriend = async () => {
  if (!friendToDelete.value) return;

  try {
    isLoading.value = true;
    const response = await deleteFriendAPI(friendToDelete.value.id);
    if (response.success) {
      success.value = 'Friend deleted successfully!';
      search.value = '';
      currentPage.value = 1;
      await fetchFriends();
    }
  } catch (err) {
    error.value = err.data?.message || 'An error occurred.';
  } finally {
    isLoading.value = false;
    closeDeleteModal();
  }
};

const searchFriends = () => {
  currentPage.value = 1;
  fetchFriends(search.value);
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

onMounted(() => fetchFriends());
</script>

