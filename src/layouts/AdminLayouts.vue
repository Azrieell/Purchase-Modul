<template>
  <div class="layout-container">
    <div class="sidebar">
      <AdminNavigation />
    </div>
    <div class="main-content">
      <router-view />
    </div>
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
