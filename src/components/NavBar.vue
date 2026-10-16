<template>
  <div class="sticky-menu">
    <header class="header">
      <nav v-if="!isMobile" class="nav">
        <ul class="nav-list">
          <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
            <router-link
              v-if="item.label !== 'Blog'"
              :to="item.link"
              class="nav-link"
            >
              {{ item.label }}
            </router-link>

            <a
              v-else
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
            >
              {{ item.label }}
              <img src="../assets/medium.png" alt="Blog Icon" class="icon" />
            </a>
          </li>
        </ul>
      </nav>

      <div id="navigation-icon" v-if="isMobile" @click="toggleMobileMenu">
        <img src="../assets/nav.png" alt="Nav Icon" class="icon" />
      </div>
      <div id="page-label" class="current-page" v-if="isMobile">
        {{ getCurrentPageLabel() }}
      </div>
    </header>
  </div>

  <Transition>
    <MobileNavMenu
      v-if="isMobile && isMobileMenuOpen"
      :exitMobileMenu="exitMobileMenu"
      :isMobileMenuOpen="isMobileMenuOpen"
    />
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
      isMobile: false,
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
      // Keep the original mobile menu on phones; 768px-wide iPads use the desktop tabs.
      this.isMobile = window.innerWidth < 768;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    exitMobileMenu() {
      this.isMobileMenuOpen = false;
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
  background: #EDF2F6;
  color: #022247;
  padding: 10px 0;
  height: 56px;
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
  display: flex;
  align-items: center;
  margin-left: 48px;
  margin-right: 48px;
}

.nav-link {
  display: flex;
  align-items: center;
  color: #022247;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
}

.icon {
  width: 56px;
  height: 56px;
}

#navigation-icon {
  display: block;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 56px;
  height: 56px;
  cursor: pointer;
}

#page-label {
  display: block;
  position: absolute;
  color: #022247;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
  top: 24px;
  left: 24px;
}

@media (min-width: 768px) {
  header {
    border-bottom: 1px solid rgba(2, 34, 71, 0.18);
    padding: 0;
    height: 76px;
  }

  .nav,
  .nav-list {
    height: 100%;
  }

  .nav-item {
    height: 100%;
    margin: 0;
  }

  .nav-link {
    justify-content: center;
    height: 100%;
    padding-left: 48px;
    padding-right: 48px;
    transition: background-color 0.2s, color 0.2s;
  }

  .nav .nav-link:hover {
    background-color: #DCEAF5;
    color: #003A7A;
    text-decoration: none;
  }

  .nav .nav-link:focus-visible {
    background-color: #DCEAF5;
    color: #003A7A;
    outline: 2px solid #003A7A;
    outline-offset: -2px;
    text-decoration: none;
  }
}
</style>
