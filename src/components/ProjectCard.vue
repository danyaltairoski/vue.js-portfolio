<template>
    <div class = "area">
        <div v-for="(project, index) in projects" :key="index" class="gradient-wrap">
            <div class="project-box">
                <div class="img-div">
                    <img :src="require(`../assets/${project.image}`)" class="project-image" alt="image">
                </div>
                <div class="content">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-desc">{{ project.desc }}</p>
                    <h3 class="created">Created using:</h3>
                    <ul>
                        <li v-for="item in project.lang" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="links" v-if="project.git || project.link">
                    <a :href="project.link" class="link" target="_blank" v-if="project.link"><img src="../assets/share.png" class="icon" alt="share"></a>
                    <a :href="project.git" class="git-link" target="_blank" v-if="project.git"><img src="../assets/github-black.png" class="icon" alt="github"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectsData from '../content/content.json'

export default {
  data() {
    return {
        projects: ProjectsData.projects
        }
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dela+Gothic+One');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');
@import url('https://fonts.googleapis.com/css?family=Sora');

li {
    color: var(--black-75, rgba(37, 31, 34, 0.80));
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

ul{
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: inside;
}

.created {
    color: var(--black, #251F22);
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
    margin: 4% 0% 1% 0%;
}
.area{
    margin: 0 auto;
    max-width: 90%;
    align-content: center;
    align-items: center;

}
.gradient-wrap {
  width: 100%;
  height: 50%;
  background: linear-gradient(90deg, #BEF720 0%, #F7148F 100%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
  margin-bottom: 30px;
  display: flex;
  border-radius: 16px;
}
.project-box {
  width: 100%;
  height: 100%;
  background: #e9e9e9;
  margin: 5px;
  z-index: 2;
  display: flex;
  border-radius: 16px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    width: 65%;
    padding: 4%;
    border-right: 2px solid #ccc;;
    border-left: 2px solid #ccc;;
}

.project-title {
    color: var(--black, #251F22);
    text-align: center;
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 2%;
    margin-bottom: 2%;
}
.project-desc {
    color: var(--black-75, rgba(37, 31, 34, 0.80));
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 auto;
}

.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    width: 5%;
}
.icon{
    height: 56px;
    width: 56px;
    margin-bottom: 10px;
    transition: background-color 0.3s;
}

.img-div {
  width: 30%; /* Adjust this width as needed */
  display: flex;
  align-items: center;
  border-radius: 16px 0px 0px 16px;
}

.project-image {
  width: 100%; /* Take up the full width of the img-div container */
  height: 100%; /* Take up the full height of the img-div container */
  object-fit: cover; /* Crop the image as needed to cover the container */
  border-radius: 16px 0px 0px 16px;
}

@media (max-width: 768px) {
    .gradient-wrap {
        flex-direction: column; /* Stack vertically */
        height: auto; /* Reset height */
    }

    .img-div {
        width: auto; /* Adjust this width as needed */
        display: flex;
        align-items: center;
        border-radius: 16px 0px 0px 16px;
    }
    
    .project-image {
        width: 100%; /* Take up the full width of the img-div container */
        height: auto; /* Take up the full height of the img-div container */
        object-fit: cover; /* Crop the image as needed to cover the container */
        border-radius: 16px 16px 0px 0px;
    }
    .project-box {
        height: auto;
        width: auto;
        flex-direction: column; /* Stack vertically */
        height: auto; /* Reset height */
    }

    .content {
        width: auto; /* Take up full width */
        border-top: 2px solid #ccc;;
        border-bottom: 2px solid #ccc;;
        border-right: 0px;
        border-left: 0px ;
    }

    .links {
        display: flex;
        justify-content: space-between; /* Distribute items equally */
        align-items: center; /* Center items vertically */
        flex-direction: row-reverse;
        width: auto; /* Take up full width */
        padding: 10px; /* Adjust padding for spacing */
    }

    .icon {
        margin: 0 16px;
    }
}
</style>
