<script setup>
</script>

<template>
  <div id="app">
    <router-link to="/"></router-link>{{ ' ' }}
    <router-link to="/portfolio"></router-link>{{ ' ' }}
    <router-link to="/notes"></router-link>

    <router-view class="router-view"
    v-slot="{Component}">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
.page-opacity-enter-active, 
.page-opacity-leave-active {
  transition: 400ms ease all;
}

.page-opacity-enter-from, 
.page-opacity-leave-to {
  opacity: 0;
}
</style>