<template>
  <div class="flex flex-col min-h-full">
    <navigation :title="'Bill Nov 27, 2023 8:26:02 AM'"/>
    <div class="mb-6">
      <h1 class="text-xl font-bold text-blue-700 dark:text-white">Starbuck Marelan</h1>
      <div class="flex flex-col mt-3 mb-3">
        <span class="text-xs text-gray-400 dark:text-gray-400">Transaction Date:</span>
        <span class="font-semibold text-xs">06/22/2024 17:20</span>
      </div>
      <h1 class="text-xl font-bold dark:text-white">IDR 20.000</h1>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex">
            <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="ms-3">
              <span class="text-xs font-semibold dark:text-white">Ariana Grande’s Total</span>
              <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">IDR 20.000</h5>
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <span>Sanger Panas </span>
            <span>x 2</span>
            <span>12,000</span>
          </div>
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <span>Sanger Panas </span>
            <span>x 2</span>
            <span>12,000</span>
          </div>
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-400 mb-3">
            <span>Sanger Panas </span>
            <span>x 2</span>
            <span>12,000</span>
          </div>
        </div>
    </div>

    <div class="mt-auto flex gap-x-4">
      <button type="button" class="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
      <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button>
    </div>
  </div>
</template>
