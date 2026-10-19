<template>
    <div class="welcome-container">
      <a class="CVButton" target='_blank' href="https://drive.google.com/file/d/1BLTck3o4f9aXNFw2TqVnS4x5dVwiO03S/view?usp=drive_link">
          <p class="btn-text">Download Resume</p>
      </a>
      <div class="gradient-wrap">
          <div class="welcome-box">
            <div class="content">
              <h2 class="welcome-title">Welcome</h2>
              <p class="welcome-message">{{ WelcomeMessage }}</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import content from '@/content/content.json'
export default {
  data() {
    return {
      WelcomeMessage: content.WelcomeMessage
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dela+Gothic+One');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

.CVButton {
    display: flex;
    width: 200px;
    height: 48px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #003A7A;
    box-shadow: 0px 3.4660141468048096px 3.4660141468048096px 0px rgba(2, 34, 71, 0.2);
    transition: background-color 0.2s ease;
    cursor: pointer; 
    z-index: 3;
    margin-top: 500px;
    margin-right: 5%;

}

.CVButton:hover,
.CVButton:focus-visible {
  background: #022247;
  text-decoration: none;
}

.btn-text {
    color: #FFF;
    font-family: Sora;
    font-size: 20.796px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.welcome-container {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
}
.gradient-wrap {
  position: absolute;
  width: 50%;
  height: 450px;
  background: transparent;
  box-shadow: none;
  margin-left: -30px; 
  margin-top: 30px;
  display: flex;
}
.welcome-box {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #F8F8F8;
  border: 2px solid #022247;
  border-radius: 8px;
  padding: 20px;
  margin: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center
}

.content {
  padding: 10%;
}
.welcome-title {
  color: #022247;
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;
}

.welcome-message {
  color: rgba(2, 34, 71, 0.8);
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 1400px) {
  .welcome-title {
    font-size: 2.5rem;
  }

  .welcome-message {
    font-size: 1.5rem;
  }
}

@media (max-width: 1000px) {
  .welcome-title {
    font-size: 2.25rem;
  }

  .welcome-message {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .CVButton {
    margin-top: 0px;
    margin-right: 0px;
  }
  .welcome-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .gradient-wrap {
  position: relative;
  width: 90%;
  height: auto;
  min-height: 450px;
  background: transparent;
  box-shadow: none;
  margin-left: 0px;
  margin-bottom: 4%;
  display: flex;
}
  .welcome-box {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 450px;
    box-sizing: border-box;
    background: #F8F8F8;
    border: 2px solid #022247;
    border-radius: 8px;
    padding: 20px;
    margin: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center
  }
}
@media (max-width: 350px) {
  .welcome-title {
  font-size: 8vw; /* Adjust the value as needed */
}

.welcome-message {
  font-size: 5vw; /* Adjust the value as needed */
}

}

</style>
