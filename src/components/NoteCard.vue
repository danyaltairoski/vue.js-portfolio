<template>
    <div class = "area">
        <div v-for="(note, index) in notes" :key="index" class="gradient-wrap">
            <div class="project-box">
                <div class="clickable" @click="redirectToLink(note)">
                    <div class="code-div">
                        <h1 class="course-code">{{note.CourseCode}}</h1>
                    </div>
                    <div class="content">
                        <h3 class="note-title">{{ note.CourseTitle }}</h3>
                    </div>
                </div>
                <div class="links" @click="ytLink(note)">
                    <img src="../assets/youtube.png" class="icon" alt="youtube">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NotesData from '../content/content.json'

export default {
  data() {
    return {
        notes: NotesData.notes,
        }
    },
    methods: {
        redirectToLink(note) {
        window.open(note.link, '_blank'); // Open link in a new tab
        },
        ytLink(note) {
        window.open(note.yt, '_blank');
      }
}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dela+Gothic+One');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');
@import url('https://fonts.googleapis.com/css?family=Sora');
.clickable {
    width: 95%;
    display: flex;
    transition: background-color 0.3s;
    border-radius: 16px 0px 0px 16px;
}

.content:hover {
    background: #d0d0d0;
    /* background-color: rgba(0, 0, 0, 0.1);  */
}
.code-div {
  width: 30%; /* Adjust this width as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px 0px 0px 16px;
}
.course-code {
    color: var(--black, #251F22);
    text-align: center;
    font-family: Sora;
    font-size: 2vw;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
}
.note-title {
    color: var(--black, #251F22);
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.area{
    margin: 0 auto;
    max-width: 80%;
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
    transition: background-color 0.3s;
    cursor: pointer;
}
.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    width: 5%;
    transition: background-color 0.3s;
    cursor: pointer;
}
.links:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Darken the background on hover */
    }
.icon{
    height: auto;
    width: 56px;
}

@media (max-width: 768px) {
    .area{
    margin: 0 auto;
    max-width: 90%;
    max-height: 100%;
    align-content: center;
    align-items: center;

}
    .course-code {
        font-size: 16px;
    }

    .note-title {
    font-size: 24px;
    }
    .gradient-wrap {
        flex-direction: column; /* Stack vertically */
        height: auto; /* Reset height */
    }

    .code-div {
        width: auto; /* Adjust this width as needed */
        display: flex;
        align-items: center;
        border-radius: 16px 0px 0px 16px;
    }

    .project-box {
        height: auto;
        width: auto;
        flex-direction: column; /* Stack vertically */
        height: auto; /* Reset height */
    }

    .clickable {
        height: auto;
        width: auto;
        flex-direction: column; /* Stack vertically */
        height: auto;
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
        justify-content: center; /* Distribute items equally */
        align-items: center; /* Center items vertically */
        flex-direction: row-reverse;
        width: auto; /* Take up full width */
        padding: 10px; /* Adjust padding for spacing */
    }
}
</style>
