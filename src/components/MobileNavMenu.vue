<template>
  <transition name="fade">
    <div id="mobile-nav-overlay" v-if="isMobileMenuOpen">
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
        <img @click="exitMobileMenu" id="exit-icon" src="../assets/Exit.png" alt="Exit Icon" class="icon" />
      </div>
    </transition>
  </template>
  
    
  <script>
  export default {
    props: {
    isMobileMenuOpen: Boolean,
    exitMobileMenu: Function
  },
    name: 'MobileNavMenu',
    data() {
      return {
        menuItems: [
          { label: 'About Me', link: '/' },
          { label: 'Portfolio', link: '/portfolio' },
          { label: 'Notes', link: '/notes' },
          { label: 'Blog', link: 'https://medium.com/@danyaltairoski' }
        ],
      };
    },
  }
  </script>
  
    
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Inter');
  a {
    text-decoration: none;
    position: relative;
    transition: text-decoration 0.2s;
  }
  a:hover {
    text-decoration: underline;
  }
  
  #mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--brand-gradient, linear-gradient(90deg, #BEF720 0%, #F7148F 100%));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Make sure the overlay is on top of other content */
  }

  /* Style for larger list items */
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    margin: 20px 0; /* Adjust the margin as needed */
    text-align: center;
  }

  
  .nav-link {
    display: flex; /* Use flex layout for the link and icon */
    align-items: center; /* Vertically align link content */
    color: var(--black, #251F22);
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
  }
  
  .icon {
    width: 102px;
    height: 102px
  }
  
  #exit-icon {
  display: block;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 56px; /* Adjust width and height as needed */
  height: 56px;
  cursor: pointer;
}

  </style>