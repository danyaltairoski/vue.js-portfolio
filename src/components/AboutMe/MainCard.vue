<template>
    <div class="page-content">
      <div class="id-card">
        <div class="card-content">
          <div class="profile-picture">
            <img :src="profilePictureUrl" alt="Profile Picture" />
          </div>
          <div class="name">
            <span class="first-name">{{ firstName }}</span>
            <span class="last-name">{{ lastName }}</span>
          </div>
          <div class="divider"></div>
          <div class="job-title">{{ jobTitle }}</div>
        </div>
        <div class="divider2"></div>
        <div class="container">
          <div class="social-icons-container">
            <div v-for="(item, index) in menuItems" :key="index" class="sm-icon">
              <a target='_blank' :href="item.link" class="social-icon">
                <img :src="item.icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WelcomeMessage />
    </div>
</template>

<script>
import WelcomeMessage from './WelcomeMessage.vue'
export default {
  components: {
    WelcomeMessage
  },
  data() {
    return {
      profilePictureUrl: require("@/assets/profile-pic.png"),
      firstName: "Danyal",
      lastName: "Tairoski",
      jobTitle: "Student",
      menuItems: [
        { icon: require('@/assets/github.png'), link: 'https://github.com/danyaltairoski' },
        { icon: require('@/assets/linkedin.png'), link: 'https://www.linkedin.com/in/danyaltairoski/' },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sora');
.page-content {
  display: flex;
  justify-content: center;
  margin-top: 4%; 
  margin-left: 2%;
  margin-right: 2%;
}
.id-card {
  width: 400px;
  height: 600px;
  background-color: white;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid var(--black-50, rgba(37, 31, 34, 0.50));
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-content {
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-picture {
  width: 56%;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 16px;
}
.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  color: var(--black, #251F22);
  text-align: center;
  font-family: Sora;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.first-name,
.last-name {
  display: block;
}
.divider {
  width: 40%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}

.job-title {
  color: var(--black-50, rgba(37, 31, 34, 0.50));
  text-align: center;
  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 16px;
}

.divider2 {
  width: 100%;
  height: 2px;
  margin-top: 16px;
  background-color: #ccc;
}

.container {
  width: 100%;
  height: 15%;
  flex-shrink: 0;
  border-radius: 0px 0px 16px 16px;
  background: var(--black-5, rgba(37, 31, 34, 0.05));
}

.social-icons-container {
  display: flex;
  justify-content: center;
  padding: 5%;
}
.sm-icon {
  display: inline-flex;
  margin: 0 24px;
}

.social-icon img {
  width: 48px;
  height: 48px;
}

@media (max-width: 768px) {
  .page-content {
    flex-direction: column;
    align-items: center;
    margin: 32px;
  }
  .id-card {
    width: 80%; /* Change the width to a relative unit */
    height: auto; /* Let the height adjust automatically */
    margin-bottom: 32px;
  }
  
  .profile-picture {
    width: 56%; /* Adjust the profile picture size */
  }
  
  .name {
    font-size: calc(4vw + 16px);
   } 
  
  .job-title {
    font-size: calc(2vw + 16px);  
   }  
  
  
  .container {
    height: auto; /* Let the container adjust automatically */
    padding: 8px 0; /* Adjust padding for smaller screens */
  }

  .divider {
  width: 40%;
  height: 1px;
  background-color: #ccc;
  margin: 16px 0;
}
.social-icon img {
  width: calc(4vw + 16px);
  height: calc(4vw + 16px);
}
  
}

</style>
