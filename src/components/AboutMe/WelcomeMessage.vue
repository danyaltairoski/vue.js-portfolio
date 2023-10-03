<template>
    <div class="welcome-container">
      <a class="CVButton" target='_blank' href="https://drive.google.com/file/d/1xXeRuf7QsZnJdqxAt2DgQCODonzrvaUi/view?usp=share_link">
          <p class="btn-text">Download CV</p>
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
    background: var(--blue, #0762F7);
    box-shadow: 0px 3.4660141468048096px 3.4660141468048096px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer; 
    z-index: 3;
    margin-top: 500px;
    margin-right: 5%;

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
  background: linear-gradient(90deg, #BEF720 0%, #F7148F 100%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-left: -30px; 
  margin-top: 30px;
  display: flex;
}
.welcome-box {
  position: relative;
  width: 100%;
  height: 400px;
  background: #e9e9e9;
  padding: 20px;
  margin: 5px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center
}

.content {
  padding: 10%;
}
.welcome-title {
  color: var(--black, #251F22);
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;
}

.welcome-message {
  color: var(--black-75, rgba(37, 31, 34, 0.80));
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
  height: 450px;
  background: linear-gradient(90deg, #BEF720 0%, #F7148F 100%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-left: 0px;
  margin-bottom: 4%;
  display: flex;
}
  .welcome-box {
    position: relative;
    width: 100%;
    height: auto;
    background: #e9e9e9;
    padding: 20px;
    margin: 5px;
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
