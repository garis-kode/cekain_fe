<template>
  
  <div>
    <div class="mx-[-24px] mt-[-24px] bg-blue-1000 p-5 rounded-b-[50px] bg-center bg-no-repeat bg-[url('/assets/img/shape/hero.svg')] bg-cover">
      <div class="flex items-center	justify-between ">
        <span class="font-semibold text-md dark:text-blue-500">logo</span>
        <div class="flex items-center	 gap-x-4">
          <Icon name="heroicons:bell-alert" size="22px" class="text-sm text-gray-400 dark:text-gray-400" color="black" />
          
          <div class="relative inline-block text-left">
            <div>
              <button @focus="showDropdown" @blur="hideDropdown" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
            </div>
            <!-- Dropdown menu -->
            <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 z-10" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="z-10 bg-white divide-y divide-gray-100 rounded-xl w-44 dark:bg-gray-700 dark:divide-gray-600 w-[280px]">
                <div class="px-6 py-5 text-sm text-gray-900 dark:text-white">
                  <div class="flex">
                    <img class="w-10 h-10 rounded" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Default avatar">
                    <div class="ms-2">
                      <div class="font-semibold truncate">Bonnie Green</div>
                      <div>name@flowbite.com</div>
                    </div>
                  </div>
                </div>
                <ul class="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Setting</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Privacy Policy</a>
                  </li>
                </ul>
                <div class="py-2 px-2">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="text-center my-10">
        <span class="text-sm text-gray-400 dark:text-gray-400">7 Friend are owing you</span>
        <h1 class="font-bold text-4xl">IDR. 700,000</h1>
        <div class="mt-10 flex justify-center gap-x-2">
          <button type="button" class="flex gap-x-1 px-4 py-2.5 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Icon name="mingcute:bill-2-line" size="20px" color="black" />
            Add Manually
          </button>
          <button type="button" class="flex gap-x-1 px-7 py-2.5 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <Icon name="mingcute:scan-fill" size="18px" color="black" />
            Quick Scan
          </button>
        </div>
      </div>
    </div>
    <div class="mt-5 flex justify-between">
      <span class="font-semibold text-md dark:text-blue-500">Friend List</span>
      <a href="#" class="text-sm text-gray-400 dark:text-gray-400 hover:text-blue-700">See More</a>
    </div>
    <div class="mt-5">
      <Swiper
        :modules="[SwiperAutoplay, SwiperFreeMode]"
        :slides-per-view="5"
        :loop="true"
        :effect="'free-mode'"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">Fajar Rivaldi Chan</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">John Doe</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">John Doe</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">John Doe</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">John Doe</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600">John Doe</figure>
          </div>
        </SwiperSlide>
        <SwiperSlide class="pt-1 ps-1">
          <div class="pe-2">
            <img class="w-20 h-18 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
            <figure class="text-sm mt-3 text-center text-xs text-gray-600 ">John Doe</figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="mt-5 flex justify-between">
      <span class="font-semibold text-md dark:text-blue-500">Split History</span>
      <a href="#" class="text-sm text-gray-400 dark:text-gray-400 hover:text-blue-700">See More</a>
    </div>
    <div class="mt-6">
      
      <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <span class="flex items-center justify-center w-12 h-12 text-xs font-medium bg-blue-950 rounded-lg">
                <img src="/assets/img/icon/bill.png" alt="">
              </span>
              <div class="ms-3">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ngopi Time</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">June 19, 2024 10:35 PM</p>
              </div>
            </div>
            <div class="flex -space-x-4 rtl:space-x-reverse">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-400 bg-gray-100 border-2 border-white rounded-full" href="#">+99</span>
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          <div class="flex justify-between">
            <span class="text-sm font-medium text-gray-400"><span class="font-semibold text-black">Total:</span> IDR. 78,000</span>
            <span class="bg-blue-950 text-blue-900 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">45% Paid</span>
          </div>
        </div>
        
        <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-800">
          <div class="bg-blue-900 h-1 rounded-full" style="width: 45%"></div>
        </div>

      </a>

      <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <span class="flex items-center justify-center w-12 h-12 text-xs font-medium bg-blue-950 rounded-lg">
                <img src="/assets/img/icon/bill.png" alt="">
              </span>
              <div class="ms-3">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ngopi Time</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">June 19, 2024 10:35 PM</p>
              </div>
            </div>
            <div class="flex -space-x-4 rtl:space-x-reverse">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-400 bg-gray-100 border-2 border-white rounded-full" href="#">+99</span>
              </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          <div class="flex justify-between">
            <span class="text-sm font-medium text-gray-400"><span class="font-semibold text-black">Total:</span> IDR. 78,000</span>
            <span class="bg-blue-950 text-blue-900 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">45% Paid</span>
          </div>
        </div>
        
        <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-800">
          <div class="bg-blue-900 h-1 rounded-full" style="width: 45%"></div>
        </div>

      </a>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    showDropdown() {
      this.isOpen = true;
    },
    hideDropdown() {
      this.isOpen = false;
    },
  },
};
</script>