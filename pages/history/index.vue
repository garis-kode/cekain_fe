<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
        <h1 class="text-md font-semibold">Split History</h1>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
      </button>
    </div>
    <div class="mb-6 flex">
      <input type="text" id="search" class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search">
    </div>
    <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <span class="flex items-center justify-center w-12 h-12 text-xs font-medium text-gray-600 bg-blue-950 rounded-lg">
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
              <span class="flex items-center justify-center w-12 h-12 text-xs font-medium text-gray-600 bg-blue-950 rounded-lg">
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
</template>