<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
        <h1 class="text-md font-semibold dark:text-white">Profile</h1>
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:question-mark-circle" size="24px" color="black" />
      </button>
    </div>

    <div class="flex justify-center relative">
      <img class="w-28 h-28 rounded absolute" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Default avatar">
    </div>
    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700 mt-20">
        <div class="p-5 mt-20">
          <div class="mb-3">
            <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
          </div> 
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
          </div> 
          <div class="mb-3">
            <label for="phone" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone</label>
            <input type="number" id="phone" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
          </div> 
          <div class="flex justify-end">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
        </div>
    </div>

    <div class="mb-3 block bg-white border border-gray-100 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <div class="mb-3">
            <label for="old-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Old Password</label>
            <input type="password" id="old-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old Password" required />
          </div> 
          <div class="mb-3">
            <label for="new-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">New Password</label>
            <input type="password" id="new-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
          </div> 
          <div class="mb-3">
            <label for="repeat-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Repeat Password</label>
            <input type="password" id="repeat-password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
          </div> 
          <div class="flex justify-end">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
        </div>
    </div>
    
  </div>
</template>