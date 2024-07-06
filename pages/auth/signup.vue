<template>
  <div>
    <div class="mb-10">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me- dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="heroicons:arrow-left-16-solid" size="24px" color="black" />
      </button>
    </div>
    <div class="my-10">
      <h1 class="text-3xl font-bold mb-3">Create an account</h1>
      <p class="text-gray-400 text-md">Welcome! Please enter your details</p>
    </div>
    <form>
      <div class="my-6">
        <div class="mb-3">
          <label for="name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
        </div> 
        <div class="mb-3">
          <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
        </div> 
        <div class="mb-3">
          <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div class="flex items-start mb-3">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
      <div class="flex items-center justify-center w-full my-4">
        <hr class="border-gray-300 flex-grow">
        <span class="mx-2 text-gray-400 text-xs text-gray-500">Or sign in with</span>
        <hr class="border-gray-300 flex-grow">
      </div>
      <button type="button" class="flex items-center justify-center text-black w-full bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Icon name="bi:google" color="black" />
        <span class="ml-2">Google</span>
      </button>
    </form>
    <div class="mt-10 text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">Already have an account? <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Sign In</a></p>
    </div>
  </div>
</template>