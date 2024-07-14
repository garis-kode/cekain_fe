<template>
  <div class="flex flex-col min-h-full">
    <navigation :title="'Bill Nov 27, 2023 8:26:02 AM'"/>
    <div class="mb-3">
      <h1 class="text-xl font-bold text-blue-700 dark:text-blue-700">Starbuck Marelan</h1>
      <div class="flex flex-col mt-3 mb-3">
        <span class="text-xs text-gray-400 dark:text-gray-400">Transaction Date:</span>
        <span class="font-semibold text-xs dark:text-white">06/22/2024 17:20</span>
      </div>
      <h1 class="text-xl font-bold dark:text-white">IDR 20.000</h1>
    </div>
    <div class="mb-6 flex items-center justify-between gap-x-4">
      <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-400">
          <div class="bg-blue-900 h-1 rounded-full" style="width: 45%"></div>
      </div>
      <span class="md:w-15 w-24 bg-blue-950 text-center text-blue-900 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-950">45% Paid</span>
    </div>

    
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <span class="text-xs font-semibold dark:text-white">Ariana Grande’s Total</span>
                <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">IDR 20.000</h5>
              </div>
            </div>
            <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          
          <div id="accordion-collapse-heading-1">
            <button type="button" class="flex items-center justify-between w-full" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span class="text-xs font-semibold">Item Details</span>
              <Icon name="heroicons:arrow-down-circle" size="18px" color="black" />
            </button>
          </div>

          <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1" class="hidden mt-3">
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
      </div>

      
      <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <span class="text-xs font-semibold dark:text-white">Ariana Grande’s Total</span>
                <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">IDR 20.000</h5>
              </div>
            </div>
            <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
          </div>
          <hr class="border-1 my-4 border-dashed">
          
          <div id="accordion-collapse-heading-1">
            <button type="button" class="flex items-center justify-between w-full" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
              <span class="text-xs font-semibold">Item Details</span>
              <Icon name="heroicons:arrow-down-circle" size="18px" color="black" />
            </button>
          </div>

          <div id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2" class="hidden mt-3">
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
      </div>

    <div>
  </div>

    <div class="mt-auto flex gap-x-4">
      <button type="button" class="flex items-center justify-center gap-x-2 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <Icon name="heroicons:arrow-down-tray-16-solid" size="18px" color="black" />
        Download
      </button>
      <button type="button" class="flex items-center justify-center gap-x-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Icon name="heroicons:clipboard-document-list" size="18px" color="black" />
        Copy Link
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    import('flowbite').then(({ Accordion }) => {
      const accordionItems = document.querySelectorAll('[data-accordion-target]')
      accordionItems.forEach(item => {
        item.addEventListener('click', () => {
          const target = document.querySelector(item.getAttribute('data-accordion-target'))
          if (target.classList.contains('hidden')) {
            target.classList.remove('hidden')
          } else {
            target.classList.add('hidden')
          }
        })
      })
    })
  }
}
</script>
