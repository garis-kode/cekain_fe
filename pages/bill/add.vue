<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
        <h1 class="text-md font-semibold">Split The Bill</h1>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
      </button>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <div class="mb-3">
            <label for="bill-name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Bill Name</label>
            <input type="text" id="bill-name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bill Name" required />
          </div> 
          <div class="mb-3">
            <label for="Store" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Store</label>
            <input type="text" id="Store" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Store" required />
          </div> 
        </div>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <div class="border dark:border-gray-700 rounded-xl border-dashed p-3 mb-3">
          <div class="mb-3">
            <label for="item-1" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Item 1</label>
            <input type="text" id="item-1" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Item" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center gap-x-4 me-4">
              <input type="number" id="ammount" class="bg-white text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
              <span class="text-sm">X</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="price" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between gap-x-4 me-4">
              <span class="text-sm font-semibold">Total</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="price" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
        </div>

        <div class="border dark:border-gray-700 rounded-xl border-dashed p-3 mb-3">
          <div class="mb-3">
            <label for="item-2" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Item 1</label>
            <input type="text" id="item-2" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Item" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center gap-x-4 me-4">
              <input type="number" id="ammount" class="bg-white text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
              <span class="text-sm">X</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="price" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between gap-x-4 me-4">
              <span class="text-sm font-semibold">Total</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="price" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Item</button>
      </div>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <div class="text-center font-bold text-3xl pb-5">
            <span>IDR 45,000</span>
          </div>
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between me-4">
              <span class="text-sm font-semibold">Sub Total</span>
              <span class="text-sm">IDR</span>
            </div>
            <span class="text-sm font-semibold text-right py-3">0</span>
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between me-4">
              <span class="text-sm font-semibold">Discount</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="discount" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between me-4">
              <span class="text-sm font-semibold">Tax</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="tax" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
          <div class="mb-3 grid grid-cols-2">
            <div class="flex items-center justify-between me-4">
              <span class="text-sm font-semibold">Others</span>
              <span class="text-sm">IDR</span>
            </div>
            <input type="number" id="tax" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </div> 
        </div>
    </div>
    
  </div>
</template>