<template>
  <div>
    <MainPage />
    <div class="ripple-background">
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle medium shade4"></div>
      <div class="circle small shade5"></div>
    </div>
  </div>
</template>

<script>
  import MainPage from '../../components/main/MainPage.vue';

  export default {
    components: {
      MainPage
    },
    beforeRouteEnter(to, from, next) {
      document.body.classList.add('main-page');
      document.title = 'Purchase' + (to.meta.title || 'Teks Default');
      next();
    },
    beforeRouteLeave(to, from, next) {
      document.body.classList.remove('main-page');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      document.title = '' + (to.meta.title || 'Teks Default');
      next();
    },
  };
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body.main-page {
    background: #3399ff;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  .main-page .circle {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: ripple 15s infinite;
    box-shadow: 0px 0px 1px 0px #508fb9;
    z-index: -1;
  }

  .main-page .small {
    width: 75px;
    height: 75px;
    left: -37px;
    bottom: -37px;
  }

  .main-page .medium {
    width: 150px;
    height: 150px;
    left: -75px;
    bottom: -75px;
  }

  .main-page .large {
    width: 225px;
    height: 225px;
    left: -112px;
    bottom: -112px;
  }

  .main-page .xlarge {
    width: 300px;
    height: 300px;
    left: -150px;
    bottom: -150px;
  }

  .main-page .xxlarge {
    width: 375px;
    height: 375px;
    left: -187px;
    bottom: -187px;
  }

  .main-page .shade1 {
    opacity: 0.2;
  }

  .main-page .shade2 {
    opacity: 0.5;
  }

  .main-page .shade3 {
    opacity: 0.7;
  }

  .main-page .shade4 {
    opacity: 0.8;
  }

  .main-page .shade5 {
    opacity: 0.9;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.8);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(0.8);
    }
  }
</style>