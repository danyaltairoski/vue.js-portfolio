<template>
  <div>
    <NavBar/>
    <h2 class="title">Notes</h2>
    <NoteCard />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import NoteCard from './NoteCard.vue';

export default {
  name: 'App',
  components: {
      NavBar, 
      NoteCard
    }
  }
</script>

<style>
.title {
  color: #022247;
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
