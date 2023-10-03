<template>
  <div>
    <NavBar/>
    <h2 class="title">Projects</h2>
    <ProjectCard />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'App',
  components: {
    NavBar, 
    ProjectCard
}
  }

</script>

<style>
.title {
  color: var(--black, #251F22);
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>