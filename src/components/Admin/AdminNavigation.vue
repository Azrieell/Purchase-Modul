<template>
  <div class="min-h-full">
    <header class="bg-white shadow-sm lg:static lg:overflow-y-visible" x-data="{ open: false }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div class="flex items-center">
              <a href="#">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&amp;shade=500"
                  alt="Your Company" />
              </a>
            </div>
          </div>

          <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div class="w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input id="search" name="search"
                    class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
                    placeholder="Search" type="search" />
                </div>
              </div>
            </div>
          </div>


          <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
            <button type="button" id="mobile-menu-button"
              class="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg id="mobile-menu-icon" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
                </path>
              </svg>
              <svg id="mobile-close-icon" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <a href="#"
              class="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                </path>
              </svg>
            </a>


            <div class="relative ml-5 flex-shrink-0">
              <div>
                <button type="button" id="user-menu-button"
                  class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt="" />
                </button>
              </div>

              <div id="user-menu"
                class="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <a href="#" class="block py-2 px-4 text-sm text-gray-700">Your Profile</a>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700">Settings</a>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700">Sign out</a>
              </div>
            </div>

            <a href="#"
              class="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              New Post
            </a>
          </div>
        </div>
      </div>

      <nav id="mobile-menu" class="hidden lg:hidden" aria-label="Global">
        <div class="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
          <a href="#"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Home</a>
          <a href="#"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Profile</a>
          <a href="#"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Settings</a>
          <a href="#"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Sign
            out</a>
        </div>
      </nav>
    </header>
  </div>

  <div class="py-10">
    <div class="mx-auto max-w-7xl sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div class="col-span-2">
        <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
          <div class="space-y-1 pb-8">
            <a href="#"
              class="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              aria-current="page">
              <svg class="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
                </path>
              </svg>
              <span class="truncate">Home</span>
            </a>
            <a href="#"
              class="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              x-state-description="undefined: &quot;bg-gray-200 text-gray-900&quot;, undefined: &quot;text-gray-700 hover:bg-gray-50&quot;">
              <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/fire" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
                </path>
              </svg>
              <span class="truncate">Popular</span>
            </a>
            <a href="#"
              class="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              x-state-description="undefined: &quot;bg-gray-200 text-gray-900&quot;, undefined: &quot;text-gray-700 hover:bg-gray-50&quot;">
              <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/user-group" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z">
                </path>
              </svg>
              <span class="truncate">Communities</span>
            </a>
            <a href="#"
              class="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              x-state-description="undefined: &quot;bg-gray-200 text-gray-900&quot;, undefined: &quot;text-gray-700 hover:bg-gray-50&quot;">
              <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                x-description="Heroicon name: outline/arrow-trending-up" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941">
                </path>
              </svg>
              <span class="truncate">Trending</span>
            </a>
          </div>
          <div class="pt-10">
            <p class="px-3 text-sm font-medium text-gray-500" id="communities-headline">Communities</p>
            <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Movies</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Food</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Sports</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Animals</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Science</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Dinosaurs</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Talents</span>
              </a>
              <a href="#"
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <span class="truncate">Gaming</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileCloseIcon = document.getElementById('mobile-close-icon');
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');

    // Toggle mobile menu visibility
    mobileMenuButton.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenuIcon.classList.add('hidden');
        mobileCloseIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuIcon.classList.remove('hidden');
        mobileCloseIcon.classList.add('hidden');
      }
    });

    // Toggle user menu visibility
    userMenuButton.addEventListener('click', function () {
      userMenu.classList.toggle('hidden');
    });

    // Close user menu if clicked outside
    document.addEventListener('click', function (event) {
      if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
      }
    });
  });
</script>