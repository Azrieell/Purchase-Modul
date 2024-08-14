<template>
  <!-- Sidebar -->
  <div id="hs-offcanvas-example"
    class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700:bg-neutral-500 dark:bg-white"
    role="dialog" tabindex="-1" aria-label="Sidebar">
    
    <div class="px-6">
      <a class="flex-none py-10 px-10 font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-black"
        href="#" aria-label="Brand">Purchase</a>
    </div>
    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-1 px-9 py-6 mt-10">
      <ul class="flex flex-col flex-1 space-y-1.5">
        <li>
          <router-link to="/admin/dashboard" exact-active-class="bg-blue-500 text-white rounded-lg h-10 mb-5 mt-10"
            active-class="bg-blue-300 text-white rounded-lg h-10 mb-5 mt-10">
            <a class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-bold rounded-lg dark:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-house-fill" viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
              Dashboard
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/purchase" exact-active-class="bg-blue-500 text-white rounded-lg h-10 mb-5 mt-10"
            active-class="bg-blue-300 text-white rounded-lg h-10 mb-5 mt-10">
            <a
              class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-bold text-gray-700 rounded-lg hover:bg-gray-500 dark:text-black dark:hover:text-cyan-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill"
                viewBox="0 0 16 16">
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>
              Purchase
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/account" exact-active-class="bg-blue-500 text-white rounded-lg h-10 mb-5 mt-10"
            active-class="bg-blue-300 text-white rounded-lg h-10 mb-5 mt-10">
            <a
              class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-bold text-gray-700 rounded-lg hover:bg-gray-500 dark:text-black dark:hover:text-cyan-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              Account
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/settings" exact-active-class="bg-blue-500 text-white rounded-lg h-10 mb-5 mt-10"
            active-class="bg-blue-300 text-white rounded-lg h-10 mb-5 mt-10">
            <a
              class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-bold text-gray-700 rounded-lg hover:bg-gray-500 dark:text-black dark:hover:text-cyan-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill"
                viewBox="0 0 16 16">
                <path
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              Settings
            </a>
          </router-link>
        </li>

        <li class="mt-auto">
          <a class="flex items-center gap-x-3.5 py-2 mt-52 px-2.5 text-sm font-bold text-gray-700 rounded-lg hover:bg-gray-500 dark:text-black dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-door-closed-fill" viewBox="0 0 16 16">
              <path
                d="M9.5 1a.5.5 0 0 1 .5.5V2H6V1.5a.5.5 0 0 1 .5-.5h3zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2zm3 2v1h4V4H6z" />
            </svg>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- End Sidebar -->

  <!-- Navb -->
  <div
    class="fixed top-0 right-0 mt-4 mr-10 flex items-center gap-4 z-50 bg-white shadow-lg p-4 rounded-lg w-full max-w-screen-lg">
    <!-- Profile Section -->
    <div class="flex items-start gap-6 flex-1">
      <!-- Profile Icon and Name -->
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
          class="bi bi-person-fill mt-1" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <div class="flex flex-col">
          <span class="font-semibold text-base">Azriel</span>
          <span class="text-gray-600 text-sm">Admin</span>
        </div>

        <div class="flex items-center gap-2 bg-gray-100 p-3 rounded-xl ml-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
            <path
              d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
          </svg>
          <span class="font-bold">17 Feb</span>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="flex items-center gap-2 mx-4">
      <div class="relative w-80">
        <input type="text" placeholder="Search..."
          class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
        <!-- Search Icon -->
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
        </svg>
      </div>
    </div>


    <!-- Bell Icon -->
    <div class="bg-blue-500 rounded-md p-2 flex items-center justify-center">
      <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 16.08V12a6 6 0 0 0-12 0v4.08L4.5 19H19.5L18 16.08zM12 3a4 4 0 0 1 4 4v1H8V7a4 4 0 0 1 4-4z" />
      </svg>
    </div>
  </div>



</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
  }
</style>

<script setup>
  import {
    ref
  } from 'vue';

  const isSidebarOpen = ref(false);

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
</script>