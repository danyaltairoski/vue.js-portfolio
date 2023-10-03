<template>
  <div>
    <NavBar />
    <transition name="fade" mode="out-in">
      <MainCard :key="cardKey" />
    </transition>
  </div>
</template>

<script>
import MainCard from './MainCard.vue'
import NavBar from '../NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainCard
  },
  data() {
    return {
      cardKey: 0 // Increment this value to trigger the transition when content changes
    };
  }
}

</script>

<style>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>