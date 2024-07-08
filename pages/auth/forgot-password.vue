<template>
  
  <div>
    <div class="mb-10">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
    </div>
    <div class="my-10">
      <h1 class="text-3xl font-bold mb-2 dark:text-white">Forgot Password ?</h1>
      <p class="text-gray-400 text-md dark:text-gray-400">Enter your email to reset the password</p>
    </div>
    <form>
        <div class="my-6">
          <div class="mb-3">
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
              <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
          </div> 
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
      </form>
  </div>

</template>