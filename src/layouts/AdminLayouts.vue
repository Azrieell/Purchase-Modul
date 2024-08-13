<template>
  <div class="flex h-screen">
    <aside class="flex flex-col w-64 h-screen px-5">
      <AdminNavigation />
    </aside>
    <main class="flex-1 p-6 overflow-y-auto bg-neutral-900">
      <router-view />
    </main>
  </div>
</template>

<script>
import AdminNavigation from '../components/Admin/AdminNavigation.vue';

export default {
  components: {
    AdminNavigation,
  },
};
</script>
