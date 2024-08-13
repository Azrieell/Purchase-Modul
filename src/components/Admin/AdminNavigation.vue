<template>
  <!-- Sidebar -->
  <div id="hs-offcanvas-example"
    class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-800"
    role="dialog" tabindex="-1" aria-label="Sidebar">
    <div class="px-6">
      <a class="flex-none py-10 px-10 font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href="#"
        aria-label="Brand">Purchase</a>
    </div>
    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-1 px-9 py-6">
      <ul class="flex flex-col flex-1 space-y-1.5">
        <li>
          <a class="flex items-center gap-x-3.5 py-2 mb-4 px-2.5 mt-10 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-500 neutral-900 dark:text-white dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill"
              viewBox="0 0 16 16">
              <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            Dashboard
          </a>
        </li>

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-500 neutral-900 dark:text-white dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill"
              viewBox="0 0 16 16">
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
            Purchase
          </a>
        </li>

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-500 neutral-900 dark:text-white dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill"
              viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            Account
          </a>
        </li>

        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 mb-4 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-500 neutral-900 dark:text-white dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill"
              viewBox="0 0 16 16">
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            Settings
          </a>
        </li>

        <!-- Ensure LogOut button is at the bottom -->
        <li class="mt-auto">
          <a class="flex items-center gap-x-3.5 py-2 mt-52 px-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-500 neutral-900 dark:text-white dark:hover:text-cyan-300"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-door-closed-fill" viewBox="0 0 16 16">
              <path
                d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            LogOut
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- End Sidebar -->

  <div class="fixed top-0 right-0 mt-4 mr-4 flex gap-4 z-50">
    <!-- Search Icon -->
    <div class="bg-neutral-700 rounded-md p-2 flex items-center justify-center">
      <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="6" />
        <line x1="16.5" x2="21" y1="16.5" y2="21" />
      </svg>
    </div>

    <!-- Human Icon -->
    <div class="bg-neutral-700 rounded-md p-2 flex items-center justify-center">
      <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5.5 20h13a5 5 0 0 0-13 0z" />
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