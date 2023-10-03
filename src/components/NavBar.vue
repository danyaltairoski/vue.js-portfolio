<template>
  <div class="sticky-menu">
  <header class="header">
    <nav v-if="!isMobile" class="nav">
      <ul class="nav-list">
        <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
          <router-link v-if="item.label != 'Blog'" :to ="item.link">
            <a  
          :href="item.link" class="nav-link">
            {{ item.label }}
          </a>
          </router-link>
          <router-view></router-view>
          <a v-if="item.label === 'Blog'"
          :target="item.label === 'Blog' ? '_blank' : null" 
          :href="item.link" class="nav-link">
            {{ item.label }}
            <img v-if="item.label === 'Blog'" src="../assets/medium.png" alt="Blog Icon" class="icon" />
          </a>
        </li>
      </ul>
    </nav>
    <div id="navigation-icon" v-if="isMobile" @click="toggleMobileMenu">
      <img src="../assets/nav.png" alt="Nav Icon" class="icon" />
    </div>
    <div id="page-label" class="current-page" v-if="isMobile">{{ getCurrentPageLabel() }}</div>
  </header>
  </div>
  <Transition>
  <MobileNavMenu v-if="isMobile && isMobileMenuOpen" :exitMobileMenu="exitMobileMenu" :isMobileMenuOpen="isMobileMenuOpen" />
  </Transition>
</template>

  
<script>
import MobileNavMenu from './MobileNavMenu.vue';

export default {
  name: 'NavBar',
  data() {
    return {
      menuItems: [
        { label: 'About Me', link: '/' },
        { label: 'Portfolio', link: '/portfolio' },
        { label: 'Notes', link: '/notes' },
        { label: 'Blog', link: 'https://medium.com/@danyaltairoski' }
      ],
      isMobile: false, // Initialize as false
      isMobileMenuOpen: false
    };
  },
  components: {
    MobileNavMenu
  },
  mounted() {
    this.updateIsMobileStatus();
    window.addEventListener('resize', this.updateIsMobileStatus);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobileStatus);
  },
  methods: {
    updateIsMobileStatus() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    exitMobileMenu() {
      this.isMobileMenuOpen = false
    },
    getCurrentPageLabel() {
      const currentRoute = this.$route;
      const currentPage = this.menuItems.find(item => item.link === currentRoute.path);
      return currentPage ? currentPage.label : 'Unknown Page';
    }
  }
};
</script>

  
<style>
@import url('https://fonts.googleapis.com/css?family=Inter');
a {
	text-decoration: none;
  position: relative;
  transition: text-decoration 0.2s;
}

a:hover {
  text-decoration: underline;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

body {
    margin: 0;
    padding: 0;
  }

.sticky-menu {
    position: sticky;
    top: 0;
    z-index: 100;
}

header {
  background: var(--brand-gradient, linear-gradient(90deg, #BEF720 0%, #F7148F 100%));
  color: white;
  padding: 10px 0;
  height: 56px
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-list {
  list-style: none;
  display: flex;
  margin: 0; 
  padding: 0; 
}

.nav-item {
  display: flex; /* Use flex layout for each navigation item */
  align-items: center; /* Vertically align items in the middle */
  margin-left: 48px;
  margin-right: 48px;
}

.nav-link {
  display: flex; /* Use flex layout for the link and icon */
  align-items: center; /* Vertically align link content */
  color: var(--black, #251F22);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
}

.icon {
  width: 56px;
  height: 56px
}

#navigation-icon {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 56px; /* Adjust width and height as needed */
    height: 56px;
    cursor: pointer;
  }

#page-label {
  display: block;
  position: absolute;
  color: var(--black, #251F22);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
  top: 24px;
  left: 24px;
}


</style>