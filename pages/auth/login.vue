<template>
  
  <div>
    <div class="my-10">
      <h1 class="text-4xl font-bold mb-3">Login</h1>
      <p class="text-gray-400 text-md">Welcome back ! Please enter your detail </p>
    </div>
    <form>
        <div class="my-6">
          <div class="mb-3">
              <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
              <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
          </div> 
          <div class="mb-3">
              <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
              <input type="password" id="password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
          </div> 
          <div class="flex justify-end mb-3">
              <a href="#" class="text-blue-600 font-medium hover:underline dark:text-blue-500 text-sm">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        <div class="flex items-center justify-center w-full my-4">
            <hr class="border-gray-300 flex-grow">
            <span class="mx-2 text-gray-400 text-xs text-gray-500">Or log in with</span>
            <hr class="border-gray-300 flex-grow">
        </div>
        <button type="button" class="flex items-center justify-center text-black w-full bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <Icon name="bi:google" color="black" />
          <span class="ml-2">Google</span>
        </button>
      </form>
  </div>

</template>