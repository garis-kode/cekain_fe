<template>
  <div>
    <div class="mb-6 flex justify-between ">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
        <h1 class="text-md font-semibold">Friend List</h1>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
      </button>
    </div>
    <div class="mb-6 flex">
      <input type="text" id="search" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search">
      <button type="button" class="ms-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Icon name="heroicons:plus-16-solid" size="14px" class="mt-1" color="black" />
      </button>
    </div>
    <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </a>
    <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </a>
    <a href="#" class="mb-3 block bg-white border border-gray-100 rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="p-4">
          <div class="flex justify-between">
            <div class="flex align-middle">
              <img class="w-12 h-12 border-2 border-white rounded-lg dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
              <div class="ms-3">
                <h5 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">John Doe</h5>
                <p class="text-xs text-gray-400 dark:text-gray-400">08995611024559</p>
              </div>
            </div>
            <div class="flex gap-1">
              <div>
                <button type="button" class="text-gray-500 bg-gray-100 border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Icon name="heroicons:pencil-square" size="14px" class="mt-1" color="black" />
                </button>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <Icon name="heroicons:trash" size="14px" class="mt-1" color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </a>
    
  </div>
</template>